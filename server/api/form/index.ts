import type { SendForm } from '../../commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { msg: string; name: string,Email:string,Age:number};
    resBody: SendForm;
  };
};
