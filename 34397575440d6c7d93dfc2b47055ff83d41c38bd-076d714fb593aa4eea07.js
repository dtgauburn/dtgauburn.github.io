(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"54fn":function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("MUpH"),s=a("vOnD"),o=a("ibEc");function d(){var e=Object(n.a)(["\n    line-height: 1.1;\n    font-size: 4rem;\n  "]);return d=function(){return e},e}function l(){var e=Object(n.a)(["\n    line-height: 1.1;\n    font-size: 3.5rem;\n  "]);return l=function(){return e},e}var c=s.c.h1.withConfig({displayName:"styled__TitleElement",componentId:"sc-11l3hyf-0"})(["line-height:140%;font-size:3rem;font-weight:bold;margin-bottom:var(--space-lg);"," ",""],o.a.greaterThan("medium")(l()),o.a.greaterThan("large")(d()));t.a=function(e){var t=e.text;return r.a.createElement(c,null,t)}},"7I57":function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("Wbzz"),s=a("L+ta"),o=a("MUpH"),d=a("vOnD"),l=a("ibEc"),c=a("9eSz"),u=a.n(c),f=a("pejg");function g(){var e=Object(o.a)(["\n    margin-bottom: 0;\n  "]);return g=function(){return e},e}var p=Object(d.c)(f.a).withConfig({displayName:"styled__PostItemLink",componentId:"sc-1ky34fi-0"})(["text-decoration:none;display:block;margin-bottom:var(--space);color:black;"," &:hover{text-decoration:none;color:#222;}"],l.a.greaterThan("small")(g())),m=d.c.section.withConfig({displayName:"styled__PostItemWrapper",componentId:"sc-1ky34fi-1"})(["align-items:stretch;display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-light);"]),h=Object(d.c)(u.a).withConfig({displayName:"styled__PostItemImg",componentId:"sc-1ky34fi-2"})(["width:100%;"]),b=d.c.div.withConfig({displayName:"styled__PostItemInfo",componentId:"sc-1ky34fi-3"})(["display:flex;flex-direction:column;padding:calc(var(--space) * 1.5) var(--space);position:relative;"]),y=d.c.span.withConfig({displayName:"styled__PostItemTag",componentId:"sc-1ky34fi-4"})(["display:inline-block;align-items:center;background:",";color:#fff;font-size:1.4rem;font-weight:700;text-transform:uppercase;padding:calc(var(--space-sm) / 1.5) var(--space-sm);position:absolute;top:0;left:50%;transform:translate(-50%,-50%);z-index:1;"],(function(e){return e.background?e.background:"red"})),v=d.c.time.withConfig({displayName:"styled__PostItemDate",componentId:"sc-1ky34fi-5"})(["font-size:1.4rem;margin-bottom:var(--space-sm);"]),S=d.c.h1.withConfig({displayName:"styled__PostItemTitle",componentId:"sc-1ky34fi-6"})(["font-size:2rem;font-weight:700;line-height:140%;"]),w=d.c.p.withConfig({displayName:"styled__PostItemDescription",componentId:"sc-1ky34fi-7"})(["margin-top:var(--space-sm);"]),I=function(e){var t=e.slug,a=e.background,i=e.category,o=e.date,d=e.timeToRead,l=e.title,c=e.description,u=e.image,f=Object(s.a)().toRead,g=Object(n.useStaticQuery)("3862938538").listImages,I=g.edges.find((function(e){return e.node.childImageSharp.fluid.src.includes("cover")})),E=!!u&&u.split("/")[3],x=!!E&&g.edges.find((function(e){return e.node.childImageSharp.fluid.src.includes(E)}));return r.a.createElement(p,{to:t},r.a.createElement(m,null,x&&r.a.createElement(h,{fluid:x.node.childImageSharp.fluid,alt:l}),!x&&r.a.createElement(h,{fluid:I.node.childImageSharp.fluid,alt:l}),r.a.createElement(b,null,r.a.createElement(y,{background:a},i),r.a.createElement(v,null,o," • ",d," min ",f),r.a.createElement(S,null,l),r.a.createElement(w,null,c))))};function E(){var e=Object(o.a)(["\n        grid-template-columns: repeat(auto-fit, minmax(250px, calc(50% - 10px)));\n    "]);return E=function(){return e},e}function x(){var e=Object(o.a)(["\n        display: grid;\n        grid-gap: 20px;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    "]);return x=function(){return e},e}var L=d.c.section.withConfig({displayName:"styled__ListWrapper",componentId:"sc-8jaemb-0"})(["margin-bottom:20px;"," ",""],l.a.greaterThan("small")(x()),l.a.greaterThan("large")(E()));t.a=function(e){var t=e.postList;return r.a.createElement(L,null,t.map((function(e){var t=e.node,a=t.frontmatter,i=a.background,n=a.category,s=a.date,o=a.description,d=a.title,l=a.image,c=t.timeToRead,u=t.fields.slug;return r.a.createElement(I,{slug:"/blog/"+u,background:i,category:n,date:s,timeToRead:c,title:d,description:o,image:l,key:u})})))}},"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),o=i(a("8OQS")),d=i(a("pVnL")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=I([].concat(t.fluid))),t.fixed&&(t.fixed=I([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,i=p(t||a||[]);return i&&i.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function I(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+s+o+a+i+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(z,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),o):o})),z=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:i,src:r},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var T=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=g(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,I=e.loading,L=e.draggable,R=m||h;if(!R)return null;var T=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,_=(0,d.default)({opacity:T?1:0,transition:C?"opacity "+y+"ms":"none"},o),V="boolean"==typeof b?"lightgray":b,j={transitionDelay:y+"ms"},N=(0,d.default)({opacity:this.state.imgLoaded?0:1},C&&j,o,f),P={title:t,alt:this.state.isVisible?"":a,style:N,className:g,itemProp:S},H=this.state.isHydrated?p(R):R[0];if(m)return l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),V&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&j)}),H.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:P,imageVariants:R,generateSources:x}),H.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:P,imageVariants:R,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(R),l.default.createElement(z,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:I,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:a,title:t,loading:I},H,{imageVariants:R}))}}));if(h){var W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},n);return"inherit"===n.display&&delete W.display,l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},V&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:V,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},C&&j)}),H.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:P,imageVariants:R,generateSources:x}),H.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:P,imageVariants:R,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(R),l.default.createElement(z,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:I,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:a,title:t,loading:I},H,{imageVariants:R}))}}))}return null},t}(l.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),_=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function V(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}T.propTypes={resolutions:C,sizes:_,fixed:V(c.default.oneOfType([C,c.default.arrayOf(C)])),fluid:V(c.default.oneOfType([_,c.default.arrayOf(_)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var j=T;t.default=j}}]);
//# sourceMappingURL=34397575440d6c7d93dfc2b47055ff83d41c38bd-076d714fb593aa4eea07.js.map