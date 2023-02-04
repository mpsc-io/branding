import React from 'react';
import './ConferenceBox.css';
import CustomButton from '../CustomButton/CustomButton';

const ConferenceBox=()=>
{
    const openAndroidApp=()=>{
        window.open(
            'https://play.google.com/store/apps/details?id=com.hoot.mobile&pli=1',
            '_blank' // <- This is what makes it open in a new window.
          );
    }
    const openIOSApp=()=>{
        window.open(
            'https://apps.apple.com/in/app/hoot-conferencing/id6443700600',
            '_blank' // <- This is what makes it open in a new window.
          );
    }
    const openWebApp=()=>{
        window.open(
            'https://dev.hoot.mx/',
            '_blank' // <- This is what makes it open in a new window.
          );
    }
    return(
       <div className="conference-box">
           <h2 className="conference-heading">Powerful API Driven Platform, Customise every detail at the conference level.</h2>
           <p className="conference-text">Download our App on your phones or continue on the browser</p>
           <ul className="btn-rows">
           <li className="btn-links"><CustomButton class={'secondary-button mobile'} onClick={openAndroidApp}>Download App on Android</CustomButton></li>
           <li className="btn-links"> <CustomButton class={'secondary-button mobile'} onClick={openIOSApp}>Download App on IOS</CustomButton></li>
           <li className="btn-links"><CustomButton class={'primary-button mobile lastbutton'} onClick={openWebApp}>Continue on Web</CustomButton></li>
           </ul>
       </div> 
    );
}

export default ConferenceBox;