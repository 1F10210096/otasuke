import type { RoomModel } from '../../commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { roomId: string };
    resBody: RoomModel;
  };
};
