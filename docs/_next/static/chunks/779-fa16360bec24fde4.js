"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[779],{5535:function(e,t,r){r.d(t,{Fw:function(){return c},Ni:function(){return d},a3:function(){return o}});var s,n=r(9590);let i="favoriteIds",l={newsItemsPageSize:12,favoriteIds:JSON.parse(null!==(s=localStorage.getItem(i))&&void 0!==s?s:"[]")},a=(0,n.oM)({name:"app",initialState:l,reducers:{addFavorite:(e,t)=>{e.favoriteIds.push(t.payload),localStorage.setItem(i,JSON.stringify(e.favoriteIds))},removeFavorite:(e,t)=>{e.favoriteIds=e.favoriteIds.filter(e=>e!==t.payload),localStorage.setItem(i,JSON.stringify(e.favoriteIds))}}}),{addFavorite:o,removeFavorite:d}=a.actions,c=(e,t)=>e.app.favoriteIds.indexOf(t)>-1;t.ZP=a.reducer},1373:function(e,t,r){r.d(t,{$:function(){return i}});var s=r(7437),n=r(7674);let i=e=>{let{isLoading:t,isError:r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"border-t-4 border-orange mt-[52px] mb-[27px]"}),(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("div",{className:"font-bold text-lg mb-2 dark:text-white",children:"Hacker News"}),!t&&!r&&(0,s.jsx)(n.P,{})]})]})}},764:function(e,t,r){r.d(t,{h:function(){return x}});var s=r(7437),n=r(9512);let i=()=>{let{systemTheme:e,theme:t}=(0,n.F)(),r="dark"===("system"===t?e:t)?"white":"black";return(0,s.jsxs)("svg",{width:"212",height:"33",viewBox:"0 0 212 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M65.5352 26H60.8828V19.0156H55.5039V26H50.8516V8.86719H55.5039V15.2188H60.8828V8.86719H65.5352V26Z",fill:r}),(0,s.jsx)("path",{d:"M77.6406 26L76.7617 24.2422H76.668C76.0508 25.0078 75.4219 25.5312 74.7812 25.8125C74.1406 26.0938 73.3125 26.2344 72.2969 26.2344C71.0469 26.2344 70.0625 25.8594 69.3438 25.1094C68.625 24.3594 68.2656 23.3047 68.2656 21.9453C68.2656 20.5312 68.7578 19.4805 69.7422 18.793C70.7266 18.0977 72.1523 17.707 74.0195 17.6211L76.2344 17.5508V17.3633C76.2344 16.2695 75.6953 15.7227 74.6172 15.7227C73.6484 15.7227 72.418 16.0508 70.9258 16.707L69.6016 13.6836C71.1484 12.8867 73.1016 12.4883 75.4609 12.4883C77.1641 12.4883 78.4805 12.9102 79.4102 13.7539C80.3477 14.5977 80.8164 15.7773 80.8164 17.293V26H77.6406ZM74.2422 23C74.7969 23 75.2695 22.8242 75.6602 22.4727C76.0586 22.1211 76.2578 21.6641 76.2578 21.1016V20.0703L75.2031 20.1172C73.6953 20.1719 72.9414 20.7266 72.9414 21.7812C72.9414 22.5938 73.375 23 74.2422 23Z",fill:r}),(0,s.jsx)("path",{d:"M89.9805 26.2344C87.8086 26.2344 86.1602 25.6484 85.0352 24.4766C83.918 23.3047 83.3594 21.6211 83.3594 19.4258C83.3594 17.2227 83.9648 15.5156 85.1758 14.3047C86.3867 13.0938 88.1094 12.4883 90.3438 12.4883C91.8828 12.4883 93.332 12.8242 94.6914 13.4961L93.3438 16.8828C92.7891 16.6406 92.2773 16.4492 91.8086 16.3086C91.3398 16.1602 90.8516 16.0859 90.3438 16.0859C89.6016 16.0859 89.0273 16.375 88.6211 16.9531C88.2148 17.5312 88.0117 18.3477 88.0117 19.4023C88.0117 21.5273 88.7969 22.5898 90.3672 22.5898C91.7109 22.5898 93 22.1992 94.2344 21.418V25.0625C93.0547 25.8438 91.6367 26.2344 89.9805 26.2344Z",fill:r}),(0,s.jsx)("path",{d:"M101.312 18.5352C101.867 17.6523 102.34 16.9648 102.73 16.4727L105.707 12.7227H110.816L106.211 18.3711L111.109 26H105.871L102.965 21.2422L101.477 22.3789V26H96.8711V7.76562H101.477V14.9375C101.477 16.1641 101.391 17.3633 101.219 18.5352H101.312Z",fill:r}),(0,s.jsx)("path",{d:"M119.102 26.2344C116.891 26.2344 115.172 25.6484 113.945 24.4766C112.727 23.2969 112.117 21.6211 112.117 19.4492C112.117 17.207 112.684 15.4883 113.816 14.293C114.949 13.0898 116.566 12.4883 118.668 12.4883C120.668 12.4883 122.211 13.0117 123.297 14.0586C124.391 15.0977 124.938 16.5977 124.938 18.5586V20.5977H116.746C116.777 21.3398 117.047 21.9219 117.555 22.3438C118.07 22.7656 118.77 22.9766 119.652 22.9766C120.457 22.9766 121.195 22.9023 121.867 22.7539C122.547 22.5977 123.281 22.3359 124.07 21.9688V25.2617C123.352 25.6289 122.609 25.8828 121.844 26.0234C121.078 26.1641 120.164 26.2344 119.102 26.2344ZM118.832 15.6055C118.293 15.6055 117.84 15.7773 117.473 16.1211C117.113 16.457 116.902 16.9883 116.84 17.7148H120.777C120.762 17.0742 120.578 16.5625 120.227 16.1797C119.883 15.7969 119.418 15.6055 118.832 15.6055Z",fill:r}),(0,s.jsx)("path",{d:"M135.543 12.4883C135.941 12.4883 136.32 12.5195 136.68 12.582L136.938 12.6289L136.527 16.9531C136.152 16.8594 135.633 16.8125 134.969 16.8125C133.969 16.8125 133.242 17.043 132.789 17.5039C132.336 17.957 132.109 18.6133 132.109 19.4727V26H127.527V12.7227H130.938L131.652 14.8438H131.875C132.258 14.1406 132.789 13.5742 133.469 13.1445C134.156 12.707 134.848 12.4883 135.543 12.4883Z",fill:r}),(0,s.jsx)("path",{d:"M161.617 26H155.547L149.289 13.9297H149.184C149.332 15.8281 149.406 17.2773 149.406 18.2773V26H145.305V8.86719H151.352L157.586 20.7734H157.656C157.547 19.0469 157.492 17.6602 157.492 16.6133V8.86719H161.617V26Z",fill:r}),(0,s.jsx)("path",{d:"M171.461 26.2344C169.25 26.2344 167.531 25.6484 166.305 24.4766C165.086 23.2969 164.477 21.6211 164.477 19.4492C164.477 17.207 165.043 15.4883 166.176 14.293C167.309 13.0898 168.926 12.4883 171.027 12.4883C173.027 12.4883 174.57 13.0117 175.656 14.0586C176.75 15.0977 177.297 16.5977 177.297 18.5586V20.5977H169.105C169.137 21.3398 169.406 21.9219 169.914 22.3438C170.43 22.7656 171.129 22.9766 172.012 22.9766C172.816 22.9766 173.555 22.9023 174.227 22.7539C174.906 22.5977 175.641 22.3359 176.43 21.9688V25.2617C175.711 25.6289 174.969 25.8828 174.203 26.0234C173.438 26.1641 172.523 26.2344 171.461 26.2344ZM171.191 15.6055C170.652 15.6055 170.199 15.7773 169.832 16.1211C169.473 16.457 169.262 16.9883 169.199 17.7148H173.137C173.121 17.0742 172.938 16.5625 172.586 16.1797C172.242 15.7969 171.777 15.6055 171.191 15.6055Z",fill:r}),(0,s.jsx)("path",{d:"M191.312 26L189.812 19.6719L189.461 17.7617L189.227 16.2266H189.156C188.773 18.4141 188.516 19.793 188.383 20.3633L187.035 26H182.219L178.598 12.7227H183.109L184.188 17.8203C184.531 19.5703 184.73 21.0234 184.785 22.1797H184.855C184.879 21.4609 185.094 20.0938 185.5 18.0781L186.73 12.7227H191.793L192.918 18.1484C193.277 19.875 193.504 21.2188 193.598 22.1797H193.668C193.715 21.5859 193.793 20.8477 193.902 19.9648C194.012 19.0742 194.133 18.3594 194.266 17.8203L195.438 12.7227H199.855L196.211 26H191.312Z",fill:r}),(0,s.jsx)("path",{d:"M211.984 21.9219C211.984 23.3438 211.5 24.418 210.531 25.1445C209.562 25.8711 208.172 26.2344 206.359 26.2344C205.375 26.2344 204.52 26.1797 203.793 26.0703C203.066 25.9688 202.324 25.7773 201.566 25.4961V21.8281C202.277 22.1406 203.055 22.3984 203.898 22.6016C204.75 22.8047 205.508 22.9062 206.172 22.9062C207.164 22.9062 207.66 22.6797 207.66 22.2266C207.66 21.9922 207.52 21.7852 207.238 21.6055C206.965 21.418 206.16 21.0586 204.824 20.5273C203.605 20.0273 202.754 19.4609 202.27 18.8281C201.785 18.1875 201.543 17.3789 201.543 16.4023C201.543 15.168 202.02 14.207 202.973 13.5195C203.926 12.832 205.273 12.4883 207.016 12.4883C207.891 12.4883 208.711 12.5859 209.477 12.7812C210.25 12.9688 211.051 13.2461 211.879 13.6133L210.637 16.5664C210.027 16.293 209.383 16.0625 208.703 15.875C208.023 15.6797 207.469 15.582 207.039 15.582C206.289 15.582 205.914 15.7656 205.914 16.1328C205.914 16.3594 206.043 16.5547 206.301 16.7188C206.566 16.875 207.324 17.1992 208.574 17.6914C209.504 18.0742 210.195 18.4492 210.648 18.8164C211.109 19.1836 211.445 19.6172 211.656 20.1172C211.875 20.6094 211.984 21.2109 211.984 21.9219Z",fill:r}),(0,s.jsx)("rect",{width:"33",height:"33",fill:"#FE7139"}),(0,s.jsx)("path",{d:"M23.6953 8.55078L17.5546 18.3477V26H15.2343V18.5938L9.07025 8.55078H11.6367L16.4062 16.3555L21.2226 8.55078H23.6953Z",fill:"white"})]})};var l=r(7674),a=r(2265);let o=e=>{let{color:t="white"}=e;return(0,s.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("circle",{cx:"10",cy:"10",r:"5",fill:t}),(0,s.jsx)("line",{x1:"9.75",y1:"0.75",x2:"9.75",y2:"2.58333",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),(0,s.jsx)("line",{x1:"9.75",y1:"17.4167",x2:"9.75",y2:"19.25",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),(0,s.jsx)("line",{x1:"17.071",y1:"3.98962",x2:"15.7747",y2:"5.28598",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),(0,s.jsx)("line",{x1:"5.28613",y1:"15.7747",x2:"3.98977",y2:"17.0711",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),(0,s.jsx)("line",{x1:"19.25",y1:"10.75",x2:"17.4167",y2:"10.75",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),(0,s.jsx)("line",{x1:"2.58325",y1:"10.75",x2:"0.749919",y2:"10.75",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),(0,s.jsx)("line",{x1:"16.0104",y1:"17.071",x2:"14.714",y2:"15.7747",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"}),(0,s.jsx)("line",{x1:"4.22547",y1:"5.28595",x2:"2.92911",y2:"3.98959",stroke:t,strokeWidth:"1.5",strokeLinecap:"round"})]})},d=e=>{let{color:t="black"}=e;return(0,s.jsx)("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.1856 13.8399C15.1953 14.2148 14.1216 14.42 13 14.42C8.02944 14.42 4 10.3905 4 5.41995C4 3.38489 4.67544 1.50759 5.81437 0C2.4161 1.28639 0 4.57102 0 8.41995C0 13.3905 4.02944 17.42 9 17.42C11.9355 17.42 14.5428 16.0146 16.1856 13.8399Z",fill:t})})},c=()=>{let[e,t]=(0,a.useState)(!1),{systemTheme:r,theme:i,setTheme:l}=(0,n.F)(),c="dark"===("system"===i?r:i);return((0,a.useEffect)(()=>{t(!0)},[]),e)?(0,s.jsxs)("div",{className:"ml-auto cursor-pointer",title:"".concat(c?"Light":"Dark"," Mode"),onClick:()=>{l(c?"light":"dark")},children:[c&&(0,s.jsx)(o,{}),!c&&(0,s.jsx)(d,{})]}):null},x=e=>{let{isLoading:t,isError:r}=e;return(0,s.jsxs)("div",{className:"flex mb-[60px] pl-1 items-center",children:[(0,s.jsx)(i,{}),(0,s.jsx)("div",{className:"pl-9"}),!t&&!r&&(0,s.jsx)(l.P,{}),(0,s.jsx)(c,{})]})}},7907:function(e,t,r){r.d(t,{c:function(){return i}});var s=r(7437),n=r(4839);let i=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{className:(0,n.Z)("text-gray-200 animate-spin dark:text-white fill-orange",t),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,s.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})}},3729:function(e,t,r){r.d(t,{n:function(){return x}});var s=r(7437),n=r(526),i=r(3367),l=r(9512),a=r(2072),o=r(5535);let d=e=>{let{color:t="rgb(var(--orange-color-rgb))"}=e;return(0,s.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M5 0L6.32252 3.17971L9.75528 3.45492L7.13988 5.69529L7.93893 9.04508L5 7.25L2.06107 9.04508L2.86012 5.69529L0.244718 3.45492L3.67748 3.17971L5 0Z",fill:t})})},c=e=>{let{color:t="black"}=e;return(0,s.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M5 1.30198L5.86086 3.37173L5.97814 3.65371L6.28256 3.67811L8.51703 3.85725L6.8146 5.31556L6.58266 5.51424L6.65352 5.8113L7.17364 7.99176L5.26063 6.8233L5 6.66411L4.73937 6.8233L2.82636 7.99176L3.34648 5.8113L3.41734 5.51424L3.1854 5.31556L1.48297 3.85725L3.71744 3.67811L4.02186 3.65371L4.13914 3.37173L5 1.30198Z",stroke:t})})},x=e=>{let t,{index:r,item:x}=e,C=(0,a.CG)(e=>(0,o.Fw)(e,x.id)),h=(0,a.TL)(),{systemTheme:u,theme:f}=(0,l.F)(),p=(e,t)=>"".concat(e).concat(t&&t>1?"s":"");return x&&(0,s.jsxs)("div",{className:"flex mb-[26px] dark:text-white",children:[(0,s.jsxs)("div",{className:"w-[40px] font-mono text-lg pr-2 text-right text-light-text dark:text-dark-text",children:[r+1,"."]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"flex items-center mb-1",children:[(0,s.jsx)("div",{className:"text-lg font-mono font-bold",children:(0,s.jsx)("a",{href:x.url,target:"_blank",rel:"noreferrer",children:x.title})}),(0,s.jsx)("div",{className:"text-xxs text-light-text dark:text-dark-text font-sans pl-3",children:(0,s.jsx)("a",{href:x.url,target:"_blank",rel:"noreferrer",children:(e=>{try{var t;return"(".concat((t=new URL(e),void 0===t)?void 0:t.hostname,")")}catch(e){return""}})(x.url)})})]}),(0,s.jsxs)("div",{className:"flex text-xxs text-light-text dark:text-dark-text",children:[(0,s.jsxs)("div",{children:[x.score," ",p("point",x.score)," by ",x.by," ",x.time?"".concat((t=x.time,(0,n.B)(new Date,(0,i.K)(t)))," ago"):""]}),(0,s.jsx)("div",{className:"px-1",children:"|"}),(0,s.jsx)("div",{children:x.kids?"".concat(x.kids.length," ").concat(p("comment",null==x?void 0:x.kids.length)):"0 comments"}),(0,s.jsx)("div",{className:"px-1",children:"|"}),(0,s.jsxs)("div",{className:"flex items-center cursor-pointer select-none",onClick:()=>{C?h((0,o.Ni)(x.id)):h((0,o.a3)(x.id))},children:[C?(0,s.jsx)(d,{}):(0,s.jsx)(c,{color:"dark"===("system"===f?u:f)?"rgba(var(--dark-text-rgba))":"rgba(var(--light-text-rgba))"}),(0,s.jsx)("span",{className:"pl-0.5",children:"save"})]})]})]})]})}},7674:function(e,t,r){r.d(t,{P:function(){return a}});var s=r(7437),n=r(6463),i=r(4839);let l="/starred",a=()=>{let e=(0,n.useRouter)(),t=(0,n.usePathname)(),r=()=>{t!==l?e.push("/starred"):e.back()};return(0,s.jsxs)("div",{className:"font-sans text-sm mt-0.5 dark:text-white",children:[(0,s.jsx)("span",{className:(0,i.Z)("pr-1 cursor-pointer",{"font-bold text-orange":"/"===t}),onClick:r,children:"latest"}),"|",(0,s.jsx)("span",{className:(0,i.Z)("pl-1 cursor-pointer",{"font-bold text-orange":t===l}),onClick:r,children:"starred"})]})}},8201:function(e,t,r){r.d(t,{EA:function(){return l},jO:function(){return i},r_:function(){return a}});var s=r(4834),n=r(1034);let i=(0,s.LC)({reducerPath:"hackerNewsApi",baseQuery:(0,n.ni)({baseUrl:"https://hacker-news.firebaseio.com/v0/"}),endpoints:e=>({getNewsStories:e.query({query:()=>"newstories.json?print=pretty"}),getNewsItems:e.query({queryFn:async(e,t)=>{let{dispatch:r}=t;return Promise.allSettled(e.map(e=>r(i.endpoints.getNewsItem.initiate(e)))).then(e=>({data:e.filter(e=>"fulfilled"===e.status).map(e=>{var t;return(null==e?void 0:null===(t=e.value)||void 0===t?void 0:t.data)||{}})}))}}),getNewsItem:e.query({query:e=>"item/".concat(e,".json?print=pretty")})})}),{useGetNewsStoriesQuery:l,useGetNewsItemsQuery:a,useGetNewsItemQuery:o}=i},2072:function(e,t,r){r.d(t,{CG:function(){return i},TL:function(){return n}});var s=r(7833);let n=s.I0.withTypes(),i=s.v9.withTypes();s.oR.withTypes()}}]);