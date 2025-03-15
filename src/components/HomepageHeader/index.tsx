import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Spacer from '@site/src/components/Spacer';
import styles from './styles.module.css';
import flagbearAnimated from '@site/static/img/flagbear.svg';
import { TypeAnimation } from "react-type-animation";

const HeaderView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const [toTypeWords] = useState([
      'Simple', 2500,
      'Free', 2500,
      'Dynamic', 2500,
    ]);

  return (
    <div
      className={styles.Container}
      style={{ height: 700 }}>
      <div>
        <h1 className={styles.HeaderTitle}>
          Feature Flags <span className={styles.SeparatorText}>Made</span>
        </h1>
        <Spacer height={10} />
        <TypeAnimation
          className={styles.HeaderTyper}
          sequence={toTypeWords}
          repeat={Infinity}
          />
        <Spacer height={20} />
        <p className={styles.DescriptionText}>{siteConfig.tagline}</p>
      </div>
      <flagbearAnimated className={styles.flagbearImage}/>
    </div>
  );
};

export default HeaderView;
