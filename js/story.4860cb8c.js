(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["story"],{cd9e:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"story"}},[e("h1",{staticClass:"text-center mt-4 mb-4"},[t._v("關於我們")]),e("div",{staticClass:"story p-0",style:t.storystyle},[e("div",{staticClass:"text"})]),e("div",{staticClass:"d-flex flex-wrap justify-content-start",attrs:{id:"flipbook"}},[e("flipbook",{staticClass:"flipbook col-12 col-lg-6 p-0",attrs:{pages:t.array,singlePage:!0}}),t._m(0)],1)])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"col-12 col-lg-6 pl-5 d-flex flex-column justify-content-center p-0"},[e("h2",[t._v("員工")]),e("p",[t._v("asdasd")])])}];function r(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(16===t.length)return t;if(6===t.length){var i=o();return i[0]=t[0],i[1]=t[1],i[4]=t[2],i[5]=t[3],i[12]=t[4],i[13]=t[5],i}throw new RangeError("Expected array with either 6 or 16 values.")}function o(){for(var t=[],i=0;i<16;i++)i%5==0?t.push(1):t.push(0);return t}function a(t,i){for(var e=r(t),n=r(i),s=[],o=0;o<4;o++)for(var a=[e[o],e[o+4],e[o+8],e[o+12]],h=0;h<4;h++){var l=4*h,c=[n[l],n[l+1],n[l+2],n[l+3]],u=a[0]*c[0]+a[1]*c[1]+a[2]*c[2]+a[3]*c[3];s[o+l]=u}return s}function h(t){var i=o();return i[11]=-1/t,i}function l(t){var i=Math.PI/180*t,e=o();return e[0]=e[10]=Math.cos(i),e[2]=e[8]=Math.sin(i),e[2]*=-1,e}function c(t){return"matrix3d("+r(t).join(", ")+")"}function u(t,i){var e=o();return e[12]=t,i&&(e[13]=i),e}function g(t,i,e){var n=o();return void 0!==t&&void 0!==i&&void 0!==e&&(n[12]=t,n[13]=i,n[14]=e),n}var f,d,p,m,v=function(){function t(t){t?t.m?this.m=[].concat(t.m):this.m=[].concat(t):this.m=o()}return t.prototype.clone=function(){return new t(this)},t.prototype.multiply=function(t){return this.m=a(this.m,t)},t.prototype.perspective=function(t){return this.multiply(h(t))},t.prototype.transformX=function(t){return(t*this.m[0]+this.m[12])/(t*this.m[3]+this.m[15])},t.prototype.translate=function(t,i){return this.multiply(u(t,i))},t.prototype.translate3d=function(t,i,e){return this.multiply(g(t,i,e))},t.prototype.rotateY=function(t){return this.multiply(l(t))},t.prototype.toString=function(){return c(this.m)},t}();d=function(t){return Math.pow(t,2)},m=function(t){return 1-d(1-t)},p=function(t){return t<.5?d(2*t)/2:.5+m(2*(t-.5))/2},f=/Trident/.test(navigator.userAgent);var y={props:{pages:{type:Array,required:!0},pagesHiRes:{type:Array,default:function(){return[]}},flipDuration:{type:Number,default:1e3},zoomDuration:{type:Number,default:500},zooms:{type:Array,default:function(){return[1,2,4]}},perspective:{type:Number,default:2400},nPolygons:{type:Number,default:10},ambient:{type:Number,default:.4},gloss:{type:Number,default:.6},swipeMin:{type:Number,default:3},singlePage:{type:Boolean,default:!1},forwardDirection:{validator:function(t){return"right"===t||"left"===t},default:"right"},centering:{type:Boolean,default:!0},startPage:{type:Number,default:null}},data:function(){return{viewWidth:0,viewHeight:0,imageWidth:null,imageHeight:null,displayedPages:1,nImageLoad:0,nImageLoadTrigger:0,imageLoadCallback:null,currentPage:0,firstPage:0,secondPage:1,zoomIndex:0,zoom:1,zooming:!1,touchStartX:null,touchStartY:null,maxMove:0,activeCursor:null,hasTouchEvents:!1,hasPointerEvents:!1,minX:Infinity,maxX:-Infinity,preloadedImages:{},flip:{progress:0,direction:null,frontImage:null,backImage:null,auto:!1,opacity:1},currentCenterOffset:null,animatingCenter:!1,startScrollLeft:0,startScrollTop:0,scrollLeft:0,scrollTop:0}},computed:{canFlipLeft:function(){return"left"===this.forwardDirection?this.canGoForward:this.canGoBack},canFlipRight:function(){return"right"===this.forwardDirection?this.canGoForward:this.canGoBack},canZoomIn:function(){return!this.zooming&&this.zoomIndex<this.zooms_.length-1},canZoomOut:function(){return!this.zooming&&this.zoomIndex>0},numPages:function(){return null===this.pages[0]?this.pages.length-1:this.pages.length},page:function(){return null!==this.pages[0]?this.currentPage+1:Math.max(1,this.currentPage)},zooms_:function(){return this.zooms||[1]},canGoForward:function(){return!this.flip.direction&&this.currentPage<this.pages.length-this.displayedPages},canGoBack:function(){return!this.flip.direction&&this.currentPage>=this.displayedPages&&!(1===this.displayedPages&&!this.pageUrl(this.firstPage-1))},leftPage:function(){return"right"===this.forwardDirection||1===this.displayedPages?this.firstPage:this.secondPage},rightPage:function(){return"left"===this.forwardDirection?this.firstPage:this.secondPage},showLeftPage:function(){return this.pageUrl(this.leftPage)},showRightPage:function(){return this.pageUrl(this.rightPage)&&2===this.displayedPages},cursor:function(){return this.activeCursor?this.activeCursor:f?"auto":this.canZoomIn?"zoom-in":this.canZoomOut?"zoom-out":"grab"},pageScale:function(){var t,i,e,n;return i=this.viewWidth/this.displayedPages,e=i/this.imageWidth,n=this.viewHeight/this.imageHeight,t=e<n?e:n,t<1?t:1},pageWidth:function(){return Math.round(this.imageWidth*this.pageScale)},pageHeight:function(){return Math.round(this.imageHeight*this.pageScale)},xMargin:function(){return(this.viewWidth-this.pageWidth*this.displayedPages)/2},yMargin:function(){return(this.viewHeight-this.pageHeight)/2},polygonWidth:function(){var t;return t=this.pageWidth/this.nPolygons,t=Math.ceil(t+1/this.zoom),t+"px"},polygonHeight:function(){return this.pageHeight+"px"},polygonBgSize:function(){return this.pageWidth+"px "+this.pageHeight+"px"},polygonArray:function(){return this.makePolygonArray("front").concat(this.makePolygonArray("back"))},boundingLeft:function(){var t;return 1===this.displayedPages?this.xMargin:(t=this.pageUrl(this.leftPage)?this.xMargin:this.viewWidth/2,t<this.minX?t:this.minX)},boundingRight:function(){var t;return 1===this.displayedPages?this.viewWidth-this.xMargin:(t=this.pageUrl(this.rightPage)?this.viewWidth-this.xMargin:this.viewWidth/2,t>this.maxX?t:this.maxX)},centerOffset:function(){var t;return t=this.centering?Math.round(this.viewWidth/2-(this.boundingLeft+this.boundingRight)/2):0,null===this.currentCenterOffset&&null!==this.imageWidth&&(this.currentCenterOffset=t),t},centerOffsetSmoothed:function(){return Math.round(this.currentCenterOffset)},dragToScroll:function(){return!this.hasTouchEvents},scrollLeftMin:function(){var t;return t=(this.boundingRight-this.boundingLeft)*this.zoom,t<this.viewWidth?(this.boundingLeft+this.centerOffsetSmoothed)*this.zoom-(this.viewWidth-t)/2:(this.boundingLeft+this.centerOffsetSmoothed)*this.zoom},scrollLeftMax:function(){var t;return t=(this.boundingRight-this.boundingLeft)*this.zoom,t<this.viewWidth?(this.boundingLeft+this.centerOffsetSmoothed)*this.zoom-(this.viewWidth-t)/2:(this.boundingRight+this.centerOffsetSmoothed)*this.zoom-this.viewWidth},scrollTopMin:function(){var t;return t=this.pageHeight*this.zoom,t<this.viewHeight?this.yMargin*this.zoom-(this.viewHeight-t)/2:this.yMargin*this.zoom},scrollTopMax:function(){var t;return t=this.pageHeight*this.zoom,t<this.viewHeight?this.yMargin*this.zoom-(this.viewHeight-t)/2:(this.yMargin+this.pageHeight)*this.zoom-this.viewHeight},scrollLeftLimited:function(){return Math.min(this.scrollLeftMax,Math.max(this.scrollLeftMin,this.scrollLeft))},scrollTopLimited:function(){return Math.min(this.scrollTopMax,Math.max(this.scrollTopMin,this.scrollTop))}},mounted:function(){return window.addEventListener("resize",this.onResize,{passive:!0}),this.onResize(),this.preloadImages(),this.zoom=this.zooms_[0],this.goToPage(this.startPage)},beforeDestroy:function(){return window.removeEventListener("resize",this.onResize,{passive:!0})},methods:{onResize:function(){var t;if(t=this.$refs.viewport,t)return this.viewWidth=t.clientWidth,this.viewHeight=t.clientHeight,this.displayedPages=this.viewWidth>this.viewHeight&&!this.singlePage?2:1,2===this.displayedPages&&(this.currentPage&=-2),this.fixFirstPage(),this.minX=Infinity,this.maxX=-Infinity},fixFirstPage:function(){if(1===this.displayedPages&&0===this.currentPage&&this.pages.length&&!this.pageUrl(0))return this.currentPage++},pageUrl:function(t,i){var e;return void 0===i&&(i=!1),i&&this.zoom>1&&!this.zooming&&(e=this.pagesHiRes[t],e)?e:this.pages[t]||null},flipLeft:function(){if(this.canFlipLeft)return this.flipStart("left",!0)},flipRight:function(){if(this.canFlipRight)return this.flipStart("right",!0)},makePolygonArray:function(t){var i,e,n,s,r,o,a,h,l,c,u,g,f,d,p,m,y,w,P,b,M,x,z,I,L,T,_;if(!this.flip.direction)return[];for(m=this.flip.progress,r=this.flip.direction,1===this.displayedPages&&r!==this.forwardDirection&&(m=1-m,r=this.forwardDirection),this.flip.opacity=1===this.displayedPages&&m>.7?1-(m-.7)/.3:1,a="front"===t?this.flip.frontImage:this.flip.backImage,i=a&&"url('"+a+"')",p=this.pageWidth/this.nPolygons,d=this.xMargin,u=!1,1===this.displayedPages?"right"===this.forwardDirection?"back"===t&&(u=!0,d=this.xMargin-this.pageWidth):"left"===r?"back"===t?d=this.pageWidth-this.xMargin:u=!0:"front"===t?d=this.pageWidth-this.xMargin:u=!0:"left"===r?"back"===t?d=this.viewWidth/2:u=!0:"front"===t?d=this.viewWidth/2:u=!0,g=new v,g.translate(this.viewWidth/2),g.perspective(this.perspective),g.translate(-this.viewWidth/2),g.translate(d,this.yMargin),f=0,m>.5&&(f=2*-(m-.5)*180),"left"===r&&(f=-f),"back"===t&&(f+=180),f&&(u&&g.translate(this.pageWidth),g.rotateY(f),u&&g.translate(-this.pageWidth)),z=m<.5?2*m*Math.PI:(1-2*(m-.5))*Math.PI,0===z&&(z=1e-9),P=this.pageWidth/z,w=0,n=z/this.nPolygons,x=n/2/Math.PI*180,s=n/Math.PI*180,u&&(x=-z/Math.PI*180+s/2),"back"===t&&(x=-x,s=-s),this.minX=Infinity,this.maxX=-Infinity,M=[],o=h=0,b=this.nPolygons;0<=b?h<b:h>b;o=0<=b?++h:--h)e=o/(this.nPolygons-1)*100+"% 0px",c=g.clone(),y=u?z-w:w,I=Math.sin(y)*P,u&&(I=this.pageWidth-I),_=(1-Math.cos(y))*P,"back"===t&&(_=-_),c.translate3d(I,0,_),c.rotateY(-x),L=c.transformX(0),T=c.transformX(p),this.maxX=Math.max(Math.max(L,T),this.maxX),this.minX=Math.min(Math.min(L,T),this.minX),l=this.computeLighting(f-x,s),w+=n,x+=s,M.push([t+o,i,l,e,c.toString(),Math.abs(Math.round(_))]);return M},computeLighting:function(t,i){var e,n,s,r,o,a,h;return o=[],a=[-.5,-.25,0,.25,.5],this.ambient<1&&(s=1-this.ambient,r=a.map((function(e){return(1-Math.cos((t-i*e)/180*Math.PI))*s})),o.push("linear-gradient(to right,\n  rgba(0, 0, 0, "+r[0]+"),\n  rgba(0, 0, 0, "+r[1]+") 25%,\n  rgba(0, 0, 0, "+r[2]+") 50%,\n  rgba(0, 0, 0, "+r[3]+") 75%,\n  rgba(0, 0, 0, "+r[4]+"))")),this.gloss>0&&!f&&(e=30,n=200,h=a.map((function(s){return Math.max(Math.pow(Math.cos((t+e-i*s)/180*Math.PI),n),Math.pow(Math.cos((t-e-i*s)/180*Math.PI),n))})),o.push("linear-gradient(to right,\n  rgba(255, 255, 255, "+h[0]*this.gloss+"),\n  rgba(255, 255, 255, "+h[1]*this.gloss+") 25%,\n  rgba(255, 255, 255, "+h[2]*this.gloss+") 50%,\n  rgba(255, 255, 255, "+h[3]*this.gloss+") 75%,\n  rgba(255, 255, 255, "+h[4]*this.gloss+"))")),o.join(",")},flipStart:function(t,i){var e=this;return t!==this.forwardDirection?1===this.displayedPages?(this.flip.frontImage=this.pageUrl(this.currentPage-1),this.flip.backImage=null):(this.flip.frontImage=this.pageUrl(this.firstPage),this.flip.backImage=this.pageUrl(this.currentPage-this.displayedPages+1)):1===this.displayedPages?(this.flip.frontImage=this.pageUrl(this.currentPage),this.flip.backImage=null):(this.flip.frontImage=this.pageUrl(this.secondPage),this.flip.backImage=this.pageUrl(this.currentPage+this.displayedPages)),this.flip.direction=t,this.flip.progress=0,requestAnimationFrame((function(){return requestAnimationFrame((function(){if(e.flip.direction!==e.forwardDirection?2===e.displayedPages&&(e.firstPage=e.currentPage-e.displayedPages):1===e.displayedPages?e.firstPage=e.currentPage+e.displayedPages:e.secondPage=e.currentPage+1+e.displayedPages,i)return e.flipAuto(!0)}))}))},flipAuto:function(t){var i,e,n,s,r=this;return s=Date.now(),e=this.flipDuration*(1-this.flip.progress),n=this.flip.progress,this.flip.auto=!0,this.$emit("flip-"+this.flip.direction+"-start",this.page),i=function(){return requestAnimationFrame((function(){var o,a;return a=Date.now()-s,o=n+a/e,o>1&&(o=1),r.flip.progress=t?p(o):o,o<1?i():(r.flip.direction!==r.forwardDirection?r.currentPage-=r.displayedPages:r.currentPage+=r.displayedPages,r.$emit("flip-"+r.flip.direction+"-end",r.page),1===r.displayedPages&&r.flip.direction===r.forwardDirection?r.flip.direction=null:r.onImageLoad(1,(function(){return r.flip.direction=null})),r.flip.auto=!1)}))},i()},flipRevert:function(){var t,i,e,n,s=this;return n=Date.now(),i=this.flipDuration*this.flip.progress,e=this.flip.progress,this.flip.auto=!0,t=function(){return requestAnimationFrame((function(){var r,o;return o=Date.now()-n,r=e-e*o/i,r<0&&(r=0),s.flip.progress=r,r>0?t():(s.firstPage=s.currentPage,s.secondPage=s.currentPage+1,1===s.displayedPages&&s.flip.direction!==s.forwardDirection?s.flip.direction=null:s.onImageLoad(1,(function(){return s.flip.direction=null})),s.flip.auto=!1)}))},t()},onImageLoad:function(t,i){return this.nImageLoad=0,this.nImageLoadTrigger=t,this.imageLoadCallback=i},didLoadImage:function(t){if(null===this.imageWidth&&(this.imageWidth=(t.target||t.path[0]).naturalWidth,this.imageHeight=(t.target||t.path[0]).naturalHeight),this.imageLoadCallback)return++this.nImageLoad>=this.nImageLoadTrigger?(this.imageLoadCallback(),this.imageLoadCallback=null):void 0},zoomIn:function(){if(this.canZoomIn)return this.zoomIndex+=1,this.zoomTo(this.zooms_[this.zoomIndex])},zoomOut:function(){if(this.canZoomOut)return this.zoomIndex-=1,this.zoomTo(this.zooms_[this.zoomIndex])},zoomTo:function(t,i,e){var n,s,r,o,a,h,l,c,u,g,d,m=this;if(l=this.zoom,o=t,d=this.$refs.viewport,c=d.scrollLeft,u=d.scrollTop,i||(i=d.clientWidth/2),e||(e=d.clientHeight/2),s=i+c,r=e+u,a=s/l*o-i,h=r/l*o-e,g=Date.now(),this.zooming=!0,this.$emit("zoom-start",t),n=function(){return requestAnimationFrame((function(){var i,e;return e=Date.now()-g,i=e/m.zoomDuration,(i>1||f)&&(i=1),i=p(i),m.zoom=l+(o-l)*i,m.scrollLeft=c+(a-c)*i,m.scrollTop=u+(h-u)*i,e<m.zoomDuration?n():(m.$emit("zoom-end",t),m.zooming=!1,m.zoom=t,m.scrollLeft=a,m.scrollTop=h)}))},n(),o>1)return this.preloadImages(!0)},zoomAt:function(t){var i,e,n;return i=this.$refs.viewport.getBoundingClientRect(),e=t.pageX-i.left,n=t.pageY-i.top,this.zoomIndex=(this.zoomIndex+1)%this.zooms_.length,this.zoomTo(this.zooms_[this.zoomIndex],e,n)},swipeStart:function(t){return this.touchStartX=t.pageX,this.touchStartY=t.pageY,this.maxMove=0,this.zoom<=1?this.activeCursor="grab":(this.startScrollLeft=this.$refs.viewport.scrollLeft,this.startScrollTop=this.$refs.viewport.scrollTop,this.activeCursor="all-scroll")},swipeMove:function(t){var i,e;if(null!=this.touchStartX)if(i=t.pageX-this.touchStartX,e=t.pageY-this.touchStartY,this.maxMove=Math.max(this.maxMove,Math.abs(i)),this.maxMove=Math.max(this.maxMove,Math.abs(e)),this.zoom>1)this.dragToScroll&&this.dragScroll(i,e);else if(!(Math.abs(e)>Math.abs(i)))return this.activeCursor="grabbing",i>0?(null===this.flip.direction&&this.canFlipLeft&&i>=this.swipeMin&&this.flipStart("left",!1),"left"===this.flip.direction&&(this.flip.progress=i/this.pageWidth,this.flip.progress>1&&(this.flip.progress=1))):(null===this.flip.direction&&this.canFlipRight&&i<=-this.swipeMin&&this.flipStart("right",!1),"right"===this.flip.direction&&(this.flip.progress=-i/this.pageWidth,this.flip.progress>1&&(this.flip.progress=1))),!0},swipeEnd:function(t){if(null!=this.touchStartX)return this.maxMove<this.swipeMin&&this.zoomAt(t),null===this.flip.direction||this.flip.auto||(this.flip.progress>1/4?this.flipAuto(!1):this.flipRevert()),this.touchStartX=null,this.activeCursor=null},onTouchStart:function(t){return this.hasTouchEvents=!0,this.swipeStart(t.changedTouches[0])},onTouchMove:function(t){if(this.swipeMove(t.changedTouches[0])&&t.cancelable)return t.preventDefault()},onTouchEnd:function(t){return this.swipeEnd(t.changedTouches[0])},onPointerDown:function(t){if(this.hasPointerEvents=!0,!this.hasTouchEvents&&(!t.which||1===t.which)){this.swipeStart(t);try{return t.target.setPointerCapture(t.pointerId)}catch(i){}}},onPointerMove:function(t){if(!this.hasTouchEvents)return this.swipeMove(t)},onPointerUp:function(t){if(!this.hasTouchEvents){this.swipeEnd(t);try{return t.target.releasePointerCapture(t.pointerId)}catch(i){}}},onMouseDown:function(t){if(!this.hasTouchEvents&&!this.hasPointerEvents&&(!t.which||1===t.which))return this.swipeStart(t)},onMouseMove:function(t){if(!this.hasTouchEvents&&!this.hasPointerEvents)return this.swipeMove(t)},onMouseUp:function(t){if(!this.hasTouchEvents&&!this.hasPointerEvents)return this.swipeEnd(t)},dragScroll:function(t,i){return this.scrollLeft=this.startScrollLeft-t,this.scrollTop=this.startScrollTop-i},onWheel:function(t){if(this.zoom>1&&this.dragToScroll&&(this.scrollLeft=this.$refs.viewport.scrollLeft+t.deltaX,this.scrollTop=this.$refs.viewport.scrollTop+t.deltaY,t.cancelable))return t.preventDefault()},preloadImages:function(t){var i,e,n,s,r,o,a,h,l;for(void 0===t&&(t=!1),Object.keys(this.preloadedImages).length>=10&&(this.preloadedImages={}),i=n=r=this.currentPage-3,o=this.currentPage+3;r<=o?n<=o:n>=o;i=r<=o?++n:--n)l=this.pageUrl(i),l&&(this.preloadedImages[l]||(e=new Image,e.src=l,this.preloadedImages[l]=e));if(t)for(i=s=a=this.currentPage,h=this.currentPage+this.displayedPages;a<=h?s<h:s>h;i=a<=h?++s:--s)l=this.pagesHiRes[i],l&&(this.preloadedImages[l]||(e=new Image,e.src=l,this.preloadedImages[l]=e))},goToPage:function(t){if(null!==t&&t!==this.page)return null===this.pages[0]?2===this.displayedPages&&1===t?this.currentPage=0:this.currentPage=t:this.currentPage=t-1,this.minX=Infinity,this.maxX=-Infinity,this.currentCenterOffset=this.centerOffset}},watch:{currentPage:function(){return this.firstPage=this.currentPage,this.secondPage=this.currentPage+1,this.preloadImages()},centerOffset:function(){var t,i=this;if(!this.animatingCenter)return t=function(){return requestAnimationFrame((function(){var e,n;return n=.1,e=i.centerOffset-i.currentCenterOffset,Math.abs(e)<.5?(i.currentCenterOffset=i.centerOffset,i.animatingCenter=!1):(i.currentCenterOffset+=e*n,t())}))},this.animatingCenter=!0,t()},scrollLeftLimited:function(t){var i=this;return f?requestAnimationFrame((function(){return i.$refs.viewport.scrollLeft=t})):this.$refs.viewport.scrollLeft=t},scrollTopLimited:function(t){var i=this;return f?requestAnimationFrame((function(){return i.$refs.viewport.scrollTop=t})):this.$refs.viewport.scrollTop=t},pages:function(t,i){if(this.fixFirstPage(),!(null!=i?i.length:void 0)&&(null!=t?t.length:void 0)&&this.startPage>1&&null===t[0])return this.currentPage++},startPage:function(t){return this.goToPage(t)}}};function w(t,i,e,n,s,r,o,a,h,l){"boolean"!==typeof o&&(h=a,a=o,o=!1);var c,u="function"===typeof e?e.options:e;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,s&&(u.functional=!0)),n&&(u._scopeId=n),r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,h(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):i&&(c=o?function(t){i.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){i.call(this,a(t))}),c)if(u.functional){var g=u.render;u.render=function(t,i){return c.call(i),g(t,i)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return e}var P,b="undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function M(t){return function(t,i){return z(t,i)}}var x={};function z(t,i){var e=b?i.media||"default":t,n=x[e]||(x[e]={ids:new Set,styles:[]});if(!n.ids.has(t)){n.ids.add(t);var s=i.source;if(i.map&&(s+="\n/*# sourceURL="+i.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i.map))))+" */"),n.element||(n.element=document.createElement("style"),n.element.type="text/css",i.media&&n.element.setAttribute("media",i.media),void 0===P&&(P=document.head||document.getElementsByTagName("head")[0]),P.appendChild(n.element)),"styleSheet"in n.element)n.styles.push(s),n.element.styleSheet.cssText=n.styles.filter(Boolean).join("\n");else{var r=n.ids.size-1,o=document.createTextNode(s),a=n.element.childNodes;a[r]&&n.element.removeChild(a[r]),a.length?n.element.insertBefore(o,a[r]):n.element.appendChild(o)}}}var I=y,L=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t._t("default",null,null,{canFlipLeft:t.canFlipLeft,canFlipRight:t.canFlipRight,canZoomIn:t.canZoomIn,canZoomOut:t.canZoomOut,page:t.page,numPages:t.numPages,flipLeft:t.flipLeft,flipRight:t.flipRight,zoomIn:t.zoomIn,zoomOut:t.zoomOut}),t._v(" "),e("div",{ref:"viewport",staticClass:"viewport",class:{zoom:t.zooming||t.zoom>1,"drag-to-scroll":t.dragToScroll},style:{cursor:"grabbing"==t.cursor?"grabbing":"auto"},on:{touchmove:t.onTouchMove,pointermove:t.onPointerMove,mousemove:t.onMouseMove,touchend:t.onTouchEnd,touchcancel:t.onTouchEnd,pointerup:t.onPointerUp,pointercancel:t.onPointerUp,mouseup:t.onMouseUp,wheel:t.onWheel}},[e("div",{staticClass:"container",style:{transform:"scale("+t.zoom+")"}},[e("div",{staticClass:"click-to-flip left",style:{cursor:t.canFlipLeft?"pointer":"auto"},on:{click:t.flipLeft}}),t._v(" "),e("div",{staticClass:"click-to-flip right",style:{cursor:t.canFlipRight?"pointer":"auto"},on:{click:t.flipRight}}),t._v(" "),e("div",{style:{transform:"translateX("+t.centerOffsetSmoothed+"px)"}},[t.showLeftPage?e("img",{staticClass:"page fixed",style:{width:t.pageWidth+"px",height:t.pageHeight+"px",left:t.xMargin+"px",top:t.yMargin+"px"},attrs:{src:t.pageUrl(t.leftPage,!0)},on:{load:function(i){return t.didLoadImage(i)}}}):t._e(),t._v(" "),t.showRightPage?e("img",{staticClass:"page fixed",style:{width:t.pageWidth+"px",height:t.pageHeight+"px",left:t.viewWidth/2+"px",top:t.yMargin+"px"},attrs:{src:t.pageUrl(t.rightPage,!0)},on:{load:function(i){return t.didLoadImage(i)}}}):t._e(),t._v(" "),e("div",{style:{opacity:t.flip.opacity}},t._l(t.polygonArray,(function(i){var n=i[0],s=i[1],r=i[2],o=i[3],a=i[4],h=i[5];return e("div",{key:n,staticClass:"polygon",class:{blank:!s},style:{backgroundImage:s,backgroundSize:t.polygonBgSize,backgroundPosition:o,width:t.polygonWidth,height:t.polygonHeight,transform:a,zIndex:h}},[e("div",{directives:[{name:"show",rawName:"v-show",value:r.length,expression:"lighting.length"}],staticClass:"lighting",style:{backgroundImage:r}})])})),0),t._v(" "),e("div",{staticClass:"bounding-box",style:{left:t.boundingLeft+"px",top:t.yMargin+"px",width:t.boundingRight-t.boundingLeft+"px",height:t.pageHeight+"px",cursor:t.cursor},on:{touchstart:t.onTouchStart,pointerdown:t.onPointerDown,mousedown:t.onMouseDown}})])])])],2)},T=[],_=function(t){t&&t("data-v-71ad9dad_0",{source:".viewport[data-v-71ad9dad]{-webkit-overflow-scrolling:touch;width:100%;height:100%}.viewport.zoom[data-v-71ad9dad]{overflow:scroll}.viewport.zoom.drag-to-scroll[data-v-71ad9dad]{overflow:hidden}.container[data-v-71ad9dad]{position:relative;width:100%;height:100%;transform-origin:top left;-webkit-user-select:none;-ms-user-select:none;user-select:none}.click-to-flip[data-v-71ad9dad]{position:absolute;width:50%;height:100%;top:0;-webkit-user-select:none;-ms-user-select:none;user-select:none}.click-to-flip.left[data-v-71ad9dad]{left:0}.click-to-flip.right[data-v-71ad9dad]{right:0}.bounding-box[data-v-71ad9dad]{position:absolute;-webkit-user-select:none;-ms-user-select:none;user-select:none}.page[data-v-71ad9dad]{position:absolute;-webkit-backface-visibility:hidden;backface-visibility:hidden}.polygon[data-v-71ad9dad]{position:absolute;top:0;left:0;background-repeat:no-repeat;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:center left}.polygon.blank[data-v-71ad9dad]{background-color:#ddd}.polygon .lighting[data-v-71ad9dad]{width:100%;height:100%}",map:void 0,media:void 0})},k="data-v-71ad9dad",C=void 0,S=!1,W=w({render:L,staticRenderFns:T},_,I,k,S,C,!1,M,void 0,void 0),R=W,E={data:function(){return{array:["","./images/9677717700_3b10b4f206_o.jpg","./images/4903092900_ff43be2aff_o.jpg","./images/36271782954_f7aa950180_o.jpg","./images/36420482760_fe0771f10d_o.jpg","./images/1472660456_1e1841d24e_o.jpg","./images/9677717700_3b10b4f206_o.jpg"],storystyle:{background:"url('./images/36271782954_f7aa950180_o.jpg')no-repeat fixed center/cover"}}},components:{Flipbook:R}},D=E,H=(e("df92"),e("2877")),O=Object(H["a"])(D,n,s,!1,null,"0c84c7f5",null);i["default"]=O.exports},dc72:function(t,i,e){},df92:function(t,i,e){"use strict";var n=e("dc72"),s=e.n(n);s.a}}]);
//# sourceMappingURL=story.4860cb8c.js.map