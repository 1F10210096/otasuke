import type { RoomModel } from '$/commonTypesWithClient/models';
import { roomRepositry } from '$/repository/roomRepositry';
import { randomUUID } from 'crypto';
export const roomUsecase = {
  create: async () => {
    const newRoom: RoomModel = {
      roomId: randomUUID(),
      created: Date.now(),
      charaName:""
    };
    await roomRepositry.save(newRoom);
    return newRoom;
  },
  room: async (roomId: string): Promise<RoomModel> => {
    console.log(roomId);
    const room = await roomRepositry.findRoom(roomId);
    console.log(room);
    if (room === undefined) {
      const room = await roomUsecase.create();
      return room;
    } else {
      await roomRepositry.save(room);
      return room;
    }
  },
};
