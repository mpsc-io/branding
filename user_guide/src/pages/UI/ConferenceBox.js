import React from 'react';
import '../Styles/ConferenceBox.css';
import CustomButton from './CustomButton';

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
           <h2 className="conference-heading">No Long Terms Contracts</h2>
           <p className="conference-text">Download our App on your phones or continue on the browser</p>
           <div className="conference-list">
           <ul>
           <li><CustomButton class={'secondary-button'} onClick={openAndroidApp}>Download App on Android</CustomButton></li>
           <li><CustomButton class={'secondary-button'} onClick={openIOSApp}>Download App on IOS</CustomButton></li>
           <li><CustomButton class={'primary-button'} onClick={openWebApp}>Continue on Web</CustomButton></li>
           </ul>
           </div>
       </div> 
    );
}

export default ConferenceBox;