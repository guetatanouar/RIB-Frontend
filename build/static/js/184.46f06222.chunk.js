(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[184],{2644:function(e,a,t){"use strict";t.r(a);var n=t(107),r=t(132),l=t(1274),s=t(1285),c=t(1292),m=t(1296),o=t(1220),i=t(1271),d=t(1265),u=t(83),p=t(1290),f=t(197),b=t(2),h=t(0),w=t.n(h),g=t(31),E=Object(d.a)((function(e){return{root:{background:"radial-gradient(".concat(Object(u.darken)(e.palette.primary.dark,.5)," 0%, ").concat(e.palette.primary.dark," 80%)"),color:e.palette.primary.contrastText}}}));a.default=function(){var e=E(),a=Object(r.c)({name:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1}),t=a.form,d=a.handleChange,u=a.resetForm;return w.a.createElement("div",{className:Object(b.default)(e.root,"flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32")},w.a.createElement("div",{className:"flex flex-col items-center justify-center w-full"},w.a.createElement(n.a,{animation:"transition.expandIn"},w.a.createElement(s.a,{className:"w-full max-w-384 rounded-8"},w.a.createElement(c.a,{className:"flex flex-col items-center justify-center p-32"},w.a.createElement("img",{className:"w-128 m-32",src:"assets/images/logos/fuse.svg",alt:"logo"}),w.a.createElement(f.a,{variant:"h6",className:"mt-16 mb-32 font-bold text-20 sm:text-24"},"Create an account"),w.a.createElement("form",{name:"registerForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:function(e){e.preventDefault(),u()}},w.a.createElement(p.a,{className:"mb-16",label:"Name",autoFocus:!0,type:"name",name:"name",value:t.name,onChange:d,variant:"outlined",required:!0,fullWidth:!0}),w.a.createElement(p.a,{className:"mb-16",label:"Email",type:"email",name:"email",value:t.email,onChange:d,variant:"outlined",required:!0,fullWidth:!0}),w.a.createElement(p.a,{className:"mb-16",label:"Password",type:"password",name:"password",value:t.password,onChange:d,variant:"outlined",required:!0,fullWidth:!0}),w.a.createElement(p.a,{className:"mb-16",label:"Password (Confirm)",type:"password",name:"passwordConfirm",value:t.passwordConfirm,onChange:d,variant:"outlined",required:!0,fullWidth:!0}),w.a.createElement(o.a,{className:"items-center"},w.a.createElement(i.a,{control:w.a.createElement(m.a,{name:"acceptTermsConditions",checked:t.acceptTermsConditions,onChange:d}),label:"I read and accept terms and conditions"})),w.a.createElement(l.a,{variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"Register",disabled:!(t.email.length>0&&t.password.length>0&&t.password.length>3&&t.password===t.passwordConfirm&&t.acceptTermsConditions),type:"submit"},"Create an account")),w.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},w.a.createElement("span",{className:"font-medium"},"Already have an account?"),w.a.createElement(g.a,{className:"font-medium",to:"/pages/auth/login"},"Login")))))))}}}]);