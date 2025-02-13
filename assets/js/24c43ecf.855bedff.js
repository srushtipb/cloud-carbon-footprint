"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[1165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?o.createElement(g,i(i({ref:t},s),{},{components:n})):o.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={id:"introduction",title:"Introduction",slug:"/introduction",sidebar_position:1},i=void 0,l={unversionedId:"GettingStarted/introduction",id:"GettingStarted/introduction",title:"Introduction",description:"Running Locally",source:"@site/docs/GettingStarted/GettingStartedIntro.md",sourceDirName:"GettingStarted",slug:"/introduction",permalink:"/docs/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",slug:"/introduction",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Classifying Usage Types",permalink:"/docs/classifying-usage-types"},next:{title:"Getting Started",permalink:"/docs/getting-started"}},u={},c=[{value:"Running Locally",id:"running-locally",level:3},{value:"Connecting your Data",id:"connecting-your-data",level:3},{value:"Storing your Data",id:"storing-your-data",level:3},{value:"Your Setup - Defaults and Customizations",id:"your-setup---defaults-and-customizations",level:3}],s={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"running-locally"},"Running Locally"),(0,r.kt)("p",null,"There are a few options when it comes to running the app locally."),(0,r.kt)("p",null,"If you are hoping to get up and running quickly, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started"},"Getting Started")," for how to begin, including a command to run for a quick install. This will guide you through running the app with your data (for additional details, read on below)."),(0,r.kt)("p",null,"If you\u2019re not ready to connect your data, no problem - you can ",(0,r.kt)("a",{parentName:"p",href:"/docs/run-with-mocked-data"},"run with mocked data"),"."),(0,r.kt)("h3",{id:"connecting-your-data"},"Connecting your Data"),(0,r.kt)("p",null,"A few steps are required to run the app with real data, that are different for each cloud provider. "),(0,r.kt)("p",null,"To make it easier to configure your app with real data, we have ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started#guided-install"},"Guided Install instructions")," that you can follow.   "),(0,r.kt)("p",null,"To manually configure your cloud provider(s), check out the steps for each cloud provider in the Connect to Real Data section:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/aws"},"AWS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/gcp"},"GCP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/azure"},"Azure"))),(0,r.kt)("h3",{id:"storing-your-data"},"Storing your Data"),(0,r.kt)("p",null,"By default, the app uses a ",(0,r.kt)("a",{parentName:"p",href:"/docs/data-persistence-and-caching#json-file"},"local cache system")," to store your estimate data as a JSON file.\nFor users or organizations with large amounts of services and usage, you may wish for an alternative method to persist a larger scale of data. For this case, we allow\nthe option to ",(0,r.kt)("a",{parentName:"p",href:"/docs/data-persistence-and-caching#mongodb-storage"},"set up and connect a MongoDB instance")," as a storage method."),(0,r.kt)("p",null,"You can view the full range of these options and the features that come with them in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data-persistence-and-caching"},"Data Persistence and Caching")," section."),(0,r.kt)("p",null,"If you still begin to experience performance issues, check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/performance-considerations"},"Performance Considerations")," page for some options you can set up to improve it."),(0,r.kt)("h3",{id:"your-setup---defaults-and-customizations"},"Your Setup - Defaults and Customizations"),(0,r.kt)("p",null,"By default, Cloud Carbon Footprint will be configured to pull data from billing data. This option allows for a holistic view of your emissions, energy and cost data over a given period of time. It will pull usage information for all services for the accounts you give it access to and then use the average cpu utilization for each cloud provider\u2019s processors."),(0,r.kt)("p",null,"If you are looking to get more granular, we do have an option to configure Cloud Carbon Footprint to pull data from a select few services for AWS and GCP. For more information on this approach and how to configure it please visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/alternative-data-approaches"},"Alternative Approaches")," page."))}p.isMDXComponent=!0}}]);