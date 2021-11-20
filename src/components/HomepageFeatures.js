import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Linux Foundations',
    Svg: require('../../static/img/penguin.svg').default,
    description: (
      <>
        A primer in what Linux is, what Open Source Software is,
        and how to operate a Linux-based Operating System.
      </>
    ),
  },
  {
    title: 'Programming Foundations',
    Svg: require('../../static/img/programmer.svg').default,
    description: (
      <>
        Introducing fundamental concepts common to all programming
        languages, as well as key tools used in software development.
      </>
    ),
  },
  {
    title: 'Computing Foundations',
    Svg: require('../../static/img/abacus.svg').default,
    description: (
      <>
        A chance to finally undersand basic concepts that underpin
        modern computing.
      </>
    ),
  },
  {
    title: 'Networking Foundations',
    Svg: require('../../static/img/network.svg').default,
    description: (
      <>
        A rapid deconstruction of the Internet Protocol Suite,
        which underpins the internet and most other modern networks.
      </>
    ),
  },
  {
    title: 'Security Foundations',
    Svg: require('../../static/img/firewall.svg').default,
    description: (
      <>
        An eye-opening peek into what computer security really means,
        instilling a baseline of security consciouness.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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