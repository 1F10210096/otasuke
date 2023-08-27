import { roomUsecase } from '$/usecase/roomUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async () => ({ status: 201, body: await roomUsecase.create() }),
}));
