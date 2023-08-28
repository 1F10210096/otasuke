import type { RoomModel } from '$/commonTypesWithClient/models';
import { roomRepository } from '$/repositry/roomRepositry';
import assert from 'assert';
export const roomUsecase = {
  create: async () => {
    const newRoom: RoomModel = {
      roomId: '',
      created: Date.now(),
    };
    await roomRepository.save(newRoom);
    return newRoom;
  },
  room: async (roomId: string): Promise<RoomModel> => {
    const room = await roomRepository.findRoom(roomId);
    assert(room, 'userなし');
    return room;
  },
};
