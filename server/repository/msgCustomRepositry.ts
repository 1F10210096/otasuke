import type { MessageCustomModel, MessageModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { SendMsg } from '@prisma/client';

const toMessageCustomModel = (prismaRoom: SendMsg): MessageCustomModel => ({
  id: prismaRoom.id,
  roomId: prismaRoom.roomId,
  sender_Id: prismaRoom.sender_id,
  content: prismaRoom.content,
  sent_at: prismaRoom.sent_at.getTime(),
});

export const msgCustomRepositry = {
  save: async (message: MessageModel) => {
    await prismaClient.sendMsg.upsert({
      where: { id: message.id },
      update: { content: message.content, sender_id: message.sender_Id },
      create: {
        id: message.id,
        roomId: message.roomId,
        sender_id: message.sender_Id,
        content: message.content,
        sent_at: new Date(message.sent_at),
      },
    });
  },
  findMsg: async (): Promise<MessageCustomModel[]> => {
    // console.log(roomId);
    const roomlist = await prismaClient.sendCustomMsg.findMany({
      orderBy: { sent_at: 'desc' },
    });
    return roomlist.map(toMessageCustomModel);
  },
};
