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
      // 会話履歴に新しいユーザーメッセージを追加
      conversationHistory.push({ role: 'user', content: msg });
      
      // メッセージをOpenAI APIのフォーマットに変換
      const messages = conversationHistory.map((message) => ({
        role: message.role,
        content: message.content,
      }));
      
      const result = await openai.chat.completions.create({
        model: 'gpt-4', // チャットモデルを指定
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.',
          },
          ...messages,
        ],
        max_tokens: 50,
      });

      const content = result.choices[0]?.message?.content;
      const answer: string = content !== null ? content.trim() : '';
      
      // 会話履歴にモデルの返答を追加
      conversationHistory.push({ role: 'assistant', content: answer });
      console.log(conversationHistory)
      const baymaxResponse = beBaymax(answer); // ベイマックス風の返答を生成
      console.log(baymaxResponse);
      return baymaxResponse || 'No answer available.';
    } catch (error) {
      console.error('Error:', error);
      return 'An error occurred.';
    }
  },
};

// ベイマックス風の返答生成関数
function beBaymax(answer: string): string {
  if (answer.toLowerCase().includes('help')) {
    return 'どうしましたか？どのようなお手伝いが必要ですか？';
  } else if (answer.toLowerCase().includes('hello') || answer.toLowerCase().includes('hi')) {
    return 'こんにちは！元気ですか？';
  } else if (answer.toLowerCase().includes('thank you')) {
    return 'どういたしまして！お役に立ててうれしいです。';
  } else {
    return '了解しました。少々お待ちください。';
  }
}