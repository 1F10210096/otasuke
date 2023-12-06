import { informationRepositry } from '$/repository/informationRepositry';
import type { Information } from '@prisma/client';
import { randomUUID } from 'crypto';

export const informationUsecase = {
  create: async (name: string, email: string, problem: string) => {
    const newForm: Information = {
      id: randomUUID(),
      netName: name,
      email,
      problem,
    };
    await informationRepositry.save(newForm);
    return newForm;
  },
};
