"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const o={id:"performance-considerations",title:"Performance Considerations",slug:"/performance-considerations",sidebar_position:2},r=void 0,s={unversionedId:"ConfigurationOptions/performance-considerations",id:"ConfigurationOptions/performance-considerations",title:"Performance Considerations",description:"Improving Query Performance and Handling Large Data",source:"@site/docs/ConfigurationOptions/PerformanceConsiderations.md",sourceDirName:"ConfigurationOptions",slug:"/performance-considerations",permalink:"/docs/performance-considerations",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"performance-considerations",title:"Performance Considerations",slug:"/performance-considerations",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Data Persistence and Caching",permalink:"/docs/data-persistence-and-caching"},next:{title:"Tagging",permalink:"/docs/tagging"}},l={},u=[{value:"Improving Query Performance and Handling Large Data",id:"improving-query-performance-and-handling-large-data",level:2},{value:"Considerations for Large Requests",id:"considerations-for-large-requests",level:2},{value:"Date Range Considerations",id:"date-range-considerations",level:2},{value:"Date Range via the Client",id:"date-range-via-the-client",level:3},{value:"Custom Date Range",id:"custom-date-range",level:4},{value:"Date Range from Today (Legacy Configuration)",id:"date-range-from-today-legacy-configuration",level:4},{value:"Group By Timestamp in Queries",id:"group-by-timestamp-in-queries",level:3},{value:"Azure Performance Considerations",id:"azure-performance-considerations",level:2},{value:"Rate Limit and Retry Logic",id:"rate-limit-and-retry-logic",level:3},{value:"Configuration Options",id:"configuration-options",level:3},{value:"Subscription Chunking",id:"subscription-chunking",level:4},{value:"Date Chunking",id:"date-chunking",level:4},{value:"Combining Configurations",id:"combining-configurations",level:4},{value:"Specifying Accounts",id:"specifying-accounts",level:2},{value:"AWS",id:"aws",level:3},{value:"Google Cloud",id:"google-cloud",level:3},{value:"Azure",id:"azure",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"improving-query-performance-and-handling-large-data"},"Improving Query Performance and Handling Large Data"),(0,i.kt)("p",null,"When running very large amounts of data, we noticed there may be some issues in the time it takes to load estimates and to receive a response from the app. Depending on the configuration of your environment, querying for dates with significant amount of usage may result in long request times, runtime errors, or even cause requests to fail. While we work hard to continuously optimize and improve CCF for large organizations and usages, we recommend considering the following to help avoid some of these issues:"),(0,i.kt)("h2",{id:"considerations-for-large-requests"},"Considerations for Large Requests"),(0,i.kt)("p",null,"When querying for a specific date range, you may encounter instances where the requested date range has a large amount of usage for the app to process. Depending on the environment in which your CCF app is running, this may cause requests to stall or timeout due to memory issues. We recommend doing the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Backfill and seed large amounts of data using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/data-persistence-and-caching#seeding-cache-file"},"Seed Cache File")," method. (Recommended)"),(0,i.kt)("li",{parentName:"ul"},"Decrease the date range of the request to reduce the amount of estimates needed to be calculated"),(0,i.kt)("li",{parentName:"ul"},"Disable other cloud provider configurations to reduce the amount of cloud providers being queried in one request")),(0,i.kt)("p",null,"Backfilling and seeding the cache is useful for handling the calculation of a large amount of data. Using this method will allow for calculated estimates to be saved, enabling faster subsequent requests with less overhead for those date ranges to be viewed in the client or output in the API/CLI."),(0,i.kt)("h2",{id:"date-range-considerations"},"Date Range Considerations"),(0,i.kt)("h3",{id:"date-range-via-the-client"},"Date Range via the Client"),(0,i.kt)("p",null,"When using the client dashboard and running very large amounts of data with the default configuration of querying each day for the previous year, we have noticed that the time it takes to start the app increases significantly."),(0,i.kt)("p",null,"In your ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/client/.env")," file, you can provide the following variables for a custom date range:"),(0,i.kt)("h4",{id:"custom-date-range"},"Custom Date Range"),(0,i.kt)("p",null,"Optionally set the date range to query data based on custom start/end timestamps."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REACT_APP_START_DATE")," (yyyy-mm-dd)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REACT_APP_END_DATE")," (yyyy-mm-dd)")),(0,i.kt)("h4",{id:"date-range-from-today-legacy-configuration"},"Date Range from Today (Legacy Configuration)"),(0,i.kt)("p",null,"Optionally set the date range to query the data starting back in days/weeks/months/quarters/years to the current date"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REACT_APP_DATE_RANGE_TYPE")," (example values: day(s), week(s), month(s), etc..)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REACT_APP_DATE_RANGE_VALUE")," (example values: number correlating to day/week/month etc..)")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note"),": If set, these will take least precedence over all other date range configurations."),(0,i.kt)("h3",{id:"group-by-timestamp-in-queries"},"Group By Timestamp in Queries"),(0,i.kt)("p",null,"In your ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/client/.env")," file, you can provide the following variable for a custom query option to group the data by date type:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REACT_APP_GROUP_BY")," (example values: day, week, month, quarter, year)")),(0,i.kt)("p",null,"Please Note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data grouped by time periods other than days will usually honor the time period of the grouping over a specific date range that falls within the range. For example, when data is grouped by month and the dates Oct. 18 - Nov. 12 are requested, the API and UI will return one data point for November that includes all available data for the month of November (1st - 30th). Behavior when requesting specific dates including portions of the group by period may not be consistent due to caching.")),(0,i.kt)("h2",{id:"azure-performance-considerations"},"Azure Performance Considerations"),(0,i.kt)("p",null,"When fetching usage data from Azure, we take a different approach from the other cloud providers in which we query the Consumption Management API in order to fetch usage data. This is because Azure currently does not provide a way to execute large SQL queries\nagainst an exported billing table. As a result, we query the UsageDetails endpoint of the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/rest/api/consumption/"},"Azure Consumption API")," to gather usage data for each subscription in the provided account."),(0,i.kt)("h3",{id:"rate-limit-and-retry-logic"},"Rate Limit and Retry Logic"),(0,i.kt)("p",null,"Due to the required frequency for fetching this amount of data from the API, requests may be subject to API throttling and rate limiting. We have added some logic to help with this issue, but it is important to note that the more subscriptions you have in your Azure account, the more requests will be made to the API and the more likely you are to encounter rate limit warnings."),(0,i.kt)("p",null,"In the chance of exceeding rate limits, we have implemented retry logic for each subscription in which we wait the required amount of time specified in the response error before retrying the request again (usually 60 seconds). When this issue is encountered, you will see the following warning logged in the console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"[ConsumptionManagement] warn: Azure ConsumptionManagementClient UsageDetailRow paging for time range [startDate] to [endDate] failed. Reason: Too many requests. Please retry after 60 seconds.\n")),(0,i.kt)("p",null,"In this instance, no action is needed and usage data will be fetched after the retry period has passed. However, each subscription can only attempt a ",(0,i.kt)("em",{parentName:"p"},"maximum of 10 retries")," before it will be skipped and excluded from the calculated estimates. When this occurs, a relevant warning will be logged to the console with details on which subscription was affected. If you encounter this issue, we recommend making a separate request for the affected subscription(s) or to explore one of the configuration options below to reduce the scope of the request."),(0,i.kt)("h3",{id:"configuration-options"},"Configuration Options"),(0,i.kt)("h4",{id:"subscription-chunking"},"Subscription Chunking"),(0,i.kt)("p",null,"If you have a large number of subscriptions, you may encounter rate limits when fetching estimates. To reduce the likelihood of this happening across ",(0,i.kt)("em",{parentName:"p"},"multiple")," subscriptions, you can customize the number of subscriptions to query at a time. To do this, assign a number to ",(0,i.kt)("inlineCode",{parentName:"p"},"AZURE_SUBSCRIPTION_CHUNKS")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file located in either the ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/api")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/cli")," directories."),(0,i.kt)("p",null,"By default, CCF will query usage data in chunks of ",(0,i.kt)("strong",{parentName:"p"},"10 subscriptions at a time"),". You will see the following log confirming the chunk size:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Fetching Azure consumption data with ${AZURE.SUBSCRIPTION_CHUNKS} chunk(s).\n")),(0,i.kt)("h4",{id:"date-chunking"},"Date Chunking"),(0,i.kt)("p",null,"To reduce the frequency of rate limits for a ",(0,i.kt)("em",{parentName:"p"},"single")," subscription for a large date range, you can split the date range for the requests into smaller chunks. To enable this feature, we've added a configuration option to do this in your ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/api/.env")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/cli/.env")," files by assigning a number to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AZURE_CONSUMPTION_CHUNKS_DAYS")," variable."),(0,i.kt)("p",null,"In doing so, this will split the requests into smaller chunks of specified days (i.e. assigning a value of 3 will make a request for every 3 days in the requested date range). When enabled, you will see the following log confirming the chunk size:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Time range will be requested in chunks of ${AZURE_CONSUMPTION_CHUNK_DAYS} days.\n")),(0,i.kt)("p",null,"...in addition to a similar log for each chunk to indicate the request progress:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"[ConsumptionManagement] debug: Querying consumption usage details from 2023-02-28T00:00:00.000Z to 2023-03-01T23:59:59.999Z\n")),(0,i.kt)("h4",{id:"combining-configurations"},"Combining Configurations"),(0,i.kt)("p",null,"You can optimize requests for a large number of subscriptions with large datasets by using both subscription and date chunking together. However, be cautious when using certain configurations for both chunked subscriptions and days, as they may result in more frequent small requests than necessary and increase the likelihood of rate limits. It's best to use both as a last resort and prioritize subscription chunking with an appropriate date range and grouping method provided for the request instead."),(0,i.kt)("h2",{id:"specifying-accounts"},"Specifying Accounts"),(0,i.kt)("p",null,"By default, CCF will query usage data for all accounts under the provided billing account for each provider. Naturally, for large accounts, this could result in a large amount of data being queried at once. There may be some instances where you would prefer to only calculate estimates for specified subscriptions within an account or reduce the scope of a request to improve performance. To do so, you can provide a list of specific account IDs to query by adding the appropriate variable to your ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file for the ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/api")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/cli")," directories."),(0,i.kt)("h3",{id:"aws"},"AWS"),(0,i.kt)("p",null,"To specify accounts for AWS, you can provide a list of account IDs to query using the ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_ACCOUNTS")," variable."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env"},'AWS_ACCOUNT=["account-1", "account-2"]\n')),(0,i.kt)("h3",{id:"google-cloud"},"Google Cloud"),(0,i.kt)("p",null,"To specify accounts for Google Cloud, you can provide a list of project ids to query using the GCP_PROJECTS variable. Please keep in mind that the project id must be the unique ID generated for the project, and is not always the same as the project name."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env"},'GCP_PROJECTS=["project-1", "project-2"]\n')),(0,i.kt)("h3",{id:"azure"},"Azure"),(0,i.kt)("p",null,"To specify subscriptions for Azure, you can provide a list of subscription IDs to query using the ",(0,i.kt)("inlineCode",{parentName:"p"},"AZURE_SUBSCRIPTIONS")," variable."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env"},'AZURE_SUBSCRIPTIONS=["subscription-1", "subscription-2"]\n')))}p.isMDXComponent=!0}}]);