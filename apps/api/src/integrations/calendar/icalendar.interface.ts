export interface ICalendarService {
  getAuthorizationUrl(userId: string, state?: Record<string, any>): string;
  handleOAuthCallback(code: string, state: string, currentUserId: string): Promise<void>;
  // Add other common calendar methods here later, e.g.:
  // listCalendars(userId: string): Promise<any[]>;
  // getEvents(userId: string, calendarId: string, options: any): Promise<any[]>;
  // createEvent(userId: string, calendarId: string, event: any): Promise<any>;
}

// It might be useful to have a token for DI purposes
export const ICALENDAR_SERVICE = 'ICalendarService'; 