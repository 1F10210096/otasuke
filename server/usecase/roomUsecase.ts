import type { RoomModel } from '$/commonTypesWithClient/models';
import { roomRepository } from '$/repositry/roomRepositry';
import { randomUUID } from 'crypto';
export const roomUsecase = {
  create: async () => {
    const newRoom: RoomModel = {
      roomId: randomUUID(),
      created: Date.now(),
    };
    await roomRepository.save(newRoom);
    return newRoom;
  },
  room: async (roomId: string): Promise<RoomModel> => {
    const room = await roomRepository.findRoom(roomId);
    if (room === undefined) {
      const room = await roomUsecase.create();
      return room;
    } else {
      return room;
    }
  },
};
