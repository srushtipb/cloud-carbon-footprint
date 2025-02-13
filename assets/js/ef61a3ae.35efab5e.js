"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={id:"azure",title:"Azure",slug:"/azure",sidebar_position:3},i=void 0,s={unversionedId:"ConnectingData/azure",id:"ConnectingData/azure",title:"Azure",description:"Account Setup",source:"@site/docs/ConnectingData/Azure.md",sourceDirName:"ConnectingData",slug:"/azure",permalink:"/docs/azure",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"azure",title:"Azure",slug:"/azure",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"GCP",permalink:"/docs/gcp"},next:{title:"Ali Cloud",permalink:"/docs/ali"}},l={},p=[{value:"Account Setup",id:"account-setup",level:3},{value:"Account Filtering",id:"account-filtering",level:3},{value:"Unsupported Usage Types",id:"unsupported-usage-types",level:3},{value:"Unknown Regions",id:"unknown-regions",level:3},{value:"Options for Azure Authentication",id:"options-for-azure-authentication",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"account-setup"},"Account Setup"),(0,o.kt)("p",null,"Your Microsoft Azure account needs to have an App registered and Service Principal with permissions to read billing and usage data from your Subscriptions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Register a new Azure Application via your Azure Portal, under \u201cApp Registrations\u201d."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You do not need to set a Redirect URI or configure platform Settings. Learn more about how to do this ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app"},"here.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within this application, go to \u201cCertificates and secrets\u201d, and create a new Client secret."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For the next step, you will need to know the client id, client secret and your tenant id."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Give permissions to this application to access subscriptions:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Learn more about how to do this ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#assign-a-role-to-the-application"},"here.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure environmental variables for the api and client."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After configuring your credentials, we need to set a number of environmental variables in the app, so it can authenticate with AWS. We use .env files to manage this. Reference ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/api/.env.template"},"packages/api/.env.template")," for a template .env file. Rename this file as .env, optionally remove the comments and then set the environment variables for the \u201cBilling Data\u201d approach. If you are only using one of these cloud providers, you can remove the environment variables associated with the other cloud provider in your ",(0,o.kt)("inlineCode",{parentName:"p"},"packgages/api/.env")," file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There is also a ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/client/.env")," file that allows you to set some configuration for the data range the application requests data for. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/client/.env.template"},"client/.env.template")," for a template. Rename this file as .env, optionally remove the comments and then set the environment variables.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"By default, the client uses AWS, GCP and Azure. If you are only using one of these cloud providers, please update the ",(0,o.kt)("inlineCode",{parentName:"p"},"appConfig")," object in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/client/src/Config.ts"},"client Config file")," to only include your provider in the ",(0,o.kt)("inlineCode",{parentName:"p"},"CURRENT_PROVIDERS")," array.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally, start up the application:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"yarn start\n")))),(0,o.kt)("p",null,"\u26a0\ufe0f This will incur some cost. Use this sparingly if you wish to test with live data."),(0,o.kt)("p",null,"DISCLAIMER: If your editor of choice is VS Code, we recommend using either your native or custom terminal of choice (i.e. iterm) instead. Unexpected authentication issues have occurred when starting up the server in VS Code terminals."),(0,o.kt)("h3",{id:"account-filtering"},"Account Filtering"),(0,o.kt)("p",null,"By default, CCF will request usage data for all subscriptions listed under the connected account. If you wish to specify a list smaller list of subscriptions to fetch, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/performance-considerations#specifying-accounts"},"Specifying Accounts")," section of the Configuration Options."),(0,o.kt)("h3",{id:"unsupported-usage-types"},"Unsupported Usage Types"),(0,o.kt)("p",null,"The application has a file containing supported usage types located ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/azure/src/lib/ConsumptionTypes.ts"},"here"),". The current lists consist of types the application has faced, so there are likely to be some types not yet handled. When querying your data, you may come across unsupported types with a warning like this:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"2021-03-31T09:48:38.815Z [ConsumptionManagement] warn: Unexpected usage type for storage service: LRS Snapshots")),(0,o.kt)("p",null,"If you come across a similar warning message, congratulations! You have found a usage type that the app currently isn\u2019t aware of - this is a great opportunity for you to improve Cloud Carbon Footprint!"),(0,o.kt)("p",null,"The steps to resolve are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Determine the type in question based on the warning message"),(0,o.kt)("li",{parentName:"ol"},"Add the type to the respective list in the ",(0,o.kt)("inlineCode",{parentName:"li"},"ConsumptionTypes.ts")," file"),(0,o.kt)("li",{parentName:"ol"},"Delete ",(0,o.kt)("inlineCode",{parentName:"li"},"estimates.cache.json")," file and restart the application server"),(0,o.kt)("li",{parentName:"ol"},"Submit an issue or pull request with the update")),(0,o.kt)("h3",{id:"unknown-regions"},"Unknown Regions"),(0,o.kt)("p",null,"Similar to the supported usage types, a file including all known regions and their aliases is located ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/azure/src/lib/AzureRegions.ts"},"here"),". When querying your data, you may come across unknown regions with a warning like this: "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"2023-02-07T11:54:39.875Z [AzureRegions] warn: Found unknown azure region 'EU North', please add it to the AzureRegions.ts file and submit a PR, thank you!")),(0,o.kt)("p",null,"This has the effect that all resources in this unknown region cannot be assigned to their correct region, as this alias is unknown. To get accurate data and help improve Cloud Carbon Footprint please follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Determine the region alias in question based on the warning message"),(0,o.kt)("li",{parentName:"ol"},"Add the region alias to the respective region in the ",(0,o.kt)("inlineCode",{parentName:"li"},"AzureRegions.ts")," file"),(0,o.kt)("li",{parentName:"ol"},"Delete ",(0,o.kt)("inlineCode",{parentName:"li"},"estimates.cache.json")," file and restart the application server"),(0,o.kt)("li",{parentName:"ol"},"Submit an issue or pull request with the update")),(0,o.kt)("h3",{id:"options-for-azure-authentication"},"Options for Azure Authentication"),(0,o.kt)("p",null,"By default, the application authenticates with Azure using environment variables set in the api/.env file. However, if you want to store these secrets is Google Secrets Manager we also provide that option, if you want to set the AZURE_AUTH_MODE environment variable to \u201cGCP\u201d."),(0,o.kt)("p",null,"The authentication mode is set inside ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/common/src/Config.ts"},"packages/common/src/Config.ts"),", and you can see these options being used in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/azure/src/application/AzureCredentialsProvider.ts"},"packages/azure/src/application/AzureCredentialsProvider.ts"),"."),(0,o.kt)("p",null,"To establish authentication with Azure using a Service Principal (SPN) and a certificate, the initial steps involve creating them in Azure as outlined in ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/cli/azure/azure-cli-sp-tutorial-1?tabs=bash"},"this guide"),'. Additionally, ensure that the AZURE_AUTH_MODE is configured to "CERTIFICATE" and AZURE_CERTIFICATE_PATH is set to path of your certificate to enable SPN-based authentication.'))}d.isMDXComponent=!0}}]);