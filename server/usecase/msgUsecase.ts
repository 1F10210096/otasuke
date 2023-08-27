import * as dotenv from 'dotenv';
import { OpenAI } from 'openai';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const msgUsecase = {
  sendMsg: async (msg: string): Promise<string> => {
    try {
      const result = await openai.chat.completions.create({
        model: 'gpt-4', // チャットモデルを指定
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.',
          },
          {
            role: 'user',
            content: msg,
          },
        ],
        max_tokens: 50,
      });

      const content = result.choices[0]?.message?.content;
      const answer: string = content !== null ? content.trim() : '';
      console.log(answer)
      return answer || 'No answer available.';
    } catch (error) {
      console.error('Error:', error);
      return 'An error occurred.';
    }
  },
};
