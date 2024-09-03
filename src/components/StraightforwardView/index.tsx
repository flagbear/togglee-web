import React from 'react';
import styles from './styles.module.css';
import Spacer from '@site/src/components/Spacer';
import IntroVideo from '@site/static/video/intro.mp4';

const StraightforwardView: React.FC = () => {
  return (
    <div className={styles.Container} >
      <div className={styles.Content} >
        <div className={styles.HeaderContainer} data-aos="flip-left" data-aos-duration="1000">
          <h3 className={styles.Tagline}>Why should you use Togglee?</h3>
          <h1 className={styles.Title}>Reduce Cost</h1>
          <Spacer height={20} />
          <p className={styles.Description}>
            Toggle enables the use of feature flags transparently for your system without a 3rd party service or complex pay schemes
          </p>
          <video controls src={IntroVideo} preload="metadata"/>
        </div>
      </div>
    </div>
  );
};

export default StraightforwardView;
