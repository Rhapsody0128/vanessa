(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["back_order"],{"159b":function(t,e,s){var a=s("da84"),r=s("fdbc"),n=s("17c2"),o=s("9112");for(var c in r){var i=a[c],l=i&&i.prototype;if(l&&l.forEach!==n)try{o(l,"forEach",n)}catch(u){l.forEach=n}}},1790:function(t,e,s){"use strict";var a=s("e8c6"),r=s.n(a);r.a},"17c2":function(t,e,s){"use strict";var a=s("b727").forEach,r=s("a640"),n=s("ae40"),o=r("forEach"),c=n("forEach");t.exports=o&&c?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,s){"use strict";var a=s("23e7"),r=s("17c2");a({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},a640:function(t,e,s){"use strict";var a=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&a((function(){s.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,s){var a=s("83ab"),r=s("d039"),n=s("5135"),o=Object.defineProperty,c={},i=function(t){throw t};t.exports=function(t,e){if(n(c,t))return c[t];e||(e={});var s=[][t],l=!!n(e,"ACCESSORS")&&e.ACCESSORS,u=n(e,0)?e[0]:i,d=n(e,1)?e[1]:void 0;return c[t]=!!s&&!r((function(){if(l&&!a)return!0;var t={length:-1};l?o(t,1,{enumerable:!0,get:i}):t[1]=1,s.call(t,u,d)}))}},b727:function(t,e,s){var a=s("0366"),r=s("44ad"),n=s("7b0b"),o=s("50c4"),c=s("65f0"),i=[].push,l=function(t){var e=1==t,s=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(p,h,v,m){for(var C,y,L=n(p),S=r(L),_=a(h,v,3),x=o(S.length),k=0,b=m||c,g=e?b(p,x):s?b(p,0):void 0;x>k;k++)if((f||k in S)&&(C=S[k],y=_(C,k,L),t))if(e)g[k]=y;else if(y)switch(t){case 3:return!0;case 5:return C;case 6:return k;case 2:i.call(g,C)}else if(u)return!1;return d?-1:l||u?u:g}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},bbf1:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"back_order"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("vs-table",{attrs:{multiple:"",data:t.datas},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,(function(e,r){return s("vs-tr",{key:r,attrs:{data:e}},[s("vs-td",{attrs:{data:a[r].name}},[s("span",{staticClass:"text"},[t._v(t._s(a[r].name))])]),s("vs-td",{attrs:{data:a[r].phone}},[s("span",{staticClass:"text"},[t._v(t._s(a[r].phone))])]),s("vs-td",{attrs:{data:a[r].peoplecount}},[s("span",{staticClass:"text"},[t._v(t._s(a[r].peoplecount))])]),s("vs-td",{attrs:{data:a[r].date}},[s("span",{staticClass:"text"},[t._v(t._s(a[r].date))])]),s("vs-td",{attrs:{data:a[r].time}},[s("span",{staticClass:"text"},[t._v(t._s(a[r].time))])]),s("vs-td",{attrs:{data:a[r].remarks}},[s("span",{staticClass:"text"},[t._v(t._s(a[r].remarks))])])],1)}))}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("template",{slot:"header"},[s("h1",{staticClass:"title text-center"},[t._v("訂位資訊")])]),s("template",{slot:"thead"},[s("vs-th",{staticClass:"item",attrs:{"sort-key":"name"}},[t._v("姓名")]),s("vs-th",{staticClass:"item",attrs:{"sort-key":"phone"}},[t._v("電話")]),s("vs-th",{staticClass:"item",attrs:{"sort-key":"peoplecount"}},[t._v("人數")]),s("vs-th",{staticClass:"item",attrs:{"sort-key":"date"}},[t._v("日期")]),s("vs-th",{staticClass:"item",attrs:{"sort-key":"time"}},[t._v("時間")]),s("vs-th",{staticClass:"item",attrs:{"sort-key":"remarks"}},[t._v("備註")])],1)],2),s("div",{staticClass:"d-flex mt-3 justify-content-center"},[s("vs-button",{attrs:{color:"danger",type:"filled"},on:{click:function(e){return t.openConfirm()}}},[t._v("刪除")])],1)],1)])])},r=[],n=(s("4160"),s("159b"),{data:function(){return{index:"",datas:[],selected:[]}},methods:{openConfirm:function(){this.$vs.dialog({type:"confirm",color:"danger",title:"確認刪除",text:"確認刪除所選項目嗎",accept:this.acceptAlert})},acceptAlert:function(t){var e=this;this.selected.length<1?this.$vs.notify({color:"danger",title:"錯誤",text:"未選擇刪除所選項目"}):(this.$vs.notify({color:"primary",title:"已刪除",text:"已順利刪除所選項目"}),this.selected.forEach((function(t){e.axios.post("https://vanessa-rhapsody.herokuapp.com/cancelorder",{account:t.account}).then((function(t){t.data.success?(e.$swal("成功","取消成功","success"),e.axios.post("https://vanessa-rhapsody.herokuapp.com/allorder").then((function(t){e.datas=t.data.result}))):e.$swal("錯誤","".concat(t.data.message),"error")})).catch((function(t){e.$swal("錯誤","".concat(t.response.data.message),"error")}))})))}},mounted:function(){var t=this;this.axios.post("https://vanessa-rhapsody.herokuapp.com/allorder").then((function(e){t.datas=e.data.result})).catch((function(e){t.$swal("錯誤","".concat(e.response.data.message),"error")}))}}),o=n,c=(s("1790"),s("2877")),i=Object(c["a"])(o,a,r,!1,null,null,null);e["default"]=i.exports},e8c6:function(t,e,s){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=back_order.e664bf89.js.map