import type { RoomModel } from '../../commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { charaName: string };
    resBody: RoomModel;
  };
};
