import type { MouseEvent } from 'react';
import { Component } from 'react';
import styles from './index.module.css';
interface UserProfileState {
  isHovered: boolean;
}

class UserProfile extends Component<object, UserProfileState> {
  constructor(props: object) {
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

  render() {
    const { isHovered } = this.state;

    return (
      <div className={styles['fullScreenBackground']}>
         <div className={styles.gNav}>
      <div className={styles.navItem}>
        <span>キャラクター一覧</span>
      </div>
    </div>
      <div className={styles['figure-container']}>
      <div className={styles.row}>
      <figure
        className={`${styles.snip1344} ${isHovered ? styles.hover : ''}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg"
          alt="profile-sample1"
          className={styles.background} />
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg"
          alt="profile-sample1"
          className={styles.profile} />
        <figcaption>
          <h3>
            Ursula Gurnmeister<span>Engineer</span>
          </h3>
          <div className="icons">
            <a href="#">
              <i className="ion-social-reddit-outline" />
            </a>
            <a href="#">
              <i className="ion-social-twitter-outline" />
            </a>
            <a href="#">
              <i className="ion-social-vimeo-outline" />
            </a>
          </div>
        </figcaption>
      </figure><figure
        className={`${styles.snip1344} ${isHovered ? styles.hover : ''}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg"
            alt="profile-sample1"
            className={styles.background} />
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg"
            alt="profile-sample1"
            className={styles.profile} />
          <figcaption>
            <h3>
              Ursula Gurnmeister<span>Engineer</span>
            </h3>
            <div className="icons">
              <a href="#">
                <i className="ion-social-reddit-outline" />
              </a>
              <a href="#">
                <i className="ion-social-twitter-outline" />
              </a>
              <a href="#">
                <i className="ion-social-vimeo-outline" />
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
            className={styles.background} />
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg"
            alt="profile-sample1"
            className={styles.profile} />
          <figcaption>
            <h3>
              Ursula Gurnmeister<span>Engineer</span>
            </h3>
            <div className="icons">
              <a href="#">
                <i className="ion-social-reddit-outline" />
              </a>
              <a href="#">
                <i className="ion-social-twitter-outline" />
              </a>
              <a href="#">
                <i className="ion-social-vimeo-outline" />
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
            className={styles.background} />
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg"
            alt="profile-sample1"
            className={styles.profile} />
          <figcaption>
            <h3>
              Ursula Gurnmeister<span>Engineer</span>
            </h3>
            <div className="icons">
              <a href="#">
                <i className="ion-social-reddit-outline" />
              </a>
              <a href="#">
                <i className="ion-social-twitter-outline" />
              </a>
              <a href="#">
                <i className="ion-social-vimeo-outline" />
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

export default UserProfile;
