import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { GoogleCalendarService } from './calendar/google-calendar/google-calendar.service';
import { ICalendarService } from './calendar/icalendar.interface';

@Injectable()
export class IntegrationsService {
  constructor(
    // Inject specific calendar services here
    private readonly googleCalendarService: GoogleCalendarService,
    // private readonly outlookCalendarService: OutlookCalendarService, // Example for future
  ) {}

  getCalendarProvider(providerName: string): ICalendarService {
    switch (providerName.toLowerCase()) {
      case 'google':
        return this.googleCalendarService;
      // case 'outlook':
      //   return this.outlookCalendarService;
      default:
        throw new NotFoundException(`Calendar provider '${providerName}' not found or not supported.`);
    }
  }

  // You can add similar methods for other integration categories like 'conferencing'
  // getConferencingProvider(providerName: string): IConferencingService { ... }
}
