import type { MessageModel } from 'commonTypesWithClient/models';
import dotenv from 'dotenv';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router'; // 追加
import { useState } from 'react';
import { userAtom } from '../atoms/user';
import TitleAnimation from './index';
import styles from './index.module.css';
import styles1 from './index3.module.css';
import styles2 from './index4.module.css';
import Link from 'next/link';
dotenv.config();

const Home = () => {
  const [user] = useAtom(userAtom);
  const [msg, setMsg] = useState('');
  const [roomId, setRoomId] = useState('');
  const [myId, setmyId] = useState<string>('');
  const [msgAsse, setMsgAsse] = useState<MessageModel[]>([]);
  const categories = [
    { name: 'サイト紹介', url: 'カテゴリー1のURL' },
    { name: 'キャラクタ一覧', url: 'Introduce' },
    { name: 'サイトの特徴', url: 'カテゴリー3のURL' },
    { name: '問い合わせ', url: 'カテゴリー5のURL' },
  ];

  const router = useRouter(); // 追加

  const redirectToBaymax = () => {
    router.push('/title'); // /baymax へリダイレクト
  };

  const redirectToIntroduce = () => {
    router.push('/Introduce');
  };

  if (!user)
    return (
      <div aria-busy="true" aria-label="Loading" role="progressbar" className={styles.container}>
        <div className={styles.swing}>
          <div className={`${styles['swing-l']}`} />
          <div />
          <div />
          <div />
          <div />
          <div className={styles['swing-r']} />
        </div>
        <div className={styles.shadow}>
          <div className={styles['shadow-l']} />
          <div />
          <div />
          <div />
          <div className={styles['shadow-r']} />
        </div>
      </div>
    );

  return (
    <>
      <div className={styles.fullScreenBackground} />
      
      <><TitleAnimation /><div aria-busy="true" aria-label="Loading" role="progressbar" className={styles.container}>
          <div className={styles.swing}>
            <div className={`${styles['swing-l']}`} />
            <div />
            <div />
            <div />
            <div />
            <div className={styles['swing-r']} />
          </div>
          <div className={styles.shadow}>
            <div className={styles['shadow-l']} />
            <div />
            <div />
            <div />
            <div className={styles['shadow-r']} />
          </div>
        </div><div className={styles1.myBoxSizing}>
            <a
              href="#"
              onClick={redirectToBaymax}
              className={`${styles1.btn} ${styles1['btn-border-shadow']} ${styles1['btn-border-shadow--color2']}`}
            >
              始める
            </a>
          </div></>
    </>
  );
};

export default Home;
