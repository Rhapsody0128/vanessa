(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["back_menu"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?c(t):i(r(t))}},2532:function(t,e,n){"use strict";var r=n("23e7"),i=n("5a34"),o=n("1d80"),s=n("ab13");r({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(o(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},2620:function(t,e,n){"use strict";var r=n("ad99"),i=n.n(r);i.a},"2a21":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"back_order"}},[n("form",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 col-12 mt-5 d-flex justify-content-center flex-wrap"},[n("h3",{staticClass:"title mb-4 col-12"},[t._v("餐點名稱")]),n("vs-input",{staticClass:"inputx col-12",attrs:{"label-placeholder":"餐點名稱"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("div",{staticClass:"col-lg-4 col-12 mt-5 d-flex justify-content-center flex-wrap"},[n("h3",{staticClass:"title mb-4 col-12"},[t._v("餐點定價")]),n("vs-input",{staticClass:"inputx col-12",attrs:{type:"number","label-placeholder":"餐點定價"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),n("div",{staticClass:"col-lg-4 col-12 mt-5 d-flex justify-content-center flex-wrap"},[n("h3",{staticClass:"title mb-4 col-12"},[t._v("餐點類型")]),n("vs-dropdown",{staticClass:"col-12"},[n("vs-button",{staticClass:"btn-drop col-12",attrs:{type:"filled"}},[t._v(t._s(t.type))]),n("vs-dropdown-menu",{staticClass:"w-25"},[n("vs-dropdown-item",{on:{click:function(e){return t.selecttype("前菜")}}},[t._v("前菜")]),n("vs-dropdown-item",{on:{click:function(e){return t.selecttype("沙拉")}}},[t._v("沙拉")]),n("vs-dropdown-item",{on:{click:function(e){return t.selecttype("主餐")}}},[t._v("主餐")]),n("vs-dropdown-item",{on:{click:function(e){return t.selecttype("披薩")}}},[t._v("披薩")]),n("vs-dropdown-item",{on:{click:function(e){return t.selecttype("湯品")}}},[t._v("湯品")]),n("vs-dropdown-item",{on:{click:function(e){return t.selecttype("甜點")}}},[t._v("甜點")]),n("vs-dropdown-item",{on:{click:function(e){return t.selecttype("鬆餅")}}},[t._v("鬆餅")]),n("vs-dropdown-item",{on:{click:function(e){return t.selecttype("飲料")}}},[t._v("飲料")])],1)],1)],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 col-12 mt-5 d-flex justify-content-center flex-wrap"},[n("h3",{staticClass:"title mb-4 col-12"},[t._v("餐點圖片")]),n("b-form-file",{attrs:{state:t.state,placeholder:"選擇檔案或拖曳至此","drop-placeholder":"將檔案拖曳至此","requiredbrowse-text":"瀏覽",accept:"image/*"},on:{input:t.validateFile},model:{value:t.src,callback:function(e){t.src=e},expression:"src"}}),n("p",[t._v("圖片請在1MB以下")])],1),n("div",{staticClass:"col-lg-6 col-12 mt-5 d-flex justify-content-center flex-wrap"},[n("h3",{staticClass:"title mb-4 col-12"},[t._v("餐點描述")]),n("vs-textarea",{staticClass:"col-12",attrs:{label:"餐點描述"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)]),n("div",{staticClass:"row mt-5 justify-content-center align-items-center flex-nowrap"},[n("div",{staticClass:"col-lg-2 text-right"},[n("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:t.addmeal}},[t._v("新增")])],1),n("div",{staticClass:"col-lg-2 text-left"},[n("vs-button",{attrs:{color:"danger",type:"filled"}},[t._v("重寫")])],1)])]),n("hr")])},i=[],o=(n("a4d3"),n("e01a"),n("caad"),n("2532"),{data:function(){return{title:"a",value:12,type:"主餐",description:"a",src:"",state:null}},methods:{selecttype:function(t){this.type=t},validateFile:function(){null!=this.src&&(this.src.size>=1048576||!this.src.type.includes("image")?(this.state=!1,this.src=null):this.state=!0)},addmeal:function(){var t=this;if(this.title.length<1)this.$swal("錯誤","未輸入餐點名稱","error");else if(this.value.length<1)this.$swal("錯誤","未輸入價格","error");else if("類型"===this.type)this.$swal("錯誤","未選擇類型","error");else if(this.description.length<1)this.$swal("錯誤","無餐點描述","error");else{this.$swal("完成","已成功新增菜單","success");var e=new FormData;e.append("title",this.title),e.append("value",this.value),e.append("type",this.type),e.append("src",this.src),e.append("description",this.description),console.log(e),this.title="",this.value="",this.type="類型",this.src=null,this.description="",this.axios.post("http://localhost:3000/addmeal",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){console.log(t)})).catch((function(e){t.$swal("錯誤","".concat(e.response.data.message),"error")}))}}}}),s=o,c=(n("2620"),n("2877")),a=Object(c["a"])(s,r,i,!1,null,null,null);e["default"]=a.exports},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),o=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("c430"),c=n("83ab"),a=n("4930"),l=n("fdbf"),u=n("d039"),f=n("5135"),d=n("e8b5"),p=n("861d"),v=n("825a"),h=n("7b0b"),b=n("fc6a"),y=n("c04e"),m=n("5c6c"),g=n("7c73"),w=n("df75"),S=n("241c"),x=n("057f"),C=n("7418"),O=n("06cf"),_=n("9bf2"),j=n("d1e7"),k=n("9112"),E=n("6eeb"),P=n("5692"),$=n("f772"),F=n("d012"),N=n("90e3"),T=n("b622"),A=n("e538"),J=n("746f"),R=n("d44e"),D=n("69f3"),I=n("b727").forEach,q=$("hidden"),z="Symbol",B="prototype",M=T("toPrimitive"),Q=D.set,W=D.getterFor(z),G=Object[B],H=i.Symbol,K=o("JSON","stringify"),L=O.f,U=_.f,V=x.f,X=j.f,Y=P("symbols"),Z=P("op-symbols"),tt=P("string-to-symbol-registry"),et=P("symbol-to-string-registry"),nt=P("wks"),rt=i.QObject,it=!rt||!rt[B]||!rt[B].findChild,ot=c&&u((function(){return 7!=g(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=L(G,e);r&&delete G[e],U(t,e,n),r&&t!==G&&U(G,e,r)}:U,st=function(t,e){var n=Y[t]=g(H[B]);return Q(n,{type:z,tag:t,description:e}),c||(n.description=e),n},ct=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},at=function(t,e,n){t===G&&at(Z,e,n),v(t);var r=y(e,!0);return v(n),f(Y,r)?(n.enumerable?(f(t,q)&&t[q][r]&&(t[q][r]=!1),n=g(n,{enumerable:m(0,!1)})):(f(t,q)||U(t,q,m(1,{})),t[q][r]=!0),ot(t,r,n)):U(t,r,n)},lt=function(t,e){v(t);var n=b(e),r=w(n).concat(vt(n));return I(r,(function(e){c&&!ft.call(n,e)||at(t,e,n[e])})),t},ut=function(t,e){return void 0===e?g(t):lt(g(t),e)},ft=function(t){var e=y(t,!0),n=X.call(this,e);return!(this===G&&f(Y,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(Y,e)||f(this,q)&&this[q][e])||n)},dt=function(t,e){var n=b(t),r=y(e,!0);if(n!==G||!f(Y,r)||f(Z,r)){var i=L(n,r);return!i||!f(Y,r)||f(n,q)&&n[q][r]||(i.enumerable=!0),i}},pt=function(t){var e=V(b(t)),n=[];return I(e,(function(t){f(Y,t)||f(F,t)||n.push(t)})),n},vt=function(t){var e=t===G,n=V(e?Z:b(t)),r=[];return I(n,(function(t){!f(Y,t)||e&&!f(G,t)||r.push(Y[t])})),r};if(a||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),n=function(t){this===G&&n.call(Z,t),f(this,q)&&f(this[q],e)&&(this[q][e]=!1),ot(this,e,m(1,t))};return c&&it&&ot(G,e,{configurable:!0,set:n}),st(e,t)},E(H[B],"toString",(function(){return W(this).tag})),E(H,"withoutSetter",(function(t){return st(N(t),t)})),j.f=ft,_.f=at,O.f=dt,S.f=x.f=pt,C.f=vt,A.f=function(t){return st(T(t),t)},c&&(U(H[B],"description",{configurable:!0,get:function(){return W(this).description}}),s||E(G,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:H}),I(w(nt),(function(t){J(t)})),r({target:z,stat:!0,forced:!a},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=H(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!c},{create:ut,defineProperty:at,defineProperties:lt,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:u((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(h(t))}}),K){var ht=!a||u((function(){var t=H();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var r,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),i[1]=e,K.apply(null,i)}})}H[B][M]||k(H[B],M,H[B].valueOf),R(H,z),F[q]=!0},ab13:function(t,e,n){var r=n("b622"),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},ad99:function(t,e,n){},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("5135"),s=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,e){if(o(c,t))return c[t];e||(e={});var n=[][t],l=!!o(e,"ACCESSORS")&&e.ACCESSORS,u=o(e,0)?e[0]:a,f=o(e,1)?e[1]:void 0;return c[t]=!!n&&!i((function(){if(l&&!r)return!0;var t={length:-1};l?s(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,u,f)}))}},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),s=n("50c4"),c=n("65f0"),a=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f;return function(p,v,h,b){for(var y,m,g=o(p),w=i(g),S=r(v,h,3),x=s(w.length),C=0,O=b||c,_=e?O(p,x):n?O(p,0):void 0;x>C;C++)if((d||C in w)&&(y=w[C],m=S(y,C,g),t))if(e)_[C]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return C;case 2:a.call(_,y)}else if(u)return!1;return f?-1:l||u?u:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2"),s=n("ae40"),c=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!c},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),s=n("5135"),c=n("861d"),a=n("9bf2").f,l=n("e893"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(d,u);var p=d.prototype=u.prototype;p.constructor=d;var v=p.toString,h="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;a(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=v.call(t);if(s(f,t))return"";var n=h?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=back_menu.cb5e908d.js.map