import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import '../../main.css';
const FeatureList = [
  {
    title: 'Feature-Rich',
    Svg: require('@site/static/img/feature1.svg').default,
    description: (
      <>
        Multi-Platform Collaboration Suite - Video, Audio, SIP, Digital Whiteboard, Chat, Annotations with never-ending conferences, entirely driven by API.
      </>
    ),
  },
  {
    title: 'Scaleable',
    Svg: require('@site/static/img/feature2.svg').default,
    description: (
      <>
        We spawn collaboration engines, conferencing mixers and tools based on demand. Each collaboration session utilises it's own resources.
      </>
    ),
  },
  {
    title: 'Cloud Based',
    Svg: require('@site/static/img/feature3.svg').default,
    description: (
      <>
        Adhering to cloud-native principles, a cloud agnostic solution with high availability. We're deployed into multiple clouds with a blockchain of trust to maintain states.
      </>
    ),
  },
];

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function Feature({Svg, title, description}) {
  return (
    <div className="feature-box">
      <div className="feature-image">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <h3>{title}</h3>
      <p className="feature-line">{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="features">
    <p className="feature-text">Features</p>
    <h2>Powerful tool to host conference</h2>
      <div className="feature-container">
        <div className="feature-row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
      </div>
    </div>
    </div>
  );
}