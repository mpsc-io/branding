"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[1136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),g=o,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:10,id:"conference-connect-with-sip",slug:"/conference-connect-with-sip"},i="Connect to conference using SIP",c={unversionedId:"application-intro/mobile/conference-connect-with-sip",id:"application-intro/mobile/conference-connect-with-sip",title:"Connect to conference using SIP",description:"1. SIP connections are now lazy-loaded on HooT i.e; you can only connect to conferences via SIP, once you use our API/UI to fetch your SIP account details.",source:"@site/docs/application-intro/mobile/sip-connection.md",sourceDirName:"application-intro/mobile",slug:"/conference-connect-with-sip",permalink:"/docs/conference-connect-with-sip",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,id:"conference-connect-with-sip",slug:"/conference-connect-with-sip"},sidebar:"tutorialSidebar",previous:{title:"Join a conference",permalink:"/docs/join-a-conference-mobile"},next:{title:"Web",permalink:"/docs/category/web"}},p={},l=[],s={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-to-conference-using-sip"},"Connect to conference using SIP"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SIP connections are now ",(0,o.kt)("strong",{parentName:"p"},"lazy-loaded")," on HooT i.e; you can only connect to conferences via SIP, once you use our API/UI to fetch your SIP account details.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap on a conference, which you would like to connect using SIP, which will open the conference popup as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 10.0"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the conference popup, tap on the view SIP details as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 10.1"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The SIP details will be displayed as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 10.2"),", which you can copy to the clipboard, and use to connect to the conference.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For this guide, we will use Zoiper, a free SIP dialer with voice and video, on my phone.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After installing Zoiper, open the app and go to Settings. Tap on accounts option that will take you to accounts screen as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 10.3"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap on add button that will show a prompt as shown of whether you have an existing username and password. Tap on \u201cYes\u201d.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the next step, you will be asked whether you want to Select a Provider or do a Manual Configuration. Tap on ",(0,o.kt)("strong",{parentName:"p"},"Manual Configuration"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select SIP as the Account type as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 10.4"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the SIP account page, enter details like ",(0,o.kt)("strong",{parentName:"p"},"Account Name,Username,Password,Domain and Auth Username"),"(same as username) as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 10.5"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Register"),", after which you should see the registration status as ",(0,o.kt)("strong",{parentName:"p"},"OK"),", as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 10.6"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the dialpad, and dial the extension number, which will connect you to the conference as shown in ",(0,o.kt)("strong",{parentName:"p"},"figure 10.7"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In case if you are not able to connect to the conference, or face any other unexpected errors contact ",(0,o.kt)("a",{parentName:"p",href:"https://www.hoot.mx/support-page"},"HooT Support"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can obtain the ",(0,o.kt)("strong",{parentName:"p"},"extension number")," from the conference invite you received on your email id."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 10.0",src:n(1107).Z,width:"1258",height:"1022"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 10.0")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 10.1",src:n(19726).Z,width:"1306",height:"1034"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 10.1")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 10.2",src:n(70452).Z,width:"1184",height:"986"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 10.2")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 10.3",src:n(41980).Z,width:"1278",height:"1068"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 10.3")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 10.4",src:n(54394).Z,width:"1252",height:"1028"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 10.4")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 10.5",src:n(74974).Z,width:"1222",height:"1012"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 10.5")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 10.6",src:n(498).Z,width:"1274",height:"986"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 10.6")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 10.7",src:n(78106).Z,width:"1276",height:"984"})),(0,o.kt)("center",null,(0,o.kt)("b",null,"Figure 10.7")))}u.isMDXComponent=!0},1107:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sip1.0-9132acb44069489063fa474c91a0de28.png"},19726:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sip1.1-e96dd6a43c3bea19520999683bbf9c31.png"},70452:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sip1.2-f3d45d70b97ea3feda170704678085d2.png"},41980:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sip1.3-3e7dd211394ea62c01909b61d1b06e43.png"},54394:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sip1.4-b83ea2ee78f8a839311ac293f71ea394.png"},74974:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sip1.5-c170f9027af485a9343a77cf9152341e.png"},498:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sip1.6-afccfb39dae57ed304ef375afc649264.png"},78106:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sip1.7-fe87b1db60d95dff914cca3d868a98d5.png"}}]);