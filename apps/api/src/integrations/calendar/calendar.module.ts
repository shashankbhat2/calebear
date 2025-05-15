import { Module } from '@nestjs/common';
import { GoogleCalendarModule } from './google-calendar/google-calendar.module';
import { CalendarService } from './calendar.service';

@Module({
  providers: [CalendarService],
  imports: [GoogleCalendarModule],
  exports: [CalendarService],
})
export class CalendarModule {} 