import { msgCustomUsecase } from '$/usecase/msgCustomUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await msgCustomUsecase(body.chara, body.msg, body.roomId),
  }),
}));
