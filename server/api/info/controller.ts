import { informationUsecase } from '$/usecase/informationUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await informationUsecase.create(body.name, body.email, body.problem),
  }),
}));
