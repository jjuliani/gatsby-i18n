(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return o});var a=n(0),r=n.n(a),u=n(167),i=n(157),l=n(190);t.default=Object(i.withLingui)()(function(){return r.a.createElement(l.a,null,r.a.createElement("h1",null,r.a.createElement(u.Trans,{id:"Hi from the second page"})),r.a.createElement("p",null,r.a.createElement(u.Trans,{id:"Welcome to page 2"})),r.a.createElement(i.Link,{to:"/"},r.a.createElement(u.Trans,{id:"Go back to the homepage"})))});var o="1701273649"},154:function(e,t,n){"use strict";n(153);var a=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.I18nProvider=function(e){var t=e.children,n=(0,u.default)(e,["children"]);return i.default.createElement(l.Provider,{value:(0,r.default)({},n)},t)},t.I18nConsumer=void 0;var r=a(n(192)),u=a(n(166)),i=a(n(0)),l=(a(n(4)),i.default.createContext());var o=l.Consumer;t.I18nConsumer=o},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return s}),n.d(t,"useStaticQuery",function(){return p});var a=n(0),r=n.n(a),u=n(4),i=n.n(u),l=n(36),o=n.n(l);n.d(t,"Link",function(){return o.a}),n.d(t,"withAssetPrefix",function(){return l.withAssetPrefix}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"parsePath",function(){return l.parsePath}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(163),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var f=r.a.createContext({}),s=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},p=function(e){r.a.useContext;var t=r.a.useContext(f);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,t,n){"use strict";n(153);var a=n(9);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Head",{enumerable:!0,get:function(){return r.Head}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return r.Redirect}}),Object.defineProperty(t,"Language",{enumerable:!0,get:function(){return r.Language}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return r.Link}}),Object.defineProperty(t,"withLingui",{enumerable:!0,get:function(){return u.default}});var r=n(165),u=a(n(186))},163:function(e,t,n){var a;e.exports=(a=n(173))&&a.default||a},165:function(e,t,n){"use strict";n(153);var a=n(9);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Head",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Language",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"I18nProvider",{enumerable:!0,get:function(){return o.I18nProvider}}),Object.defineProperty(t,"I18nConsumer",{enumerable:!0,get:function(){return o.I18nConsumer}});var r=a(n(171)),u=a(n(172)),i=a(n(175)),l=a(n(177)),o=n(154)},171:function(e,t,n){"use strict";n(56),n(153);var a=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(80)),u=a(n(0)),i=(a(n(4)),a(n(191))),l=n(154);function o(e){var t=e.availableLngs,n=e.children,a=e.lng,r=e.originalPath,l=e.siteUrl;e.hreflang;return u.default.createElement(u.default.Fragment,null,u.default.createElement(i.default,null,u.default.createElement("html",{lang:a}),u.default.createElement("link",{rel:"alternate",href:"".concat(l),hreflang:"x-default"}),t.map(function(e){return u.default.createElement("link",{key:e,rel:"alternate",href:"".concat(l).concat(e).concat(r),hreflang:e})}),n))}o.defaultProps={hreflang:!0};t.default=function(e){return u.default.createElement(l.I18nConsumer,null,function(t){return u.default.createElement(o,(0,r.default)({},t,e))})}},172:function(e,t,n){"use strict";n(153);var a=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(158)),u=a(n(159)),i=a(n(160)),l=a(n(161)),o=a(n(162)),c=a(n(37)),d=a(n(38)),f=n(0),s=(a(n(4)),n(155)),p=n(193),g=n(174),m=function(e){function t(){var e,n;(0,r.default)(this,t);for(var a=arguments.length,u=new Array(a),o=0;o<a;o++)u[o]=arguments[o];return n=(0,i.default)(this,(e=(0,l.default)(t)).call.apply(e,[this].concat(u))),(0,d.default)((0,c.default)((0,c.default)(n)),"perform",function(){var e=n.props.pageContext,t=e.fallbackLng,a=e.availableLngs,r=e.redirectPage,u=window.localStorage.getItem("@wappsLng")||(0,p.lookup)(a,(0,p.navigatorLanguages)(),t);window.localStorage.setItem("@wappsLng",u);var i="/".concat(u).concat(r);(0,s.navigate)(i,{replace:!0})}),n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){(0,g.isBrowser)()||this.perform()}},{key:"render",value:function(){return null}}]),t}(f.PureComponent);t.default=m},173:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),u=n(4),i=n.n(u),l=n(57),o=n(2),c=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},174:function(e,t,n){"use strict";n(153),Object.defineProperty(t,"__esModule",{value:!0}),t.isBrowser=function(){return"undefined"==typeof window}},175:function(e,t,n){"use strict";n(153);var a=n(176),r=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(80)),i=r(n(158)),l=r(n(159)),o=r(n(160)),c=r(n(161)),d=r(n(162)),f=r(n(37)),s=r(n(38)),p=a(n(0)),g=n(155),m=n(154),v=function(e){function t(){var e,n;(0,i.default)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return n=(0,o.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(r))),(0,s.default)((0,f.default)((0,f.default)(n)),"handleChangeLng",function(e){var t=n.props.originalPath,a="/".concat(e).concat(t);(0,g.navigate)(a)}),n}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.availableLngs;return(0,e.children)({lng:e.lng,changeLng:this.handleChangeLng,availableLngs:t})}}]),t}(p.Component);t.default=function(e){return p.default.createElement(m.I18nConsumer,null,function(t){return p.default.createElement(v,(0,u.default)({},t,e))})}},177:function(e,t,n){"use strict";n(153);var a=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(80)),u=a(n(166)),i=a(n(0)),l=a(n(4)),o=n(155),c=n(154),d=function(e){var t=e.to,n=e.lng,a=e.children,l=(0,u.default)(e,["to","lng","children"]);return i.default.createElement(o.Link,(0,r.default)({to:n?"/".concat(n).concat(t):"".concat(t)},l),a)};d.propTypes={to:l.default.string.isRequired,children:l.default.node.isRequired};t.default=function(e){return i.default.createElement(c.I18nConsumer,null,function(t){var n=t.lng;return i.default.createElement(d,(0,r.default)({lng:n},e))})}},186:function(e,t,n){"use strict";n(199),n(153);var a=n(176),r=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(158)),i=r(n(159)),l=r(n(160)),o=r(n(161)),c=r(n(162)),d=r(n(37)),f=r(n(38)),s=a(n(0)),p=n(167),g=n(198),m=n(165),v=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(e){return function(t){function n(e){var t;return(0,u.default)(this,n),t=(0,l.default)(this,(0,o.default)(n).call(this,e)),(0,f.default)((0,d.default)((0,d.default)(t)),"activateLng",function(){var e=t.props,n=e.data,a=e.pageContext,r={};n.locales&&n.locales.edges.forEach(function(e){var t=e.node,n=t.lng,a=t.data;r[n]={messages:JSON.parse(a)}}),t.i18n.load(r),t.i18n.activate(a.lng)}),t.i18n=(0,g.setupI18n)(),t.activateLng(),t}return(0,c.default)(n,t),(0,i.default)(n,[{key:"componentDidUpdate",value:function(e){this.props.pageContext.lng!==e.pageContext.lng&&(this.activateLng(),this.forceUpdate())}},{key:"render",value:function(){return s.default.createElement(p.I18nProvider,{i18n:this.i18n},s.default.createElement(m.I18nProvider,this.props.pageContext,s.default.createElement(e,this.props)))}}]),n}(s.Component)}};t.default=v},190:function(e,t,n){"use strict";var a=n(0),r=n.n(a),u=n(4),i=n.n(u),l=n(167),o=n(157),c=(n(39),n(56),function(e){var t=e.changeLng,n=e.lng,a=e.availableLngs;return r.a.createElement("ul",{style:{listStyle:"none"}},a.map(function(e){return r.a.createElement("li",{key:e,style:{display:"inline"}},r.a.createElement("button",{style:{background:"rebeccapurple",color:"white",textDecoration:e===n?"underline":"none"},onClick:function(){return t(e)}},e))}))}),d=function(e){return r.a.createElement(o.Language,null,function(t){return r.a.createElement(c,Object.assign({},e,t))})},f=function(e){var t=e.siteTitle;return r.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(o.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))),r.a.createElement("div",{style:{position:"absolute",top:0,right:0}},r.a.createElement(d,null)))},s=(n(215),function(e){var t=e.children,n=e.i18n;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Head,{hreflang:!0},r.a.createElement("title",null,n._("Gatsby Starter Lingui")),r.a.createElement("meta",{name:"description",content:"Sample"}),r.a.createElement("meta",{name:"keywords",content:"gatsby, react, wapps, lingui"})),r.a.createElement(f,{siteTitle:n._("Gatsby Starter Lingui")}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))});s.propTypes={children:i.a.node.isRequired};t.a=Object(l.withI18n)()(s)}}]);
//# sourceMappingURL=component---src-pages-page-2-js-f03b130cd16178635134.js.map