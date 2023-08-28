import type { ChainValues } from 'langchain/dist/schema';

export type Methods = {
  post: {
    reqBody: { msg: string,roomId:string };
    resBody: ChainValues;
  };
};
