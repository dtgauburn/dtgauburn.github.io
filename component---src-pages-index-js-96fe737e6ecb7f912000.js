(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"54fn":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("wJ4g"),o=a("MUpH"),c=a("vOnD"),l=a("ibEc");function s(){var e=Object(o.a)(["\n    line-height: 1.1;\n    font-size: 4rem;\n  "]);return s=function(){return e},e}function m(){var e=Object(o.a)(["\n    line-height: 1.1;\n    font-size: 3.5rem;\n  "]);return m=function(){return e},e}var d=c.c.h1.withConfig({displayName:"styled__TitleElement",componentId:"sc-11l3hyf-0"})(["line-height:140%;font-size:3rem;font-weight:bold;margin-bottom:var(--space-lg);"," ",""],l.a.greaterThan("medium")(m()),l.a.greaterThan("large")(s()));t.a=function(e){var t=e.text,a=e.category;return a in i.a?r.a.createElement(d,{className:"p-4",style:{color:"white",backgroundColor:i.a[a]}},t):r.a.createElement(d,null,t)}},"7I57":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),o=a("L+ta"),c=a("wJ4g"),l=a("MUpH"),s=a("vOnD"),m=a("ibEc"),d=a("9eSz"),u=a.n(d),g=a("pejg");function f(){var e=Object(l.a)(["\n    margin-bottom: 0;\n  "]);return f=function(){return e},e}var p=Object(s.c)(g.a).withConfig({displayName:"styled__PostItemLink",componentId:"sc-1ky34fi-0"})(["text-decoration:none;display:block;margin-bottom:var(--space);color:black;"," &:hover{text-decoration:none;color:#222;}"],m.a.greaterThan("small")(f())),h=s.c.section.withConfig({displayName:"styled__PostItemWrapper",componentId:"sc-1ky34fi-1"})(["align-items:stretch;display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-light);"]),b=Object(s.c)(u.a).withConfig({displayName:"styled__PostItemImg",componentId:"sc-1ky34fi-2"})(["width:100%;"]),y=s.c.div.withConfig({displayName:"styled__PostItemInfo",componentId:"sc-1ky34fi-3"})(["display:flex;flex-direction:column;padding:calc(var(--space) * 1.5) var(--space);position:relative;"]),v=s.c.span.withConfig({displayName:"styled__PostItemTag",componentId:"sc-1ky34fi-4"})(["display:inline-block;align-items:center;background:",";color:#fff;font-size:1.4rem;font-weight:700;text-transform:uppercase;padding:calc(var(--space-sm) / 1.5) var(--space-sm);position:absolute;top:0;left:50%;transform:translate(-50%,-50%);z-index:1;"],(function(e){return e.background?e.background:"red"})),I=s.c.time.withConfig({displayName:"styled__PostItemDate",componentId:"sc-1ky34fi-5"})(["font-size:1.4rem;margin-bottom:var(--space-sm);"]),E=s.c.h1.withConfig({displayName:"styled__PostItemTitle",componentId:"sc-1ky34fi-6"})(["font-size:2rem;font-weight:700;line-height:140%;"]),k=s.c.p.withConfig({displayName:"styled__PostItemDescription",componentId:"sc-1ky34fi-7"})(["margin-top:var(--space-sm);"]),w=function(e){var t=e.slug,a=e.background,n=e.category,l=e.date,s=(e.timeToRead,e.title),m=e.description,d=e.image,u=(Object(o.a)().toRead,Object(i.useStaticQuery)("3862938538").listImages),g=u.edges.find((function(e){return e.node.childImageSharp.fluid.src.includes("cover")})),f=!!d&&d.split("/")[3],w=!!f&&u.edges.find((function(e){return e.node.childImageSharp.fluid.src.includes(f)}));return r.a.createElement(p,{to:t},r.a.createElement(h,null,w&&r.a.createElement(b,{fluid:w.node.childImageSharp.fluid,alt:s}),!w&&r.a.createElement(b,{fluid:g.node.childImageSharp.fluid,alt:s}),r.a.createElement(y,null,r.a.createElement(v,{background:a||c.a[n]},n),r.a.createElement(I,null,l," "),r.a.createElement(E,null,s),r.a.createElement(k,null,m))))};function _(){var e=Object(l.a)(["\n        grid-template-columns: repeat(auto-fit, minmax(250px, calc(50% - 10px)));\n    "]);return _=function(){return e},e}function x(){var e=Object(l.a)(["\n        display: grid;\n        grid-gap: 20px;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    "]);return x=function(){return e},e}var N=s.c.section.withConfig({displayName:"styled__ListWrapper",componentId:"sc-8jaemb-0"})(["margin-bottom:20px;"," ",""],m.a.greaterThan("small")(x()),m.a.greaterThan("large")(_()));t.a=function(e){var t=e.postList;return r.a.createElement(N,null,t.map((function(e){var t=e.node,a=t.frontmatter,n=a.background,i=a.category,o=a.date,c=a.description,l=a.title,s=a.image,m=t.timeToRead,d=t.fields.slug;return r.a.createElement(w,{slug:"/blog/"+d,background:n,category:i,date:o,timeToRead:m,title:l,description:c,image:s,key:d})})))}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));var n=a("q1tI"),r=a.n(n),i=a("9eSz"),o=a.n(i),c=a("vrFN"),l=a("7I57"),s=a("54fn"),m=a("pejg"),d=a("L+ta");a("q4sD");t.default=function(e){var t=e.data,a=Object(d.a)(),n=a.hello,i=a.subline,u=(a.category,a.latestPosts),g=a.allPosts,f=t.allMarkdownRemark.edges;return r.a.createElement("div",{className:"homepage"},r.a.createElement(c.a,{title:"Home"}),r.a.createElement(s.a,{text:n}),r.a.createElement("p",null,i),r.a.createElement("br",null),r.a.createElement(o.a,{fluid:t.doanImgFile.childImageSharp.fluid,alt:"image of doan"}),r.a.createElement("hr",{style:{margin:"2rem 0"}}),r.a.createElement("h1",null,r.a.createElement("strong",null,u)),r.a.createElement("br",null),r.a.createElement(l.a,{postList:f}),r.a.createElement("br",null),r.a.createElement(m.a,{to:"/blog/"},g))};var u="2387806059"},q4sD:function(e,t,a){},wJ4g:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={AN:"#32d14a",TN:"#3272bf",NS:"#e6c647",HS:"#874f1e",HT:"#e63125",TT:"#e63125",DTDP:"#9b34eb","Cha.Souer":"#111"}}}]);
//# sourceMappingURL=component---src-pages-index-js-96fe737e6ecb7f912000.js.map