import type { RoomModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { Room } from '@prisma/client';

const toRoomModel = (prismaRoom: Room): RoomModel => ({
  roomId: prismaRoom.roomId,
  created: prismaRoom.createdAt.getTime(),
});

export const roomRepository = {
  save: async (room: RoomModel) => {
    await prismaClient.room.upsert({
      where: { roomId: room.roomId },
      update: {},
      create: {
        roomId: room.roomId,
        createdAt: new Date(room.created),
      },
    });
  },
  findUser: async (userId: string) => {
    return userId;
  },
};
