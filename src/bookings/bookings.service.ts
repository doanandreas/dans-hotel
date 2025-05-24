import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingsService {
  getBookings(): string {
    return 'Hello Bookings!';
  }
}
