"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[244],{672:function(n,e,t){t.d(e,{Z:function(){return d}});var r,i=t(689),o=t(87),a=t(578),u=t(168),c=t(686).Z.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  & li {\n    display: flex;\n    gap: 5px;\n  }\n\n  & svg {\n    width: 20px;\n    height: 20px;\n\n    fill: orange;\n  }\n"]))),s=t(184),d=function(n){var e=n.movies,t=(0,i.TH)();return(0,s.jsx)(c,{children:e.map((function(n){return(0,s.jsxs)("li",{children:[(0,s.jsx)(a.hlg,{}),(0,s.jsx)(o.rU,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})]},n.id)}))})}},755:function(n,e,t){t.d(e,{Z:function(){return d}});var r,i,o=t(168),a=t(686),u=a.Z.section(r||(r=(0,o.Z)(["\n  padding-top: 20px;\n"]))),c=a.Z.h2(i||(i=(0,o.Z)(["\n  margin-bottom: 20px;\n"]))),s=t(184),d=function(n){var e=n.children,t=n.title;return(0,s.jsxs)(u,{children:[t&&(0,s.jsx)(c,{children:t}),e]})}},244:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,i,o,a=t(861),u=t(439),c=t(687),s=t.n(c),d=t(791),l=t(87),p=t(672),h=t(755),f=t(168),g=t(686),x=g.Z.form(r||(r=(0,f.Z)(["\n  margin-bottom: 20px;\n"]))),m=g.Z.input(i||(i=(0,f.Z)(["\n  width: 300px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-right: 3px;\n\n  line-height: 1.3;\n\n  border: 1px solid rgb(192, 192, 192);\n  border-radius: 5px;\n"]))),v=g.Z.button(o||(o=(0,f.Z)(["\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n\n  line-height: 1.3;\n\n  border: 1px solid rgb(105, 105, 105);\n  border-radius: 5px;\n\n  &:hover,\n  &:focus {\n    background-color: orangered;\n\n    color: rgb(250, 250, 250);\n  }\n\n  &:active {\n    background-color: DarkRed;\n  }\n"]))),Z=t(184),j=function(n){var e=n.onSearch;return(0,Z.jsxs)(x,{onSubmit:function(n){n.preventDefault(),n.target.elements.query.value.trim()&&(e(n),n.target.reset())},children:[(0,Z.jsx)(m,{type:"text",name:"query"}),(0,Z.jsx)(v,{type:"submit",children:"Search"})]})},b=t(565),y=function(){var n=(0,d.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,d.useState)(!1),o=(0,u.Z)(i,2),c=o[0],f=o[1],g=(0,l.lr)(),x=(0,u.Z)(g,2),m=x[0],v=x[1],y=m.get("query");(0,d.useEffect)((function(){y&&(0,a.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,f(!0),n.next=4,(0,b.z1)(y);case 4:e=n.sent,r(e.data.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,f(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))()}),[y]);return(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(j,{onSearch:function(n){v({query:n.target.elements.query.value.trim()})}}),!c&&(0,Z.jsx)(p.Z,{movies:t}),c&&(0,Z.jsxs)("div",{children:["Trying to find ",y," movie"]}),0===t.length&&y&&!c&&(0,Z.jsxs)("p",{children:["Sorry, we don't have any movies with name ",y]})]})}},565:function(n,e,t){t.d(e,{Df:function(){return o},t2:function(){return a},z1:function(){return u}});var r=t(243).Z.create({baseURL:"https://api.themoviedb.org"});r.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM1NTk3YjJiMDViYjE0YmM5ZjJmY2Y5YzdjODE3NSIsInN1YiI6IjY0NTE2ZWFlMzNhZDhmMDEzODBjNjJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bMoVDHRK88i5iEyNrLKnupm4rYxoTTHyrlIdKlXSsAo";var i="/3/movie/";function o(){return r.get("/3/trending/movie/day")}var a=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r.get(i+n+e)},u=function(n){return r.get("/3/search/movie"+"?query=".concat(n))}}}]);
//# sourceMappingURL=244.40a4180b.chunk.js.map