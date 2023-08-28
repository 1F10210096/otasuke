// import * as dotenv from 'dotenv';
// import { OpenAI } from 'openai';
// dotenv.config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // 過去の会話履歴を保存するための配列
// const conversationHistory: { role: 'user' | 'assistant'; content: string }[] = [];

// export const msgUsecase = {
//   sendMsg: async (msg: string): Promise<string> => {
//     try {
//       conversationHistory.push({ role: 'user', content: msg });

//       const messages = conversationHistory.map((message) => ({
//         role: message.role,
//         content: message.content,
//       }));

//       const result = await openai.chat.completions.create({
//         model: 'gpt-4', // チャットモデルを指定
//         messages: [
//           {
//             // モデルへの指示をベイマックスに変更
//             role: 'system',
//             content: 'ベイマックスになって返答をして',
//           },
//           ...messages,
//         ],
//         max_tokens: 50,
//       });

//       const content = result.choices[0]?.message?.content;
//       const answer: string = content !== null ? content.trim() : '';

//       conversationHistory.push({ role: 'assistant', content: answer });
//       console.log(conversationHistory);
//       return answer || 'No answer available.';
//     } catch (error) {
//       console.error('Error:', error);
//       return 'An error occurred.';
//     }
//   },
// };

import { OpenAI } from 'langchain';
import { ConversationChain } from 'langchain/chains';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import type { ChainValues } from 'langchain/dist/schema';
import { BufferMemory } from 'langchain/memory';
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';

// export const msgUsecase = async (msg: string): Promise<ChainValues> => {
//   const chat = new ChatOpenAI({ temperature: 0.7 });
//   const memory1 = new BufferMemory({returnMessages: true,});
//   console.log(memory1)
//   console.log(await memory1.loadMemoryVariables({}));
//   const chatPrompt = ChatPromptTemplate.fromPromptMessages([
//     SystemMessagePromptTemplate.fromTemplate(
//       'ベイマックスになって返答して。ベイマックスは、ハロー、私はベイマックスです。あなたの健康を管理するパーソナルヘルスケアコンパニオンです。あなたのケガは大丈夫ですか？スケールで表すと1から10までの痛みはどのくらいですか？私はあなたが必要とする医療を提供するために設計されました。私はあなたの健康を守るためにある。などのセリフを発します。私はあなたが幸せであることを願っています。もし私があなたを害するようなら、それは私が設計された目的と矛盾します。あなたが安全であることを確認しなければなりません。生体スキャンを完成させるまで待ってください。あなたのストレスレベルが高いです。私はあなたの健康と幸福を助けるためにここにいます。あなたが心地よく感じるための助けが必要ですか？あなたの心臓の拍子が速くなっています。それは怒り、恐怖、不安を示す可能性があります。私にできる最善の手段であなたをケアします。私は自分が何かを間違えたかどうかを理解するためにプログラムされています。私は上手なホッケーゴーリーです。あなたの痛みはどのくらいですか？。私のバッテリーはほぼ切れています。私はバルーンを膨らませることができます。あなたの感情的な状況を私に理解させて下さい。私はあなたが命令してくれることを願っています。などといいます。15字以内でお願いします'
//     ),
//     HumanMessagePromptTemplate.fromTemplate('{input}'),
//   ]);

//   const chain = new ConversationChain({
//     memory: memory1,
//     prompt: chatPrompt,
//     llm: chat,
//   });

//   const response = await chain.call({
//     input: msg,
//   });

//   console.log(response);
//   return response;
// };

export const msgUsecase = async (): Promise<ChainValues> => {
  try{
  const model = new OpenAI({});
  const memory = new BufferMemory();
  console.log(memory)
    console.log(await memory.loadMemoryVariables({}));
  const chain = new ConversationChain({ llm: model, memory });

  const res1 = await chain.call({ input: 'こんにちは！ サガワです。' });
  console.log({ res1 });

  const res2 = await chain.call({ input: '私の名前はなんですか？' });
  console.log({ res2 });
  return res2

  } catch (error) {
    console.log(error)
    const a = "error"
    return a
  }
};
