(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[111],{1340:function(e,a,t){"use strict";var n=t(1),r=t(5),c=t(0),l=(t(4),t(2)),o=t(8),i=c.forwardRef((function(e,a){var t=e.classes,o=e.className,i=e.dividers,s=void 0!==i&&i,m=Object(r.a)(e,["classes","className","dividers"]);return c.createElement("div",Object(n.a)({className:Object(l.default)(t.root,o,s&&t.dividers),ref:a},m))}));a.a=Object(o.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(i)},1344:function(e,a,t){"use strict";var n=t(1),r=t(5),c=t(0),l=(t(4),t(2)),o=t(8),i=c.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,i=e.classes,s=e.className,m=Object(r.a)(e,["disableSpacing","classes","className"]);return c.createElement("div",Object(n.a)({className:Object(l.default)(i.root,s,!o&&i.spacing),ref:a},m))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(i)},1390:function(e,a,t){"use strict";var n=t(1),r=t(5),c=t(0),l=(t(4),t(2)),o=t(8),i=t(197),s=c.forwardRef((function(e,a){var t=e.children,o=e.classes,s=e.className,m=e.disableTypography,d=void 0!==m&&m,u=Object(r.a)(e,["children","classes","className","disableTypography"]);return c.createElement("div",Object(n.a)({className:Object(l.default)(o.root,s),ref:a},u),d?t:c.createElement(i.a,{component:"h2",variant:"h6"},t))}));a.a=Object(o.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},1427:function(e,a,t){"use strict";var n=t(1),r=t(0),c=(t(4),t(8)),l=t(197),o=r.forwardRef((function(e,a){return r.createElement(l.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:a},e))}));a.a=Object(c.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(o)},2653:function(e,a,t){"use strict";t.r(a);var n=t(9),r=t(13),c=t(107),l=t(168),o=t(1274),i=t(1285),s=t(1262),m=t(1344),d=t(1340),u=t(1427),p=t(1390),f=t(1267),b=t(1218),x=t(1219),v=t(1288),j=t(1280),E=t(1223),g=t(1265),O=t(197),y=t(50),w=t.n(y),h=t(2),N=t(0),k=t.n(N),C=k.a.forwardRef((function(e,a){return k.a.createElement(E.a,Object.assign({direction:"up",ref:a},e))})),S=Object(g.a)((function(e){return{header:{background:"linear-gradient(to left, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),color:e.palette.primary.contrastText}}}));a.default=function(){var e=S(),a=Object(N.useState)([]),t=Object(r.a)(a,2),E=t[0],g=t[1],y=Object(N.useState)({open:!1,title:null,content:null}),T=Object(r.a)(y,2),M=T[0],R=T[1];return Object(N.useEffect)((function(){w.a.get("/api/knowledge-base").then((function(e){g(e.data)}))}),[]),k.a.createElement("div",{className:"w-full"},k.a.createElement("div",{className:Object(h.default)(e.header,"flex flex-col items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-360")},k.a.createElement(c.a,{animation:"transition.slideUpIn",duration:400,delay:100},k.a.createElement(O.a,{color:"inherit",className:"text-36 sm:text-56 font-light"},"How can we help?")),k.a.createElement(c.a,{duration:400,delay:600},k.a.createElement(O.a,{variant:"subtitle1",color:"inherit",className:"opacity-75 mt-16 mx-auto max-w-512"},"Welcome to our knowledge base"))),k.a.createElement("div",null,Object(N.useMemo)((function(){return k.a.createElement(l.a,{enter:{animation:"transition.slideUpBigIn"},className:"flex flex-wrap justify-center max-w-xl w-full mx-auto px-16 sm:px-24 py-32"},E.map((function(e){return k.a.createElement("div",{className:"max-w-md w-full max-w-512 pb-24 md:w-1/2 md:p-16",key:e.id},k.a.createElement(i.a,{className:"rounded-8 shadow"},k.a.createElement(b.a,{component:"nav",className:"p-0"},k.a.createElement(O.a,{className:"font-bold pl-32 py-16 text-16"},e.title),e.featuredArticles.map((function(e,a){return k.a.createElement(x.a,{key:e.id,onClick:function(){return a=e,void R(Object(n.a)({open:!0},a));var a},className:"pl-32 border-b-1 border-solid",button:!0},k.a.createElement(v.a,{className:"min-w-40"},k.a.createElement(f.a,{className:"text-20"},"import_contacts")),k.a.createElement(j.a,{primary:e.title}))}))),k.a.createElement(o.a,{className:"pl-32 w-full justify-start my-8 font-500",color:"secondary"},"See all articles (".concat(e.articlesCount,")"))))})))}),[E])),Object(N.useMemo)((function(){function e(){R(Object(n.a)(Object(n.a)({},M),{},{open:!1}))}return k.a.createElement(s.a,{open:M.open,onClose:e,"aria-labelledby":"knowledge-base-document",TransitionComponent:C},k.a.createElement(p.a,null,M.title),k.a.createElement(d.a,null,k.a.createElement(u.a,{dangerouslySetInnerHTML:{__html:M.content}})),k.a.createElement(m.a,null,k.a.createElement(o.a,{onClick:e,color:"primary"},"CLOSE")))}),[M]))}}}]);