import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomImage from '../components/CustomImage/CustomImage';
import ConferenceBox from '../components/ConferenceBox/ConferenceBox';
import '../main.css';
import CustomFooter from '../components/CustomFooter/CustomFooter';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const navigateFooter=()=>{
    document.getElementById('footer').scrollIntoView();
  };
  return (
    <header>
    <div className="hero-section">
      <div className="hero-content">
        <h1>Business Conferences made easy with HooT</h1>
        <p className="hero-paragraph">Designed for businesses. Powered by MPSC.io, Cloud-native, API driven collaboration-engine.</p>
        <CustomButton class={'primary-button'} onClick={navigateFooter}>Get Started --&gt;</CustomButton>
      </div>
      <CustomImage></CustomImage>
    </div>
  </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Infinitely Scalable Conferencing API & System by MPSC.io">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <hr className="hr-line"></hr>
      <ConferenceBox></ConferenceBox>
      <CustomFooter></CustomFooter>
      <hr className="hr-line"></hr>
      <p className="copyright-text">Copyright © 2022 MPSC, Inc.</p>
    </Layout>
  );
}
