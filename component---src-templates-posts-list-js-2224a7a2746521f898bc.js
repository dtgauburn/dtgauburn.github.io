(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"54fn":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("wJ4g"),o=n("MUpH"),c=n("vOnD"),l=n("ibEc");function s(){var e=Object(o.a)(["\n    line-height: 1.1;\n    font-size: 4rem;\n  "]);return s=function(){return e},e}function m(){var e=Object(o.a)(["\n    line-height: 1.1;\n    font-size: 3.5rem;\n  "]);return m=function(){return e},e}var d=c.c.h1.withConfig({displayName:"styled__TitleElement",componentId:"sc-11l3hyf-0"})(["line-height:140%;font-size:3rem;font-weight:bold;margin-bottom:var(--space-lg);"," ",""],l.a.greaterThan("medium")(m()),l.a.greaterThan("large")(s()));t.a=function(e){var t=e.text,n=e.category;return n in i.a?r.a.createElement(d,{className:"p-4",style:{color:"white",backgroundColor:i.a[n]}},t):r.a.createElement(d,null,t)}},"7I57":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("L+ta"),c=n("wJ4g"),l=n("MUpH"),s=n("vOnD"),m=n("ibEc"),d=n("9eSz"),u=n.n(d),g=n("pejg");function p(){var e=Object(l.a)(["\n    margin-bottom: 0;\n  "]);return p=function(){return e},e}var f=Object(s.c)(g.a).withConfig({displayName:"styled__PostItemLink",componentId:"sc-1ky34fi-0"})(["text-decoration:none;display:block;margin-bottom:var(--space);color:black;"," &:hover{text-decoration:none;color:#222;}"],m.a.greaterThan("small")(p())),h=s.c.section.withConfig({displayName:"styled__PostItemWrapper",componentId:"sc-1ky34fi-1"})(["align-items:stretch;display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-light);"]),b=Object(s.c)(u.a).withConfig({displayName:"styled__PostItemImg",componentId:"sc-1ky34fi-2"})(["width:100%;"]),y=s.c.div.withConfig({displayName:"styled__PostItemInfo",componentId:"sc-1ky34fi-3"})(["display:flex;flex-direction:column;padding:calc(var(--space) * 1.5) var(--space);position:relative;"]),v=s.c.span.withConfig({displayName:"styled__PostItemTag",componentId:"sc-1ky34fi-4"})(["display:inline-block;align-items:center;background:",";color:#fff;font-size:1.4rem;font-weight:700;text-transform:uppercase;padding:calc(var(--space-sm) / 1.5) var(--space-sm);position:absolute;top:0;left:50%;transform:translate(-50%,-50%);z-index:1;"],(function(e){return e.background?e.background:"red"})),I=s.c.time.withConfig({displayName:"styled__PostItemDate",componentId:"sc-1ky34fi-5"})(["font-size:1.4rem;margin-bottom:var(--space-sm);"]),w=s.c.h1.withConfig({displayName:"styled__PostItemTitle",componentId:"sc-1ky34fi-6"})(["font-size:2rem;font-weight:700;line-height:140%;"]),E=s.c.p.withConfig({displayName:"styled__PostItemDescription",componentId:"sc-1ky34fi-7"})(["margin-top:var(--space-sm);"]),k=function(e){var t=e.slug,n=e.background,a=e.category,l=e.date,s=(e.timeToRead,e.title),m=e.description,d=e.image,u=(Object(o.a)().toRead,Object(i.useStaticQuery)("3862938538").listImages),g=u.edges.find((function(e){return e.node.childImageSharp.fluid.src.includes("cover")})),p=!!d&&d.split("/")[3],k=!!p&&u.edges.find((function(e){return e.node.childImageSharp.fluid.src.includes(p)}));return r.a.createElement(f,{to:t},r.a.createElement(h,null,k&&r.a.createElement(b,{fluid:k.node.childImageSharp.fluid,alt:s}),!k&&r.a.createElement(b,{fluid:g.node.childImageSharp.fluid,alt:s}),r.a.createElement(y,null,r.a.createElement(v,{background:n||c.a[a]},a),r.a.createElement(I,null,l," "),r.a.createElement(w,null,s),r.a.createElement(E,null,m))))};function x(){var e=Object(l.a)(["\n        grid-template-columns: repeat(auto-fit, minmax(250px, calc(50% - 10px)));\n    "]);return x=function(){return e},e}function _(){var e=Object(l.a)(["\n        display: grid;\n        grid-gap: 20px;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    "]);return _=function(){return e},e}var P=s.c.section.withConfig({displayName:"styled__ListWrapper",componentId:"sc-8jaemb-0"})(["margin-bottom:20px;"," ",""],m.a.greaterThan("small")(_()),m.a.greaterThan("large")(x()));t.a=function(e){var t=e.postList;return r.a.createElement(P,null,t.map((function(e){var t=e.node,n=t.frontmatter,a=n.background,i=n.category,o=n.date,c=n.description,l=n.title,s=n.image,m=t.timeToRead,d=t.fields.slug;return r.a.createElement(k,{slug:"/blog/"+d,background:a,category:i,date:o,timeToRead:m,title:l,description:c,image:s,key:d})})))}},"BK/5":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return h}));var a=n("q1tI"),r=n.n(a),i=n("7I57"),o=n("54fn"),c=n("vrFN"),l=n("L+ta"),s=n("pejg"),m=n("MUpH"),d=n("vOnD"),u=n("ibEc");function g(){var e=Object(m.a)(["\n    padding: 1rem;\n  "]);return g=function(){return e},e}var p=d.c.ul.withConfig({displayName:"styled__PaginationWrapper",componentId:"lfj5qb-0"})(["align-items:center;border-top:1px solid var(--borders);color:var(--texts);display:flex;padding:1.5rem 3rem;justify-content:space-between;list-style:none;"," a{color:var(--texts);text-decoration:none;transition:color 0.5s;&:hover{color:var(--highlight);}}"],u.a.lessThan("large")(g())),f=function(e){var t=e.isFirst,n=e.isLast,a=e.currentPage,i=e.numPages,o=e.prevPage,c=e.nextPage,m=Object(l.a)(),d=m.next,u=m.prev,g=m.of;return r.a.createElement(p,null,r.a.createElement("li",null,!t&&r.a.createElement(s.a,{to:o},"← ",u)),r.a.createElement("p",null,a," ",g," ",i),r.a.createElement("li",null,!n&&r.a.createElement(s.a,{to:c},d," →")))},h="1823900935";t.default=function(e){var t=e.data.allMarkdownRemark.edges,n=e.pageContext,a=n.currentPage,s=n.numPages,m=1===a,d=a===s,u=a-1==1?"/blog":"/blog/page/"+(a-1),g="/blog/page/"+(a+1),p=Object(l.a)().news;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:"Blog"}),r.a.createElement(o.a,{text:p}),r.a.createElement(i.a,{postList:t}),r.a.createElement(f,{isFirst:m,isLast:d,currentPage:a,numPages:s,prevPage:u,nextPage:g}))}},wJ4g:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={AN:"#32d14a",TN:"#3272bf",NS:"#e6c647",HS:"#874f1e",HT:"#e63125",TT:"#e63125",DTDP:"#9b34eb","Cha.Souer":"#111"}}}]);
//# sourceMappingURL=component---src-templates-posts-list-js-2224a7a2746521f898bc.js.map