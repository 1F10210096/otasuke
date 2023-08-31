import type { RoomModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { Room } from '@prisma/client';

const toRoomModel = (prismaRoom: Room): RoomModel => ({
  roomId: prismaRoom.roomId,
  created: prismaRoom.createdAt.getTime(),
  charaName:prismaRoom.charaName
});

export const roomRepositry = {
  save: async (room: RoomModel) => {
    await prismaClient.room.upsert({
      where: { roomId: room.roomId },
      update: {},
      create: {
        roomId: room.roomId,
        createdAt: new Date(room.created),
        charaName:room.charaName
      },
    });
  },
  findRoom: async (roomId: string | undefined): Promise<RoomModel | undefined> => {
    const roomlist = await prismaClient.room.findMany();
    const room = roomlist.find((room) => room.roomId === roomId);
    return room && toRoomModel(room);
  },
};
