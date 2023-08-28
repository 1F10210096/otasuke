import { msgRepository } from '$/repository/msgRepositry';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async () => ({
    status: 201,
    body: await msgRepository.findMsg(),
  }),
}));
