import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { GetRoomsQuery } from './dto/get-rooms.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  getAllRooms(@Query() { from, to, capacity }: GetRoomsQuery) {
    return { from, to, capacity };
  }

  @Get(':id')
  getRoom(@Param('id') id: number) {
    return { id };
  }

  @Post()
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return createRoomDto;
  }

  @Put(':id')
  updateRoom(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return { id, ...updateRoomDto };
  }

  @Delete(':id')
  deleteRoom(@Param('id') id: number) {
    return { id };
  }
}
