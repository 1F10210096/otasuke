import { formUsecase } from '$/usecase/formUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await formUsecase.create(body.msg,body.Email,body.Age, body.name),
  }),
}));
