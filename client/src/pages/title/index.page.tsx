import { CommentOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';
import type { NextRouter } from 'next/router';
import { withRouter } from 'next/router';
import type { MouseEvent } from 'react';
import { Component } from 'react';
import 'slick-carousel';
import styles from './index.module.css';
import { Carousel } from 'antd';

const contentStyle1: React.CSSProperties = {
  margin: 0,
  height: '600px',
  width: '80%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: 'url(/bay3.png)', // こちらを修正
  backgroundPosition: 'right',
  backgroundSize: '100% 100%',
  marginTop:'50px',
  marginLeft:'160px',
};

const contentStyle2: React.CSSProperties = {
  margin: 0,
  height: '600px',
  width: '80%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: 'url(/dora3.png)', // こちらを修正
  backgroundPosition: 'center',
  backgroundSize: '110% 100%',
  marginTop:'50px',
  marginLeft:'160px',
};
const contentStyle3: React.CSSProperties = {
  margin: 0,
  height: '600px',
  width: '80%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: 'url(/ca-vi3.png)', // こちらを修正
  backgroundPosition: 'center',
  backgroundSize: '100% 100%',
  marginTop:'50px',
  marginLeft:'160px',
};
const contentStyle4: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

const onChange = (currentSlide: number) => {
  console.log(currentSlide);
};


interface UserProfileState {
  isHovered: boolean;
}
interface UserProfileProps {
  router: NextRouter;
}
class UserProfile extends Component<UserProfileProps, UserProfileState> {
  constructor(props: UserProfileProps) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = (event: MouseEvent<HTMLElement>) => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };


  redirectToBaymax = () => {
    console.log('dawds');
    this.props.router.push('/baymax');
  };

  render() {
    const { isHovered } = this.state;

    return (
      <div className={styles['fullScreenBackground']}>
        <div className={styles.gNav}>
          <div className={styles.navItem}>
            <span>キャラクター一覧</span>
          </div>
        </div>
        <Carousel afterChange={onChange}>
        <div style={{ backgroundImage: './doraemon.jpg', backgroundSize: 'cover' }}>
        <h3 style={contentStyle1} />
      </div>
      <div>
        <h3 style={contentStyle2} />
      </div>
      <div>
        <h3 style={contentStyle3} />
      </div>
      <div>
        <h3 style={contentStyle4} />
      </div>
    </Carousel>
        <div />
        <div className={styles['figure-container']}>
          <div className={styles.row}>
            <figure
              className={`${styles.snip1344} ${isHovered ? styles.hover : ''}`}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <img src="/baymax.jpg" alt="profile-sample1" className={styles.background} />
              <img src="/baymax.jpg" alt="profile-sample1" className={styles.profile} />
              <figcaption>
                <h3>
                  Baymax<span>皆を癒すロボット</span>
                </h3>
                <div className="icons">
                  <a href="#" onClick={this.redirectToBaymax}>
                    <CommentOutlined />
                  </a>
                </div>
              </figcaption>
            </figure>
            <figure
              className={`${styles.snip1344} ${isHovered ? styles.hover : ''}`}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg"
                alt="profile-sample1"
                className={styles.background}
              />
              <img src="/doraemon.jpg" alt="profile-sample1" className={styles.profile} />
              <figcaption>
                <h3>
                  ドラえもん<span>ネコ型ロボット</span>
                </h3>
                <div className="icons">
                  <a href="#">
                    <button onClick={this.redirectToBaymax}>
                      <CommentOutlined />
                    </button>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className={styles.row}>
            <figure
              className={`${styles.snip1344} ${isHovered ? styles.hover : ''}`}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg"
                alt="profile-sample1"
                className={styles.background}
              />
              <img src="/ca-vi.jpg" alt="profile-sample1" className={styles.profile} />
              <figcaption>
                <h3>
                カービィ<span>丸い友達</span>
                </h3>
                <div className="icons">
                  <a href="#">
                    <CommentOutlined />
                  </a>
                </div>
              </figcaption>
            </figure>
            <figure
              className={`${styles.snip1344} ${isHovered ? styles.hover : ''}`}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg"
                alt="profile-sample1"
                className={styles.background}
              />
              <img src="/face.jpg"  alt="profile-sample1" className={styles.profile} />
              <figcaption>
                <h3>
                モンキー・D・ルフィ <span>海賊の船長</span>
                </h3>
                <div className="icons">
                  <a href="#">
                    <CommentOutlined />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfile);
