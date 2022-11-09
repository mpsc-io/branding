import React from 'react';
import '../Styles/CustomNavBar.css';
import CustomButton from './CustomButton';

const CustomNavBar=(props)=>{
    return(
        <nav>
            <ul>
                <li><img src="img/hoot_icon.png"/></li>
                <li><a href="">Home</a></li>
                <li><a href="">Design</a></li>
                <li><a href="/api">API</a></li>
                <li><a href="/docs">How to Use</a></li>
                <li><a href="">Deployments</a>
                <ul>
                    <li><a href='#'>Generic-Deployment</a></li>
                    <li><a href='#'>Corp Deployment 1</a></li>
                    <li><a href='#'>Corp2 Deployment 2</a></li>
                </ul>
                </li>
            </ul>
            <ul>
                <li><a href="/support">Support</a></li>
                <li><CustomButton class={'tertiary-button'}>Get Started</CustomButton></li>
            </ul>
        </nav>
    );
};

export default CustomNavBar;