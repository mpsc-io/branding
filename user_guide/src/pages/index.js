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
import CreateConferenceBranding from '../components/CreateConferenceBranding/index';
import FeaturesBranding from "../components/FeaturesBranding/index";
import LandingPageWebImage from '../components/LandingPageWebImage';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const navigateFooter=()=>{
    document.getElementById('footer').scrollIntoView();
  };
  return (
    <header>
    <div className="hero-section">
      <div className="hero-content">
        <h2 className="hero-header-text">Business Conferences made easy with HooT</h2>
        <p className="hero-paragraph">Designed for businesses. Powered by MPSC.io, Cloud-native, API driven collaboration-engine.</p>
        <CustomButton class={'primary-button'} onClick={navigateFooter}>Get Started --&gt;</CustomButton>
        <h5 className="hero-heading">The Smoothest and Most Developer-Friendly Conferencing Solution. Our APIs are ultimate tools for spawning multiple Conferences at a whim.</h5>
      <CreateConferenceBranding />
        <h5 className="hero-heading">With tons of Out of the box customization options, HooT is The Most Customizable Solution for Seamless and Personalized Meetings.</h5>
        <FeaturesBranding/>
      </div>
      <div className="hero-images">
      <CustomImage></CustomImage>
      <LandingPageWebImage></LandingPageWebImage>
      </div>
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
