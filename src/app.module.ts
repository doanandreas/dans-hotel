import { Module } from '@nestjs/common';
import { RoomsModule } from './rooms/rooms.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [RoomsModule, BookingsModule],
})
export class AppModule {}
