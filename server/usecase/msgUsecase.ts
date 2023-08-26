import * as dotenv from 'dotenv';
import { OpenAI } from 'openai';
dotenv.config();


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY as string });

export const msgUsecase = {
  sendMsg: async (msg: string): Promise<string> => {
    try {
      const result = await openai.completions.create({
        model: 'davinci-codex',
        prompt: msg,
        max_tokens: 50,
      });

      // "choices" プロパティから "text" プロパティを取得する
      const answer: string = result.choices[0]?.text.trim();
      return answer || 'No answer available.';
    } catch (error) {
      console.error('Error:', error);
      return 'An error occurred.';
    }
  },
};

