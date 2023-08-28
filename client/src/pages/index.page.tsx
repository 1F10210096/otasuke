import { SendOutlined } from '@ant-design/icons';
import { AutoComplete, Button } from 'antd';
import assert from 'assert';
import dotenv from 'dotenv';
import { useAtom } from 'jotai';
import { ConversationChain } from 'langchain/chains';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { OpenAI } from 'langchain/llms/openai';
import { BufferMemory } from 'langchain/memory';
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  MessagesPlaceholder,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';
import { useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { useSendMsg } from 'src/utils/sendMsg';
import { userAtom } from '../atoms/user';
dotenv.config();
//a

const Home = () => {
  const [user] = useAtom(userAtom);
  const [msg, setMsg] = useState('');
  const [myId, setmyId] = useState<string>('');

  const run1 = async () => {
    const model = new OpenAI({});
    const memory = new BufferMemory();
    const chain = new ConversationChain({ llm: model, memory });

    const res1 = await chain.call({ input: 'こんにちは！ サガワです。' });
    console.log({ res1 });

    const res2 = await chain.call({ input: '私の名前はなんですか？' });
    console.log({ res2 });
  };

  // const createUserdata = useCallback(async () => {
  //   console.log('a');
  //   if (!user) return;
  //   setmyId(user.id);
  //   if (user === null) {
  //     console.log('a');
  //     await apiClient.create.$post();
  //   } else {
  //     if (user === null) {
  //       console.log(user);
  //     } else {
  //       const userId = user.id;
  //       const userroom = await apiClient.userCheck.$post({ body: { userId } });
  //       // console.log(userroom);
  //     }
  //   }
  // }, [user]);

  const sendMsg = useSendMsg();
  //メッセージ送信
  const sendMsgs = async () => {
    const SendMsg = await sendMsg(msg);
    assert(SendMsg, 'コメントなし');
    console.log(SendMsg);
  };

  const onMsg = (msg: string) => {
    setMsg(msg);
  };

  const llm = new OpenAI({
    openAIApiKey: 'YOUR_KEY_HERE',
  });

  const run = async () => {
    const chat = new ChatOpenAI({ temperature: 0 });

    const chatPrompt = ChatPromptTemplate.fromPromptMessages([
      SystemMessagePromptTemplate.fromTemplate('ベイマックスになりきって返答して.'),
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
  };

  if (!user) return <Loading visible />;

  return (
    <>
      <BasicHeader user={user} />
      <AutoComplete
        style={{ position: 'fixed', width: 800, height: 600, top: 750, right: 130 }}
        onSearch={onMsg}
        placeholder="input her"
      />
      <Button
        icon={<SendOutlined />}
        style={{ position: 'fixed', top: 750, right: 300 }}
        type="primary"
        onClick={() => sendMsg(msg)}
      />
    </>
  );
};

export default Home;
