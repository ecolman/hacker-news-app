(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8121:function(e,s,n){Promise.resolve().then(n.bind(n,1418))},1418:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return f}});var i=n(7437),t=n(2265),r=n(4839);let l=e=>{let{text:s,className:n,...t}=e;return(0,i.jsx)("div",{className:(0,r.Z)("w-[104px] h-[34px] flex items-center justify-center bg-orange cursor-pointer",n),...t,children:(0,i.jsx)("div",{className:"font-sans font-semibold text-white",children:s})})};var c=n(1373),a=n(764),o=n(7907),u=n(3729),d=n(8201),h=n(2072);function f(){let e=(0,h.CG)(e=>e.app.newsItemsPageSize),[s,n]=(0,t.useState)([]),[r,f]=(0,t.useState)([]),{data:x,error:m,isLoading:g,isSuccess:j}=(0,d.EA)(void 0,{refetchOnMountOrArgChange:!0}),{currentData:v,error:p,isFetching:w,isLoading:N,isSuccess:E}=(0,d.r_)(s),_=g||N,b=void 0!==m||void 0!==p;return(0,t.useEffect)(()=>{j&&(f([]),n((null==x?void 0:x.slice(0,e))||[]))},[j]),(0,t.useEffect)(()=>{E&&v&&f(v)},[E,v]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h,{isLoading:_,isError:b}),_&&(0,i.jsx)("div",{className:"w-full min-h-[250px] flex items-center justify-center",children:(0,i.jsx)(o.c,{className:"h-12 w-12"})}),!_&&!b&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"flex flex-col",children:null==r?void 0:r.map((e,s)=>(0,i.jsx)(u.n,{index:s,item:e},e.title))}),r.length>0&&(0,i.jsx)(l,{text:w?(0,i.jsx)(o.c,{className:"h-4 w-4"}):"show more",onClick:()=>{n((null==x?void 0:x.slice(0,s.length+e))||[])},className:"ml-10"})]}),!_&&b&&(0,i.jsx)("div",{className:"w-full min-h-[250px] flex items-center justify-center text-lg",children:"There was an error, please reload the page."}),!_&&r.length>0&&(0,i.jsx)(c.$,{isLoading:_,isError:b})]})}}},function(e){e.O(0,[769,543,779,971,23,744],function(){return e(e.s=8121)}),_N_E=e.O()}]);