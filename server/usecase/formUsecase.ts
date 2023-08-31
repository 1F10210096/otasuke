import { formRepositry } from '$/repository/formRepositry';
import type { SendForm } from '@prisma/client';
import { randomUUID } from 'crypto';

export const fromCreate = {
  create: async (msg: string,name:string) => {
    const newForm: SendForm = {
      id: randomUUID(),
      senderName: name,
      content: msg,
      sent_at: Date.now(),
    };
    await formRepositry.save(newForm);
    return newForm;
  },
};
