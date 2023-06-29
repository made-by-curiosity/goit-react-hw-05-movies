"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[834],{755:function(n,e,i){i.d(e,{Z:function(){return l}});var r,t,o=i(168),d=i(686),s=d.Z.section(r||(r=(0,o.Z)(["\n  padding-top: 20px;\n"]))),c=d.Z.h2(t||(t=(0,o.Z)(["\n  margin-bottom: 20px;\n"]))),a=i(184),l=function(n){var e=n.children,i=n.title;return(0,a.jsxs)(s,{children:[i&&(0,a.jsx)(c,{children:i}),e]})}},834:function(n,e,i){i.r(e),i.d(e,{default:function(){return L}});var r,t,o,d,s,c,a,l,p,x=i(861),h=i(439),u=i(687),g=i.n(u),f=i(791),v=i(689),j=i(87),m=i(14),Z=i(742),b=i(168),w=i(686),k=w.Z.div(r||(r=(0,b.Z)([""]))),y=w.Z.div(t||(t=(0,b.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-bottom: 20px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  border-top: 2px solid Silver;\n  border-bottom: 2px solid Silver;\n"]))),I=w.Z.ul(o||(o=(0,b.Z)(["\n  padding-left: 5px;\n\n  display: flex;\n  gap: 20px;\n"]))),J=w.Z.li(d||(d=(0,b.Z)(["\n  display: flex;\n\n  gap: 2px;\n  align-items: center;\n\n  font-weight: 600;\n\n  & svg {\n    width: 16px;\n    height: 16px;\n    fill: goldenrod;\n  }\n\n  & a {\n    color: black;\n    text-decoration: underline;\n\n    &:hover,\n    &:focus {\n      color: orangered;\n    }\n  }\n"]))),N=i(184),Y=function(){return(0,N.jsxs)(k,{children:[(0,N.jsxs)(y,{children:[(0,N.jsx)("p",{children:"Additional information"}),(0,N.jsxs)(I,{children:[(0,N.jsxs)(J,{children:[(0,N.jsx)(m.s8K,{}),(0,N.jsx)(j.rU,{to:"cast",children:"Cast"})]}),(0,N.jsxs)(J,{children:[(0,N.jsx)(m.qmw,{}),(0,N.jsx)(j.rU,{to:"reviews",children:"Reviews"})]})]})]}),(0,N.jsx)(f.Suspense,{fallback:(0,N.jsx)(Z.m,{}),children:(0,N.jsx)(v.j3,{})})]})},_=w.Z.div(s||(s=(0,b.Z)(["\n  width: 100%;\n  margin-bottom: 20px;\n\n  display: flex;\n  gap: 20px;\n"]))),D=w.Z.div(c||(c=(0,b.Z)(["\n  height: 300px;\n  min-width: 200px;\n  width: 200px;\n\n  & > img {\n    height: 100%;\n    width: 100%;\n\n    object-fit: cover;\n  }\n"]))),U=w.Z.div(a||(a=(0,b.Z)(["\n  padding-top: 10px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),z=w.Z.p(l||(l=(0,b.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),E=function(n){var e=n.moviePoster,i=n.scorePercentage,r=n.title,t=n.overview,o=n.genres;return(0,N.jsxs)(_,{children:[(0,N.jsx)(D,{children:(0,N.jsx)("img",{src:e,alt:r})}),(0,N.jsxs)(U,{children:[(0,N.jsx)("h2",{children:r}),(0,N.jsxs)("p",{children:["User score: ",i,"%"]}),(0,N.jsx)("h3",{children:"Overview"}),(0,N.jsx)("p",{children:t}),(0,N.jsx)("h4",{children:"Genres"}),0!==o.length?(0,N.jsx)(z,{children:o.map((function(n){var e=n.name;return(0,N.jsx)("span",{children:e},e)}))}):(0,N.jsx)("p",{children:"We couldn't find genre of this movie"})]})]})},M=(0,w.Z)(j.rU)(p||(p=(0,b.Z)(["\n  width: 100px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-bottom: 10px;\n\n  display: inline-flex;\n  justify-content: center;\n\n  border: 1px solid rgb(192, 192, 192);\n  border-radius: 5px;\n\n  &:hover,\n  &:focus {\n    background-color: orangered;\n    color: rgb(250, 250, 250);\n  }\n\n  &:active {\n    background-color: DarkRed;\n  }\n"]))),O=function(n){var e=n.backLink;return(0,N.jsx)(M,{to:e,children:"\ud83e\udc14 Go back"})},S=i(755),C=i(565),L=function(){var n,e,i=(0,f.useState)([]),r=(0,h.Z)(i,2),t=r[0],o=r[1],d=(0,v.UO)().movieId,s=(0,v.TH)(),c=(0,f.useRef)(null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,f.useEffect)((function(){!function(){var n=(0,x.Z)(g().mark((function n(){var e;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,C.t2)(d);case 3:e=n.sent,o(e.data),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}()()}),[d]);var a=t.poster_path,l=t.title,p=t.genres,u=void 0===p?[]:p,j=t.overview,m=t.vote_average,Z=a?"https://image.tmdb.org/t/p/w500"+a:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",b=(10*(void 0===m?0:m)).toFixed();if(0!==t.length)return(0,N.jsxs)(S.Z,{children:[(0,N.jsx)(O,{backLink:c.current}),(0,N.jsx)(E,{title:l,overview:j,genres:u,moviePoster:Z,scorePercentage:b}),(0,N.jsx)(Y,{})]})}},565:function(n,e,i){i.d(e,{Df:function(){return o},t2:function(){return d},z1:function(){return s}});var r=i(243).Z.create({baseURL:"https://api.themoviedb.org"});r.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM1NTk3YjJiMDViYjE0YmM5ZjJmY2Y5YzdjODE3NSIsInN1YiI6IjY0NTE2ZWFlMzNhZDhmMDEzODBjNjJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bMoVDHRK88i5iEyNrLKnupm4rYxoTTHyrlIdKlXSsAo";var t="/3/movie/";function o(){return r.get("/3/trending/movie/day")}var d=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r.get(t+n+e)},s=function(n){return r.get("/3/search/movie"+"?query=".concat(n))}}}]);
//# sourceMappingURL=834.246636a4.chunk.js.map