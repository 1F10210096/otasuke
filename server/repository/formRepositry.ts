import { prismaClient } from '$/service/prismaClient';
import type { SendForm } from '@prisma/client';

const toRoomModel = (prismaRoom: SendForm): SendForm => ({
  id: prismaRoom.id,
  senderName: prismaRoom.senderName,
  content: prismaRoom.content,
  sent_at: prismaRoom.sent_at,
});

export const formRepositry = {
  save: async (form: SendForm) => {
    await prismaClient.sendForm.upsert({
      where: { id: form.id },
      update: {},
      create: {
        id: form.id,
        senderName: form.senderName,
        sent_at: new Date(form.sent_at),
        content: form.content,
      },
    });
  },
};
