"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[4394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=l(n),m=o,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},35843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:8,id:"conference-connect-with-sip-web",slug:"/conference-connect-with-sip-web"},i="Connect to conference using SIP",c={unversionedId:"application-intro/web/conference-connect-with-sip-web",id:"application-intro/web/conference-connect-with-sip-web",title:"Connect to conference using SIP",description:"1. SIP connections are now lazy-loaded on HooT i.e; you can only connect to conferences via SIP, once you use our API/UI to fetch your SIP account details.",source:"@site/docs/application-intro/web/sip-connection.md",sourceDirName:"application-intro/web",slug:"/conference-connect-with-sip-web",permalink:"/docs/conference-connect-with-sip-web",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,id:"conference-connect-with-sip-web",slug:"/conference-connect-with-sip-web"},sidebar:"tutorialSidebar",previous:{title:"Join a conference",permalink:"/docs/join-a-conference-web"},next:{title:"Create an invite",permalink:"/docs/create-invite-web"}},p={},l=[],s={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-to-conference-using-sip"},"Connect to conference using SIP"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SIP connections are now ",(0,o.kt)("strong",{parentName:"p"},"lazy-loaded")," on HooT i.e; you can only connect to conferences via SIP, once you use our API/UI to fetch your SIP account details.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap on a conference, which you would like to connect using SIP, which will open the conference popup as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 8.0"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the conference popup, tap on the view SIP details as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 8.0"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The SIP details will be displayed as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 8.1"),", which you can copy to the clipboard, and use to connect to the conference.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For this guide, we will use Zoiper, a free SIP dialer with voice and video, on my phone.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After installing Zoiper, open the app and go to Settings. Tap on accounts option that will take you to accounts screen as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 8.2"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap on add button that will show a prompt as shown of whether you have an existing username and password. Tap on \u201cYes\u201d.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the next step, you will be asked whether you want to Select a Provider or do a Manual Configuration. Tap on ",(0,o.kt)("strong",{parentName:"p"},"Manual Configuration"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select SIP as the Account type as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 8.3"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the SIP account page, enter details like ",(0,o.kt)("strong",{parentName:"p"},"Account Name,Username,Password,Domain and Auth Username"),"(same as username) as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 8.4"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Register"),", after which you should see the registration status as ",(0,o.kt)("strong",{parentName:"p"},"OK"),", as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 8.5"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the dialpad, and dial the extension number, which will connect you to the conference as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 8.6"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In case if you are not able to connect to the conference, or face any other unexpected errors contact ",(0,o.kt)("a",{parentName:"p",href:"https://www.hoot.mx/support-page"},"HooT Support"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can obtain the ",(0,o.kt)("strong",{parentName:"p"},"extension number")," from the conference invite you received on your email id."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 8.0",src:n(19186).Z,width:"2711",height:"809"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 8.0")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 8.1",src:n(16061).Z,width:"2541",height:"961"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 8.1")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 8.2",src:n(41980).Z,width:"1278",height:"1068"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 8.2")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 8.3",src:n(54394).Z,width:"1252",height:"1028"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 8.3")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 8.4",src:n(74974).Z,width:"1222",height:"1012"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 8.4")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 8.5",src:n(498).Z,width:"1274",height:"986"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 8.5")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 8.6",src:n(78106).Z,width:"1276",height:"984"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 8.6")))}u.isMDXComponent=!0},19186:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Figure8.0web-9d9075fae2dcdbe4895c765823819dae.png"},16061:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Figure8.1web-6e5b3fea3c6cc5b559b512b0281e22dc.png"},41980:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sip1.3-3e7dd211394ea62c01909b61d1b06e43.png"},54394:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sip1.4-b83ea2ee78f8a839311ac293f71ea394.png"},74974:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sip1.5-c170f9027af485a9343a77cf9152341e.png"},498:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sip1.6-afccfb39dae57ed304ef375afc649264.png"},78106:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sip1.7-fe87b1db60d95dff914cca3d868a98d5.png"}}]);