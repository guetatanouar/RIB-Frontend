(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[47],{1306:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var a=n(13),r=n(118),s=n(1276),i=n(1285),c=n(1267),o=n(1293),l=n(1294),m=n(2),u=n(0),d=n.n(u),h=n(12),f=n(9),p=n(72),v=n(73),E=n(129),y=n(128),b=n(1209),g=n(614),A=n(1264),T=n(1275),k=n(8),w=n(392),N=n(393),S=n(1307),x=n.n(S),j=Object(b.a)({productionPrefix:"iframe-"}),C=function(e){Object(E.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(w.a)(Object(f.a)(Object(f.a)({},Object(g.a)()),{},{plugins:[].concat(Object(h.a)(Object(g.a)().plugins),[Object(N.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return d.a.createElement(x.a,{head:this.renderHead(),ref:this.handleRef,className:Object(m.default)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(A.b,{jss:this.state.jss,generateClassName:j,sheetsManager:this.state.sheetsManager},d.a.createElement(T.a,{theme:a},d.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(d.a.Component),O=Object(k.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(C);function I(e){var t=Object(u.useState)(e.currentTabIndex),n=Object(a.a)(t,2),h=n[0],f=n[1],p=e.component,v=e.raw,E=e.iframe,y=e.className;return d.a.createElement(i.a,{className:Object(m.default)(y,"shadow")},d.a.createElement(s.a,{position:"static",color:"default",className:"shadow-0"},d.a.createElement(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:h,onChange:function(e,t){f(t)}},p&&d.a.createElement(o.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"remove_red_eye")}),v&&d.a.createElement(o.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center max-w-full"},d.a.createElement("div",{className:0===h?"flex flex-1 max-w-full":"hidden"},p&&(E?d.a.createElement(O,null,d.a.createElement(p,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},d.a.createElement(p,null)))),d.a.createElement("div",{className:1===h?"flex flex-1":"hidden"},v&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},v.default)))))}I.defaultProps={currentTabIndex:0};var R=I},1697:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n(0),r=n.n(a),s=n(1265),i=n(2492),c=Object(s.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function o(){var e=c();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{severity:"error"},"This is an error alert \u2014 check it out!"),r.a.createElement(i.a,{severity:"warning"},"This is a warning alert \u2014 check it out!"),r.a.createElement(i.a,{severity:"info"},"This is an info alert \u2014 check it out!"),r.a.createElement(i.a,{severity:"success"},"This is a success alert \u2014 check it out!"))}},1698:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Alert from '@material-ui/lab/Alert';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: '100%',\n    '& > * + *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function SimpleAlerts() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Alert severity=\"error\">This is an error alert \u2014 check it out!</Alert>\n      <Alert severity=\"warning\">This is a warning alert \u2014 check it out!</Alert>\n      <Alert severity=\"info\">This is an info alert \u2014 check it out!</Alert>\n      <Alert severity=\"success\">This is a success alert \u2014 check it out!</Alert>\n    </div>\n  );\n}\n"},1699:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(0),r=n.n(a),s=n(1265),i=n(2492),c=n(2547),o=Object(s.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function l(){var e=o();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{severity:"error"},r.a.createElement(c.a,null,"Error"),"This is an error alert \u2014 ",r.a.createElement("strong",null,"check it out!")),r.a.createElement(i.a,{severity:"warning"},r.a.createElement(c.a,null,"Warning"),"This is a warning alert \u2014 ",r.a.createElement("strong",null,"check it out!")),r.a.createElement(i.a,{severity:"info"},r.a.createElement(c.a,null,"Info"),"This is an info alert \u2014 ",r.a.createElement("strong",null,"check it out!")),r.a.createElement(i.a,{severity:"success"},r.a.createElement(c.a,null,"Success"),"This is a success alert \u2014 ",r.a.createElement("strong",null,"check it out!")))}},1700:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport { Alert, AlertTitle } from '@material-ui/lab';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: '100%',\n    '& > * + *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function DescriptionAlerts() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Alert severity=\"error\">\n        <AlertTitle>Error</AlertTitle>\n        This is an error alert \u2014 <strong>check it out!</strong>\n      </Alert>\n      <Alert severity=\"warning\">\n        <AlertTitle>Warning</AlertTitle>\n        This is a warning alert \u2014 <strong>check it out!</strong>\n      </Alert>\n      <Alert severity=\"info\">\n        <AlertTitle>Info</AlertTitle>\n        This is an info alert \u2014 <strong>check it out!</strong>\n      </Alert>\n      <Alert severity=\"success\">\n        <AlertTitle>Success</AlertTitle>\n        This is a success alert \u2014 <strong>check it out!</strong>\n      </Alert>\n    </div>\n  );\n}\n"},1701:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(0),r=n.n(a),s=n(1265),i=n(2492),c=n(1274),o=Object(s.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function l(){var e=o();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{onClose:function(){}},"This is a success alert \u2014 check it out!"),r.a.createElement(i.a,{action:r.a.createElement(c.a,{color:"inherit",size:"small"},"UNDO")},"This is a success alert \u2014 check it out!"))}},1702:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Alert from '@material-ui/lab/Alert';\nimport Button from '@material-ui/core/Button';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: '100%',\n    '& > * + *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function ActionAlerts() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Alert onClose={() => {}}>This is a success alert \u2014 check it out!</Alert>\n      <Alert\n        action={\n          <Button color=\"inherit\" size=\"small\">\n            UNDO\n          </Button>\n        }\n      >\n        This is a success alert \u2014 check it out!\n      </Alert>\n    </div>\n  );\n}\n"},1703:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(13),r=n(0),s=n.n(r),i=n(1265),c=n(2492),o=n(1213),l=n(1282),m=n(1274),u=n(1347),d=n.n(u),h=Object(i.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function f(){var e=h(),t=s.a.useState(!0),n=Object(a.a)(t,2),r=n[0],i=n[1];return s.a.createElement("div",{className:e.root},s.a.createElement(l.a,{in:r},s.a.createElement(c.a,{action:s.a.createElement(o.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){i(!1)}},s.a.createElement(d.a,{fontSize:"inherit"}))},"Close me!")),s.a.createElement(m.a,{disabled:r,variant:"outlined",onClick:function(){i(!0)}},"Re-open"))}},1704:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Alert from '@material-ui/lab/Alert';\nimport IconButton from '@material-ui/core/IconButton';\nimport Collapse from '@material-ui/core/Collapse';\nimport Button from '@material-ui/core/Button';\nimport CloseIcon from '@material-ui/icons/Close';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: '100%',\n    '& > * + *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function TransitionAlerts() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(true);\n\n  return (\n    <div className={classes.root}>\n      <Collapse in={open}>\n        <Alert\n          action={\n            <IconButton\n              aria-label=\"close\"\n              color=\"inherit\"\n              size=\"small\"\n              onClick={() => {\n                setOpen(false);\n              }}\n            >\n              <CloseIcon fontSize=\"inherit\" />\n            </IconButton>\n          }\n        >\n          Close me!\n        </Alert>\n      </Collapse>\n      <Button\n        disabled={open}\n        variant=\"outlined\"\n        onClick={() => {\n          setOpen(true);\n        }}\n      >\n        Re-open\n      </Button>\n    </div>\n  );\n}\n"},1705:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(0),r=n.n(a),s=n(1265),i=n(2492),c=n(1376),o=n.n(c),l=n(1706),m=n.n(l),u=Object(s.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function d(){var e=u();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{icon:r.a.createElement(o.a,{fontSize:"inherit"}),severity:"success"},"This is a success alert \u2014 check it out!"),r.a.createElement(i.a,{iconMapping:{success:r.a.createElement(m.a,{fontSize:"inherit"})}},"This is a success alert \u2014 check it out!"),r.a.createElement(i.a,{icon:!1,severity:"success"},"This is a success alert \u2014 check it out!"))}},1707:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Alert from '@material-ui/lab/Alert';\nimport CheckIcon from '@material-ui/icons/Check';\nimport CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: '100%',\n    '& > * + *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function IconAlerts() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Alert icon={<CheckIcon fontSize=\"inherit\" />} severity=\"success\">\n        This is a success alert \u2014 check it out!\n      </Alert>\n      <Alert iconMapping={{ success: <CheckCircleOutlineIcon fontSize=\"inherit\" /> }}>\n        This is a success alert \u2014 check it out!\n      </Alert>\n      <Alert icon={false} severity=\"success\">\n        This is a success alert \u2014 check it out!\n      </Alert>\n    </div>\n  );\n}\n"},1708:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n(0),r=n.n(a),s=n(1265),i=n(2492),c=Object(s.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function o(){var e=c();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{variant:"outlined",severity:"error"},"This is an error alert \u2014 check it out!"),r.a.createElement(i.a,{variant:"outlined",severity:"warning"},"This is a warning alert \u2014 check it out!"),r.a.createElement(i.a,{variant:"outlined",severity:"info"},"This is an info alert \u2014 check it out!"),r.a.createElement(i.a,{variant:"outlined",severity:"success"},"This is a success alert \u2014 check it out!"))}},1709:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Alert from \'@material-ui/lab/Alert\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: \'100%\',\n    \'& > * + *\': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function SimpleAlerts() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Alert variant="outlined" severity="error">\n        This is an error alert \u2014 check it out!\n      </Alert>\n      <Alert variant="outlined" severity="warning">\n        This is a warning alert \u2014 check it out!\n      </Alert>\n      <Alert variant="outlined" severity="info">\n        This is an info alert \u2014 check it out!\n      </Alert>\n      <Alert variant="outlined" severity="success">\n        This is a success alert \u2014 check it out!\n      </Alert>\n    </div>\n  );\n}\n'},1710:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n(0),r=n.n(a),s=n(1265),i=n(2492),c=Object(s.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function o(){var e=c();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{variant:"filled",severity:"error"},"This is an error alert \u2014 check it out!"),r.a.createElement(i.a,{variant:"filled",severity:"warning"},"This is a warning alert \u2014 check it out!"),r.a.createElement(i.a,{variant:"filled",severity:"info"},"This is an info alert \u2014 check it out!"),r.a.createElement(i.a,{variant:"filled",severity:"success"},"This is a success alert \u2014 check it out!"))}},1711:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Alert from \'@material-ui/lab/Alert\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: \'100%\',\n    \'& > * + *\': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function SimpleAlerts() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Alert variant="filled" severity="error">\n        This is an error alert \u2014 check it out!\n      </Alert>\n      <Alert variant="filled" severity="warning">\n        This is a warning alert \u2014 check it out!\n      </Alert>\n      <Alert variant="filled" severity="info">\n        This is an info alert \u2014 check it out!\n      </Alert>\n      <Alert variant="filled" severity="success">\n        This is a success alert \u2014 check it out!\n      </Alert>\n    </div>\n  );\n}\n'},1712:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n(0),r=n.n(a),s=n(1265),i=n(2492),c=Object(s.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function o(){var e=c();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{severity:"success",color:"info"},"This is a success alert \u2014 check it out!"))}},1713:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Alert from '@material-ui/lab/Alert';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: '100%',\n    '& > * + *': {\n      marginTop: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function ColorAlerts() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Alert severity=\"success\" color=\"info\">\n        This is a success alert \u2014 check it out!\n      </Alert>\n    </div>\n  );\n}\n"},2546:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(1306),i=(n(118),n(1274)),c=n(1267),o=n(197),l=n(1265),m=Object(l.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return m(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},r.a.createElement(i.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/alert",target:"_blank",role:"button"},r.a.createElement(c.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),r.a.createElement(o.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Alert"),r.a.createElement(o.a,{className:"description"},"An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement("strong",null,"Note:")," This component is not documented in the ",r.a.createElement("a",{href:"https://material.io/"},"Material Design guidelines"),", but Material-UI supports it."),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple alerts"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"The alert offers four severity levels that set a distinctive icon and color."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:n(1697).default,raw:n(1698)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Description"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"You can use the ",r.a.createElement("code",null,"AlertTitle")," component to display a formatted title above the content."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:n(1699).default,raw:n(1700)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Actions"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"An alert can have an action, such as a close or undo button. It is rendered after the message, at the end of the alert."),r.a.createElement(o.a,{className:"mb-16",component:"div"},"If an ",r.a.createElement("code",null,"onClose")," callback is provided and no ",r.a.createElement("code",null,"action")," prop is set, a close icon is displayed. The ",r.a.createElement("code",null,"action")," prop can be used to provide an alternative action, for example using a Button or IconButton."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:n(1701).default,raw:n(1702)})),r.a.createElement(o.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Transition"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"You can use a ",r.a.createElement("a",{href:"/components/transitions/"},"transition component")," such as ",r.a.createElement("code",null,"Collapse")," to transition the appearance of the alert."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:n(1703).default,raw:n(1704)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Icons"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"The ",r.a.createElement("code",null,"icon")," prop allows you to add an icon to the beginning of the alert component. This will override the default icon for the specified severity."),r.a.createElement(o.a,{className:"mb-16",component:"div"},"You can change the default severity to icon mapping with the ",r.a.createElement("code",null,"iconMapping")," prop. This can be defined globally using ",r.a.createElement("a",{href:"/customization/globals/#default-props"},"theme customization"),"."),r.a.createElement(o.a,{className:"mb-16",component:"div"},"Setting the icon prop to false will remove the icon altogether."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:n(1705).default,raw:n(1707)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Variants"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"Two additional variants are available \u2013 outlined, and filled:"),r.a.createElement(o.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Outlined"),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:n(1708).default,raw:n(1709)})),r.a.createElement(o.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Filled"),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:n(1710).default,raw:n(1711)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Toast"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"You can use the Snackbar to ",r.a.createElement("a",{href:"/components/snackbars/#customized-snackbars"},"display a toast")," with the Alert."),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Color"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"The ",r.a.createElement("code",null,"color")," prop will override the default color for the specified severity."),r.a.createElement(o.a,{className:"mb-16",component:"div"},r.a.createElement(s.a,{className:"my-24",iframe:!1,component:n(1712).default,raw:n(1713)})),r.a.createElement(o.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"(WAI-ARIA: ",r.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-practices/#alert"},"https://www.w3.org/TR/wai-aria-practices/#alert"),")"),r.a.createElement(o.a,{className:"mb-16",component:"div"},"When the component is dynamically displayed, the content is automatically announced by most screen readers. At this time, screen readers do not inform users of alerts that are present when the page loads."),r.a.createElement(o.a,{className:"mb-16",component:"div"},"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (for example the visible text), or is included through alternative means, such as additional hidden text."),r.a.createElement(o.a,{className:"mb-16",component:"div"},"Actions must have a tab index of 0 so that they can be reached by keyboard-only users."))}}}]);