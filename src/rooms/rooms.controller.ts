import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  getAllRooms(
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('capacity') capacity: number,
  ): string {
    return `Get all rooms, from: ${from}, to: ${to}, capacity: ${capacity}`;
  }

  @Get(':id')
  getRoom(@Param('id') id: number): string {
    return `Get room with ID ${id}`;
  }

  @Post()
  addRoom(): string {
    return 'Add new room';
  }

  @Put(':id')
  updateRoom(@Param('id') id: number): string {
    return `Update room with ID ${id}`;
  }

  @Delete(':id')
  deleteRoom(@Param('id') id: number): string {
    return `Delete room with ID ${id}`;
  }
}
