import { SendOutlined } from '@ant-design/icons';
import { AutoComplete, Button } from 'antd';
import assert from 'assert';
import dotenv from 'dotenv';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { useSendMsg } from 'src/utils/sendMsg';
import { userAtom } from '../atoms/user';
dotenv.config();
//a

const Home = () => {
  const [user] = useAtom(userAtom);
  const [msg, setMsg] = useState('');
  const [roomId, setRoomId] = useState('');
  const [myId, setmyId] = useState<string>('');

  const createRoom = async () => {
    const room = await apiClient.room.$post({ body: { roomId } });
    console.log(roomId);
    setRoomId(room.roomId);
    console.log(roomId);
  };

  const sendMsg = useSendMsg();
  //メッセージ送信
  const sendMsgs = async () => {
    const SendMsg = await sendMsg(msg,roomId);
    assert(SendMsg, 'コメントなし');
    console.log(SendMsg);
  };

  const onMsg = (msg: string) => {
    setMsg(msg);
  };

  // useEffect(() => {
  //   createRoom();
  // }, [createRoom]);

  if (!user) return <Loading visible />;

  return (
    <>
      <BasicHeader user={user} />
      <AutoComplete
        style={{ width: '40%', height: '80%', position: 'fixed', top: '80%', right: '30%' }}
        onSearch={onMsg}
        placeholder="input her"
      />
      <Button
        icon={<SendOutlined />}
        style={{ position: 'fixed', top: '80%', right: '30%' }}
        type="primary"
        onClick={() => sendMsgs()}
      />
            <Button
        icon={<SendOutlined />}
        style={{ position: 'fixed', top: '20%', right: '80%' }}
        type="primary"
        onClick={() => createRoom()}
      />
    </>
  );
};

export default Home;
