import type { RoomModel } from '$/commonTypesWithClient/models';
import { roomRepository } from '$/repositry/roomRepositry';
export const roomUsecase = {
  create: async () => {
    const newRoom: RoomModel = {
      roomId: '',
      created: Date.now(),
    };
    await roomRepository.save(newRoom);
    return newRoom;
  },
};
