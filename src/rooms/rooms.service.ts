import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomsService {
  getRooms(): string {
    return 'Hello Rooms!';
  }
}
