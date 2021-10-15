/*! For license information please see b1aa8815c39c78d24c64f31b91f97555b56eb288-81dca7a2c4b5a12ed797.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[673],{5900:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)){if(a.length){var s=i.apply(null,a);s&&e.push(s)}}else if("object"===n)if(a.toString===Object.prototype.toString)for(var o in a)r.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},5633:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var r=a(7294),i=a(5900),n=a.n(i),s={h1:"h1",h2:"h2",h3:"h3",body1:"p"},o=function(e){var t,a=e.variant,i=e.bold,o=e.align,l=e.grey,d=e.children,c=e.customClass,u=a||s[a],f=n()("typography",c,((t={})["typography--"+a]=a,t["typography--"+o]=o,t["typography--bold"]=i,t["typography--grey"]=l,t));return r.createElement(u,{className:f},d)}},2666:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var r,i,n,s=a(7294),o=a(5444),l=a(1496),d=a(5633),c=a(3408),u=a(5785),f=a(5900),m=a.n(f),p=function(e){var t,a=e.variant,r=e.customClass,i=e.children,n=e.onClick,o=m()("button",r,((t={})["button--"+a]=a,t));return s.createElement("button",{className:o,onClick:n},i)};i=r||(r={}),function(e){e.PRIMARY="primary",e.SECONDARY="secondary"}(n||(n={})),i.VARIANT=n;var g=function(e){var t=e.defaultComments,a=e.id,i="string"==typeof t?[t]:t,n=(0,s.useState)(i),o=n[0],l=n[1],f=(0,s.useState)(""),m=f[0],g=f[1];return s.createElement(c.Z,{customClass:"comments"},(0,s.useMemo)((function(){return o}),[o]).map((function(e,t){return s.createElement(d.Z,{variant:"p",customClass:"comment",key:t},e)})),s.createElement(c.Z,{customClass:"comments__container"},s.createElement(c.Z,{customClass:"comments__input"},s.createElement("label",{htmlFor:"comment"},"add new comment:"),s.createElement("input",{id:"comment",placeholder:"write your comment",type:"text",onChange:function(e){return g(e.target.value)},value:m})),s.createElement(p,{variant:r.VARIANT.PRIMARY,customClass:"comments__button",onClick:function(){"write first comment"===o[0]?l([m]):l([].concat((0,u.Z)(o),[m]));var e={id:a,comments:[m]},t=function(e,t){localStorage.setItem(e,JSON.stringify(t))};if(localStorage.getItem("commentsData")){var r=JSON.parse(localStorage.getItem("commentsData")),i=r.filter((function(e){return e.id===a}));i[0]?(i[0].comments.push(m),t("commentsData",r)):(r.push(e),t("commentsData",r))}else t("commentsData",[e]);g("")}},"submit")))},h=function(e){var t=e.article,a=e.link,i=t.id,n=t.slug,u=t.title,f=t.description,m=t.author,h=t.comments,y=t.featuredImage,b=JSON.parse(localStorage.getItem("commentsData"));b&&b.filter((function(e){return e.id===i&&(h=e.comments)}));var v=function(){return s.createElement(c.Z,null,s.createElement(l.Z,{fluid:y.childImageSharp.fluid}),s.createElement(c.Z,{customClass:"post__info"},s.createElement(d.Z,{variant:"h2",customClass:"post__title"},u),s.createElement(d.Z,{variant:"p",customClass:"post__description",grey:!0},f),s.createElement(d.Z,{variant:"h3",customClass:"post__author",align:"right"},m)))},S=a?s.createElement(o.rU,{to:n,className:"post__link"},v()):s.createElement(c.Z,{customClass:"post__wrapper"},v(),s.createElement(g,{defaultComments:h,id:i}),s.createElement(o.rU,{to:"/",className:"post__link--homepage"},s.createElement(p,{variant:r.VARIANT.SECONDARY,customClass:"post__button"},"homepage")));return s.createElement(c.Z,{customClass:"post"},S)}},3408:function(e,t,a){"use strict";var r=a(7294);t.Z=function(e){var t=e.customClass,a=e.element,i=e.children,n=a||"div";return r.createElement(n,{className:t},i)}},1496:function(e,t,a){"use strict";var r=a(5318);t.Z=void 0;var i,n=r(a(1506)),s=r(a(5354)),o=r(a(7316)),l=r(a(7154)),d=r(a(7294)),c=r(a(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=C([].concat(t.fluid))),t.fixed&&(t.fixed=C([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),y=function(e){var t=f(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,S=v&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function C(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(N,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),N=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,f=e.loading,m=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,u);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:f,draggable:m,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&y(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:y(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=y(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=e.loading,C=e.draggable,L=p||h;if(!L)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,l.default)({opacity:O?1:0,transition:V?"opacity "+b+"ms":"none"},o),z="boolean"==typeof y?"lightgray":y,H={transitionDelay:b+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},V&&H,o,u),Z={title:t,alt:this.state.isVisible?"":a,style:T,className:m,itemProp:S},P=this.state.isHydrated?g(L):L[0];if(p)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&H)}),P.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:Z,imageVariants:L,generateSources:I}),P.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:Z,imageVariants:L,generateSources:R}),this.state.isVisible&&d.default.createElement("picture",null,w(L),d.default.createElement(N,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,l.default)({alt:a,title:t,loading:E},P,{imageVariants:L}))}}));if(h){var j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete j.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},V&&H)}),P.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:Z,imageVariants:L,generateSources:I}),P.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:Z,imageVariants:L,generateSources:R}),this.state.isVisible&&d.default.createElement("picture",null,w(L),d.default.createElement(N,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,l.default)({alt:a,title:t,loading:E},P,{imageVariants:L}))}}))}return null},t}(d.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function H(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}V.propTypes={resolutions:k,sizes:z,fixed:H(c.default.oneOfType([k,c.default.arrayOf(k)])),fluid:H(c.default.oneOfType([z,c.default.arrayOf(z)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=V;t.Z=T}}]);
//# sourceMappingURL=b1aa8815c39c78d24c64f31b91f97555b56eb288-81dca7a2c4b5a12ed797.js.map