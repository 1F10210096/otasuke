import { SendOutlined } from '@ant-design/icons';
import { AutoComplete, Button } from 'antd';
import assert from 'assert';
import type { MessageModel } from 'commonTypesWithClient/models';
import dotenv from 'dotenv';
import { useAtom } from 'jotai';
import frame from 'public/5389.png';
import background2 from 'public/beach01.png';
import background from 'public/kawaiisora21-1536x864.png';
import beimax from 'public/pngwing.com.png';
import { useState } from 'react';
import { useRouter } from 'next/router'; // 追加
import { Loading } from 'src/components/Loading/Loading';
import { apiClient } from 'src/utils/apiClient';
import { useSendMsg } from 'src/utils/sendMsg';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';
import TitleAnimation from './index';
import styles2 from'./index4.module.css'; 
import styles1 from'./index3.module.css'; 


dotenv.config();

const Home = () => {
  const [user] = useAtom(userAtom);
  const [msg, setMsg] = useState('');
  const [roomId, setRoomId] = useState('');
  const [myId, setmyId] = useState<string>('');
  const [msgAsse, setMsgAsse] = useState<MessageModel[]>([]);
  const categories = [
    { name: 'サイト紹介', url: 'カテゴリー1のURL' },
    { name: 'キャラクタ一覧', url: 'カテゴリー2のURL' },
    { name: 'サイトの特徴', url: 'カテゴリー3のURL' },
    { name: '問い合わせ', url: 'カテゴリー5のURL' },
  ];

  const router = useRouter(); // 追加

  const redirectToBaymax = () => {
    router.push('/title'); // /baymax へリダイレクト
  }

  if (!user) return (
    <div aria-busy="true" aria-label="Loading" role="progressbar" className={styles.container}>
      <div className={styles.swing}>
        <div className={`${styles["swing-l"]}`} />
        <div />
        <div />
        <div />
        <div />
        <div className={styles["swing-r"]} />
      </div>
      <div className={styles.shadow}>
        <div className={styles["shadow-l"]} />
        <div />
        <div />
        <div />
        <div className={styles["shadow-r"]} />
      </div>
    </div>
);

  return (
    <>
    
    <div className={styles.fullScreenBackground} />
    <ul className={styles2['g-nav']}>
      {categories.map((category, index) => (
        <li className={styles2['nav-item']} key={index}>
          <a href={category.url}>{category.name}</a>
        </li>
      ))}
    </ul>
      <TitleAnimation />
      <div aria-busy="true" aria-label="Loading" role="progressbar" className={styles.container}>
      <div className={styles.swing}>
        <div className={`${styles["swing-l"]}`} />
        <div />
        <div />
        <div />
        <div />
        <div className={styles["swing-r"]} />
      </div>
      <div className={styles.shadow}>
        <div className={styles["shadow-l"]} />
        <div />
        <div />
        <div />
        <div className={styles["shadow-r"]} />
      </div>
    </div>
    <div className={styles1.myBoxSizing}>
      <a href="#" onClick={redirectToBaymax} className={`${styles1.btn} ${styles1['btn-border-shadow']} ${styles1['btn-border-shadow--color2']}`}>
        始める
      </a>
    </div>
    </>
  );
};

export default Home;