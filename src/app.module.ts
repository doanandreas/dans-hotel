import { Module } from '@nestjs/common';
import { RoomsController } from './rooms/rooms.controller';
import { RoomsService } from './rooms/rooms.service';
import { BookingsController } from './bookings/bookings.controller';
import { BookingsService } from './bookings/bookings.service';

@Module({
  controllers: [RoomsController, BookingsController],
  providers: [RoomsService, BookingsService],
})
export class AppModule {}
