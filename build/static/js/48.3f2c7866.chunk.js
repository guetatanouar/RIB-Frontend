(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[48],{1306:function(e,a,t){"use strict";t.d(a,"a",(function(){return I}));var n=t(13),r=t(118),s=t(1276),o=t(1285),c=t(1267),l=t(1293),i=t(1294),m=t(2),u=t(0),p=t.n(u),d=t(12),g=t(9),f=t(72),v=t(73),h=t(129),b=t(128),y=t(1209),E=t(614),N=t(1264),A=t(1275),x=t(8),j=t(392),k=t(393),S=t(1307),w=t.n(S),C=Object(y.a)({productionPrefix:"iframe-"}),O=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={ready:!1},e.handleRef=function(a){e.contentDocument=a?a.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(j.a)(Object(g.a)(Object(g.a)({},Object(E.a)()),{},{plugins:[].concat(Object(d.a)(Object(E.a)().plugins),[Object(k.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),p.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(v.a)(t,[{key:"render",value:function(){var e=this.props,a=e.children,t=e.classes,n=e.theme;return p.a.createElement(w.a,{head:this.renderHead(),ref:this.handleRef,className:Object(m.default)(t.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?p.a.createElement(N.b,{jss:this.state.jss,generateClassName:C,sheetsManager:this.state.sheetsManager},p.a.createElement(A.a,{theme:n},p.a.cloneElement(a,{container:this.state.container}))):null)}}]),t}(p.a.Component),R=Object(x.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(O);function T(e){var a=Object(u.useState)(e.currentTabIndex),t=Object(n.a)(a,2),d=t[0],g=t[1],f=e.component,v=e.raw,h=e.iframe,b=e.className;return p.a.createElement(o.a,{className:Object(m.default)(b,"shadow")},p.a.createElement(s.a,{position:"static",color:"default",className:"shadow-0"},p.a.createElement(i.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:d,onChange:function(e,a){g(a)}},f&&p.a.createElement(l.a,{classes:{root:"min-w-64"},icon:p.a.createElement(c.a,null,"remove_red_eye")}),v&&p.a.createElement(l.a,{classes:{root:"min-w-64"},icon:p.a.createElement(c.a,null,"code")}))),p.a.createElement("div",{className:"flex justify-center max-w-full"},p.a.createElement("div",{className:0===d?"flex flex-1 max-w-full":"hidden"},f&&(h?p.a.createElement(R,null,p.a.createElement(f,null)):p.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},p.a.createElement(f,null)))),p.a.createElement("div",{className:1===d?"flex flex-1":"hidden"},v&&p.a.createElement("div",{className:"flex flex-1"},p.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},v.default)))))}T.defaultProps={currentTabIndex:0};var I=T},1783:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return l}));var n=t(0),r=t.n(n),s=t(1265),o=t(1300),c=Object(s.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}}}}));function l(){var e=c();return r.a.createElement("div",{className:e.root},r.a.createElement(o.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),r.a.createElement(o.a,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"}),r.a.createElement(o.a,{alt:"Cindy Baker",src:"/material-ui-static/images/avatar/3.jpg"}))}},1784:function(e,a,t){"use strict";t.r(a),a.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Avatar from \'@material-ui/core/Avatar\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: \'flex\',\n    \'& > *\': {\n      margin: theme.spacing(1),\n    },\n  },\n}));\n\nexport default function ImageAvatars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />\n      <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />\n      <Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />\n    </div>\n  );\n}\n'},1785:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));var n=t(0),r=t.n(n),s=t(1265),o=t(1300),c=t(452),l=t(450),i=Object(s.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(c.a[500]),backgroundColor:c.a[500]},purple:{color:e.palette.getContrastText(l.a[500]),backgroundColor:l.a[500]}}}));function m(){var e=i();return r.a.createElement("div",{className:e.root},r.a.createElement(o.a,null,"H"),r.a.createElement(o.a,{className:e.orange},"N"),r.a.createElement(o.a,{className:e.purple},"OP"))}},1786:function(e,a,t){"use strict";t.r(a),a.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Avatar from '@material-ui/core/Avatar';\nimport { deepOrange, deepPurple } from '@material-ui/core/colors';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n  orange: {\n    color: theme.palette.getContrastText(deepOrange[500]),\n    backgroundColor: deepOrange[500],\n  },\n  purple: {\n    color: theme.palette.getContrastText(deepPurple[500]),\n    backgroundColor: deepPurple[500],\n  },\n}));\n\nexport default function LetterAvatars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Avatar>H</Avatar>\n      <Avatar className={classes.orange}>N</Avatar>\n      <Avatar className={classes.purple}>OP</Avatar>\n    </div>\n  );\n}\n"},1787:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return l}));var n=t(0),r=t.n(n),s=t(1265),o=t(1300),c=Object(s.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}}}));function l(){var e=c();return r.a.createElement("div",{className:e.root},r.a.createElement(o.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg",className:e.small}),r.a.createElement(o.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),r.a.createElement(o.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg",className:e.large}))}},1788:function(e,a,t){"use strict";t.r(a),a.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Avatar from \'@material-ui/core/Avatar\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: \'flex\',\n    \'& > *\': {\n      margin: theme.spacing(1),\n    },\n  },\n  small: {\n    width: theme.spacing(3),\n    height: theme.spacing(3),\n  },\n  large: {\n    width: theme.spacing(7),\n    height: theme.spacing(7),\n  },\n}));\n\nexport default function ImageAvatars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" className={classes.small} />\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" className={classes.large} />\n    </div>\n  );\n}\n'},1789:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var n=t(0),r=t.n(n),s=t(1265),o=t(186),c=t(184),l=t(1300),i=t(1399),m=t.n(i),u=t(1790),p=t.n(u),d=t(1528),g=t.n(d),f=Object(s.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},pink:{color:e.palette.getContrastText(o.a[500]),backgroundColor:o.a[500]},green:{color:"#fff",backgroundColor:c.a[500]}}}));function v(){var e=f();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,null,r.a.createElement(m.a,null)),r.a.createElement(l.a,{className:e.pink},r.a.createElement(p.a,null)),r.a.createElement(l.a,{className:e.green},r.a.createElement(g.a,null)))}},1791:function(e,a,t){"use strict";t.r(a),a.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport { green, pink } from '@material-ui/core/colors';\nimport Avatar from '@material-ui/core/Avatar';\nimport FolderIcon from '@material-ui/icons/Folder';\nimport PageviewIcon from '@material-ui/icons/Pageview';\nimport AssignmentIcon from '@material-ui/icons/Assignment';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n  pink: {\n    color: theme.palette.getContrastText(pink[500]),\n    backgroundColor: pink[500],\n  },\n  green: {\n    color: '#fff',\n    backgroundColor: green[500],\n  },\n}));\n\nexport default function IconAvatars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Avatar>\n        <FolderIcon />\n      </Avatar>\n      <Avatar className={classes.pink}>\n        <PageviewIcon />\n      </Avatar>\n      <Avatar className={classes.green}>\n        <AssignmentIcon />\n      </Avatar>\n    </div>\n  );\n}\n"},1792:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(0),r=t.n(n),s=t(1265),o=t(1300),c=t(452),l=t(184),i=t(1528),m=t.n(i),u=Object(s.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},square:{color:e.palette.getContrastText(c.a[500]),backgroundColor:c.a[500]},rounded:{color:"#fff",backgroundColor:l.a[500]}}}));function p(){var e=u();return r.a.createElement("div",{className:e.root},r.a.createElement(o.a,{variant:"square",className:e.square},"N"),r.a.createElement(o.a,{variant:"rounded",className:e.rounded},r.a.createElement(m.a,null)))}},1793:function(e,a,t){"use strict";t.r(a),a.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Avatar from '@material-ui/core/Avatar';\nimport { deepOrange, green } from '@material-ui/core/colors';\nimport AssignmentIcon from '@material-ui/icons/Assignment';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n  square: {\n    color: theme.palette.getContrastText(deepOrange[500]),\n    backgroundColor: deepOrange[500],\n  },\n  rounded: {\n    color: '#fff',\n    backgroundColor: green[500],\n  },\n}));\n\nexport default function VariantAvatars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Avatar variant=\"square\" className={classes.square}>\n        N\n      </Avatar>\n      <Avatar variant=\"rounded\" className={classes.rounded}>\n        <AssignmentIcon />\n      </Avatar>\n    </div>\n  );\n}\n"},1794:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i}));var n=t(0),r=t.n(n),s=t(1265),o=t(1300),c=t(452),l=Object(s.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(c.a[500]),backgroundColor:c.a[500]}}}));function i(){var e=l();return r.a.createElement("div",{className:e.root},r.a.createElement(o.a,{alt:"Remy Sharp",src:"/broken-image.jpg",className:e.orange},"B"),r.a.createElement(o.a,{alt:"Remy Sharp",src:"/broken-image.jpg",className:e.orange}),r.a.createElement(o.a,{src:"/broken-image.jpg"}))}},1795:function(e,a,t){"use strict";t.r(a),a.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Avatar from '@material-ui/core/Avatar';\nimport { deepOrange } from '@material-ui/core/colors';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n  orange: {\n    color: theme.palette.getContrastText(deepOrange[500]),\n    backgroundColor: deepOrange[500],\n  },\n}));\n\nexport default function FallbackAvatars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Avatar alt=\"Remy Sharp\" src=\"/broken-image.jpg\" className={classes.orange}>\n        B\n      </Avatar>\n      <Avatar alt=\"Remy Sharp\" src=\"/broken-image.jpg\" className={classes.orange} />\n      <Avatar src=\"/broken-image.jpg\" />\n    </div>\n  );\n}\n"},1796:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return c}));var n=t(0),r=t.n(n),s=t(1300),o=t(2553);function c(){return r.a.createElement(o.a,{max:4},r.a.createElement(s.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),r.a.createElement(s.a,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"}),r.a.createElement(s.a,{alt:"Cindy Baker",src:"/material-ui-static/images/avatar/3.jpg"}),r.a.createElement(s.a,{alt:"Agnes Walker",src:"/material-ui-static/images/avatar/4.jpg"}),r.a.createElement(s.a,{alt:"Trevor Henderson",src:"/material-ui-static/images/avatar/5.jpg"}))}},1799:function(e,a,t){"use strict";t.r(a),a.default='import React from \'react\';\nimport Avatar from \'@material-ui/core/Avatar\';\nimport AvatarGroup from \'@material-ui/lab/AvatarGroup\';\n\nexport default function GroupAvatars() {\n  return (\n    <AvatarGroup max={4}>\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />\n      <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />\n      <Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />\n      <Avatar alt="Agnes Walker" src="/material-ui-static/images/avatar/4.jpg" />\n      <Avatar alt="Trevor Henderson" src="/material-ui-static/images/avatar/5.jpg" />\n    </AvatarGroup>\n  );\n}\n'},1800:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(0),r=t.n(n),s=t(1463),o=t(1300),c=t(8),l=t(1265),i=Object(c.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(s.a),m=Object(c.a)((function(e){return{root:{width:22,height:22,border:"2px solid ".concat(e.palette.background.paper)}}}))(o.a),u=Object(l.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}}}}));function p(){var e=u();return r.a.createElement("div",{className:e.root},r.a.createElement(i,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},r.a.createElement(o.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"})),r.a.createElement(s.a,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:r.a.createElement(m,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"})},r.a.createElement(o.a,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"})))}},1801:function(e,a,t){"use strict";t.r(a),a.default="import React from 'react';\nimport Badge from '@material-ui/core/Badge';\nimport Avatar from '@material-ui/core/Avatar';\nimport { makeStyles, withStyles } from '@material-ui/core/styles';\n\nconst StyledBadge = withStyles((theme) => ({\n  badge: {\n    backgroundColor: '#44b700',\n    color: '#44b700',\n    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,\n    '&::after': {\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      width: '100%',\n      height: '100%',\n      borderRadius: '50%',\n      animation: '$ripple 1.2s infinite ease-in-out',\n      border: '1px solid currentColor',\n      content: '\"\"',\n    },\n  },\n  '@keyframes ripple': {\n    '0%': {\n      transform: 'scale(.8)',\n      opacity: 1,\n    },\n    '100%': {\n      transform: 'scale(2.4)',\n      opacity: 0,\n    },\n  },\n}))(Badge);\n\nconst SmallAvatar = withStyles((theme) => ({\n  root: {\n    width: 22,\n    height: 22,\n    border: `2px solid ${theme.palette.background.paper}`,\n  },\n}))(Avatar);\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n}));\n\nexport default function BadgeAvatars() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <StyledBadge\n        overlap=\"circle\"\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'right',\n        }}\n        variant=\"dot\"\n      >\n        <Avatar alt=\"Remy Sharp\" src=\"/material-ui-static/images/avatar/1.jpg\" />\n      </StyledBadge>\n      <Badge\n        overlap=\"circle\"\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'right',\n        }}\n        badgeContent={<SmallAvatar alt=\"Remy Sharp\" src=\"/material-ui-static/images/avatar/1.jpg\" />}\n      >\n        <Avatar alt=\"Travis Howard\" src=\"/material-ui-static/images/avatar/2.jpg\" />\n      </Badge>\n    </div>\n  );\n}\n"},2552:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(1306),o=(t(118),t(1274)),c=t(1267),l=t(197),i=t(1265),m=Object(i.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));a.default=function(e){return m(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},r.a.createElement(o.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/avatars",target:"_blank",role:"button"},r.a.createElement(c.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),r.a.createElement(l.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Avatar"),r.a.createElement(l.a,{className:"description"},"Avatars are found throughout material design with uses in everything from tables to dialog menus."),r.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Image avatars"),r.a.createElement(l.a,{className:"mb-16",component:"div"},"Image avatars can be created by passing standard ",r.a.createElement("code",null,"img")," props ",r.a.createElement("code",null,"src")," or ",r.a.createElement("code",null,"srcSet")," to the component."),r.a.createElement(l.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:t(1783).default,raw:t(1784)})),r.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Letter avatars"),r.a.createElement(l.a,{className:"mb-16",component:"div"},"Avatars containing simple characters can be created by passing a string as ",r.a.createElement("code",null,"children"),"."),r.a.createElement(l.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:t(1785).default,raw:t(1786)})),r.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Sizes"),r.a.createElement(l.a,{className:"mb-16",component:"div"},"You can change the size of the avatar with the ",r.a.createElement("code",null,"height")," and ",r.a.createElement("code",null,"width")," CSS properties."),r.a.createElement(l.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:t(1787).default,raw:t(1788)})),r.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Icon avatars"),r.a.createElement(l.a,{className:"mb-16",component:"div"},"Icon avatars are created by passing an icon as ",r.a.createElement("code",null,"children"),"."),r.a.createElement(l.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:t(1789).default,raw:t(1791)})),r.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Variants"),r.a.createElement(l.a,{className:"mb-16",component:"div"},"If you need square or rounded avatars, use the ",r.a.createElement("code",null,"variant")," prop."),r.a.createElement(l.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:t(1792).default,raw:t(1793)})),r.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Fallbacks"),r.a.createElement(l.a,{className:"mb-16",component:"div"},"If there is an error loading the avatar image, the component falls back to an alternative in the following order:"),r.a.createElement("ul",null,r.a.createElement("li",null,"the provided children"),r.a.createElement("li",null,"the first letter of the ",r.a.createElement("code",null,"alt")," text"),r.a.createElement("li",null,"a generic avatar icon")),r.a.createElement(l.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:t(1794).default,raw:t(1795)})),r.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Grouped"),r.a.createElement(l.a,{className:"mb-16",component:"div"},r.a.createElement("code",null,"AvatarGroup")," renders its children as a stack."),r.a.createElement(l.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:t(1796).default,raw:t(1799)})),r.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"With badge"),r.a.createElement(l.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:t(1800).default,raw:t(1801)})))}}}]);