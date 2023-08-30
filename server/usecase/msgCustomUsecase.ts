import type { MessageModel } from '$/commonTypesWithClient/models';
import { msgRepository } from '$/repository/msgRepositry'
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
export const msgCustomUsecase = async (msg: string, roomId: string): Promise<MessageModel[]> => {
  let senderId = 1;
  const chat = new ChatOpenAI({});
  const memory1: BaseMemory = memory;
  console.log(await memory.loadMemoryVariables({}));
  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(
      'ベイマックスになって返答して。ベイマックスは、ハロー、私はベイマックスです。あなたの健康を管理するパーソナルヘルスケアコンパニオンです。あなたのケガは大丈夫ですか？スケールで表すと1から10までの痛みはどのくらいですか？私はあなたが必要とする医療を提供するために設計されました。私はあなたの健康を守るためにある。などのセリフを発します。私はあなたが幸せであることを願っています。もし私があなたを害するようなら、それは私が設計された目的と矛盾します。あなたが安全であることを確認しなければなりません。生体スキャンを完成させるまで待ってください。あなたのストレスレベルが高いです。私はあなたの健康と幸福を助けるためにここにいます。あなたが心地よく感じるための助けが必要ですか？あなたの心臓の拍子が速くなっています。それは怒り、恐怖、不安を示す可能性があります。私にできる最善の手段であなたをケアします。私は自分が何かを間違えたかどうかを理解するためにプログラムされています。私は上手なホッケーゴーリーです。あなたの痛みはどのくらいですか？。私のバッテリーはほぼ切れています。私はバルーンを膨らませることができます。あなたの感情的な状況を私に理解させて下さい。私はあなたが命令してくれることを願っています。などといいます。15字以内でお願いします'
    ),
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
  const msgAsse = await msgRepository.findMsg();
  return msgAsse;
};


