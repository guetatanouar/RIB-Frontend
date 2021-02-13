(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[60],{1306:function(e,a,n){"use strict";n.d(a,"a",(function(){return A}));var l=n(13),t=n(118),o=n(1276),r=n(1285),c=n(1267),i=n(1293),m=n(1294),s=n(2),u=n(0),d=n.n(u),p=n(12),b=n(9),h=n(72),f=n(73),v=n(129),C=n(128),E=n(1209),y=n(614),D=n(1264),k=n(1275),g=n(8),x=n(392),F=n(393),I=n(1307),j=n.n(I),N=Object(E.a)({productionPrefix:"iframe-"}),w=function(e){Object(v.a)(n,e);var a=Object(C.a)(n);function n(){var e;Object(h.a)(this,n);for(var l=arguments.length,t=new Array(l),o=0;o<l;o++)t[o]=arguments[o];return(e=a.call.apply(a,[this].concat(t))).state={ready:!1},e.handleRef=function(a){e.contentDocument=a?a.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(x.a)(Object(b.a)(Object(b.a)({},Object(y.a)()),{},{plugins:[].concat(Object(p.a)(Object(y.a)().plugins),[Object(F.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,a=e.children,n=e.classes,l=e.theme;return d.a.createElement(j.a,{head:this.renderHead(),ref:this.handleRef,className:Object(s.default)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(D.b,{jss:this.state.jss,generateClassName:N,sheetsManager:this.state.sheetsManager},d.a.createElement(k.a,{theme:l},d.a.cloneElement(a,{container:this.state.container}))):null)}}]),n}(d.a.Component),z=Object(g.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(w);function R(e){var a=Object(u.useState)(e.currentTabIndex),n=Object(l.a)(a,2),p=n[0],b=n[1],h=e.component,f=e.raw,v=e.iframe,C=e.className;return d.a.createElement(r.a,{className:Object(s.default)(C,"shadow")},d.a.createElement(o.a,{position:"static",color:"default",className:"shadow-0"},d.a.createElement(m.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,a){b(a)}},h&&d.a.createElement(i.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"remove_red_eye")}),f&&d.a.createElement(i.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center max-w-full"},d.a.createElement("div",{className:0===p?"flex flex-1 max-w-full":"hidden"},h&&(v?d.a.createElement(z,null,d.a.createElement(h,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},d.a.createElement(h,null)))),d.a.createElement("div",{className:1===p?"flex flex-1":"hidden"},f&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(t.a,{component:"pre",className:"language-javascript w-full"},f.default)))))}R.defaultProps={currentTabIndex:0};var A=R},1351:function(e,a,n){"use strict";var l=n(166),t=n(0),o=n(402),r=t.forwardRef((function(e,a){var n=e.code,r=e.language,c=Object(l.a)(e,["code","language"]);return t.createElement(o.a,Object.assign({component:"pre",className:"language-".concat(r||"jsx"),ref:a},c),n)}));a.a=r},1909:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return p}));var l=n(0),t=n.n(l),o=n(1265),r=n(1300),c=n(1302),i=n(1400),m=n.n(i),s=n(1378),u=n.n(s),d=Object(o.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));function p(){var e=d(),a=function(){console.info("You clicked the delete icon.")},n=function(){console.info("You clicked the Chip.")};return t.a.createElement("div",{className:e.root},t.a.createElement(c.a,{label:"Basic"}),t.a.createElement(c.a,{label:"Disabled",disabled:!0}),t.a.createElement(c.a,{avatar:t.a.createElement(r.a,null,"M"),label:"Clickable",onClick:n}),t.a.createElement(c.a,{avatar:t.a.createElement(r.a,{alt:"Natacha",src:"/material-ui-static/images/avatar/1.jpg"}),label:"Deletable",onDelete:a}),t.a.createElement(c.a,{icon:t.a.createElement(m.a,null),label:"Clickable deletable",onClick:n,onDelete:a}),t.a.createElement(c.a,{label:"Custom delete icon",onClick:n,onDelete:a,deleteIcon:t.a.createElement(u.a,null)}),t.a.createElement(c.a,{label:"Clickable Link",component:"a",href:"#chip",clickable:!0}),t.a.createElement(c.a,{avatar:t.a.createElement(r.a,null,"M"),label:"Primary clickable",clickable:!0,color:"primary",onDelete:a,deleteIcon:t.a.createElement(u.a,null)}),t.a.createElement(c.a,{icon:t.a.createElement(m.a,null),label:"Primary clickable",clickable:!0,color:"primary",onDelete:a,deleteIcon:t.a.createElement(u.a,null)}),t.a.createElement(c.a,{label:"Deletable primary",onDelete:a,color:"primary"}),t.a.createElement(c.a,{icon:t.a.createElement(m.a,null),label:"Deletable secondary",onDelete:a,color:"secondary"}))}},1910:function(e,a,n){"use strict";n.r(a),a.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Avatar from \'@material-ui/core/Avatar\';\nimport Chip from \'@material-ui/core/Chip\';\nimport FaceIcon from \'@material-ui/icons/Face\';\nimport DoneIcon from \'@material-ui/icons/Done\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: \'flex\',\n    justifyContent: \'center\',\n    flexWrap: \'wrap\',\n    \'& > *\': {\n      margin: theme.spacing(0.5),\n    },\n  },\n}));\n\nexport default function Chips() {\n  const classes = useStyles();\n\n  const handleDelete = () => {\n    console.info(\'You clicked the delete icon.\');\n  };\n\n  const handleClick = () => {\n    console.info(\'You clicked the Chip.\');\n  };\n\n  return (\n    <div className={classes.root}>\n      <Chip label="Basic" />\n      <Chip label="Disabled" disabled />\n      <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />\n      <Chip\n        avatar={<Avatar alt="Natacha" src="/material-ui-static/images/avatar/1.jpg" />}\n        label="Deletable"\n        onDelete={handleDelete}\n      />\n      <Chip\n        icon={<FaceIcon />}\n        label="Clickable deletable"\n        onClick={handleClick}\n        onDelete={handleDelete}\n      />\n      <Chip\n        label="Custom delete icon"\n        onClick={handleClick}\n        onDelete={handleDelete}\n        deleteIcon={<DoneIcon />}\n      />\n      <Chip label="Clickable Link" component="a" href="#chip" clickable />\n      <Chip\n        avatar={<Avatar>M</Avatar>}\n        label="Primary clickable"\n        clickable\n        color="primary"\n        onDelete={handleDelete}\n        deleteIcon={<DoneIcon />}\n      />\n      <Chip\n        icon={<FaceIcon />}\n        label="Primary clickable"\n        clickable\n        color="primary"\n        onDelete={handleDelete}\n        deleteIcon={<DoneIcon />}\n      />\n      <Chip label="Deletable primary" onDelete={handleDelete} color="primary" />\n      <Chip\n        icon={<FaceIcon />}\n        label="Deletable secondary"\n        onDelete={handleDelete}\n        color="secondary"\n      />\n    </div>\n  );\n}\n'},1911:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return p}));var l=n(0),t=n.n(l),o=n(1265),r=n(1300),c=n(1302),i=n(1400),m=n.n(i),s=n(1378),u=n.n(s),d=Object(o.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));function p(){var e=d(),a=function(){console.info("You clicked the delete icon.")},n=function(){console.info("You clicked the Chip.")};return t.a.createElement("div",{className:e.root},t.a.createElement(c.a,{label:"Basic",variant:"outlined"}),t.a.createElement(c.a,{label:"Disabled",disabled:!0,variant:"outlined"}),t.a.createElement(c.a,{avatar:t.a.createElement(r.a,null,"M"),label:"Clickable",onClick:n,variant:"outlined"}),t.a.createElement(c.a,{avatar:t.a.createElement(r.a,{alt:"Natacha",src:"/material-ui-static/images/avatar/1.jpg"}),label:"Deletable",onDelete:a,variant:"outlined"}),t.a.createElement(c.a,{icon:t.a.createElement(m.a,null),label:"Clickable deletable",onClick:n,onDelete:a,variant:"outlined"}),t.a.createElement(c.a,{label:"Custom delete icon",onClick:n,onDelete:a,deleteIcon:t.a.createElement(u.a,null),variant:"outlined"}),t.a.createElement(c.a,{label:"Clickable link",component:"a",href:"#chip",clickable:!0,variant:"outlined"}),t.a.createElement(c.a,{avatar:t.a.createElement(r.a,null,"M"),label:"Primary clickable",clickable:!0,color:"primary",onDelete:a,deleteIcon:t.a.createElement(u.a,null),variant:"outlined"}),t.a.createElement(c.a,{icon:t.a.createElement(m.a,null),label:"Primary clickable",clickable:!0,color:"primary",onDelete:a,deleteIcon:t.a.createElement(u.a,null),variant:"outlined"}),t.a.createElement(c.a,{label:"Deletable primary",onDelete:a,color:"primary",variant:"outlined"}),t.a.createElement(c.a,{icon:t.a.createElement(m.a,null),label:"Deletable secondary",onDelete:a,color:"secondary",variant:"outlined"}))}},1912:function(e,a,n){"use strict";n.r(a),a.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Avatar from \'@material-ui/core/Avatar\';\nimport Chip from \'@material-ui/core/Chip\';\nimport FaceIcon from \'@material-ui/icons/Face\';\nimport DoneIcon from \'@material-ui/icons/Done\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: \'flex\',\n    justifyContent: \'center\',\n    flexWrap: \'wrap\',\n    \'& > *\': {\n      margin: theme.spacing(0.5),\n    },\n  },\n}));\n\nexport default function OutlinedChips() {\n  const classes = useStyles();\n\n  const handleDelete = () => {\n    console.info(\'You clicked the delete icon.\');\n  };\n\n  const handleClick = () => {\n    console.info(\'You clicked the Chip.\');\n  };\n\n  return (\n    <div className={classes.root}>\n      <Chip label="Basic" variant="outlined" />\n      <Chip label="Disabled" disabled variant="outlined" />\n      <Chip\n        avatar={<Avatar>M</Avatar>}\n        label="Clickable"\n        onClick={handleClick}\n        variant="outlined"\n      />\n      <Chip\n        avatar={<Avatar alt="Natacha" src="/material-ui-static/images/avatar/1.jpg" />}\n        label="Deletable"\n        onDelete={handleDelete}\n        variant="outlined"\n      />\n      <Chip\n        icon={<FaceIcon />}\n        label="Clickable deletable"\n        onClick={handleClick}\n        onDelete={handleDelete}\n        variant="outlined"\n      />\n      <Chip\n        label="Custom delete icon"\n        onClick={handleClick}\n        onDelete={handleDelete}\n        deleteIcon={<DoneIcon />}\n        variant="outlined"\n      />\n      <Chip label="Clickable link" component="a" href="#chip" clickable variant="outlined" />\n      <Chip\n        avatar={<Avatar>M</Avatar>}\n        label="Primary clickable"\n        clickable\n        color="primary"\n        onDelete={handleDelete}\n        deleteIcon={<DoneIcon />}\n        variant="outlined"\n      />\n      <Chip\n        icon={<FaceIcon />}\n        label="Primary clickable"\n        clickable\n        color="primary"\n        onDelete={handleDelete}\n        deleteIcon={<DoneIcon />}\n        variant="outlined"\n      />\n      <Chip label="Deletable primary" onDelete={handleDelete} color="primary" variant="outlined" />\n      <Chip\n        icon={<FaceIcon />}\n        label="Deletable secondary"\n        onDelete={handleDelete}\n        color="secondary"\n        variant="outlined"\n      />\n    </div>\n  );\n}\n'},1913:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return d}));var l=n(13),t=n(0),o=n.n(t),r=n(1265),c=n(1302),i=n(196),m=n(1914),s=n.n(m),u=Object(r.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},chip:{margin:e.spacing(.5)}}}));function d(){var e=u(),a=o.a.useState([{key:0,label:"Angular"},{key:1,label:"jQuery"},{key:2,label:"Polymer"},{key:3,label:"React"},{key:4,label:"Vue.js"}]),n=Object(l.a)(a,2),t=n[0],r=n[1];return o.a.createElement(i.a,{component:"ul",className:e.root},t.map((function(a){var n,l;return"React"===a.label&&(n=o.a.createElement(s.a,null)),o.a.createElement("li",{key:a.key},o.a.createElement(c.a,{icon:n,label:a.label,onDelete:"React"===a.label?void 0:(l=a,function(){r((function(e){return e.filter((function(e){return e.key!==l.key}))}))}),className:e.chip}))})))}},1915:function(e,a,n){"use strict";n.r(a),a.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Chip from '@material-ui/core/Chip';\nimport Paper from '@material-ui/core/Paper';\nimport TagFacesIcon from '@material-ui/icons/TagFaces';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    justifyContent: 'center',\n    flexWrap: 'wrap',\n    listStyle: 'none',\n    padding: theme.spacing(0.5),\n    margin: 0,\n  },\n  chip: {\n    margin: theme.spacing(0.5),\n  },\n}));\n\nexport default function ChipsArray() {\n  const classes = useStyles();\n  const [chipData, setChipData] = React.useState([\n    { key: 0, label: 'Angular' },\n    { key: 1, label: 'jQuery' },\n    { key: 2, label: 'Polymer' },\n    { key: 3, label: 'React' },\n    { key: 4, label: 'Vue.js' },\n  ]);\n\n  const handleDelete = (chipToDelete) => () => {\n    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));\n  };\n\n  return (\n    <Paper component=\"ul\" className={classes.root}>\n      {chipData.map((data) => {\n        let icon;\n\n        if (data.label === 'React') {\n          icon = <TagFacesIcon />;\n        }\n\n        return (\n          <li key={data.key}>\n            <Chip\n              icon={icon}\n              label={data.label}\n              onDelete={data.label === 'React' ? undefined : handleDelete(data)}\n              className={classes.chip}\n            />\n          </li>\n        );\n      })}\n    </Paper>\n  );\n}\n"},1916:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return p}));var l=n(0),t=n.n(l),o=n(1265),r=n(1300),c=n(1302),i=n(1400),m=n.n(i),s=n(1378),u=n.n(s),d=Object(o.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));function p(){var e=d(),a=function(){console.info("You clicked the delete icon.")},n=function(){console.info("You clicked the Chip.")};return t.a.createElement("div",{className:e.root},t.a.createElement(c.a,{size:"small",label:"Basic"}),t.a.createElement(c.a,{size:"small",avatar:t.a.createElement(r.a,null,"M"),label:"Clickable",onClick:n}),t.a.createElement(c.a,{size:"small",avatar:t.a.createElement(r.a,{alt:"Natacha",src:"/material-ui-static/images/avatar/1.jpg"}),label:"Deletable",onDelete:a}),t.a.createElement(c.a,{size:"small",icon:t.a.createElement(m.a,null),label:"Clickable Deletable",onClick:n,onDelete:a}),t.a.createElement(c.a,{size:"small",label:"Custom delete icon",onClick:n,onDelete:a,deleteIcon:t.a.createElement(u.a,null)}),t.a.createElement(c.a,{size:"small",label:"Clickable Link",component:"a",href:"#chip",clickable:!0}),t.a.createElement(c.a,{size:"small",avatar:t.a.createElement(r.a,null,"M"),label:"Primary Clickable",clickable:!0,color:"primary",onDelete:a,deleteIcon:t.a.createElement(u.a,null)}),t.a.createElement(c.a,{size:"small",icon:t.a.createElement(m.a,null),label:"Primary Clickable",clickable:!0,color:"primary",onDelete:a,deleteIcon:t.a.createElement(u.a,null)}),t.a.createElement(c.a,{size:"small",label:"Deletable Primary",onDelete:a,color:"primary"}),t.a.createElement(c.a,{size:"small",icon:t.a.createElement(m.a,null),label:"Deletable Secondary",onDelete:a,color:"secondary"}))}},1917:function(e,a,n){"use strict";n.r(a),a.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Avatar from \'@material-ui/core/Avatar\';\nimport Chip from \'@material-ui/core/Chip\';\nimport FaceIcon from \'@material-ui/icons/Face\';\nimport DoneIcon from \'@material-ui/icons/Done\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: \'flex\',\n    justifyContent: \'center\',\n    flexWrap: \'wrap\',\n    \'& > *\': {\n      margin: theme.spacing(0.5),\n    },\n  },\n}));\n\nexport default function SmallChips() {\n  const classes = useStyles();\n\n  const handleDelete = () => {\n    console.info(\'You clicked the delete icon.\');\n  };\n\n  const handleClick = () => {\n    console.info(\'You clicked the Chip.\');\n  };\n\n  return (\n    <div className={classes.root}>\n      <Chip size="small" label="Basic" />\n      <Chip size="small" avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />\n      <Chip\n        size="small"\n        avatar={<Avatar alt="Natacha" src="/material-ui-static/images/avatar/1.jpg" />}\n        label="Deletable"\n        onDelete={handleDelete}\n      />\n      <Chip\n        size="small"\n        icon={<FaceIcon />}\n        label="Clickable Deletable"\n        onClick={handleClick}\n        onDelete={handleDelete}\n      />\n      <Chip\n        size="small"\n        label="Custom delete icon"\n        onClick={handleClick}\n        onDelete={handleDelete}\n        deleteIcon={<DoneIcon />}\n      />\n      <Chip size="small" label="Clickable Link" component="a" href="#chip" clickable />\n      <Chip\n        size="small"\n        avatar={<Avatar>M</Avatar>}\n        label="Primary Clickable"\n        clickable\n        color="primary"\n        onDelete={handleDelete}\n        deleteIcon={<DoneIcon />}\n      />\n      <Chip\n        size="small"\n        icon={<FaceIcon />}\n        label="Primary Clickable"\n        clickable\n        color="primary"\n        onDelete={handleDelete}\n        deleteIcon={<DoneIcon />}\n      />\n      <Chip size="small" label="Deletable Primary" onDelete={handleDelete} color="primary" />\n      <Chip\n        size="small"\n        icon={<FaceIcon />}\n        label="Deletable Secondary"\n        onDelete={handleDelete}\n        color="secondary"\n      />\n    </div>\n  );\n}\n'},1918:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return p}));var l=n(0),t=n.n(l),o=n(1265),r=n(1300),c=n(1302),i=n(1400),m=n.n(i),s=n(1378),u=n.n(s),d=Object(o.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));function p(){var e=d(),a=function(){console.info("You clicked the delete icon.")},n=function(){console.info("You clicked the Chip.")};return t.a.createElement("div",{className:e.root},t.a.createElement(c.a,{variant:"outlined",size:"small",label:"Basic"}),t.a.createElement(c.a,{variant:"outlined",size:"small",avatar:t.a.createElement(r.a,null,"M"),label:"Clickable",onClick:n}),t.a.createElement(c.a,{variant:"outlined",size:"small",avatar:t.a.createElement(r.a,{alt:"Natacha",src:"/material-ui-static/images/avatar/1.jpg"}),label:"Deletable",onDelete:a}),t.a.createElement(c.a,{variant:"outlined",size:"small",icon:t.a.createElement(m.a,null),label:"Clickable deletable",onClick:n,onDelete:a}),t.a.createElement(c.a,{variant:"outlined",size:"small",label:"Custom delete icon",onClick:n,onDelete:a,deleteIcon:t.a.createElement(u.a,null)}),t.a.createElement(c.a,{variant:"outlined",size:"small",label:"Clickable link",component:"a",href:"#chip",clickable:!0}),t.a.createElement(c.a,{variant:"outlined",size:"small",avatar:t.a.createElement(r.a,null,"M"),label:"Primary clickable",clickable:!0,color:"primary",onDelete:a,deleteIcon:t.a.createElement(u.a,null)}),t.a.createElement(c.a,{variant:"outlined",size:"small",icon:t.a.createElement(m.a,null),label:"Primary clickable",clickable:!0,color:"primary",onDelete:a,deleteIcon:t.a.createElement(u.a,null)}),t.a.createElement(c.a,{variant:"outlined",size:"small",label:"Deletable primary",onDelete:a,color:"primary"}),t.a.createElement(c.a,{variant:"outlined",size:"small",icon:t.a.createElement(m.a,null),label:"Deletable secondary",onDelete:a,color:"secondary"}))}},1919:function(e,a,n){"use strict";n.r(a),a.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Avatar from \'@material-ui/core/Avatar\';\nimport Chip from \'@material-ui/core/Chip\';\nimport FaceIcon from \'@material-ui/icons/Face\';\nimport DoneIcon from \'@material-ui/icons/Done\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: \'flex\',\n    justifyContent: \'center\',\n    flexWrap: \'wrap\',\n    \'& > *\': {\n      margin: theme.spacing(0.5),\n    },\n  },\n}));\n\nexport default function SmallOutlinedChips() {\n  const classes = useStyles();\n\n  const handleDelete = () => {\n    console.info(\'You clicked the delete icon.\');\n  };\n\n  const handleClick = () => {\n    console.info(\'You clicked the Chip.\');\n  };\n\n  return (\n    <div className={classes.root}>\n      <Chip variant="outlined" size="small" label="Basic" />\n      <Chip\n        variant="outlined"\n        size="small"\n        avatar={<Avatar>M</Avatar>}\n        label="Clickable"\n        onClick={handleClick}\n      />\n      <Chip\n        variant="outlined"\n        size="small"\n        avatar={<Avatar alt="Natacha" src="/material-ui-static/images/avatar/1.jpg" />}\n        label="Deletable"\n        onDelete={handleDelete}\n      />\n      <Chip\n        variant="outlined"\n        size="small"\n        icon={<FaceIcon />}\n        label="Clickable deletable"\n        onClick={handleClick}\n        onDelete={handleDelete}\n      />\n      <Chip\n        variant="outlined"\n        size="small"\n        label="Custom delete icon"\n        onClick={handleClick}\n        onDelete={handleDelete}\n        deleteIcon={<DoneIcon />}\n      />\n      <Chip\n        variant="outlined"\n        size="small"\n        label="Clickable link"\n        component="a"\n        href="#chip"\n        clickable\n      />\n      <Chip\n        variant="outlined"\n        size="small"\n        avatar={<Avatar>M</Avatar>}\n        label="Primary clickable"\n        clickable\n        color="primary"\n        onDelete={handleDelete}\n        deleteIcon={<DoneIcon />}\n      />\n      <Chip\n        variant="outlined"\n        size="small"\n        icon={<FaceIcon />}\n        label="Primary clickable"\n        clickable\n        color="primary"\n        onDelete={handleDelete}\n        deleteIcon={<DoneIcon />}\n      />\n      <Chip\n        variant="outlined"\n        size="small"\n        label="Deletable primary"\n        onDelete={handleDelete}\n        color="primary"\n      />\n      <Chip\n        variant="outlined"\n        size="small"\n        icon={<FaceIcon />}\n        label="Deletable secondary"\n        onDelete={handleDelete}\n        color="secondary"\n      />\n    </div>\n  );\n}\n'},1920:function(e,a,n){"use strict";n.r(a);var l=n(30),t=n(9),o=n(13),r=n(0),c=n.n(r),i=n(8),m=n(1351),s=n(1335),u=n(1220),d=n(1221),p=n(1271),b=n(1270),h=n(1295),f=n(1300),v=n(1302),C=n(1400),E=n.n(C),y=n(1378),D=n.n(y);a.default=Object(i.a)((function(e){return{root:{flexGrow:1},chipWrapper:{height:e.spacing(10)}}}))((function(e){var a,n,r,i,C,y=e.classes,k=c.a.useState({color:"default",onDelete:"none",avatar:"none",icon:"none",variant:"default",size:"medium"}),g=Object(o.a)(k,2),x=g[0],F=g[1],I=x.color,j=x.onDelete,N=x.avatar,w=x.icon,z=x.variant,R=x.size,A=function(e){F(Object(t.a)(Object(t.a)({},x),{},Object(l.a)({},e.target.name,e.target.value)))},G="default"!==I?'color="'.concat(I,'" '):"",P="small"===R?'size="small" ':"",T="default"!==z?'variant="'.concat(z,'" '):"";switch(j){case"none":a="";break;case"custom":a="deleteIcon={<DoneIcon />} onDelete={handleDelete} ";break;default:a="onDelete={handleDelete} "}switch(w){case"none":n="";break;default:n="icon={<FaceIcon />} ",r=c.a.createElement(E.a,null)}switch(N){case"none":i="";break;case"img":i='avatar={<Avatar src="/material-ui-static/images/avatar/1.jpg" />} ',C=c.a.createElement(f.a,{src:"/material-ui-static/images/avatar/1.jpg"});break;case"letter":i="avatar={<Avatar>F</Avatar>} ",C=c.a.createElement(f.a,null,"F")}"none"!==N&&(n="",r=null);var S="\n<Chip ".concat(T).concat(G).concat(P).concat(a).concat(i).concat(n,"/>\n");return c.a.createElement(s.a,{container:!0,className:y.root},c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(s.a,{container:!0,justify:"center",alignItems:"center"},c.a.createElement(s.a,{item:!0,className:y.chipWrapper},c.a.createElement(v.a,{label:"Chip Component",color:I,deleteIcon:"custom"===j?c.a.createElement(D.a,null):void 0,onDelete:"none"!==j?function(){console.info("You clicked the delete icon.")}:void 0,avatar:C,icon:r,variant:z,size:R})))),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(s.a,{container:!0,spacing:3},c.a.createElement(s.a,{item:!0,xs:12,md:6},c.a.createElement(u.a,{component:"fieldset"},c.a.createElement(d.a,null,"variant"),c.a.createElement(b.a,{row:!0,name:"variant","aria-label":"variant",value:z,onChange:A},c.a.createElement(p.a,{value:"default",control:c.a.createElement(h.a,null),label:"default"}),c.a.createElement(p.a,{value:"outlined",control:c.a.createElement(h.a,null),label:"outlined"})))),c.a.createElement(s.a,{item:!0,xs:12,md:6},c.a.createElement(u.a,{component:"fieldset"},c.a.createElement(d.a,null,"color"),c.a.createElement(b.a,{row:!0,name:"color","aria-label":"color",value:I,onChange:A},c.a.createElement(p.a,{value:"default",control:c.a.createElement(h.a,null),label:"default"}),c.a.createElement(p.a,{value:"primary",control:c.a.createElement(h.a,null),label:"primary"}),c.a.createElement(p.a,{value:"secondary",control:c.a.createElement(h.a,null),label:"secondary"})))),c.a.createElement(s.a,{item:!0,xs:12,md:6},c.a.createElement(u.a,{component:"fieldset"},c.a.createElement(d.a,null,"size"),c.a.createElement(b.a,{row:!0,name:"size","aria-label":"size",value:R,onChange:A},c.a.createElement(p.a,{value:"medium",control:c.a.createElement(h.a,null),label:"medium"}),c.a.createElement(p.a,{value:"small",control:c.a.createElement(h.a,null),label:"small"})))),c.a.createElement(s.a,{item:!0,xs:12,md:6},c.a.createElement(u.a,{component:"fieldset"},c.a.createElement(d.a,null,"icon"),c.a.createElement(b.a,{row:!0,name:"icon","aria-label":"icon",value:w,onChange:A},c.a.createElement(p.a,{value:"none",control:c.a.createElement(h.a,null),label:"none"}),c.a.createElement(p.a,{value:"icon",control:c.a.createElement(h.a,null),label:"icon"})))),c.a.createElement(s.a,{item:!0,xs:12,md:6},c.a.createElement(u.a,{component:"fieldset"},c.a.createElement(d.a,null,"avatar"),c.a.createElement(b.a,{row:!0,name:"avatar","aria-label":"avatar",value:N,onChange:A},c.a.createElement(p.a,{value:"none",control:c.a.createElement(h.a,null),label:"none"}),c.a.createElement(p.a,{value:"letter",control:c.a.createElement(h.a,null),label:"letter"}),c.a.createElement(p.a,{value:"img",control:c.a.createElement(h.a,null),label:"img"})))),c.a.createElement(s.a,{item:!0,xs:12,md:6},c.a.createElement(u.a,{component:"fieldset"},c.a.createElement(d.a,null,"onDelete"),c.a.createElement(b.a,{row:!0,name:"onDelete","aria-label":"on delete",value:j,onChange:A},c.a.createElement(p.a,{value:"none",control:c.a.createElement(h.a,null),label:"none"}),c.a.createElement(p.a,{value:"default",control:c.a.createElement(h.a,null),label:"default"}),c.a.createElement(p.a,{value:"custom",control:c.a.createElement(h.a,null),label:"custom"})))))),c.a.createElement(s.a,{item:!0,xs:12},c.a.createElement(m.a,{code:S,language:"jsx"})))}))},1921:function(e,a,n){"use strict";n.r(a),a.default='import React from \'react\';\nimport PropTypes from \'prop-types\';\nimport { withStyles } from \'@material-ui/core/styles\';\nimport HighlightedCode from \'app/main/documentation/material-ui-components/utils/HighlightedCode\';\nimport Grid from \'@material-ui/core/Grid\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport RadioGroup from \'@material-ui/core/RadioGroup\';\nimport Radio from \'@material-ui/core/Radio\';\nimport Avatar from \'@material-ui/core/Avatar\';\nimport Chip from \'@material-ui/core/Chip\';\nimport FaceIcon from \'@material-ui/icons/Face\';\nimport DoneIcon from \'@material-ui/icons/Done\';\n\nconst styles = (theme) => ({\n  root: {\n    flexGrow: 1,\n  },\n  chipWrapper: {\n    height: theme.spacing(10),\n  },\n});\n\nfunction ChipsPlayground(props) {\n  const { classes } = props;\n  const [state, setState] = React.useState({\n    color: \'default\',\n    onDelete: \'none\',\n    avatar: \'none\',\n    icon: \'none\',\n    variant: \'default\',\n    size: \'medium\',\n  });\n  const { color, onDelete, avatar, icon, variant, size } = state;\n\n  const handleChange = (event) => {\n    setState({\n      ...state,\n      [event.target.name]: event.target.value,\n    });\n  };\n\n  const handleDeleteExample = () => {\n    console.info(\'You clicked the delete icon.\');\n  };\n\n  const colorToCode = color !== \'default\' ? `color="${color}" ` : \'\';\n  const sizeToCode = size === \'small\' ? `size="small" ` : \'\';\n  const variantToCode = variant !== \'default\' ? `variant="${variant}" ` : \'\';\n\n  let onDeleteToCode;\n  switch (onDelete) {\n    case \'none\':\n      onDeleteToCode = \'\';\n      break;\n    case \'custom\':\n      onDeleteToCode = \'deleteIcon={<DoneIcon />} onDelete={handleDelete} \';\n      break;\n    default:\n      onDeleteToCode = \'onDelete={handleDelete} \';\n      break;\n  }\n\n  let iconToCode;\n  let iconToPlayground;\n  switch (icon) {\n    case \'none\':\n      iconToCode = \'\';\n      break;\n    default:\n      iconToCode = \'icon={<FaceIcon />} \';\n      iconToPlayground = <FaceIcon />;\n      break;\n  }\n\n  let avatarToCode;\n  let avatarToPlayground;\n  switch (avatar) {\n    case \'none\':\n      avatarToCode = \'\';\n      break;\n    case \'img\':\n      avatarToCode = \'avatar={<Avatar src="/material-ui-static/images/avatar/1.jpg" />} \';\n      avatarToPlayground = <Avatar src="/material-ui-static/images/avatar/1.jpg" />;\n      break;\n    case \'letter\':\n      avatarToCode = \'avatar={<Avatar>F</Avatar>} \';\n      avatarToPlayground = <Avatar>F</Avatar>;\n      break;\n    default:\n      break;\n  }\n\n  if (avatar !== \'none\') {\n    iconToCode = \'\';\n    iconToPlayground = null;\n  }\n\n  const jsx = `\n<Chip ${variantToCode}${colorToCode}${sizeToCode}${onDeleteToCode}${avatarToCode}${iconToCode}/>\n`;\n\n  return (\n    <Grid container className={classes.root}>\n      <Grid item xs={12}>\n        <Grid container justify="center" alignItems="center">\n          <Grid item className={classes.chipWrapper}>\n            <Chip\n              label="Chip Component"\n              color={color}\n              deleteIcon={onDelete === \'custom\' ? <DoneIcon /> : undefined}\n              onDelete={onDelete !== \'none\' ? handleDeleteExample : undefined}\n              avatar={avatarToPlayground}\n              icon={iconToPlayground}\n              variant={variant}\n              size={size}\n            />\n          </Grid>\n        </Grid>\n      </Grid>\n      <Grid item xs={12}>\n        <Grid container spacing={3}>\n          <Grid item xs={12} md={6}>\n            <FormControl component="fieldset">\n              <FormLabel>variant</FormLabel>\n              <RadioGroup\n                row\n                name="variant"\n                aria-label="variant"\n                value={variant}\n                onChange={handleChange}\n              >\n                <FormControlLabel value="default" control={<Radio />} label="default" />\n                <FormControlLabel value="outlined" control={<Radio />} label="outlined" />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <FormControl component="fieldset">\n              <FormLabel>color</FormLabel>\n              <RadioGroup row name="color" aria-label="color" value={color} onChange={handleChange}>\n                <FormControlLabel value="default" control={<Radio />} label="default" />\n                <FormControlLabel value="primary" control={<Radio />} label="primary" />\n                <FormControlLabel value="secondary" control={<Radio />} label="secondary" />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <FormControl component="fieldset">\n              <FormLabel>size</FormLabel>\n              <RadioGroup row name="size" aria-label="size" value={size} onChange={handleChange}>\n                <FormControlLabel value="medium" control={<Radio />} label="medium" />\n                <FormControlLabel value="small" control={<Radio />} label="small" />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <FormControl component="fieldset">\n              <FormLabel>icon</FormLabel>\n              <RadioGroup row name="icon" aria-label="icon" value={icon} onChange={handleChange}>\n                <FormControlLabel value="none" control={<Radio />} label="none" />\n                <FormControlLabel value="icon" control={<Radio />} label="icon" />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <FormControl component="fieldset">\n              <FormLabel>avatar</FormLabel>\n              <RadioGroup\n                row\n                name="avatar"\n                aria-label="avatar"\n                value={avatar}\n                onChange={handleChange}\n              >\n                <FormControlLabel value="none" control={<Radio />} label="none" />\n                <FormControlLabel value="letter" control={<Radio />} label="letter" />\n                <FormControlLabel value="img" control={<Radio />} label="img" />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <FormControl component="fieldset">\n              <FormLabel>onDelete</FormLabel>\n              <RadioGroup\n                row\n                name="onDelete"\n                aria-label="on delete"\n                value={onDelete}\n                onChange={handleChange}\n              >\n                <FormControlLabel value="none" control={<Radio />} label="none" />\n                <FormControlLabel value="default" control={<Radio />} label="default" />\n                <FormControlLabel value="custom" control={<Radio />} label="custom" />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n        </Grid>\n      </Grid>\n      <Grid item xs={12}>\n        <HighlightedCode code={jsx} language="jsx" />\n      </Grid>\n    </Grid>\n  );\n}\n\nChipsPlayground.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(ChipsPlayground);\n'},2567:function(e,a,n){"use strict";n.r(a);var l=n(0),t=n.n(l),o=n(1306),r=(n(118),n(1274)),c=n(1267),i=n(197),m=n(1265),s=Object(m.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));a.default=function(e){return s(),t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},t.a.createElement(r.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/chips",target:"_blank",role:"button"},t.a.createElement(c.a,null,"link"),t.a.createElement("span",{className:"mx-4"},"Reference"))),t.a.createElement(i.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Chip"),t.a.createElement(i.a,{className:"description"},"Chips are compact elements that represent an input, attribute, or action."),t.a.createElement(i.a,{className:"mb-16",component:"div"},t.a.createElement("a",{href:"https://material.io/design/components/chips.html"},"Chips")," allow users to enter information, make selections, filter content, or trigger actions."),t.a.createElement(i.a,{className:"mb-16",component:"div"},"While included here as a standalone component, the most common use will be in some form of input, so some of the behaviour demonstrated here is not shown in context."),t.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Chip"),t.a.createElement(i.a,{className:"mb-16",component:"div"},'Examples of Chips, using an image Avatar, SVG Icon Avatar, "Letter" and (string) Avatar.'),t.a.createElement("ul",null,t.a.createElement("li",null,"Chips with the ",t.a.createElement("code",null,"onClick")," property defined change appearance on focus, hover, and click."),t.a.createElement("li",null,"Chips with the ",t.a.createElement("code",null,"onDelete")," property defined will display a delete icon which changes appearance on hover.")),t.a.createElement(i.a,{className:"mb-16",component:"div"},t.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1909).default,raw:n(1910)})),t.a.createElement(i.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Outlined Chips"),t.a.createElement(i.a,{className:"mb-16",component:"div"},"Outlined chips offer an alternative style."),t.a.createElement(i.a,{className:"mb-16",component:"div"},t.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1911).default,raw:n(1912)})),t.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Chip array"),t.a.createElement(i.a,{className:"mb-16",component:"div"},"An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array. Note that since no",t.a.createElement("code",null,"onClick")," property is defined, the Chip can be focused, but does not gain depth while clicked or touched."),t.a.createElement(i.a,{className:"mb-16",component:"div"},t.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1913).default,raw:n(1915)})),t.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Small Chip"),t.a.createElement(i.a,{className:"mb-16",component:"div"},"You can use the ",t.a.createElement("code",null,"size")," prop to define a small Chip."),t.a.createElement(i.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Default variant"),t.a.createElement(i.a,{className:"mb-16",component:"div"},t.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1916).default,raw:n(1917)})),t.a.createElement(i.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Outlined variant"),t.a.createElement(i.a,{className:"mb-16",component:"div"},t.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1918).default,raw:n(1919)})),t.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Chip Playground"),t.a.createElement(i.a,{className:"mb-16",component:"div"},t.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1920).default,raw:n(1921)})),t.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),t.a.createElement(i.a,{className:"mb-16",component:"div"},"If the Chip is deletable or clickable then it is a button in tab order. When the Chip is focused (e.g. when tabbing) releasing (",t.a.createElement("code",null,"keyup")," event) ",t.a.createElement("code",null,"Backspace")," or ",t.a.createElement("code",null,"Delete")," will call the ",t.a.createElement("code",null,"onDelete")," handler while releasing ",t.a.createElement("code",null,"Escape")," will blur the Chip."))}}}]);