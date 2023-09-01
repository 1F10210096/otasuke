import { formRepositry } from '$/repository/formRepositry';
import type { SendForm } from '@prisma/client';
import { randomUUID } from 'crypto';

export const formUsecase = {
  create: async (msg: string, name: string,Email:string,Age:number) => {
    const newForm: SendForm = {
      id: randomUUID(),
      senderName: name,
      Age,
      Email,
      content: msg,
    };
    await formRepositry.save(newForm);
    return newForm;
  },
};
