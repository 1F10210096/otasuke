import { charaNameUsecase } from '$/usecase/msgCustomUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await charaNameUsecase.create(body.charaName),
  }),
}));
