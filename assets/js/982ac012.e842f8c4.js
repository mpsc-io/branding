"use strict";(self.webpackChunkuser_guide=self.webpackChunkuser_guide||[]).push([[6983],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:e},s),{},{components:a})):n.createElement(k,i({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},45375:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},i="Documentation for HooT-API",p={unversionedId:"api/README",id:"api/README",title:"Documentation for HooT-API",description:"Documentation for API Endpoints",source:"@site/docs/api/README.md",sourceDirName:"api",slug:"/api/",permalink:"/docs/api/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add search term to Search History",permalink:"/docs/add-search-term-web"},next:{title:"DefaultApi",permalink:"/docs/api/Apis/DefaultApi"}},o={},d=[],s={toc:d};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"documentation-for-hoot-api"},"Documentation for HooT-API"),(0,r.kt)("a",{name:"documentation-for-api-endpoints"}),"## Documentation for API Endpoints",(0,r.kt)("p",null,"All URIs are relative to ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://devapi.hoot.mx"},"https://devapi.hoot.mx"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#deletev1confconfid"},(0,r.kt)("strong",{parentName:"a"},"deleteV1ConfConfId"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"DELETE")," /v1/conf/{conf_id}"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#getcheckconfconfid"},(0,r.kt)("strong",{parentName:"a"},"getCheckConfConfId"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GET")," /v1/check_conf/{conf_id}"),(0,r.kt)("td",{parentName:"tr",align:null},"Your GET endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#getsearchconferencessearchstring"},(0,r.kt)("strong",{parentName:"a"},"getSearchConferencesSearchString"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GET")," /v1/search/conferences/{search_string}"),(0,r.kt)("td",{parentName:"tr",align:null},"Your GET endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#getuseruseridsearchstrings"},(0,r.kt)("strong",{parentName:"a"},"getUserUserIdSearchStrings"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GET")," /v1/user/{user_id}/search_strings"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#getuseruseruuidinvitedtoconferences"},(0,r.kt)("strong",{parentName:"a"},"getUserUserUuidInvitedToConferences"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GET")," /v1/user/{user_uuid}/invited_to_conferences"),(0,r.kt)("td",{parentName:"tr",align:null},"Your GET endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#getuseruseruuidlastjoined"},(0,r.kt)("strong",{parentName:"a"},"getUserUserUuidLastJoined"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GET")," /v1/user/{user_uuid}/last_joined_conferences"),(0,r.kt)("td",{parentName:"tr",align:null},"Your GET endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#getv1confconfidallusers"},(0,r.kt)("strong",{parentName:"a"},"getV1ConfConfIdAllUsers"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GET")," /v1/conf/{conf_id}/all_users"),(0,r.kt)("td",{parentName:"tr",align:null},"Your GET endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#getv1sayhello"},(0,r.kt)("strong",{parentName:"a"},"getV1SayHello"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GET")," /v1/say_hello"),(0,r.kt)("td",{parentName:"tr",align:null},"Say Hello")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#getv1status"},(0,r.kt)("strong",{parentName:"a"},"getV1Status"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GET")," /v1/status"),(0,r.kt)("td",{parentName:"tr",align:null},"Your GET endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#getxb64url"},(0,r.kt)("strong",{parentName:"a"},"getXB64URL"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GET")," /v1/x/{b64_URL}"),(0,r.kt)("td",{parentName:"tr",align:null},"Your GET endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#postlogin"},(0,r.kt)("strong",{parentName:"a"},"postLogin"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"POST")," /v1/login"),(0,r.kt)("td",{parentName:"tr",align:null},"Record or register login event of a user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#postuseruseruuidsetfavouriteconferenceconfid"},(0,r.kt)("strong",{parentName:"a"},"postUserUserUuidSetFavouriteConferenceConfId"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"POST")," /v1/user/{user_uuid}/set_favourite_conference/{conf_id}"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#postuseruseruuidunsetfavouriteconferenceconfid"},(0,r.kt)("strong",{parentName:"a"},"postUserUserUuidUnsetFavouriteConferenceConfId"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"POST")," /v1/user/{user_uuid}/unset_favourite_conference/{conf_id}"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#postv1checkentrycode"},(0,r.kt)("strong",{parentName:"a"},"postV1CheckEntryCode"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"POST")," /v1/check_entry_code"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#postv1createconferenceconferencename"},(0,r.kt)("strong",{parentName:"a"},"postV1CreateConferenceConferenceName"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"POST")," /v1/create_conference/{conference_name}"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#postv1editconferenceconferencename"},(0,r.kt)("strong",{parentName:"a"},"postV1EditConferenceConferenceName"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"POST")," /v1/edit_conference/{conf_id}"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit the conference ",(0,r.kt)("inlineCode",{parentName:"td"},"conf_id")," users, provide ",(0,r.kt)("inlineCode",{parentName:"td"},"new_moderators"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"new_participants")," and users to be removed as ",(0,r.kt)("inlineCode",{parentName:"td"},"remove_users"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#putuseruseridsearchstrings"},(0,r.kt)("strong",{parentName:"a"},"putUserUserIdSearchStrings"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"PUT")," /v1/user/{user_id}/search_strings/{search_string}"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"DefaultApi")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/Apis/DefaultApi#v1useruseruuidfavouriteconferencesget"},(0,r.kt)("strong",{parentName:"a"},"v1UserUserUuidFavouriteConferencesGet"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GET")," /v1/user/{user_uuid}/favourite_conferences"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("a",{name:"documentation-for-models"}),"## Documentation for Models",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/Models/conference"},"conference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/Models/coremx"},"coremx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/Models/entity"},"entity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/Models/error"},"error")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/Models/inline_object"},"inline_object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/Models/inline_object_1"},"inline_object_1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/Models/inline_object_2"},"inline_object_2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/Models/inline_response_200"},"inline_response_200")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/Models/inline_response_200_1"},"inline_response_200_1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/Models/participant"},"participant")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/Models/partyconf"},"partyconf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/Models/sip"},"sip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/Models/user"},"user"))),(0,r.kt)("a",{name:"documentation-for-authorization"}),"## Documentation for Authorization",(0,r.kt)("p",null,"All endpoints do not require authorization."))}u.isMDXComponent=!0}}]);