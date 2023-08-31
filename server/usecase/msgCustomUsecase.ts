import type { MessageCustomModel, RoomModel } from '$/commonTypesWithClient/models';
import { msgCustomRepositry } from '$/repository/msgCustomRepositry';
import { roomRepositry } from '$/repository/roomRepositry';
import { randomUUID } from 'crypto';
import { ConversationChain } from 'langchain/chains';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import type { BaseMemory } from 'langchain/memory';
import { BufferMemory } from 'langchain/memory';
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  MessagesPlaceholder,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';

const memory = new BufferMemory({ returnMessages: true, memoryKey: 'history' });
export const msgCustomUsecase = async (
  chara: string,
  msg: string,
  roomId: string
): Promise<MessageCustomModel[]> => {
  let senderId = 1;
  const chat = new ChatOpenAI({});
  const memory1: BaseMemory = memory;
  console.log(await memory.loadMemoryVariables({}));
  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate('{chara}になって返答して。15字以内でお願いします'),
    new MessagesPlaceholder('history'),
    HumanMessagePromptTemplate.fromTemplate('{input}'),
  ]);

  const chain = new ConversationChain({
    memory: memory1,
    prompt: chatPrompt,
    llm: chat,
  });
  const response = await chain.call({
    input: msg,
  });
  const res = response.response;
  senderId = 2;
  console.log(res);
  console.log(response);
  const msgAsse = await msgCustomRepositry.findMsg();
  return msgAsse;
};

export const msgUsecaseCreate = {
  create: async (msg: string, senderId: number) => {
    const newMsg: MessageCustomModel = {
      id: randomUUID(),
      roomId: '',
      sender_Id: senderId,
      content: msg,
      sent_at: Date.now(),
    };
    await msgCustomRepositry.save(newMsg);
    return newMsg;
  },
};

export const charaNameUsecase = {
  create: async (charaName: string) => {
    const newRoom: RoomModel = {
      roomId: randomUUID(),
      created: Date.now(),
      charaName,
    };
    await roomRepositry.save(newRoom);
    return newRoom;
  },
};
