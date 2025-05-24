import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get(':id')
  getBooking(@Param('id') id: string) {
    return { id };
  }

  @Post()
  addBooking(@Body() createBookingDto: CreateBookingDto) {
    return createBookingDto;
  }

  @Put(':id')
  updateBooking(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ) {
    return { id, ...updateBookingDto };
  }

  @Delete(':id')
  deleteBooking(@Param('id') id: string) {
    return { id };
  }
}
