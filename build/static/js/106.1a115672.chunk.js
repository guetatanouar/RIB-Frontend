(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[106],{1313:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(30),r=a(35),l=a(1265),c=a(2),i=a(0),o=a.n(i),s=a(39),m=a(1275),u=a(32),d=a(6);var p=function(e){var t=Object(s.a)(),a=Object(d.c)(Object(u.c)(t.palette.primary.main));return o.a.createElement("div",{className:e.classes.header},e.header&&o.a.createElement(m.a,{theme:a},e.header))},f=a(13),b=a(99),g=a(1297),v=a(1301);var h=function(e){var t=Object(s.a)(),a=Object(d.c)(Object(u.c)(t.palette.primary.main)),n=e.classes;return o.a.createElement(o.a.Fragment,null,e.header&&o.a.createElement(m.a,{theme:a},o.a.createElement("div",{className:Object(c.default)(n.sidebarHeader,e.variant)},e.header)),e.content&&o.a.createElement(r.a,{className:n.sidebarContent,enable:e.innerScroll},e.content))};var E=o.a.forwardRef((function(e,t){var a=Object(i.useState)(!1),n=Object(f.a)(a,2),r=n[0],l=n[1],s=e.classes;Object(i.useImperativeHandle)(t,(function(){return{toggleSidebar:m}}));var m=function(){l(!r)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{lgUp:"permanent"===e.variant},o.a.createElement(v.a,{variant:"temporary",anchor:e.position,open:r,onOpen:function(e){},onClose:function(e){return m()},disableSwipeToOpen:!0,classes:{root:Object(c.default)(s.sidebarWrapper,e.variant),paper:Object(c.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},o.a.createElement(h,e))),"permanent"===e.variant&&o.a.createElement(g.a,{mdDown:!0},o.a.createElement(b.a,{variant:"permanent",className:Object(c.default)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(c.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},o.a.createElement(h,e))))})),x=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to left, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),j=o.a.forwardRef((function(e,t){var a=Object(i.useRef)(null),n=Object(i.useRef)(null),l=Object(i.useRef)(null),s=x(e),m=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return o.a.useImperativeHandle(t,(function(){return{rootRef:l,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),o.a.createElement("div",{className:Object(c.default)(s.root,e.innerScroll&&s.innerScroll),ref:l},o.a.createElement("div",{className:s.topBg}),o.a.createElement("div",{className:"flex container w-full"},u&&o.a.createElement(E,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:l}),o.a.createElement("div",{className:Object(c.default)(s.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",m&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},o.a.createElement(p,{header:e.header,classes:s}),o.a.createElement("div",{className:Object(c.default)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&o.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&o.a.createElement(r.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),m&&o.a.createElement(E,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:n,rootRef:l})))}));j.defaultProps={};var O=o.a.memo(j)},1340:function(e,t,a){"use strict";var n=a(1),r=a(5),l=a(0),c=(a(4),a(2)),i=a(8),o=l.forwardRef((function(e,t){var a=e.classes,i=e.className,o=e.dividers,s=void 0!==o&&o,m=Object(r.a)(e,["classes","className","dividers"]);return l.createElement("div",Object(n.a)({className:Object(c.default)(a.root,i,s&&a.dividers),ref:t},m))}));t.a=Object(i.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(o)},1344:function(e,t,a){"use strict";var n=a(1),r=a(5),l=a(0),c=(a(4),a(2)),i=a(8),o=l.forwardRef((function(e,t){var a=e.disableSpacing,i=void 0!==a&&a,o=e.classes,s=e.className,m=Object(r.a)(e,["disableSpacing","classes","className"]);return l.createElement("div",Object(n.a)({className:Object(c.default)(o.root,s,!i&&o.spacing),ref:t},m))}));t.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(o)},1525:function(e,t){e.exports=m,e.exports.match=function(e,t){var a=[];return r(m(e,a,t),a)},e.exports.regexpToFunction=r,e.exports.parse=n,e.exports.compile=function(e,t){return l(n(e,t),t)},e.exports.tokensToFunction=l,e.exports.tokensToRegExp=s;var a=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function n(e,t){for(var n,r=[],l=0,o=0,s="",m=t&&t.delimiter||"/",u=t&&t.whitelist||void 0,d=!1;null!==(n=a.exec(e));){var p=n[0],f=n[1],b=n.index;if(s+=e.slice(o,b),o=b+p.length,f)s+=f[1],d=!0;else{var g="",v=n[2],h=n[3],E=n[4],x=n[5];if(!d&&s.length){var j=s.length-1,O=s[j];(!u||u.indexOf(O)>-1)&&(g=O,s=s.slice(0,j))}s&&(r.push(s),s="",d=!1);var y="+"===x||"*"===x,N="?"===x||"*"===x,S=h||E,w=g||m;r.push({name:v||l++,prefix:g,delimiter:w,optional:N,repeat:y,pattern:S?i(S):"[^"+c(w===m?w:w+m)+"]+?"})}}return(s||o<e.length)&&r.push(s+e.substr(o)),r}function r(e,t){return function(a,n){var r=e.exec(a);if(!r)return!1;for(var l=r[0],c=r.index,i={},o=n&&n.decode||decodeURIComponent,s=1;s<r.length;s++)if(void 0!==r[s]){var m=t[s-1];m.repeat?i[m.name]=r[s].split(m.delimiter).map((function(e){return o(e,m)})):i[m.name]=o(r[s],m)}return{path:l,index:c,params:i}}}function l(e,t){for(var a=new Array(e.length),n=0;n<e.length;n++)"object"===typeof e[n]&&(a[n]=new RegExp("^(?:"+e[n].pattern+")$",o(t)));return function(t,n){for(var r="",l=n&&n.encode||encodeURIComponent,c=!n||!1!==n.validate,i=0;i<e.length;i++){var o=e[i];if("string"!==typeof o){var s,m=t?t[o.name]:void 0;if(Array.isArray(m)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but got array');if(0===m.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var u=0;u<m.length;u++){if(s=l(m[u],o),c&&!a[i].test(s))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'"');r+=(0===u?o.prefix:o.delimiter)+s}}else if("string"!==typeof m&&"number"!==typeof m&&"boolean"!==typeof m){if(!o.optional)throw new TypeError('Expected "'+o.name+'" to be '+(o.repeat?"an array":"a string"))}else{if(s=l(String(m),o),c&&!a[i].test(s))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but got "'+s+'"');r+=o.prefix+s}}else r+=o}return r}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function i(e){return e.replace(/([=!:$/()])/g,"\\$1")}function o(e){return e&&e.sensitive?"":"i"}function s(e,t,a){for(var n=(a=a||{}).strict,r=!1!==a.start,l=!1!==a.end,i=a.delimiter||"/",s=[].concat(a.endsWith||[]).map(c).concat("$").join("|"),m=r?"^":"",u=0;u<e.length;u++){var d=e[u];if("string"===typeof d)m+=c(d);else{var p=d.repeat?"(?:"+d.pattern+")(?:"+c(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;t&&t.push(d),d.optional?d.prefix?m+="(?:"+c(d.prefix)+"("+p+"))?":m+="("+p+")?":m+=c(d.prefix)+"("+p+")"}}if(l)n||(m+="(?:"+c(i)+")?"),m+="$"===s?"$":"(?="+s+")";else{var f=e[e.length-1],b="string"===typeof f?f[f.length-1]===i:void 0===f;n||(m+="(?:"+c(i)+"(?="+s+"))?"),b||(m+="(?="+c(i)+"|"+s+")")}return new RegExp(m,o(a))}function m(e,t,a){return e instanceof RegExp?function(e,t){if(!t)return e;var a=e.source.match(/\((?!\?)/g);if(a)for(var n=0;n<a.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,a){for(var n=[],r=0;r<e.length;r++)n.push(m(e[r],t,a).source);return new RegExp("(?:"+n.join("|")+")",o(a))}(e,t,a):function(e,t,a){return s(n(e,a),t,a)}(e,t,a)}},2687:function(e,t,a){"use strict";a.r(t);var n=a(1313),r=a(228),l=a(0),c=a.n(l),i=a(6),o=a(42),s=a(13),m=a(107),u=a(7),d=a(1300),p=a(1284),f=a(1267),b=a(1213),g=a(197),v=a(132),h=a(1265),E=a(2),x=Object(h.a)((function(e){return{root:{display:"flex",alignItems:"center",height:21,borderRadius:2,padding:"0 6px",fontSize:11,backgroundColor:"rgba(0,0,0,.08);"},color:{width:8,height:8,marginRight:4,borderRadius:"50%"}}}));var j,O=function(e){var t=x();return c.a.createElement("div",{className:Object(E.default)(t.root,e.className)},c.a.createElement("div",{className:t.color,style:{backgroundColor:e.color}}),c.a.createElement("div",null,e.title))},y=a(30),N=a(26),S=a.n(N),w=a(44),k=a(22),C=a(50),I=a.n(C),A=Object(k.b)("mailApp/labels/getLabels",Object(w.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/api/mail-app/labels");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),M=Object(k.c)({}),R=M.getSelectors((function(e){return e.mailApp.labels})),T=R.selectAll,P=R.selectEntities,L=(R.selectById,Object(k.d)({name:"mailApp/labels",initialState:M.getInitialState(null),reducers:{},extraReducers:Object(y.a)({},A.fulfilled,M.setAll)}).reducer),D=a(9),B=a(40),H=Object(k.b)("mailApp/mail/getMail",function(){var e=Object(w.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/api/mail-app/mail",{params:t});case 2:return a=e.sent,e.next=5,a.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=Object(k.b)("mailApp/mail/updateMail",function(){var e=Object(w.a)(S.a.mark((function e(t,a){var n,r,l,c,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState,r=a.dispatch,l=n().mailApp.mail.id,e.next=4,I.a.post("/api/mail-app/update-mail",Object(D.a)({id:l},t));case 4:return c=e.sent,e.next=7,c.data;case 7:return i=e.sent,r(Object(B.c)({message:"Mail Saved"})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),W=Object(k.d)({name:"mailApp/mail",initialState:null,reducers:{},extraReducers:(j={},Object(y.a)(j,H.fulfilled,(function(e,t){return t.payload})),Object(y.a)(j,z.fulfilled,(function(e,t){return Object(D.a)(Object(D.a)({},e),t.payload)})),j)}).reducer;var F=Object(o.j)((function(e){var t=Object(i.b)(),a=Object(i.c)((function(e){return e.mailApp.mail})),n=Object(i.c)(P),r=Object(o.i)(),h=Object(l.useState)(!1),E=Object(s.a)(h,2),x=E[0],j=E[1];return Object(v.b)((function(){t(H(r))}),[t,r]),a?c.a.createElement("div",{className:"p-16 sm:p-24"},c.a.createElement("div",{className:"flex items-center justify-between overflow-hidden"},c.a.createElement("div",{className:"flex flex-col"},c.a.createElement(m.a,{delay:100},c.a.createElement(g.a,{variant:"subtitle1",className:"flex"},a.subject)),!u.a.isEmpty(n)&&a.labels.length>0&&c.a.createElement("div",{className:"flex flex-wrap mt-8 -mx-2"},a.labels.map((function(e){return c.a.createElement(O,{className:"mt-4 mx-2",title:n[e].title,color:n[e].color,key:e})}))))),c.a.createElement(p.a,{className:"my-16"}),c.a.createElement(m.a,{animation:"transition.slideUpIn",delay:200},c.a.createElement("div",null,c.a.createElement("div",{className:"flex items-start justify-between"},c.a.createElement("div",{className:"flex items-center justify-start"},a.from.avatar?c.a.createElement(d.a,{alt:a.from.name,src:a.from.avatar}):c.a.createElement(d.a,null,a.from.name[0]),c.a.createElement("div",{className:"flex flex-col mx-8"},c.a.createElement("span",null,a.from.name),c.a.createElement(g.a,{component:"div",color:"textSecondary",variant:"body1",className:"flex items-center justify-start"},c.a.createElement("div",null,"to"),c.a.createElement("div",{className:"mx-4"},a.to[0].name)))),c.a.createElement(b.a,null,c.a.createElement(f.a,null,"more_vert"))),c.a.createElement("div",{className:"my-16"},c.a.createElement(g.a,{color:"primary",className:"cursor-pointer underline mb-8",onClick:function(){j(!x)}},x?c.a.createElement("span",null,"Hide Details"):c.a.createElement("span",null,"Show Details")),x&&c.a.createElement("div",{className:"flex"},c.a.createElement(g.a,{variant:"body2",className:"flex flex-col"},c.a.createElement("span",null,"From:"),c.a.createElement("span",null,"To:"),c.a.createElement("span",null,"Date:")),c.a.createElement(g.a,{variant:"body2",color:"textSecondary",className:"px-4 flex flex-col"},c.a.createElement("span",null,a.from.email),c.a.createElement("span",null,a.to[0].email),c.a.createElement("span",null,a.time)))),c.a.createElement(g.a,{variant:"body2",dangerouslySetInnerHTML:{__html:a.message}}),c.a.createElement(p.a,{className:"my-16"}),a.attachments&&c.a.createElement("div",null,c.a.createElement(g.a,{variant:"subtitle1",className:"mb-16"},c.a.createElement("span",{className:"mx-4"},"Attachments"),c.a.createElement("span",null,"(",a.attachments.length,")")),c.a.createElement("div",{className:"flex flex-wrap -mx-8"},a.attachments.map((function(e){return c.a.createElement("div",{className:"w-192 px-8 pb-16",key:e.fileName},c.a.createElement("img",{className:"w-full rounded-4",src:e.preview,alt:e.fileName}),c.a.createElement("div",{className:"flex flex-col"},c.a.createElement(g.a,{color:"primary",className:"underline cursor-pointer",onClick:function(e){return e.preventDefault()}},"View"),c.a.createElement(g.a,{color:"primary",className:"underline cursor-pointer",onClick:function(e){return e.preventDefault()}},"Download"),c.a.createElement(g.a,null,"(",e.size,")")))}))))))):null})),U=a(39),_=a(1525);var V=Object(o.j)((function(e){var t=Object(i.b)(),a=Object(i.c)((function(e){return e.mailApp.mail})),n=Object(U.a)(),r=_.compile(e.match.path),l=Object(o.i)(),s=Object(D.a)({},l);delete s.mailId;var u=r(s);return a?c.a.createElement("div",{className:"flex flex-1 items-center justify-between overflow-hidden sm:px-16"},c.a.createElement(b.a,{onClick:function(){return e.history.push(u)}},c.a.createElement(f.a,null,"ltr"===n.direction?"arrow_back":"arrow_forward")),c.a.createElement("div",{className:"flex items-center justify-start","aria-label":"Toggle star"},c.a.createElement(m.a,{animation:"transition.expandIn",delay:100},c.a.createElement(b.a,{onClick:function(){return t(z({starred:!a.starred}))}},a.starred?c.a.createElement(f.a,null,"star"):c.a.createElement(f.a,null,"star_border"))),c.a.createElement(m.a,{animation:"transition.expandIn",delay:100},c.a.createElement(b.a,{onClick:function(){return t(z({important:!a.important}))}},a.important?c.a.createElement(f.a,null,"label"):c.a.createElement(f.a,null,"label_off"))))):null})),$=a(1297),J=a(611),Y=a(196),q=a(1275),G=a(412),K=a.n(G),Q=a(45),X=a.n(Q),Z=a(642);function ee(){if(console&&console.warn){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];"string"===typeof a[0]&&(a[0]="react-i18next:: ".concat(a[0])),(e=console).warn.apply(e,a)}}var te={};function ae(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];"string"===typeof t[0]&&te[t[0]]||("string"===typeof t[0]&&(te[t[0]]=new Date),ee.apply(void 0,t))}function ne(e,t,a){e.loadNamespaces(t,(function(){if(e.isInitialized)a();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),a()}))}}))}function re(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return ae("i18n.languages were undefined or empty",t.languages),!0;var n=t.languages[0],r=!!t.options&&t.options.fallbackLng,l=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var c=function(e,a){var n=t.services.backendConnector.state["".concat(e,"|").concat(a)];return-1===n||2===n};return!(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||(!t.services.backendConnector.backend||!(!c(n,e)||r&&!c(l,e))))}function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ce(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(Object(a),!0).forEach((function(t){X()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.i18n,n=Object(l.useContext)(Z.a)||{},r=n.i18n,c=n.defaultNS,i=a||r||Object(Z.d)();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new Z.b),!i){ae("You will need to pass in an i18next instance by using initReactI18next");var o=function(e){return Array.isArray(e)?e[e.length-1]:e},s=[o,{},!1];return s.t=o,s.i18n={},s.ready=!1,s}var m=ce(ce(ce({},Object(Z.c)()),i.options.react),t),u=m.useSuspense,d=e||c||i.options&&i.options.defaultNS;d="string"===typeof d?[d]:d||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(d);var p=(i.isInitialized||i.initializedStoreOnce)&&d.every((function(e){return re(e,i,m)}));function f(){return{t:i.getFixedT(null,"fallback"===m.nsMode?d:d[0])}}var b=Object(l.useState)(f()),g=K()(b,2),v=g[0],h=g[1],E=Object(l.useRef)(!0);Object(l.useEffect)((function(){var e=m.bindI18n,t=m.bindI18nStore;function a(){E.current&&h(f())}return E.current=!0,p||u||ne(i,d,(function(){E.current&&h(f())})),e&&i&&i.on(e,a),t&&i&&i.store.on(t,a),function(){E.current=!1,e&&i&&e.split(" ").forEach((function(e){return i.off(e,a)})),t&&i&&t.split(" ").forEach((function(e){return i.store.off(e,a)}))}}),[d.join()]);var x=[v.t,i,p];if(x.t=v.t,x.i18n=i,x.ready=p,p)return x;if(!p&&!u)return x;throw new Promise((function(e){ne(i,d,(function(){e()}))}))}var oe=a(32),se=a(12),me=Object(k.b)("mailApp/mails/getMails",function(){var e=Object(w.a)(S.a.mark((function e(t,a){var n,r,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState,t=t||n().mailApp.mails.routeParams,e.next=4,I.a.get("/api/mail-app/mails",{params:t});case 4:return r=e.sent,e.next=7,r.data;case 7:return l=e.sent,e.abrupt("return",{data:l,routeParams:t});case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),ue=Object(k.b)("mailApp/mails/setFolderOnSelectedMails",function(){var e=Object(w.a)(S.a.mark((function e(t,a){var n,r,l,c,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,l=r().mailApp.mails.selectedMailIds,e.next=4,I.a.post("/api/mail-app/set-folder",{selectedMailIds:l,folderId:t});case 4:return c=e.sent,e.next=7,c.data;case 7:return i=e.sent,n(me()),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),de=Object(k.b)("mailApp/mails/toggleLabelOnSelectedMails",function(){var e=Object(w.a)(S.a.mark((function e(t,a){var n,r,l,c,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,l=r().mailApp.mails.selectedMailIds,e.next=4,I.a.post("/api/mail-app/toggle-label",{selectedMailIds:l,labelId:t});case 4:return c=e.sent,e.next=7,c.data;case 7:return i=e.sent,n(me()),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),pe=Object(k.c)({}),fe=pe.getSelectors((function(e){return e.mailApp.mails})),be=fe.selectAll,ge=(fe.selectById,Object(k.d)({name:"mailApp/mails",initialState:pe.getInitialState({searchText:"",routeParams:{},selectedMailIds:[]}),reducers:{setMailsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}},selectAllMails:function(e,t){e.selectedMailIds=e.ids},deselectAllMails:function(e,t){e.selectedMailIds=[]},selectMailsByParameter:function(e,t){var a=Object(s.a)(t.payload,2),n=a[0],r=a[1];e.selectedMailIds=e.ids.filter((function(t){return e.entities[t][n]===r}))},toggleInSelectedMails:function(e,t){var a=t.payload;e.selectedMailIds=e.selectedMailIds.includes(a)?e.selectedMailIds.filter((function(e){return e!==a})):[].concat(Object(se.a)(e.selectedMailIds),[a])}},extraReducers:Object(y.a)({},me.fulfilled,(function(e,t){var a=t.payload,n=a.data,r=a.routeParams;pe.setAll(e,n),e.routeParams=r,e.selectedMailIds=[]}))})),ve=ge.actions,he=ve.setMailsSearchText,Ee=ve.selectAllMails,xe=ve.deselectAllMails,je=ve.selectMailsByParameter,Oe=ve.toggleInSelectedMails,ye=ge.reducer;var Ne=function(e){var t=Object(i.b)(),a=Object(i.c)((function(e){return e.mailApp.mails.searchText})),n=Object(i.c)(oe.e),r=ie("mailApp").t;return c.a.createElement(q.a,{theme:n},c.a.createElement("div",{className:"flex flex-1"},c.a.createElement(Y.a,{className:"flex items-center w-full h-48 sm:h-56 p-16 ltr:pl-4 lg:ltr:pl-16 rtl:pr-4 lg:rtl:pr-16 rounded-8 shadow"},c.a.createElement($.a,{lgUp:!0},c.a.createElement(b.a,{onClick:function(t){return e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar"},c.a.createElement(f.a,null,"menu"))),c.a.createElement(f.a,{color:"action"},"search"),c.a.createElement(J.a,{placeholder:r("SEARCH_PLACEHOLDER"),className:"px-16",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(e){return t(he(e))}}))))},Se=a(97),we=a(1218),ke=a(1219),Ce=a(1280),Ie=a(1283),Ae=a(1276),Me=a(1274),Re=a(1262),Te=a(1344),Pe=a(1340),Le=a(1290),De=a(1277),Be=Object(h.a)({root:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.08)",border:"1px solid rgba(0, 0, 0, 0.16)",paddingLeft:16,marginBottom:8,borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center"},filename:{fontWeight:600},size:{marginLeft:8,fontWeight:300}});var He=function(e){var t=Be();return c.a.createElement("div",{className:Object(E.default)(t.root,e.className)},c.a.createElement("div",{className:"flex"},c.a.createElement(g.a,{variant:"caption",className:t.filename},e.fileName),c.a.createElement(g.a,{variant:"caption",className:t.size},"(",e.size,")")),c.a.createElement(b.a,null,c.a.createElement(f.a,{className:"text-16"},"close")))};var ze=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(v.c)({from:"johndoe@creapond.com",to:"",cc:"",bcc:"",subject:"",message:""}),i=r.form,o=r.handleChange,m=ie("mailApp").t;return c.a.createElement("div",{className:"p-24"},c.a.createElement(Me.a,{variant:"contained",color:"primary",className:"w-full",onClick:function(){n(!0)}},m("COMPOSE")),c.a.createElement(Re.a,{open:a,onClose:function(){n(!1)},"aria-labelledby":"form-dialog-title",classes:{paper:"rounded-8"}},c.a.createElement(Ae.a,{position:"static"},c.a.createElement(De.a,{className:"flex w-full"},c.a.createElement(g.a,{variant:"subtitle1",color:"inherit"},"New Message"))),c.a.createElement("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),n(!1)},className:"flex flex-col"},c.a.createElement(Pe.a,{classes:{root:"p-16 pb-0 sm:p-24 sm:pb-0"}},c.a.createElement(Le.a,{className:"mt-8 mb-16",label:"From",id:"from",name:"from",value:i.from,onChange:o,variant:"outlined",fullWidth:!0,disabled:!0}),c.a.createElement(Le.a,{className:"mt-8 mb-16",label:"To",autoFocus:!0,id:"to",name:"to",value:i.to,onChange:o,variant:"outlined",fullWidth:!0,required:!0}),c.a.createElement(Le.a,{className:"mt-8 mb-16",label:"Cc",id:"cc",name:"cc",value:i.cc,onChange:o,variant:"outlined",fullWidth:!0}),c.a.createElement(Le.a,{className:"mt-8 mb-16",label:"Bcc",id:"bcc",name:"bcc",value:i.bcc,onChange:o,variant:"outlined",fullWidth:!0}),c.a.createElement(Le.a,{className:"mt-8 mb-16",label:"Subject",id:"subject",name:"subject",value:i.subject,onChange:o,variant:"outlined",fullWidth:!0}),c.a.createElement(Le.a,{className:"mt-8 mb-16",id:"message",name:"message",onChange:o,value:i.message,label:"Message",type:"text",multiline:!0,rows:5,variant:"outlined",fullWidth:!0}),c.a.createElement("div",{className:"pt-8"},c.a.createElement(He,{fileName:"attachment-2.doc",size:"12 kb"}),c.a.createElement(He,{fileName:"attachment-1.jpg",size:"350 kb"}))),c.a.createElement(Te.a,{className:"justify-between p-8"},c.a.createElement("div",{className:"px-16"},c.a.createElement(Me.a,{variant:"contained",color:"primary",type:"submit"},"Send"),c.a.createElement(b.a,null,c.a.createElement(f.a,null,"attach_file"))),c.a.createElement(b.a,{onClick:function(){n(!1)}},c.a.createElement(f.a,null,"delete"))))))},We=Object(k.b)("mailApp/filters/getFilters",Object(w.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/api/mail-app/filters");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),Fe=Object(k.c)({}),Ue=Fe.getSelectors((function(e){return e.mailApp.filters})),_e=Ue.selectAll,Ve=(Ue.selectById,Object(k.d)({name:"mailApp/filters",initialState:Fe.getInitialState({}),reducers:{},extraReducers:Object(y.a)({},We.fulfilled,Fe.setAll)}).reducer),$e=Object(k.b)("mailApp/folders/getFolders",Object(w.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/api/mail-app/folders");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),Je=Object(k.c)({}),Ye=Je.getSelectors((function(e){return e.mailApp.folders})),qe=Ye.selectAll,Ge=(Ye.selectById,Object(k.d)({name:"mailApp/folders",initialState:Je.getInitialState({}),reducers:{},extraReducers:Object(y.a)({},$e.fulfilled,Je.setAll)}).reducer),Ke=Object(h.a)((function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:"".concat(e.palette.secondary.contrastText,"!important"),pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{fontSize:16,width:16,height:16,marginRight:16}},listSubheader:{paddingLeft:24}}}));var Qe=function(e){var t=Object(i.c)(qe),a=Object(i.c)(T),n=Object(i.c)(_e),r=Ke(),l=ie("mailApp").t;return c.a.createElement(m.a,{animation:"transition.slideUpIn",delay:400},c.a.createElement("div",{className:"flex-auto border-l-1"},c.a.createElement(ze,null),c.a.createElement("div",null,c.a.createElement(we.a,null,c.a.createElement(Ie.a,{className:r.listSubheader,disableSticky:!0},l("FOLDERS")),t.length>0&&t.map((function(e){return c.a.createElement(ke.a,{button:!0,component:Se.a,to:"/apps/mail/".concat(e.handle),key:e.id,activeClassName:"active",className:r.listItem},c.a.createElement(f.a,{className:"list-item-icon",color:"action"},e.icon),c.a.createElement(Ce.a,{primary:e.translate?l(e.translate):e.title,disableTypography:!0}))}))),c.a.createElement(we.a,null,c.a.createElement(Ie.a,{className:r.listSubheader,disableSticky:!0},l("FILTERS")),n.length>0&&n.map((function(e){return c.a.createElement(ke.a,{button:!0,component:Se.a,to:"/apps/mail/filter/".concat(e.handle),activeClassName:"active",className:r.listItem,key:e.id},c.a.createElement(f.a,{className:"list-item-icon",color:"action"},e.icon),c.a.createElement(Ce.a,{primary:e.translate?l(e.translate):e.title,disableTypography:!0}))}))),c.a.createElement(we.a,null,c.a.createElement(Ie.a,{className:r.listSubheader,disableSticky:!0},l("LABELS")),a&&a.map((function(e){return c.a.createElement(ke.a,{button:!0,component:Se.a,to:"/apps/mail/label/".concat(e.handle),key:e.id,className:r.listItem},c.a.createElement(f.a,{className:"list-item-icon",style:{color:e.color},color:"action"},"label"),c.a.createElement(Ce.a,{primary:e.title,disableTypography:!0}))}))))))},Xe=a(1269),Ze={creapond:"johndoe@creapond.com",withinpixels:"admin@bnc.ca"};var et=function(e){var t=Object(l.useState)("creapond"),a=Object(s.a)(t,2),n=a[0],r=a[1],i=ie("mailApp").t;return c.a.createElement("div",{className:"flex flex-col justify-center h-full p-24"},c.a.createElement("div",{className:"flex items-center flex-1"},c.a.createElement(m.a,{animation:"transition.expandIn",delay:300},c.a.createElement(f.a,{className:"text-32"},"mail")),c.a.createElement(m.a,{animation:"transition.slideLeftIn",delay:300},c.a.createElement("span",{className:"text-24 mx-16"},i("APP_TITLE")))),c.a.createElement(m.a,{animation:"transition.slideUpIn",delay:300},c.a.createElement(Le.a,{id:"account-selection",select:!0,label:n,value:n,onChange:function(e){r(e.target.value)},placeholder:"Select Account",margin:"normal"},Object.keys(Ze).map((function(e,t){return c.a.createElement(Xe.a,{key:e,value:e},Ze[e])})))))},tt=a(168),at=a(28),nt=a(1296),rt=a(1525),lt=Object(h.a)((function(e){return{mailItem:{borderBottom:"1px solid  ".concat(e.palette.divider),"&.unread":{background:"rgba(0,0,0,0.03)"},"&.selected":{"&::after":{content:'""',position:"absolute",left:0,display:"block",height:"100%",width:3,backgroundColor:e.palette.primary.main}}},avatar:{backgroundColor:e.palette.primary[500]}}})),ct=Object(o.j)((function(e){var t=Object(i.b)(),a=Object(i.c)((function(e){return e.mailApp.mails.selectedMailIds})),n=Object(i.c)(P),r=Object(o.i)(),l=lt(e),s=rt.compile(e.match.path),m=a.length>0&&void 0!==a.find((function(t){return t===e.mail.id}));return c.a.createElement(ke.a,{dense:!0,button:!0,onClick:function(){return e.history.push(s(Object(D.a)(Object(D.a)({},r),{},{mailId:e.mail.id})))},className:Object(E.default)(l.mailItem,m&&"selected",!e.mail.read&&"unread","py-16 px-0 md:px-8")},c.a.createElement(nt.a,{tabIndex:-1,disableRipple:!0,checked:m,onChange:function(){return t(Oe(e.mail.id))},onClick:function(e){return e.stopPropagation()}}),c.a.createElement("div",{className:"flex flex-1 flex-col relative overflow-hidden"},c.a.createElement("div",{className:"flex items-center justify-between px-16 pb-8"},c.a.createElement("div",{className:"flex items-center"},e.mail.from.avatar?c.a.createElement(d.a,{alt:e.mail.from.name,src:e.mail.from.avatar}):c.a.createElement(d.a,{className:l.avatar},e.mail.from.name[0]),c.a.createElement(g.a,{variant:"subtitle1",className:"mx-8"},e.mail.from.name)),c.a.createElement(g.a,{variant:"subtitle1"},e.mail.time)),c.a.createElement("div",{className:"flex flex-col px-16 py-0"},c.a.createElement(g.a,{className:"truncate"},e.mail.subject),c.a.createElement(g.a,{color:"textSecondary",className:"truncate"},u.a.truncate(e.mail.message.replace(/<(?:.|\n)*?>/gm,""),{length:180}))),c.a.createElement("div",{className:"flex justify-end px-12"},!u.a.isEmpty(n)&&e.mail.labels.map((function(e){return c.a.createElement(O,{className:"mx-2 mt-4",title:n[e].title,color:n[e].color,key:e})})))))}));var it=Object(o.j)((function(e){var t=Object(i.b)(),a=Object(i.c)(be),n=Object(i.c)((function(e){return e.mailApp.mails.searchText})),r=Object(o.i)(),u=Object(l.useState)(null),d=Object(s.a)(u,2),p=d[0],f=d[1],b=ie("mailApp").t;return Object(v.b)((function(){t(me(r))}),[t,r]),Object(l.useEffect)((function(){a&&f(0===n.length?a:at.a.filterArrayByString(a,n))}),[a,n]),p?0===p.length?c.a.createElement(m.a,{delay:100},c.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},c.a.createElement(g.a,{color:"textSecondary",variant:"h5"},b("NO_MESSAGES")))):c.a.createElement(we.a,{className:"p-0"},c.a.createElement(tt.a,{enter:{animation:"transition.slideUpBigIn"}},p.map((function(e){return c.a.createElement(ct,{mail:e,key:e.id})})))):null})),ot=a(597);var st=function(e){var t=Object(i.b)(),a=Object(i.c)((function(e){return e.mailApp.mails.selectedMailIds})),n=Object(i.c)(be),r=Object(i.c)(T),o=Object(i.c)(qe),m=Object(l.useState)({selectMenu:null,foldersMenu:null,labelsMenu:null}),u=Object(s.a)(m,2),d=u[0],p=u[1];function g(e,t){p(Object(D.a)(Object(D.a)({},t),{},Object(y.a)({},t,e.currentTarget)))}function v(e,t){p(Object(D.a)(Object(D.a)({},t),{},Object(y.a)({},t,null)))}return c.a.createElement("div",{className:"flex flex-1 items-center sm:px-8"},c.a.createElement(nt.a,{onChange:function(e){return e.target.checked?t(Ee()):t(xe())},checked:a.length===Object.keys(n).length&&a.length>0,indeterminate:a.length!==Object.keys(n).length&&a.length>0}),c.a.createElement(b.a,{className:"",size:"small","aria-label":"More","aria-owns":d.select?"select-menu":null,"aria-haspopup":"true",onClick:function(e){return g(e,"select")}},c.a.createElement(f.a,null,"arrow_drop_down")),c.a.createElement(ot.a,{id:"select-menu",anchorEl:d.select,open:Boolean(d.select),onClose:function(e){return v(0,"select")}},c.a.createElement(Xe.a,{onClick:function(e){t(Ee()),v(0,"select")}},"All"),c.a.createElement(Xe.a,{onClick:function(e){t(xe()),v(0,"select")}},"None"),c.a.createElement(Xe.a,{onClick:function(e){t(je(["read",!0])),v(0,"select")}},"Read"),c.a.createElement(Xe.a,{onClick:function(e){t(je(["read",!1])),v(0,"select")}},"Unread"),c.a.createElement(Xe.a,{onClick:function(e){t(je(["starred",!0])),v(0,"select")}},"Starred"),c.a.createElement(Xe.a,{onClick:function(e){t(je(["starred",!1])),v(0,"select")}},"Unstarred"),c.a.createElement(Xe.a,{onClick:function(e){t(je(["important",!0])),v(0,"select")}},"Important"),c.a.createElement(Xe.a,{onClick:function(e){t(je(["important",!1])),v(0,"select")}},"Unimportant")),a.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"border-r-1 h-48 w-1 mx-12 my-0"}),c.a.createElement(b.a,{onClick:function(e){return t(ue(4))},"aria-label":"Delete"},c.a.createElement(f.a,null,"delete")),c.a.createElement(b.a,{"aria-label":"More","aria-owns":d.folders?"folders-menu":null,"aria-haspopup":"true",onClick:function(e){return g(e,"folders")}},c.a.createElement(f.a,null,"folder")),c.a.createElement(ot.a,{id:"folders-menu",anchorEl:d.folders,open:Boolean(d.folders),onClose:function(e){return v(0,"folders")}},o.length>0&&o.map((function(e){return c.a.createElement(Xe.a,{onClick:function(a){t(ue(e.id)),v(0,"folders")},key:e.id},e.title)}))),c.a.createElement(b.a,{"aria-label":"More","aria-owns":d.labels?"labels-menu":null,"aria-haspopup":"true",onClick:function(e){return g(e,"labels")}},c.a.createElement(f.a,null,"label")),c.a.createElement(ot.a,{id:"folders-menu",anchorEl:d.labels,open:Boolean(d.labels),onClose:function(e){return v(0,"labels")}},r.length>0&&r.map((function(e){return c.a.createElement(Xe.a,{onClick:function(a){t(de(e.id)),v(0,"labels")},key:e.id},e.title)})))))},mt=a(103),ut=Object(mt.c)({mails:ye,mail:W,folders:Ge,labels:L,filters:Ve});t.default=Object(r.a)("mailApp",ut)((function(e){var t=Object(i.b)(),a=Object(l.useRef)(null),r=Object(o.i)();return Object(l.useEffect)((function(){t(We()),t($e()),t(A())}),[t]),c.a.createElement(n.a,{classes:{root:"w-full",content:"flex flex-col",header:"items-center min-h-72 h-72 sm:h-136 sm:min-h-136"},header:c.a.createElement(Ne,{pageLayout:a}),contentToolbar:r.mailId?c.a.createElement(V,null):c.a.createElement(st,null),content:r.mailId?c.a.createElement(F,null):c.a.createElement(it,null),leftSidebarHeader:c.a.createElement(et,null),leftSidebarContent:c.a.createElement(Qe,null),ref:a,innerScroll:!0})}))}}]);