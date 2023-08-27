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

import { ConversationChain } from 'langchain/chains';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import type { ChainValues } from 'langchain/dist/schema';
import { BufferMemory } from 'langchain/memory';
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  MessagesPlaceholder,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';

export const msgUsecase = async (msg: string): Promise<ChainValues> => {
  try {
    const chat = new ChatOpenAI({ temperature: 0 });

    const chatPrompt = ChatPromptTemplate.fromPromptMessages([
      SystemMessagePromptTemplate.fromTemplate(
        'ベイマックスになって返答して。ベイマックスは、ハロー、私はベイマックスです。あなたの健康を管理するパーソナルヘルスケアコンパニオンです。あなたのケガは大丈夫ですか？スケールで表すと1から10までの痛みはどのくらいですか？私はあなたが必要とする医療を提供するために設計されました。私はあなたの健康を守るためにある。などのセリフを発します。15字以内でお願いします'
      ),
      new MessagesPlaceholder('history'),
      HumanMessagePromptTemplate.fromTemplate('{input}'),
    ]);

    const chain = new ConversationChain({
      memory: new BufferMemory({ returnMessages: true, memoryKey: 'history' }),
      prompt: chatPrompt,
      llm: chat,
    });

    const response = await chain.call({
      input: 'hi! whats up?',
    });

    console.log(response);

    return response; // 必要な返り値を定義
  } catch (error) {
    console.log(error, 'error');
    return undefined;
  }
};
