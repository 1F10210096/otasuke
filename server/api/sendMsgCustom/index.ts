import type { MessageModel } from '../../commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { msg: string; roomId: string };
    resBody: MessageModel[];
  };
};
