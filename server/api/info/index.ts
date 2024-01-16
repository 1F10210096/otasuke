import type { SendForm } from '../../commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { name: string; email: string; problem: string };
    resBody: SendForm;
  };
};
