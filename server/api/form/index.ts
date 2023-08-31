import type { SendForm } from '../../commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { msg: string; name: string };
    resBody: SendForm;
  };
};
