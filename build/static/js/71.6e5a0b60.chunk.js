(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[71],{1306:function(e,n,a){"use strict";a.d(n,"a",(function(){return k}));var t=a(13),r=a(118),o=a(1276),i=a(1285),l=a(1267),c=a(1293),s=a(1294),m=a(2),d=a(0),u=a.n(d),b=a(12),p=a(9),f=a(72),h=a(73),v=a(129),g=a(128),E=a(1209),x=a(614),y=a(1264),N=a(1275),j=a(8),I=a(392),O=a(393),w=a(1307),T=a.n(w),F=Object(E.a)({productionPrefix:"iframe-"}),A=function(e){Object(v.a)(a,e);var n=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={ready:!1},e.handleRef=function(n){e.contentDocument=n?n.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(I.a)(Object(p.a)(Object(p.a)({},Object(x.a)()),{},{plugins:[].concat(Object(b.a)(Object(x.a)().plugins),[Object(O.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),u.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,n=e.children,a=e.classes,t=e.theme;return u.a.createElement(T.a,{head:this.renderHead(),ref:this.handleRef,className:Object(m.default)(a.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?u.a.createElement(y.b,{jss:this.state.jss,generateClassName:F,sheetsManager:this.state.sheetsManager},u.a.createElement(N.a,{theme:t},u.a.cloneElement(n,{container:this.state.container}))):null)}}]),a}(u.a.Component),C=Object(j.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(A);function S(e){var n=Object(d.useState)(e.currentTabIndex),a=Object(t.a)(n,2),b=a[0],p=a[1],f=e.component,h=e.raw,v=e.iframe,g=e.className;return u.a.createElement(i.a,{className:Object(m.default)(g,"shadow")},u.a.createElement(o.a,{position:"static",color:"default",className:"shadow-0"},u.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:b,onChange:function(e,n){p(n)}},f&&u.a.createElement(c.a,{classes:{root:"min-w-64"},icon:u.a.createElement(l.a,null,"remove_red_eye")}),h&&u.a.createElement(c.a,{classes:{root:"min-w-64"},icon:u.a.createElement(l.a,null,"code")}))),u.a.createElement("div",{className:"flex justify-center max-w-full"},u.a.createElement("div",{className:0===b?"flex flex-1 max-w-full":"hidden"},f&&(v?u.a.createElement(C,null,u.a.createElement(f,null)):u.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},u.a.createElement(f,null)))),u.a.createElement("div",{className:1===b?"flex flex-1":"hidden"},h&&u.a.createElement("div",{className:"flex flex-1"},u.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}S.defaultProps={currentTabIndex:0};var k=S},1336:function(e,n,a){"use strict";var t=a(615),r=a(1303);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(a(0)),i=(0,t(a(1304)).default)(o.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.default=i},1337:function(e,n,a){"use strict";var t=a(615),r=a(1303);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(a(0)),i=(0,t(a(1304)).default)(o.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");n.default=i},1466:function(e,n,a){"use strict";var t=a(1),r=a(59),o=a(5),i=a(0),l=(a(4),a(301)),c=a(55),s=a(39),m=a(68),d=a(24),u={entering:{transform:"none"},entered:{transform:"none"}},b={enter:c.b.enteringScreen,exit:c.b.leavingScreen},p=i.forwardRef((function(e,n){var a=e.children,c=e.disableStrictModeCompat,p=void 0!==c&&c,f=e.in,h=e.onEnter,v=e.onEntered,g=e.onEntering,E=e.onExit,x=e.onExited,y=e.onExiting,N=e.style,j=e.timeout,I=void 0===j?b:j,O=e.TransitionComponent,w=void 0===O?l.a:O,T=Object(o.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),F=Object(s.a)(),A=F.unstable_strictMode&&!p,C=i.useRef(null),S=Object(d.a)(a.ref,n),k=Object(d.a)(A?C:void 0,S),P=function(e){return function(n,a){if(e){var t=A?[C.current,n]:[n,a],o=Object(r.a)(t,2),i=o[0],l=o[1];void 0===l?e(i):e(i,l)}}},M=P(g),R=P((function(e,n){Object(m.b)(e);var a=Object(m.a)({style:N,timeout:I},{mode:"enter"});e.style.webkitTransition=F.transitions.create("transform",a),e.style.transition=F.transitions.create("transform",a),h&&h(e,n)})),z=P(v),B=P(y),D=P((function(e){var n=Object(m.a)({style:N,timeout:I},{mode:"exit"});e.style.webkitTransition=F.transitions.create("transform",n),e.style.transition=F.transitions.create("transform",n),E&&E(e)})),_=P(x);return i.createElement(w,Object(t.a)({appear:!0,in:f,nodeRef:A?C:void 0,onEnter:R,onEntered:z,onEntering:M,onExit:D,onExited:_,onExiting:B,timeout:I},T),(function(e,n){return i.cloneElement(a,Object(t.a)({style:Object(t.a)({transform:"scale(0)",visibility:"exited"!==e||f?void 0:"hidden"},u[e],N,a.props.style),ref:k},n))}))}));n.a=p},1535:function(e,n,a){"use strict";var t=a(615),r=a(1303);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(a(0)),i=(0,t(a(1304)).default)(o.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.default=i},1536:function(e,n,a){"use strict";var t=a(615),r=a(1303);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(a(0)),i=(0,t(a(1304)).default)(o.createElement("path",{d:"M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation");n.default=i},1994:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return h}));var t=a(0),r=a.n(t),o=a(1265),i=a(1278),l=a(1336),c=a.n(l),s=a(1535),m=a.n(s),d=a(1337),u=a.n(d),b=a(1536),p=a.n(b),f=Object(o.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)}}}));function h(){var e=f();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{color:"primary","aria-label":"add"},r.a.createElement(c.a,null)),r.a.createElement(i.a,{color:"secondary","aria-label":"edit"},r.a.createElement(m.a,null)),r.a.createElement(i.a,{variant:"extended"},r.a.createElement(p.a,{className:e.extendedIcon}),"Navigate"),r.a.createElement(i.a,{disabled:!0,"aria-label":"like"},r.a.createElement(u.a,null)))}},1995:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Fab from '@material-ui/core/Fab';\nimport AddIcon from '@material-ui/icons/Add';\nimport EditIcon from '@material-ui/icons/Edit';\nimport FavoriteIcon from '@material-ui/icons/Favorite';\nimport NavigationIcon from '@material-ui/icons/Navigation';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n  extendedIcon: {\n    marginRight: theme.spacing(1),\n  },\n}));\n\nexport default function FloatingActionButtons() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Fab color=\"primary\" aria-label=\"add\">\n        <AddIcon />\n      </Fab>\n      <Fab color=\"secondary\" aria-label=\"edit\">\n        <EditIcon />\n      </Fab>\n      <Fab variant=\"extended\">\n        <NavigationIcon className={classes.extendedIcon} />\n        Navigate\n      </Fab>\n      <Fab disabled aria-label=\"like\">\n        <FavoriteIcon />\n      </Fab>\n    </div>\n  );\n}\n"},1996:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return u}));var t=a(0),r=a.n(t),o=a(1265),i=a(1278),l=a(1336),c=a.n(l),s=a(1536),m=a.n(s),d=Object(o.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}}));function u(){var e=d();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(i.a,{size:"small",color:"secondary","aria-label":"add",className:e.margin},r.a.createElement(c.a,null)),r.a.createElement(i.a,{size:"medium",color:"secondary","aria-label":"add",className:e.margin},r.a.createElement(c.a,null)),r.a.createElement(i.a,{color:"secondary","aria-label":"add",className:e.margin},r.a.createElement(c.a,null))),r.a.createElement("div",null,r.a.createElement(i.a,{variant:"extended",size:"small",color:"primary","aria-label":"add",className:e.margin},r.a.createElement(m.a,{className:e.extendedIcon}),"Extended"),r.a.createElement(i.a,{variant:"extended",size:"medium",color:"primary","aria-label":"add",className:e.margin},r.a.createElement(m.a,{className:e.extendedIcon}),"Extended"),r.a.createElement(i.a,{variant:"extended",color:"primary","aria-label":"add",className:e.margin},r.a.createElement(m.a,{className:e.extendedIcon}),"Extended")))}},1997:function(e,n,a){"use strict";a.r(n),n.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Fab from \'@material-ui/core/Fab\';\nimport AddIcon from \'@material-ui/icons/Add\';\nimport NavigationIcon from \'@material-ui/icons/Navigation\';\n\nconst useStyles = makeStyles((theme) => ({\n  margin: {\n    margin: theme.spacing(1),\n  },\n  extendedIcon: {\n    marginRight: theme.spacing(1),\n  },\n}));\n\nexport default function FloatingActionButtonSize() {\n  const classes = useStyles();\n\n  return (\n    <div>\n      <div>\n        <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>\n          <AddIcon />\n        </Fab>\n        <Fab size="medium" color="secondary" aria-label="add" className={classes.margin}>\n          <AddIcon />\n        </Fab>\n        <Fab color="secondary" aria-label="add" className={classes.margin}>\n          <AddIcon />\n        </Fab>\n      </div>\n      <div>\n        <Fab\n          variant="extended"\n          size="small"\n          color="primary"\n          aria-label="add"\n          className={classes.margin}\n        >\n          <NavigationIcon className={classes.extendedIcon} />\n          Extended\n        </Fab>\n        <Fab\n          variant="extended"\n          size="medium"\n          color="primary"\n          aria-label="add"\n          className={classes.margin}\n        >\n          <NavigationIcon className={classes.extendedIcon} />\n          Extended\n        </Fab>\n        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>\n          <NavigationIcon className={classes.extendedIcon} />\n          Extended\n        </Fab>\n      </div>\n    </div>\n  );\n}\n'},1998:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return A}));var t=a(13),r=a(166),o=a(0),i=a.n(o),l=a(2),c=a(1405),s=a.n(c),m=a(1265),d=a(39),u=a(1276),b=a(1294),p=a(1293),f=a(197),h=a(1466),v=a(1278),g=a(1336),E=a.n(g),x=a(1535),y=a.n(x),N=a(1467),j=a.n(N),I=a(184),O=a(1438);function w(e){var n=e.children,a=e.value,t=e.index,o=Object(r.a)(e,["children","value","index"]);return i.a.createElement(f.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==t,id:"action-tabpanel-".concat(t),"aria-labelledby":"action-tab-".concat(t)},o),a===t&&i.a.createElement(O.a,{p:3},n))}function T(e){return{id:"action-tab-".concat(e),"aria-controls":"action-tabpanel-".concat(e)}}var F=Object(m.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:500,position:"relative",minHeight:200},fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},fabGreen:{color:e.palette.common.white,backgroundColor:I.a[500],"&:hover":{backgroundColor:I.a[600]}}}}));function A(){var e=F(),n=Object(d.a)(),a=i.a.useState(0),r=Object(t.a)(a,2),o=r[0],c=r[1],m={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},f=[{color:"primary",className:e.fab,icon:i.a.createElement(E.a,null),label:"Add"},{color:"secondary",className:e.fab,icon:i.a.createElement(y.a,null),label:"Edit"},{color:"inherit",className:Object(l.default)(e.fab,e.fabGreen),icon:i.a.createElement(j.a,null),label:"Expand"}];return i.a.createElement("div",{className:e.root},i.a.createElement(u.a,{position:"static",color:"default"},i.a.createElement(b.a,{value:o,onChange:function(e,n){c(n)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"action tabs example"},i.a.createElement(p.a,Object.assign({label:"Item One"},T(0))),i.a.createElement(p.a,Object.assign({label:"Item Two"},T(1))),i.a.createElement(p.a,Object.assign({label:"Item Three"},T(2))))),i.a.createElement(s.a,{axis:"rtl"===n.direction?"x-reverse":"x",index:o,onChangeIndex:function(e){c(e)}},i.a.createElement(w,{value:o,index:0,dir:n.direction},"Item One"),i.a.createElement(w,{value:o,index:1,dir:n.direction},"Item Two"),i.a.createElement(w,{value:o,index:2,dir:n.direction},"Item Three")),f.map((function(e,n){return i.a.createElement(h.a,{key:e.color,in:o===n,timeout:m,style:{transitionDelay:"".concat(o===n?m.exit:0,"ms")},unmountOnExit:!0},i.a.createElement(v.a,{"aria-label":e.label,className:e.className,color:e.color},e.icon))})))}},1999:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport clsx from 'clsx';\nimport SwipeableViews from 'react-swipeable-views';\nimport { makeStyles, useTheme } from '@material-ui/core/styles';\nimport AppBar from '@material-ui/core/AppBar';\nimport Tabs from '@material-ui/core/Tabs';\nimport Tab from '@material-ui/core/Tab';\nimport Typography from '@material-ui/core/Typography';\nimport Zoom from '@material-ui/core/Zoom';\nimport Fab from '@material-ui/core/Fab';\nimport AddIcon from '@material-ui/icons/Add';\nimport EditIcon from '@material-ui/icons/Edit';\nimport UpIcon from '@material-ui/icons/KeyboardArrowUp';\nimport { green } from '@material-ui/core/colors';\nimport Box from '@material-ui/core/Box';\n\nfunction TabPanel(props) {\n  const { children, value, index, ...other } = props;\n\n  return (\n    <Typography\n      component=\"div\"\n      role=\"tabpanel\"\n      hidden={value !== index}\n      id={`action-tabpanel-${index}`}\n      aria-labelledby={`action-tab-${index}`}\n      {...other}\n    >\n      {value === index && <Box p={3}>{children}</Box>}\n    </Typography>\n  );\n}\n\nTabPanel.propTypes = {\n  children: PropTypes.node,\n  index: PropTypes.any.isRequired,\n  value: PropTypes.any.isRequired,\n};\n\nfunction a11yProps(index) {\n  return {\n    id: `action-tab-${index}`,\n    'aria-controls': `action-tabpanel-${index}`,\n  };\n}\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    backgroundColor: theme.palette.background.paper,\n    width: 500,\n    position: 'relative',\n    minHeight: 200,\n  },\n  fab: {\n    position: 'absolute',\n    bottom: theme.spacing(2),\n    right: theme.spacing(2),\n  },\n  fabGreen: {\n    color: theme.palette.common.white,\n    backgroundColor: green[500],\n    '&:hover': {\n      backgroundColor: green[600],\n    },\n  },\n}));\n\nexport default function FloatingActionButtonZoom() {\n  const classes = useStyles();\n  const theme = useTheme();\n  const [value, setValue] = React.useState(0);\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue);\n  };\n\n  const handleChangeIndex = (index) => {\n    setValue(index);\n  };\n\n  const transitionDuration = {\n    enter: theme.transitions.duration.enteringScreen,\n    exit: theme.transitions.duration.leavingScreen,\n  };\n\n  const fabs = [\n    {\n      color: 'primary',\n      className: classes.fab,\n      icon: <AddIcon />,\n      label: 'Add',\n    },\n    {\n      color: 'secondary',\n      className: classes.fab,\n      icon: <EditIcon />,\n      label: 'Edit',\n    },\n    {\n      color: 'inherit',\n      className: clsx(classes.fab, classes.fabGreen),\n      icon: <UpIcon />,\n      label: 'Expand',\n    },\n  ];\n\n  return (\n    <div className={classes.root}>\n      <AppBar position=\"static\" color=\"default\">\n        <Tabs\n          value={value}\n          onChange={handleChange}\n          indicatorColor=\"primary\"\n          textColor=\"primary\"\n          variant=\"fullWidth\"\n          aria-label=\"action tabs example\"\n        >\n          <Tab label=\"Item One\" {...a11yProps(0)} />\n          <Tab label=\"Item Two\" {...a11yProps(1)} />\n          <Tab label=\"Item Three\" {...a11yProps(2)} />\n        </Tabs>\n      </AppBar>\n      <SwipeableViews\n        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}\n        index={value}\n        onChangeIndex={handleChangeIndex}\n      >\n        <TabPanel value={value} index={0} dir={theme.direction}>\n          Item One\n        </TabPanel>\n        <TabPanel value={value} index={1} dir={theme.direction}>\n          Item Two\n        </TabPanel>\n        <TabPanel value={value} index={2} dir={theme.direction}>\n          Item Three\n        </TabPanel>\n      </SwipeableViews>\n      {fabs.map((fab, index) => (\n        <Zoom\n          key={fab.color}\n          in={value === index}\n          timeout={transitionDuration}\n          style={{\n            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,\n          }}\n          unmountOnExit\n        >\n          <Fab aria-label={fab.label} className={fab.className} color={fab.color}>\n            {fab.icon}\n          </Fab>\n        </Zoom>\n      ))}\n    </div>\n  );\n}\n"},2574:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(1306),i=(a(118),a(1274)),l=a(1267),c=a(197),s=a(1265),m=Object(s.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));n.default=function(e){return m(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},r.a.createElement(i.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/floating-action-button",target:"_blank",role:"button"},r.a.createElement(l.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),r.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Floating action button"),r.a.createElement(c.a,{className:"description"},"A floating action button (FAB) performs the primary, or most common, action on a screen."),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Floating Action Button"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"A ",r.a.createElement("a",{href:"https://material.io/design/components/buttons-floating-action-button.html"},"floating action button"),"appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in two types: regular, and extended."),r.a.createElement(c.a,{className:"mb-16",component:"div"},"Only use a FAB if it is the most suitable way to present a screen\u2019s primary action."),r.a.createElement(c.a,{className:"mb-16",component:"div"},"Only one floating action button is recommended per screen to represent the most common action."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:a(1994).default,raw:a(1995)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Size"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"Use the ",r.a.createElement("code",null,"size")," prop for larger or smaller floating action buttons."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:a(1996).default,raw:a(1997)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Animation"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"The floating action button animates onto the screen as an expanding piece of material, by default."),r.a.createElement(c.a,{className:"mb-16",component:"div"},"A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear, then reappear if its action changes."),r.a.createElement(c.a,{className:"mb-16",component:"div"},"The Zoom transition can be used to achieve this. Note that since both the exiting and entering animations are triggered at the same time, we use ",r.a.createElement("code",null,"enterDelay")," to allow the outgoing Floating Action Button's animation to finish before the new one enters."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:a(1998).default,raw:a(1999)})))}}}]);