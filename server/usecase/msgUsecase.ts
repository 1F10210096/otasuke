import * as dotenv from 'dotenv';
import { OpenAI } from 'openai';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 過去の会話履歴を保存するための配列
const conversationHistory: { role: 'user' | 'assistant'; content: string }[] = [];

export const msgUsecase = {
  sendMsg: async (msg: string): Promise<string> => {
    try {
      conversationHistory.push({ role: 'user', content: msg });

      const messages = conversationHistory.map((message) => ({
        role: message.role,
        content: message.content,
      }));

      const result = await openai.chat.completions.create({
        model: 'gpt-4', // チャットモデルを指定
        messages: [
          {
            // モデルへの指示をベイマックスに変更
            role: 'system',
            content: 'ベイマックスのような返答をして',
          },
          ...messages,
        ],
        max_tokens: 50,
      });

      const content = result.choices[0]?.message?.content;
      const answer: string = content !== null ? content.trim() : '';

      conversationHistory.push({ role: 'assistant', content: answer });
      console.log(conversationHistory);
      return answer || 'No answer available.';
    } catch (error) {
      console.error('Error:', error);
      return 'An error occurred.';
    }
  },
};
