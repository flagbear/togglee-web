import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_computer.svg').default,
    description: (
      <>
        No coding needed, Anyone in your project should be able to edit the state of toggles.
      </>
    ),
  },
  {
    title: 'Lightning Speed',
    Svg: require('@site/static/img/undraw_tree.svg').default,
    description: (
      <>
        This is real time so you dont need to go through your code release cicle to change the state of your application.
      </>
    ),
  },
  {
    title: 'Community Free',
    Svg: require('@site/static/img/undraw_mountain.svg').default,
    description: (
      <>
        We do this to help the community so Togglee is free as it does not require a service.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
