"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var i,r,a,c=t(861),o=t(439),s=t(687),u=t.n(s),d=t(791),l=t(689),p=t(168),h=t(686),f=h.Z.ul(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),m=h.Z.li(r||(r=(0,p.Z)(["\n  display: flex;\n  gap: 10px;\n\n  height: 150px;\n\n  & img {\n    width: 100px;\n    max-width: 100px;\n    object-fit: cover;\n  }\n\n  & div {\n    padding-top: 10px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n"]))),x=h.Z.p(a||(a=(0,p.Z)(["\n  font-weight: 600;\n"]))),v=t(565),g=t(184),j=function(){var n=(0,d.useState)([]),e=(0,o.Z)(n,2),t=e[0],i=e[1],r=(0,l.UO)().movieId;return(0,d.useEffect)((function(){(0,c.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,v.t2)(r,"/credits");case 2:e=n.sent,i(e.data.cast);case 4:case"end":return n.stop()}}),n)})))()}),[r]),0===t.length?(0,g.jsx)("p",{children:"We couldn't find any actors of this movie"}):(0,g.jsx)(f,{children:t.map((function(n){var e=n.cast_id,t=n.name,i=n.character,r=n.profile_path,a=r?"https://image.tmdb.org/t/p/w500"+r:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";return(0,g.jsxs)(m,{children:[(0,g.jsx)("img",{src:a,alt:"name"}),(0,g.jsxs)("div",{children:[(0,g.jsx)(x,{children:t}),(0,g.jsxs)("p",{children:["Character: ",i]})]})]},e)}))})}},565:function(n,e,t){t.d(e,{Df:function(){return a},t2:function(){return c},z1:function(){return o}});var i=t(243).Z.create({baseURL:"https://api.themoviedb.org"});i.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM1NTk3YjJiMDViYjE0YmM5ZjJmY2Y5YzdjODE3NSIsInN1YiI6IjY0NTE2ZWFlMzNhZDhmMDEzODBjNjJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bMoVDHRK88i5iEyNrLKnupm4rYxoTTHyrlIdKlXSsAo";var r="/3/movie/";function a(){return i.get("/3/trending/movie/day")}var c=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return i.get(r+n+e)},o=function(n){return i.get("/3/search/movie"+"?query=".concat(n))}}}]);
//# sourceMappingURL=736.3e0965bb.chunk.js.map