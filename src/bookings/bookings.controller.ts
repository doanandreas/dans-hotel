import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get(':id')
  getBooking(@Param('id') id: string): string {
    return `Get booking with ID ${id}`;
  }

  @Post()
  addBooking(): string {
    return 'Add new booking';
  }

  @Put(':id')
  updateBooking(@Param('id') id: string): string {
    return `Update booking with ID ${id}`;
  }

  @Delete(':id')
  deleteBooking(@Param('id') id: string): string {
    return `Delete booking with ID ${id}`;
  }
}
