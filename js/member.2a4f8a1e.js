(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["member"],{2317:function(t,e,s){"use strict";var a=s("8e08"),l=s.n(a);l.a},2532:function(t,e,s){"use strict";var a=s("23e7"),l=s("5a34"),c=s("1d80"),o=s("ab13");a({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(c(this)).indexOf(l(t),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,s){"use strict";var a=s("6eeb"),l=s("825a"),c=s("d039"),o=s("ad6d"),n="toString",i=RegExp.prototype,r=i[n],d=c((function(){return"/a/b"!=r.call({source:"a",flags:"b"})})),u=r.name!=n;(d||u)&&a(RegExp.prototype,n,(function(){var t=l(this),e=String(t.source),s=t.flags,a=String(void 0===s&&t instanceof RegExp&&!("flags"in i)?o.call(t):s);return"/"+e+"/"+a}),{unsafe:!0})},4903:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"member"}},[s("h1",{staticClass:"text-center mt-4 mb-4"},[t._v("會員專區")]),s("div",{staticClass:"container"},[s("form",[s("fieldset",{staticClass:"p-2 fieldset m-2 m-lg-5"},[s("legend",{staticClass:"legend"},[t._v("登入")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col d-flex flex-wrap justify-content-center"},[s("div",{staticClass:"col-12 col-lg-6 d-flex flex-wrap justify-content-center mt-3 align-items-center"},[s("label",{staticClass:"col-12 col-lg-4 text",attrs:{for:"loginaccount"}},[t._v("帳號：")]),s("b-form-input",{staticClass:"col-12 col-lg-8 p-lg-2",attrs:{id:"loginaccount",state:t.loginaccountState,placeholder:"請輸入至少8個字",trim:""},model:{value:t.loginaccount,callback:function(e){t.loginaccount=e},expression:"loginaccount"}},[t._v(">")]),s("b-form-text",{staticClass:"col-6"})],1),s("div",{staticClass:"col-12 col-lg-6 d-flex flex-wrap justify-content-center mt-3 align-items-center"},[s("label",{staticClass:"col-12 col-lg-4 text",attrs:{for:"loginpassword"}},[t._v("密碼：")]),s("b-form-input",{staticClass:"col-12 col-lg-8 p-lg-2",attrs:{id:"logingpassword",state:t.loginpasswordState,type:"password",placeholder:"請輸入至少8個字",trim:""},model:{value:t.loginpassword,callback:function(e){t.loginpassword=e},expression:"loginpassword"}},[t._v(">")]),s("b-form-text",{staticClass:"col-6"})],1)])]),s("div",{staticClass:"row mt-5 justify-content-center align-items-center flex-nowrap"},[s("div",{staticClass:"col-lg-2 text-right"},[s("button",{staticClass:"btn btn-primary",on:{click:t.login}},[t._v("確認")])]),t._m(0)])])]),s("form",[s("fieldset",{staticClass:"p-2 fieldset m-2 m-lg-5"},[s("legend",{staticClass:"legend"},[t._v("註冊")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col d-flex flex-wrap justify-content-center"},[s("div",{staticClass:"col-12 col-lg-6 d-flex flex-wrap justify-content-center mt-3 align-items-center"},[s("label",{staticClass:"col-12 col-lg-4 text",attrs:{for:"name"}},[t._v("姓名：")]),s("b-form-input",{staticClass:"col-12 col-lg-8 p-lg-2",attrs:{id:"name",state:t.nameState,placeholder:"請輸入姓名",trim:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),s("b-form-text",{staticClass:"col-6"})],1),s("div",{staticClass:"col-12 col-lg-6 d-flex flex-wrap justify-content-center mt-3 align-items-center"},[s("label",{staticClass:"col-12 col-lg-4 text",attrs:{for:"account"}},[t._v("帳號：")]),s("b-form-input",{staticClass:"col-12 col-lg-8 p-lg-2",attrs:{id:"account",state:t.accountState,placeholder:"請輸入至少8個字",trim:""},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}},[t._v(">")]),s("b-form-text",{staticClass:"col-6"})],1)])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col d-flex flex-wrap justify-content-center"},[s("div",{staticClass:"col-12 col-lg-6 d-flex flex-wrap justify-content-center mt-3 align-items-center"},[s("label",{staticClass:"col-12 col-lg-4 text",attrs:{for:"password"}},[t._v("密碼：")]),s("b-form-input",{staticClass:"col-12 col-lg-8 p-lg-2",attrs:{id:"password",state:t.passwordState,type:"password",placeholder:"請輸入至少8個字",trim:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[t._v(">")]),s("b-form-text",{staticClass:"col-6"})],1),s("div",{staticClass:"col-12 col-lg-6 d-flex flex-wrap justify-content-center mt-3 align-items-center"},[s("label",{staticClass:"col-12 col-lg-4 text",attrs:{for:"repassword"}},[t._v("確認：")]),s("b-form-input",{staticClass:"col-12 col-lg-8 p-lg-2",attrs:{id:"repassword",state:t.repasswordState,placeholder:"請輸入至少8個字",trim:""},model:{value:t.repassword,callback:function(e){t.repassword=e},expression:"repassword"}},[t._v(">")]),s("b-form-text",{staticClass:"col-6"})],1)])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col d-flex flex-wrap justify-content-center"},[s("div",{staticClass:"col-12 col-lg-6 d-flex flex-wrap justify-content-center mt-3 align-items-center"},[s("label",{staticClass:"col-12 col-lg-4 text",attrs:{for:"phone"}},[t._v("電話：")]),s("b-form-input",{staticClass:"col-12 col-lg-8 p-lg-2",attrs:{id:"phone",state:t.phoneState,placeholder:"請輸入電話號碼",trim:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}},[t._v(">")]),s("b-form-text",{staticClass:"col-6"})],1),s("div",{staticClass:"col-12 col-lg-6 d-flex flex-wrap justify-content-center mt-3 align-items-center"},[s("label",{staticClass:"col-12 col-lg-4 text",attrs:{for:"email"}},[t._v("信箱：")]),s("b-form-input",{staticClass:"col-12 col-lg-8 p-lg-2",attrs:{id:"email",state:t.emailState,placeholder:"請輸入E-mail",trim:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("b-form-text",{staticClass:"col-6"})],1)])]),s("div",{staticClass:"row justify-content-center align-items-center mt-5"},[s("div",{staticClass:"col-6 col-lg-2 text-right"},[s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn-success"},[t._v("會員須知")]),s("b-modal",{attrs:{id:"modal-1",title:"會員須知"}},[s("ul",{staticClass:"ml-5"},[s("li",[t._v("每天需繳3000會費")]),s("li",[t._v("要膜拜店長")]),s("li",[t._v("吃飯要付錢")])])])],1),s("div",{staticClass:"col-6 col-lg-2 mt-2 text-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var s=t.checked,a=e.target,l=!!a.checked;if(Array.isArray(s)){var c=null,o=t._i(s,c);a.checked?o<0&&(t.checked=s.concat([c])):o>-1&&(t.checked=s.slice(0,o).concat(s.slice(o+1)))}else t.checked=l}}}),t._v("我已經詳讀會員須知 ")])]),s("div",{staticClass:"row mt-5 justify-content-center align-items-center flex-nowrap"},[s("div",{staticClass:"col-lg-2 text-right"},[s("button",{staticClass:"btn btn-primary",on:{click:t.registering}},[t._v("確認")])]),t._m(1)])])])])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-2 text-left"},[s("button",{staticClass:"btn btn-danger"},[t._v("重寫")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-2 text-left"},[s("button",{staticClass:"btn btn-danger"},[t._v("重寫")])])}],c=(s("99af"),s("caad"),s("b0c0"),s("d3b7"),s("25f0"),s("2532"),{data:function(){return{name:"",account:"",password:"",repassword:"",phone:"",email:"",loginaccount:"",loginpassword:"",checked:!1}},computed:{nameState:function(){return this.name.length>0},accountState:function(){return this.account.length>7},passwordState:function(){return this.password.length>7},repasswordState:function(){return this.repassword===this.password},phoneState:function(){return this.phone.length>6},emailState:function(){return this.email.includes("@")},loginaccountState:function(){return this.loginaccount.length>7},loginpasswordState:function(){return this.loginpassword.length>7}},methods:{registering:function(){var t=this;if(this.checked){var e=Math.floor(10*Math.random()),s=Math.floor(100*Math.random()),a=prompt("".concat(e,"+").concat(s,"=?")),l=(e+s).toString();console.log(l),a===l?this.axios.post("http://localhost:3000/registering",{name:this.name,account:this.account,password:this.password,phone:this.phone,email:this.email}).then((function(e){e.data.success?(t.$swal("成功","註冊成功","success"),t.name="",t.account="",t.password="",t.repassword="",t.phone="",t.email=""):t.$swal("錯誤","".concat(e.data.message),"error")})):this.$swal("錯誤","驗證錯誤","error")}else this.$swal("未勾選","請先閱讀會員須知","question")},login:function(){var t=this;this.axios.post("http://localhost:3000/login",{account:this.loginaccount,password:this.loginpassword}).then((function(e){e.data.success?(t.$swal("成功","登入成功","success"),t.$store.commit("login",e.data.name),t.$router.push("/member_login")):alert(e.data.message)}))}}}),o=c,n=(s("2317"),s("2877")),i=Object(n["a"])(o,a,l,!1,null,null,null);e["default"]=i.exports},"5a34":function(t,e,s){var a=s("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"8e08":function(t,e,s){},ab13:function(t,e,s){var a=s("b622"),l=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[l]=!1,"/./"[t](e)}catch(a){}}return!1}},ae40:function(t,e,s){var a=s("83ab"),l=s("d039"),c=s("5135"),o=Object.defineProperty,n={},i=function(t){throw t};t.exports=function(t,e){if(c(n,t))return n[t];e||(e={});var s=[][t],r=!!c(e,"ACCESSORS")&&e.ACCESSORS,d=c(e,0)?e[0]:i,u=c(e,1)?e[1]:void 0;return n[t]=!!s&&!l((function(){if(r&&!a)return!0;var t={length:-1};r?o(t,1,{enumerable:!0,get:i}):t[1]=1,s.call(t,d,u)}))}},caad:function(t,e,s){"use strict";var a=s("23e7"),l=s("4d64").includes,c=s("44d2"),o=s("ae40"),n=o("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!n},{includes:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),c("includes")}}]);
//# sourceMappingURL=member.2a4f8a1e.js.map