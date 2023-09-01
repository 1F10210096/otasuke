import { prismaClient } from '$/service/prismaClient';
import type { SendForm } from '@prisma/client';

const toRoomModel = (prismaRoom: SendForm): SendForm => ({
  id: prismaRoom.id,
  senderName: prismaRoom.senderName,
  Email: prismaRoom.Email,
  Age: prismaRoom.Age,
  content: prismaRoom.content,
});

export const formRepositry = {
  save: async (form: SendForm) => {
    await prismaClient.sendForm.upsert({
      where: { id: form.id },
      update: {},
      create: {
        id: form.id,
        senderName: form.senderName,
        content: form.content,
        Age: form.Age,
        Email: form.Email,  
      },
    });
  },
};
