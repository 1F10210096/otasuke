import type { MessageModel } from '../../commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { chara:string,msg: string; roomId: string };
    resBody: MessageModel[];
  };
};
