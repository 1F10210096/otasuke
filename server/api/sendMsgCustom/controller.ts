import { msgCustomUsecase } from '$/usecase/msgCustomUsecase';
import { msgUsecase } from '$/usecase/msgUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await msgCustomUsecase(body.msg, body.roomId),
  }),
}));
