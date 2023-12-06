
import React from 'react';
import step1 from 'public/img1.png';
import style from './index.module.css';





const MainImageInfo: React.FC = () => {
  return (
    <><div className={style.body}>
        <div className={style.title}>
          <p>サイト紹介</p>

        </div>
        <div className={style.stepd0}>
        
          <p>
          セレナードとは<br></br>
          英語の「serenade」が由来で、意味は特別な相手に歌（言葉）を届けるという意味になっている<br></br>
          セレナードとは当サイト特有の呼び方であなたの相談相手になってくれるものの愛称です！
          </p>
        
          
        </div>

        <div className={style.stepd1}>
          STEP1
        </div>

        <div className={style.stepd1_5}>
          <p>
          ４つのオリジナルのセレナードを選べる！！
          </p>

          <div className={style.stepd1_5_5}>
            <img
              src={step1.src}
              alt="step1"
              style={{
              position: 'static',
              width: '70%',
              height: 'auto',
              top:'100px',
            }} />
          </div>
          
        </div>

        








        <div className={style.stepd2}>
          STEP2
        </div>
        <div className={style.stepd2_5}>
          <p>
          セレナードが決まったら話しかけてみよう！
          </p>
          <div className={style.stepd2_5_5}>
          <img
           src={step1.src}
           alt="step1"
           style={{
           position: 'static',
           width: '70%',
           height: 'auto',
          }} />
          </div>
        </div>

        <div className={style.stepd3}>
          STEP3
        </div>
        <div className={style.stepd3_5}>
          <p>
            セレナードが相談に乗ってくれる！
          </p>
          <div className={style.stepd3_5_5}>
            <img
              src={step1.src}
              alt="step1"
              style={{
              position: 'static',
              width: '70%',
              height: 'auto',
            }} />
          </div>
        </div>


          
       

          

        <div className={style.stepd5}>
          追加予定セレナード
        </div>


        <div className={style.stepd5_5}>
          <div className={style.kyara}>
            <h3>
            春のキャラクター
            </h3>
            <h4>
            （自己肯定感の向上担当）
            </h4>
           <p>
            
            
            : 容姿は花びらや新緑をモチーフにしたデザインで、春らしい明るさを感じさせる。性格は温かく、
             優しくエンカレッジメントを提供し、ユーザーの自己肯定感を高める。
           

           </p>
           <div className={style.stepd3_5_5}>
            <img
              src={step1.src}
              alt="step1"
              style={{
              position: 'static',
              width: '70%',
              height: 'auto',
            }} />
          </div>

          </div>
          
          <div className={style.kyara2}>
          <h3>夏のキャラクター</h3>
          <h4>（感情の発散担当）</h4>
           <p>
            
           
            : 容姿は太陽や海をモチーフにしたデザインで、夏らしいエネルギッシュな雰囲気を持つ。性格は活発で、
              ユーザーの感情を適切に表現し、発散する手助けをする。
            </p>
           <div className={style.stepd3_5_5}>
            <img
              src={step1.src}
              alt="step1"
              style={{
              position: 'static',
              width: '70%',
              height: 'auto',
            }} />
          </div>

          </div>

          

          
        </div>


    </div></>
  

    
  );
};


export default MainImageInfo;

