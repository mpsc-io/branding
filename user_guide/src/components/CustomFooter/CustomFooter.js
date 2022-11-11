import './CustomFooter.css';
import React from 'react';
import AppleButton from '../AppleButton';
import GoogleButton from '../GoogleButton';
const CustomFooter=()=>
{
    return(
    <section className="footer-container" id="footer">
    <div className="footer-column-right">
    <div className="footer-image">
        <img src="img/hoot_icon.png"></img>
        </div>
        <br className="img-break-line"></br>
    <p className="footer-content">
    Designed for businesses. Powered by MPSC.io, Cloud-native, API driven collaboration-engine.
    </p>
        <div className="policy-list">
        <a href="/privacy/privacy-policy" className="policy-links">Privacy Policy</a>
        <br className="line-break"></br>
        <a href="/terms-and-conditions/terms-and-conditions" className="policy-links">Terms and Conditions</a>
        </div>
        </div>
    <div className="footer-column-left">
        <h6>Get the App</h6>
        <a href="https://apps.apple.com/in/app/hoot-conferencing/id6443700600" target="_blank" className="button-links"><AppleButton></AppleButton></a>
        <br></br>
        <a href="https://play.google.com/store/apps/details?id=com.hoot.mobile" target="_blank" className="button-links"><GoogleButton></GoogleButton></a>
    </div>
    </section>
);
    
};

export default CustomFooter;