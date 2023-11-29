import React, { useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const Home = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const headleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const sendFeedback = async () => {
    const Information = await apiClient.info.$post({ body: { name, email, problem: feedback } });
  };

  const submitFeedback = () => {
    console.log(feedback, email, name);
    sendFeedback();
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
            <input
              value={name}
              onChange={headleNameChange}
              className={styles.input}
              placeholder="ニックネーム"
            />
            <input
              value={email}
              onChange={handleEmailChange}
              className={styles.input}
              placeholder="メールアドレス"
            />
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
