import { Controller, Get, Post, Query, Body, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CalendarService } from "./calendar.service";
import { IntegrationType } from "generated/prisma";

@ApiTags('Calendar')    
@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get('list-integrations')
  async listCalendars() {
    return this.calendarService.listCalendarIntegrations();
  }

  @Post("insert-provider")
  async insertProvider(@Body() body: { providerKey: string, displayName: string, description: string, logoUrl: string, type: IntegrationType }) {
    return this.calendarService.createCalendarIntegrationProvider(body);
  }


  @Get("free-busy/:integrationId")
  async freeBusy(@Param("integrationId") integrationId: string, @Query("startDate") startDate: string, @Query("endDate") endDate: string) {
    return this.calendarService.freeBusy(integrationId, startDate, endDate);
  }
}   