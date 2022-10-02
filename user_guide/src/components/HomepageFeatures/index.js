import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Customisable',
    Svg: require('@site/static/img/user_guide3.svg').default,
    description: (
      <>
        Depending upon your business, we offer customisable, configuration based UX and UI. With a rich library of pre-built widgets to chose from.
      </>
    ),
  },
  {
    title: 'Scaleable',
    Svg: require('@site/static/img/user_guide1.svg').default,
    description: (
      <>
        We spawn collaboration engines, conferencing mixers and tools based on demand. Each collaboration session utilises it's own resources.
      </>
    ),
  },
  {
    title: 'Cloud Based',
    Svg: require('@site/static/img/user_guide2.svg').default,
    description: (
      <>
        Adhering to cloud-native principles, a cloud agnostic solution with high availability. We're deployed into multiple clouds with a blockchain of trust to maintain states.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
