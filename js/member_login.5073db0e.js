(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["member_login"],{"5d76":function(t,e,s){},6890:function(t,e,s){"use strict";var a=s("5d76"),o=s.n(a);o.a},a569:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"member_login"}},[s("h1",{staticClass:"text-center mt-4 mb-4"},[t._v("會員專區")]),s("div",{staticClass:"container all",style:t.allstyle},[s("form",{staticClass:"order",style:t.orderstyle},[s("fieldset",{staticClass:"p-2 fieldset m-2 m-lg-5"},[s("legend",{staticClass:"legend"},[t._v("訂位")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col d-flex flex-wrap justify-content-center"},[s("div",{staticClass:"col-12 col-lg-6 d-flex flex-wrap justify-content-center mt-3 align-items-center"},[s("label",{staticClass:"col-12 col-lg-4 text",attrs:{for:"name"}},[t._v("姓名：")]),s("b-form-input",{staticClass:"col-12 col-lg-8 p-lg-2",attrs:{id:"name",state:t.nameState,placeholder:"請輸入姓名",trim:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),s("b-form-text",{staticClass:"col-6"})],1),s("div",{staticClass:"col-12 col-lg-6 d-flex flex-wrap justify-content-center mt-3 align-items-center"},[s("label",{staticClass:"col-12 col-lg-4 text",attrs:{for:"phone"}},[t._v("電話：")]),s("b-form-input",{staticClass:"col-12 col-lg-8 p-lg-2",attrs:{id:"phone",state:t.phoneState,placeholder:"請輸入電話",trim:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),s("b-form-text",{staticClass:"col-6"})],1)])]),s("div",{staticClass:"row "},[s("div",{staticClass:"col-12 col-lg-6 d-flex align-items-center flex-wrap"},[t._m(0),s("div",{staticClass:"col-12 col-lg-8 text mt-2"},[s("v-date-picker",{model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)]),s("div",{staticClass:"col-12 col-lg-6 d-flex align-items-center flex-wrap"},[t._m(1),s("div",{staticClass:"col-12 col-lg-8 pl-4"},[s("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:t.peoplecount}},[s("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("1")}}},[t._v("1人")]),s("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("2")}}},[t._v("2人")]),s("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("3")}}},[t._v("3人")]),s("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("4")}}},[t._v("4人")]),s("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("5")}}},[t._v("5人")]),s("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("6")}}},[t._v("6人")]),s("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("7")}}},[t._v("7人")]),s("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("8")}}},[t._v("8人")]),s("b-dropdown-item",{on:{click:function(e){return t.changepeoplecount("9")}}},[t._v("8人以上")])],1)],1)])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg-6 d-flex align-items-center flex-wrap"},[t._m(2),s("div",{staticClass:"col-12 col-lg-8 text mt-2"},[s("b-form-timepicker",{attrs:{locale:"tw"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),s("div",{staticClass:"mt-2"})],1)]),s("div",{staticClass:"col-12 col-lg-6 d-flex align-items-center flex-wrap"},[t._m(3),s("div",{staticClass:"col-12 col-lg-8 text mt-2"},[s("b-form-textarea",{attrs:{id:"textarea",placeholder:"請輸入備註...",rows:"3","max-rows":"6"},model:{value:t.remarks,callback:function(e){t.remarks=e},expression:"remarks"}})],1)])]),s("div",{staticClass:"row mt-5 justify-content-center align-items-center flex-nowrap"},[s("div",{staticClass:"col-lg-2 text-right"},[s("button",{staticClass:"btn btn-primary",on:{click:t.order}},[t._v("確認")])]),t._m(4)])]),s("button",{staticClass:"btn btn-light toggle",on:{click:t.changetoggle}},[t._v("查看訂位")])]),s("form",{staticClass:"check",style:t.checkstyle},[s("fieldset",{staticClass:"p-2 fieldset m-2 m-lg-5"},[s("legend",{staticClass:"legend"},[t._v("查詢")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 pl-5 pt-4 "},[s("p",{staticClass:"text"},[t._v("姓名："+t._s(t.orderedname))]),s("p",{staticClass:"text"},[t._v("電話："+t._s(t.orderedphone))]),s("p",{staticClass:"text"},[t._v("人數："+t._s(t.orderedpeoplecount))]),s("p",{staticClass:"text"},[t._v("日期："+t._s(t.ordereddate))]),s("p",{staticClass:"text"},[t._v("時間："+t._s(t.orderedtime))]),s("p",{staticClass:"text"},[t._v("備註："+t._s(t.orderedremarks))])])]),s("div",{staticClass:"row mt-3 justify-content-center align-items-center flex-nowrap"},[s("div",{staticClass:"col-lg-2 text-center"},[s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn btn-danger"},[t._v("取消訂位")]),s("b-modal",{attrs:{id:"modal-1",title:"取消訂位"},on:{ok:t.cancelorder}},[s("p",{staticClass:"my-4"},[t._v("確定要取消訂位?")])])],1)])]),s("button",{staticClass:"btn btn-light toggle",on:{click:t.changetoggle}},[t._v("前往訂位")])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-lg-4 mt-2"},[s("p",{staticClass:"text col"},[t._v("日期：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-lg-4 mt-3 p-lg-0"},[s("p",{staticClass:"text col"},[t._v("人數：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-lg-4 mt-2"},[s("p",{staticClass:"text col"},[t._v("時間：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-lg-4 mt-2"},[s("p",{staticClass:"text"},[t._v("備註：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-2 text-left"},[s("button",{staticClass:"btn btn-danger"},[t._v("重寫")])])}],c=(s("b0c0"),{data:function(){return{date:new Date,name:"",phone:"",peoplecount:"",time:"",remarks:"",orderedname:"",ordereddate:"",orderedphone:"",orderedpeoplecount:"",orderedtime:"",orderedremarks:"",orderstyle:{},checkstyle:{},allstyle:{},toggle:!1}},methods:{changepeoplecount:function(t){this.peoplecount=t,"9"===t&&(this.peoplecount="8人以上")},order:function(){var t=this;this.axios.post("https://vanessa-rhapsody.herokuapp.com//order",{account:this.account,name:this.name,phone:this.phone,peoplecount:this.peoplecount,time:this.time,remarks:this.remarks,date:this.date}).then((function(e){e.data.success?(t.$swal("成功","訂位成功","success"),t.orderedname=e.data.result.name,t.orderedphone=e.data.result.phone,t.orderedpeoplecount=e.data.result.peoplecount,t.ordereddate=e.data.result.date.substr(0,10),t.orderedtime=e.data.result.time,t.orderedremarks=e.data.result.remarks):t.$swal("錯誤","".concat(e.data.message),"error")})).catch((function(e){t.$swal("錯誤","".concat(e.response.data.message),"error")}))},cancelorder:function(){var t=this;this.axios.post("https://vanessa-rhapsody.herokuapp.com//cancelorder",{account:this.account}).then((function(e){e.data.success?(t.$swal("成功","取消成功","success"),t.orderedname="",t.orderedphone="",t.orderedpeoplecount="",t.ordereddate="",t.orderedtime="",t.orderedremarks=""):t.$swal("錯誤","".concat(e.data.message),"error")})).catch((function(e){t.$swal("錯誤","".concat(e.response.data.message),"error")}))},changetoggle:function(){this.toggle=!this.toggle,this.toggle?(this.allstyle={transform:"rotateY(180deg)"},this.orderstyle={pointerEvents:"none",opacity:"0"},this.checkstyle={pointerEvents:"auto",opacity:"1"}):(this.allstyle={transform:"rotateY(0deg)"},this.orderstyle={pointerEvents:"auto",opacity:"1"},this.checkstyle={pointerEvents:"none",opacity:"0"})}},computed:{nameState:function(){return this.name.length>0},phoneState:function(){return this.phone.length>6},account:function(){return this.$store.getters.account}},mounted:function(){var t=this;this.axios.post("https://vanessa-rhapsody.herokuapp.com//checkorder",{account:this.account}).then((function(e){e.data.result.length>0?(t.orderedname=e.data.result[0].name,t.orderedphone=e.data.result[0].phone,t.orderedpeoplecount=e.data.result[0].peoplecount,t.ordereddate=e.data.result[0].date.substr(0,10),t.orderedtime=e.data.result[0].time,t.orderedremarks=e.data.result[0].remarks):console.log("ordered not found")})),this.axios.post("https://vanessa-rhapsody.herokuapp.com//getuserinfo",{account:this.account}).then((function(e){e.data.success&&(t.name=e.data.result[0].name,t.phone=e.data.result[0].phone)}))}}),n=c,l=(s("6890"),s("2877")),r=Object(l["a"])(n,a,o,!1,null,"3c482be2",null);e["default"]=r.exports}}]);
//# sourceMappingURL=member_login.5073db0e.js.map