import React, { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const submitFeedback = () => {
    console.log(feedback);
    alert('ご意見ありがとうございます。');
    setFeedback('');
  };
  return (
    <>
      <div className={styles.fullScreenBackground} />
      <h1 className={styles.title}>Information form</h1>
      <>
        <div aria-busy="true" aria-label="Loading" role="progressbar" className={styles.container}>
          <section className={styles.usageSection}>
            <h2>使い方法</h2>
            <p>具体的な内容</p>
            {/*画面があればいいと思います。*/}
          </section>
          <section className={styles.feedbackSection}>
            <h2>ご意見欄</h2>
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              className={styles.feedbackInput}
              rows={10}
              placeholder="こちらにご意見を入力してください"
            />
            <button onClick={submitFeedback} className={styles.submitButton}>
              submit
            </button>
          </section>
        </div>
      </>
    </>
  );
};

export default Home;
