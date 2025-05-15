import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { IntegrationType } from "generated/prisma";
import { GoogleCalendarService } from "./google-calendar/google-calendar.service";

@Injectable()
export class CalendarService {
    constructor(
        private prisma: PrismaService,
        private googleCalendarService: GoogleCalendarService
    ) {}

    async listCalendarIntegrations(): Promise<any[]> {
         const calendarIntegrations = await this.prisma.integration.findMany({
            where: {
                integrationProvider: {
                    type: IntegrationType.CALENDAR
                }
            }
         })
         return calendarIntegrations;   
    }

    async createCalendarIntegrationProvider(body: { providerKey: string, displayName: string, description: string, logoUrl: string, type: IntegrationType }) {
        const { providerKey, displayName, description, logoUrl, type } = body;
        const integrationProvider = await this.prisma.integrationProvider.create({
            data: {
                providerKey,
                displayName,
                description,
                logoUrl,
                type,   
            }
        });
        return integrationProvider;
    }

    async freeBusy(userId: string, startDate: string, endDate: string) : Promise<any> {
        const userWithCalendars = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                destinationCalendars: {
                    include: {
                        integration: {
                            include: {
                                integrationProvider: true,
                            }
                        }
                    }
                }
            }
        });

        if (!userWithCalendars) {
            return [];
        }

        const allFreeBusySlots: any[] = [];

        for (const destCalendar of userWithCalendars.destinationCalendars) {
            if (destCalendar.integration.integrationProvider.providerKey === 'google_calendar' && destCalendar.integration.accessToken) {
                try {
                    const slots = await this.googleCalendarService.fetchFreeBusyForCalendar(
                        destCalendar.integration.accessToken,
                        destCalendar.externalId,
                        startDate,
                        endDate
                    );
                    allFreeBusySlots.push(...slots);
                } catch (error) {
                    console.error(`Error fetching free/busy for calendar ${destCalendar.id} (${destCalendar.externalId}):`, error);
                }
            }
        }

        return allFreeBusySlots;
    }   
}   