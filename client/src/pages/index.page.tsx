import { SendOutlined } from '@ant-design/icons';
import { AutoComplete, Button } from 'antd';
import assert from 'assert';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { useSendMsg } from 'src/utils/sendMsg';
import { userAtom } from '../atoms/user';
//a
const Home = () => {
  const [user] = useAtom(userAtom);
  const [msg, setMsg] = useState('');

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

  if (!user) return <Loading visible />;

  return (
    <>
      <BasicHeader user={user} />
      <AutoComplete
        style={{ position: 'fixed', width: 800, height: 600, top: 750, right: 330 }}
        onSearch={onMsg}
        placeholder="input her"
      />
      <Button
        icon={<SendOutlined />}
        style={{ position: 'fixed', top: 750, right: 300 }}
        type="primary"
        onClick={() => sendMsgs()}
      />
    </>
  );
};

export default Home;
