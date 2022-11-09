import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import './Styles/Index.css';
import CustomImage from './UI/CustomImage';
import CustomButton from './UI/CustomButton';
import ConferenceBox from './UI/ConferenceBox';
import CustomFooter from './UI/CustomFooter';
import CustomNavBar from './UI/CustomNavBar';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div className="container">
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Business Conferences made easy with HooT</h1>
          <p>Designed for businesses. Powered by MPSC.io, Cloud-native, API driven collaboration-engine.</p>
          <CustomButton class={'primary-button'}>Get Started --&gt;</CustomButton>
        </div>
        <CustomImage></CustomImage>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
      <CustomNavBar />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <hr className="divider"></hr>
        <ConferenceBox></ConferenceBox>
        <CustomFooter></CustomFooter>
        <hr className="divider"></hr>
        <div className="copyright-text">Copyright © 2022 MPSC, Inc.</div>
      </main>
    </div>
  );
}
