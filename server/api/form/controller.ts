import { msgCustomRepositry } from '$/repository/msgCustomRepositry';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async () => ({
    status: 201,
    body: await formRepositry.send(),
  }),
}));
