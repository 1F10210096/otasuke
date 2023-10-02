import { useEffect } from 'react';
import styles from './index2.module.css';

const TitleAnimation = () => {
  const CLASSNAME = '-visible';
  const TIMEOUT = 1500;
  const VISIBLE_DURATION = 3000; // 新しい定数を追加

  useEffect(() => {
    const $target = document.querySelector(`.${styles.title}`);

    const intervalId = setInterval(() => {
      $target.classList.add(styles[CLASSNAME]);

      setTimeout(() => {
        $target.classList.remove(styles[CLASSNAME]);
      }, VISIBLE_DURATION); // TIMEOUTの代わりにVISIBLE_DURATIONを使用
    }, TIMEOUT + VISIBLE_DURATION); // 合計の待機時間を設定

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <h1 className={styles.title}>
      <span>お</span>
      <span>た</span>
      <span>す</span>
      <span>け</span>
      <span>&nbsp;</span>
      <span>セ</span>
      <span>レ</span>
      <span>ナ</span>
      <span>ー</span>
      <span>ド</span>

    </h1>
  );
};

export default TitleAnimation;