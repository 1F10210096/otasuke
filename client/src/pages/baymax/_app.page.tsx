import step1 from "public/img1.png";
import step1 from "public/img1.png";
import step1 from "public/img1.png";
import React from "react";
import React from "react";
import React from "react";
import style from "./index.module.css";
import style from "./index.module.css";
import style from "./index.module.css";


export const MainImageInfo: React.FC = () => {
  return (
    <><div className={style.body}>
      <div className={style.title}>
        <p>サイト紹介</p>

      </div>

      <div className={style.stepd1}>
        STEP1
      </div>

      <div className={style.stepd1_5}>
        <p>
          ４つのオリジナルのキャラクターを選べる！！
          好きなものを選んでね！
        </p>
      </div>

      <img
        src={step1.src}
        alt="step1"
        style={{
          position: 'static',
          width: '70%',
          height: 'auto',
        }} />








      <div className={style.stepd2}>
        STEP2
      </div>
      <div className={style.stepd2_5}>
        <p>
          キャラクターが決まったら話しかけてみよう！
        </p>
      </div>
    </div>
      <img
        src={step1.src}
        alt="step1"
        style={{
          position: 'static',
          width: '70%',
          height: 'auto',
        }} />







      <div className={style.stepd3}>
        STEP3
      </div>
      <div className={style.stepd3_5}>
        <p>
          キャラクターが相談に乗ってくれる！
        </p>
      </div>
      <img
        src={step1.src}
        alt="step1"
        style={{
          position: 'static',
          width: '70%',
          height: 'auto',
        }} />






      <div className={style.stepd4}>
        STEP4
      </div>
      <div className={style.stepd4_5}>
        <p>
          自分でオリジナルのキャラクターを作ってみよう！
        </p>
      </div>
      <img
        src={step1.src}
        alt="step1"
        style={{
          position: 'static',
          width: '70%',
          height: 'auto',
        }} />







    </>); div >; >



    ;
};
