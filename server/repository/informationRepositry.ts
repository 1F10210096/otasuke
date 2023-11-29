import { prismaClient } from '$/service/prismaClient';
import type { Information } from '@prisma/client';

export const informationRepositry = {
  save: async (information: Information) => {
    await prismaClient.information.create({
      data: {
        id: information.id,
        netName: information.netName,
        email: information.email,
        problem: information.problem,
      },
    });
  },
};
