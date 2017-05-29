var tns=function(){function t(){for(var t,n,e,i=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if(null!==(t=arguments[a]))for(n in t)e=t[n],i!==e&&void 0!==e&&(i[n]=e);return i}function n(t,n){for(var e=0;e<t.length;e++)if(t[e]===n)return e;return-1}function e(t){return void 0!==t.item}function i(t,n){var i,a=e(t)?t:[t];if(void 0!==n.nodeType&&1===n.nodeType)for(i=a.length;i--;)a[i].appendChild(n);else if("string"==typeof n)for(i=a.length;i--;)a[i].insertAdjacentHTML("beforeend",n);else if(e(n)){var o=document.createDocumentFragment();for(i=n.length;i--;)o.insertBefore(n[i],o.firstChild);for(var r=a.length;r--;)a[r].appendChild(o)}}function a(t,n){for(var i=e(t)?t:[t],a=i.length;a--;){var o=a>0?n.cloneNode(!0):n,r=i[a],c=r.parentNode,l=r.nextSibling;o.appendChild(r),l?c.insertBefore(o,l):c.appendChild(o)}}function o(t){for(var n=e(t)?t:[t],i=n.length;i--;){for(var a=n[i],o=a.parentNode;a.firstChild;)o.insertBefore(a.firstChild,a);o.removeChild(a)}}function r(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function c(t,n){return Math.atan2(t,n)*(180/Math.PI)}function l(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n&&"vertical"}function s(t,n){return t.hasAttribute(n)}function u(t,n){return t.getAttribute(n)}function d(t){return void 0!==t.item}function f(t,n){if(t=d(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(n))for(var e=t.length;e--;)for(var i in n)t[e].setAttribute(i,n[i])}function h(t,n){t=d(t)||t instanceof Array?t:[t],n=n instanceof Array?n:[n];for(var e=n.length,i=t.length;i--;)for(var a=e;a--;)t[i].removeAttribute(n[a])}function m(t){var n=t.cloneNode(!0);t.parentNode.insertBefore(n,t),t.remove(),t=null}function v(t){s(t,"hidden")||f(t,{hidden:""})}function p(t){s(t,"hidden")&&h(t,"hidden")}function y(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function g(t){var n,e=document.createElement("fakeelement");for(n in t)if(void 0!==e.style[n])return[n,t[n][0],t[n][1]];return!1}function b(t,n){for(var e in n){var i=("touchstart"===e||"touchmove"===e)&&M;t.addEventListener(e,n[e],i)}}function w(t,n){for(var e in n){var i=("touchstart"===e||"touchmove"===e)&&M;t.removeEventListener(e,n[e],i)}}function x(){return{topics:{},on:function(t,n){this.topics[t]=this.topics[t]||[],this.topics[t].push(n)},off:function(t,n){if(this.topics[t])for(var e=0;e<this.topics[t].length;e++)if(this.topics[t][e]===n){this.topics[t].splice(e,1);break}},emit:function(t,n){this.topics[t]&&this.topics[t].forEach(function(t){t(n)})}}}function E(t,n,e,i,a,o,r){function c(){o-=l,s+=u,t.style[n]=e+s+"px"+i,o>0?setTimeout(c,l):r()}var l=Math.min(o,10),s=Number(t.style[n].slice(e.length,-(i.length+2))),u=(a-s)/o*l;setTimeout(c,l)}!function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var t=["webkit","moz"],n=0;n<t.length&&!window.requestAnimationFrame;++n){var e=t[n];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(t){var n=Date.now(),e=Math.max(i+16,n);return setTimeout(function(){t(i=e)},e-n)},window.cancelAnimationFrame=clearTimeout}}(),function(){"use strict";var t,n,e,i=window,a=document,o=Object,r="length",c="item contains add remove toggle toString toLocaleString".split(" "),l=c[2],s=c[3],u=c[4],d="prototype",f="defineProperty"in o||"__defineGetter__"in o[d]||null,h=function(t,n,e,i){o.defineProperty?o.defineProperty(t,n,{configurable:!1===f||!!i,get:e}):t.__defineGetter__(n,e)},m=function(t,n){var e=this,i=[],a={},d=0,f=0,m=function(){if(d>=f)for(;f<d;++f)!function(t){h(e,t,function(){return v(),i[t]},!1)}(f)},v=function(){var e,o,c=arguments,l=/\s+/;if(c[r])for(o=0;o<c[r];++o)if(l.test(c[o]))throw e=new SyntaxError('String "'+c[o]+'" contains an invalid character'),e.code=5,e.name="InvalidCharacterError",e;for(i=(""+t[n]).replace(/^\s+|\s+$/g,"").split(l),""===i[0]&&(i=[]),a={},o=0;o<i[r];++o)a[i[o]]=!0;d=i[r],m()};return v(),h(e,r,function(){return v(),d}),e[c[6]]=e[c[5]]=function(){return v(),i.join(" ")},e.item=function(t){return v(),i[t]},e.contains=function(t){return v(),!!a[t]},e[l]=function(){v.apply(e,o=arguments);for(var o,c,l=0,s=o[r];l<s;++l)c=o[l],a[c]||(i.push(c),a[c]=!0);d!==i[r]&&(d=i[r]>>>0,t[n]=i.join(" "),m())},e[s]=function(){v.apply(e,o=arguments);for(var o,c={},l=0,s=[];l<o[r];++l)c[o[l]]=!0,delete a[o[l]];for(l=0;l<i[r];++l)c[i[l]]||s.push(i[l]);i=s,d=s[r]>>>0,t[n]=i.join(" "),m()},e[u]=function(t,n){return v.apply(e,[t]),void 0!==n?n?(e[l](t),!0):(e[s](t),!1):a[t]?(e[s](t),!1):(e[l](t),!0)},function(t,n){if(n)for(var e=0;e<7;++e)n(t,c[e],{enumerable:!1})}(e,o.defineProperty),e},v=function(t,n,e){h(t[d],n,function(){var t,i=this,o="__defineGetter__defineProperty"+n;if(i[o])return t;if(i[o]=!0,!1===f){for(var c,l=v.mirror=v.mirror||a.createElement("div"),s=l.childNodes,u=s[r],d=0;d<u;++d)if(s[d]._R===i){c=s[d];break}c||(c=l.appendChild(a.createElement("div"))),t=m.call(c,i,e)}else t=new m(i,e);return h(i,n,function(){return t}),delete i[o],t},!0)};if(i.DOMTokenList)t=a.createElement("div").classList,d=i.DOMTokenList[d],t[l].apply(t,c),2>t[r]&&(n=d[l],e=d[s],d[l]=function(){for(var t=0,e=arguments;t<e[r];++t)n.call(this,e[t])},d[s]=function(){for(var t=0,n=arguments;t<n[r];++t)e.call(this,n[t])}),t[u]("List",!1)&&(d[u]=function(t,n){var e=this;return e[(n=void 0===n?!e.contains(t):n)?l:s](t),!!n});else{if(f)try{h({},"support")}catch(t){f=!1}m.polyfill=!0,i.DOMTokenList=m,v(i.Element,"classList","className"),v(i.HTMLLinkElement,"relList","rel"),v(i.HTMLAnchorElement,"relList","rel"),v(i.HTMLAreaElement,"relList","rel")}}();var T=!1;try{var C=Object.defineProperty({},"passive",{get:function(){T=!0}});window.addEventListener("test",null,C)}catch(t){}var M=!!T&&{passive:!0},A=function(t){for(var n=document.documentElement,e=0;e<t.length;e++)if(t[e]in n.style)return t[e]}(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),D={transitionDuration:["transitionDelay","transitionend"],WebkitTransitionDuration:["WebkitTransitionDelay","webkitTransitionEnd"],MozTransitionDuration:["MozTransitionDelay","transitionend"],OTransitionDuration:["OTransitionDelay","oTransitionEnd"]},L={animationDuration:["animationDelay","animationend"],WebkitAnimationDuration:["WebkitAnimationDelay","webkitAnimationEnd"],MozAnimationDuration:["MozAnimationDelay","animationend"],OAnimationDuration:["OAnimationDelay","oAnimationEnd"]},k=g(D)[0],N=g(D)[1],P=g(D)[2],O=g(L)[0],I=g(L)[1],z=g(L)[2],S={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return function(e){function s(){return"gallery"===Kt||"page"===e.slideBy?nn:e.slideBy}function d(){return(jt+on)/nn}function g(){if(tn<=nn){ln=!1;Fn="gallery"===Kt?0:gn,void 0!==Fn&&se.emit("indexChanged",Pt()),Pn&&v(Pn),kn&&v(kn),Xn&&v(Xn)}else ln=e.arrowKeys,Nn&&p(Pn),Dn&&p(kn),jn&&p(Xn)}function T(){if(f($t,{"data-tns-role":"wrapper"}),f(Jt,{"data-tns-role":"content-wrapper"}),"vertical"===Vt?f(Jt,{"data-tns-hidden":"y"}):f($t,{"data-tns-hidden":"x"}),"carousel"===Kt){var t=cn&&rn?U():rn?rn+on:0;Jt.style.cssText="horizontal"===Vt?"margin: 0 "+t+"px;":"padding: "+t+"px 0 "+rn+"px; height: "+K()+"px;"}}function C(){jt=fe(),nn=ue(),Rt=bn-nn-Bn,"horizontal"!==Vt||cn||(pn=d()),Bt=de(),en=s()}function M(){""===Qt.id&&(Qt.id=vn),f(Qt,{"data-tns-role":"content","data-tns-mode":Kt,"data-tns-axis":Vt}),"horizontal"===Vt&&(Qt.style.width=(pn+1)*bn+"px")}function D(){"carousel"===Kt&&(fn&&f(Qt,{"data-tns-hidden":"y"}),Qt.style[Cn]=Mn+Math.round(-St[Fn])+"px"+An)}function L(){navigator.msMaxTouchPoints&&($t.classList.add("ms-touch"),b($t,{scroll:gt}))}function H(){for(var t=0;t<tn;t++){var n=Zt[t];n.id=vn+"-item"+t,"gallery"===Kt&&re&&n.classList.add(re),f(n,{"aria-hidden":"true",tabindex:"-1"});var e="horizontal"===Vt?"right":"bottom",i="";"carousel"===Kt&&(i="margin-"+e+": "+on+"px;"),"horizontal"===Vt&&(i="width: "+(pn-on)+"px; "+i),n.style.cssText+=i}if(dn||rn){for(var a=document.createDocumentFragment(),o=document.createDocumentFragment(),r=gn;r--;){var c=r%tn,l=Zt[c].cloneNode(!0);if(h(l,"id"),o.insertBefore(l,o.firstChild),"carousel"===Kt){var s=Zt[tn-1-c].cloneNode(!0);h(s,"id"),a.appendChild(s)}}Qt.insertBefore(a,Qt.firstChild),Qt.appendChild(o),Zt=Qt.children}}function F(){Dn&&(e.controlsContainer?(Ht=kn.children[0],Ft=kn.children[1],f(kn,{"aria-label":"Carousel Navigation",tabindex:"0"}),f(Ht,{"data-controls":"prev"}),f(Ft,{"data-controls":"next"}),f(kn.children,{"aria-controls":vn,tabindex:"-1"})):(i($t,'<div data-tns-role="controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+vn+'" type="button">'+Ln[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+vn+'" type="button">'+Ln[1]+"</button></div>"),[].forEach.call($t.children,function(t){"controls"===t.getAttribute("data-tns-role")&&(kn=t)}),Ht=kn.children[0],Ft=kn.children[1]))}function W(){if(Nn){if(e.navContainer)f(Pn,{"aria-label":"Carousel Pagination"}),Wt=Pn.children,[].forEach.call(Wt,function(t,n){f(t,{"data-nav":n,tabindex:"-1","aria-selected":"false","aria-controls":vn+"-item"+n})});else{for(var t="",n=0;n<tn;n++)t+='<button data-nav="'+n+'" tabindex="-1" aria-selected="false" aria-controls="'+vn+"-item"+n+'" hidden type="button"></button>';t='<div data-tns-role="nav" aria-label="Carousel Pagination">'+t+"</div>",i($t,t),[].forEach.call($t.children,function(t){"nav"===t.getAttribute("data-tns-role")&&(Pn=t)}),Wt=Pn.children,nn>1&&Nt()}Wt=Array.prototype.slice.call(Wt)}}function B(){jn&&(Xn?f(Xn,{"data-action":"stop"}):(Pn||(i($t,'<div data-tns-role="nav" aria-label="Carousel Pagination"></div>'),Pn=$t.querySelector('[data-tns-role="nav"]')),i(Pn,'<button data-action="stop" type="button">'+Vn+qn[0]+"</button>"),Xn=Pn.querySelector("[data-action]")),lt())}function R(){for(var t=Fn;t<Fn+nn;t++){var n=Zt[t];f(n,{"aria-hidden":"false"}),h(n,["tabindex"]),"gallery"===Kt&&(n.style.left=pn*(t-Fn)+"px",n.classList.remove(re),n.classList.add(ae))}Dn&&(Fn===Rn&&!dn||un)&&(Ht.disabled=!0),Nn&&f(Wt[0],{tabindex:"0","aria-selected":"true"})}function j(){if("carousel"===Kt){if(P){var t={};t[P]=et,b(Qt,t)}Qn&&b(Qt,{touchstart:Et,touchmove:Tt,touchend:Ct,touchcancel:Ct}),ne&&b(Qt,{mousedown:Et,mousemove:Tt,mouseup:Ct,mouseleave:Ct})}if(Nn)for(var n=0;n<tn;n++)b(Wt[n],{click:ct,keydown:yt});Dn&&(b(kn,{keydown:pt}),b(Ht,{click:ot}),b(Ft,{click:rt})),jn&&(b(Xn,{click:ft}),Un&&(b(Qt,{mouseover:function(){Yn&&(st(),Kn=!0)}}),b(Qt,{mouseout:function(){!Yn&&Kn&&(lt(),Kn=!1)}})),$n&&b(document,{visibilitychange:ht})),ln&&b(document,{keydown:mt}),"inner"===an?se.on("outerResized",function(){It(),se.emit("innerLoaded",Pt())}):(b(window,{resize:zt}),"outer"===an&&se.on("innerLoaded",_))}function G(){if(mn){var t=Fn,n=Fn+nn;for(rn&&(t-=1,n+=1);t<n;t++)[].forEach.call(Zt[t].querySelectorAll('[data-tns-role="lazy-img"]'),function(t){var n={};n[P]=function(t){t.stopPropagation()},b(t,n),t.classList.contains("loaded")||(t.src=u(t,"data-src"),t.classList.add("loaded"))})}}function _(){if(fn){for(var t=[],n=Fn;n<Fn+nn;n++)[].forEach.call(Zt[n].querySelectorAll("img"),function(n){t.push(n)});0===t.length?X():q(t)}}function q(t){t.forEach(function(n,e){y(n)&&t.splice(e,1)}),0===t.length?X():setTimeout(function(){q(t)},16)}function U(){return(jt%pn+on)/2}function X(){for(var t,n=[],e=Fn;e<Fn+nn;e++)n.push(Zt[e].offsetHeight);t=Math.max.apply(null,n),Qt.style.height!==t&&(k&&Z(sn),Qt.style.height=t+"px")}function Y(){St=[0];for(var t,n=Zt[0].getBoundingClientRect()[Tn],e=1;e<bn;e++)t=Zt[e].getBoundingClientRect()[Tn],St.push(t-n)}function K(){return St[Fn+nn]-St[Fn]}function V(){$t.style.msScrollSnapPointsX="snapInterval(0%, "+pn+")"}function $(){var t,n,e,i;Fn!==Wn&&(Fn>Wn?(t=Wn,n=Math.min(Wn+nn,Fn),e=Math.max(Wn+nn,Fn),i=Fn+nn):(t=Math.max(Fn+nn,Wn),n=Wn+nn,e=Fn,i=Math.min(Fn+nn,Wn))),en%1!=0&&(t=Math.round(t),n=Math.round(n),e=Math.round(e),i=Math.round(i));for(var a=t;a<n;a++)f(Zt[a],{"aria-hidden":"true",tabindex:"-1"});for(var o=e;o<i;o++)f(Zt[o],{"aria-hidden":"false"}),h(Zt[o],["tabindex"])}function J(){Nn&&(Sn=zn!==-1?zn:Fn%tn,zn=-1,Sn!==Hn&&(f(Wt[Hn],{tabindex:"-1","aria-selected":"false"}),f(Wt[Sn],{tabindex:"0","aria-selected":"true"}),Hn=Sn))}function Q(){if(Dn&&!dn){var t=[],n=[];Fn===Rn?(t.push(Ht),n.push(Ft),vt(Ht,Ft)):un||Fn!==Rt?n.push(Ht,Ft):(t.push(Ft),n.push(Ht),vt(Ft,Ht)),t.length>0&&t.forEach(function(t){t.disabled||(t.disabled=!0)}),n.length>0&&n.forEach(function(t){t.disabled&&(t.disabled=!1)})}}function Z(t,n){t=t?t/1e3+"s":"",n=n||Qt,n.style[k]=t,"gallery"===Kt&&(n.style[O]=t),"vertical"===Vt&&(Jt.style[k]=t)}function tt(t,n){void 0===t&&(t=sn),k&&Z(t),he(t,n)}function nt(){f(Qt,{"aria-busy":"true"}),xn&&me(),Fn%tn!=Wn%tn&&se.emit("indexChanged",Pt()),se.emit("transitionStart",Pt()),tt()}function et(t){function n(t){return t.toLowerCase().replace(/-/g,"")}if(se.emit("transitionEnd",Pt(t)),"gallery"===Kt&&yn.length>0)for(var e=0;e<nn;e++){var i=yn[e];k&&Z(0,i),ce&&N&&(i.style[N]=i.style[I]=""),i.classList.remove(oe),i.classList.add(re),i.style.left=""}if(!t||"gallery"===Kt&&t.target.parentNode===Qt||t.target===Qt&&n(t.propertyName)===n(Cn)){if(!xn){var a=Fn;me(),Fn!==a&&(tt(0),se.emit("indexChanged",Pt()))}$(),On.indexOf(Fn%tn)===-1&&Nt(),J(),Q(),G(),_(),"inner"===an&&se.emit("innerLoaded",Pt()),h(Qt,"aria-busy"),it()}}function it(){Wn=Fn}function at(t){"true"!==u(Qt,"aria-busy")&&(Fn+=t*en,nt())}function ot(){at(-1)}function rt(){at(un&&Fn===Rt?-(Rt-Rn)/en:1)}function ct(t){if("true"!==u(Qt,"aria-busy")){for(var e,i,a,o=t.target||t.srcElement;n(Wt,o)===-1;)o=o.parentNode;e=zn=n(Wt,o),i="gallery"===Kt?0:gn,a=e+i,Ot(a)}}function lt(){dt(),f(Xn,{"data-action":"stop"}),Xn.innerHTML=Vn+qn[1],Yn=!0}function st(){ut(),f(Xn,{"data-action":"start"}),Xn.innerHTML=Vn.replace("Stop","Start")+qn[0],Yn=!1}function ut(){Yn="paused",clearInterval(Gt)}function dt(){Yn!==!0&&(clearInterval(Gt),Gt=setInterval(function(){at(_n)},Gn))}function ft(){Yn?st():lt()}function ht(){Jn!=document.hidden&&Yn!==!1&&(document.hidden?ut():dt()),Jn=document.hidden}function mt(t){switch(t=t||window.event,t.keyCode){case S.LEFT:ot();break;case S.RIGHT:rt()}}function vt(t,n){"object"==typeof t&&"object"==typeof n&&t===document.activeElement&&(t.blur(),n.focus())}function pt(t){t=t||window.event;var n=t.keyCode;document.activeElement;switch(n){case S.LEFT:case S.UP:case S.PAGEUP:Ht.disabled||ot();break;case S.RIGHT:case S.DOWN:case S.PAGEDOWN:Ft.disabled||rt();break;case S.HOME:Ot(0);break;case S.END:Ot(tn-1)}}function yt(t){t=t||window.event;var n=t.keyCode,e=document.activeElement,i=u(e,"data-nav");switch(n){case S.LEFT:case S.PAGEUP:i>0&&vt(e,e.previousElementSibling);break;case S.UP:case S.HOME:0!==i&&vt(e,Wt[0]);break;case S.RIGHT:case S.PAGEDOWN:i<Bt-1&&vt(e,e.nextElementSibling);break;case S.DOWN:case S.END:i<Bt-1&&vt(e,Wt[Bt-1]);break;case S.ENTER:case S.SPACE:ct(t)}}function gt(){tt(0,Qt.scrollLeft()),it()}function bt(t){return t.target||t.srcElement}function wt(t){return"a"===t.tagName.toLowerCase()}function xt(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Et(t){t=t||window.event,wt(bt(t))&&xt(t);var n="touchstart"===t.type?t.changedTouches[0]:t;Zn=parseInt(n.clientX),te=parseInt(n.clientY);var e=A?[11,-3]:[0,-2];_t=Number(Qt.style[Cn].slice(e[0],e[1])),"touchstart"===t.type?se.emit("touchStart",Pt(t)):(se.emit("dragStart",Pt(t)),ee=!0)}function Tt(t){if(t=t||window.event,ee&&"mousemove"===t.type&&!ie&&(ie=!0),null!==Zn){wt(bt(t))&&xt(t);var n="touchmove"===t.type?t.changedTouches[0]:t;if(qt=parseInt(n.clientX)-Zn,Ut=parseInt(n.clientY)-te,l(c(Ut,qt),15)===Vt){Xt=!0,"touchmove"===t.type?se.emit("touchMove",Pt(t)):se.emit("dragMove",Pt(t));var e="horizontal"===Vt?_t+qt:_t+Ut;e+="px",A&&(e="translate"+En+"("+e+")",Z(0)),Qt.style[Cn]=e}}}function Ct(t){if(t=t||window.event,ee&&(ee=!1),Xt){Xt=!1;var n=0===t.type.indexOf("touch")?t.changedTouches[0]:t;if(qt=parseInt(n.clientX)-Zn,Ut=parseInt(n.clientY)-te,Zn=te=null,"horizontal"===Vt)Fn=-(_t+qt)/pn,Fn=qt>0?Math.floor(Fn):Math.ceil(Fn);else{var e=-(_t+Ut);if(e<=0)Fn=Rn;else if(e>=St[St.length-1])Fn=Rt;else{var i=0;do{i++,Fn=Ut<0?i+1:i}while(i<bn&&e>=Math.round(St[i+1]))}}0===t.type.indexOf("touch")?se.emit("touchEnd",Pt(t)):se.emit("dragEnd",Pt(t)),nt()}if(ie){ie=!1;var a=bt(t);wt(a)&&b(a,{click:function t(n){xt(n),w(a,{click:t})}})}}function Mt(){Qt.style.width=(pn+1)*bn+"px";for(var t=bn;t--;)Zt[t].style.width=pn-on+"px"}function At(){for(var t=Fn+1,n=Fn+nn;t<n;t++)Zt[t].style.left=pn*(t-Fn)+"px"}function Dt(){Jt.style.cssText="margin: 0px "+U()+"px"}function Lt(){Jt.style.height=K()+"px"}function kt(){On=[];for(var t=Fn%tn%nn;t<tn;)On.push(t),t+=nn;tn>nn*On.length&&On.unshift(0)}function Nt(){Nn&&!e.navContainer&&(kt(),In.length>0&&In.forEach(function(t){f(Wt[t],{hidden:""})}),On.length>0&&On.forEach(function(t){h(Wt[t],"hidden")}),In=On)}function Pt(t){return{container:Qt,slideItems:Zt,navItems:Wt,prevButton:Ht,nextButton:Ft,items:nn,index:Fn,indexCached:Wn,navCurrent:Sn,navCurrentCached:Hn,slideCount:tn,cloneCount:gn,slideCountNew:bn,event:t||{}}}function Ot(t){var n,e=Fn%tn;switch(e<0&&(e+=tn),t){case"next":n=1;break;case"prev":case"previous":n=-1;break;case"first":n=-e;break;case"last":n=tn-1-e;break;default:if("number"==typeof t){var i=t%tn;i<0&&(i+=tn),n=i-e}}(Fn+=n)%tn!=Wn%tn&&(me(),nt())}function It(){var t=Fn,n=nn;C(),g(),me(),"horizontal"===Vt?(cn&&rn?Dt():(Mt(),"gallery"===Kt&&At()),Y()):(Y(),Lt()),(Fn!==t||"carousel"===Kt&&!cn)&&tt(0),Fn===t&&nn===n||G(),_(),Fn!==t&&(se.emit("indexChanged",Pt()),$(),Q(),Nt(),J()),navigator.msMaxTouchPoints&&V()}function zt(t){clearTimeout(Yt),Yt=setTimeout(function(){jt!==fe()&&(It(),"outer"===an&&se.emit("outerResized",Pt(t)))},100)}if(e=t({container:document.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,onInit:!1},e||{}),"object"==typeof e.container&&null!==e.container){var St,Ht,Ft,Wt,Bt,Rt,jt,Gt,_t,qt,Ut,Xt,Yt,Kt=e.mode,Vt=e.axis,$t=document.createElement("div"),Jt=document.createElement("div"),Qt=e.container,Zt=Qt.children,tn=Zt.length,nn=e.items,en=s(),an=e.nested,on=e.gutter,rn="gallery"!==Kt&&e.edgePadding,cn=e.fixedWidth,ln=e.arrowKeys,sn=e.speed,un=e.rewind,dn="gallery"===Kt||!e.rewind&&e.loop,fn="gallery"===Kt||e.autoHeight,hn=!cn&&e.responsive,mn=e.lazyload,vn=Qt.id||r(),pn=cn?cn+on:0,yn=[],gn=dn?2*tn:rn?1:0,bn="gallery"===Kt?tn+gn:tn+2*gn,wn=!(!cn||dn||rn),xn="gallery"===Kt||!dn,En="horizontal"===Vt?"X":"Y",Tn="horizontal"===Vt?"left":"top",Cn=Tn,Mn="",An="",Dn=e.controls,Ln=e.controlsText,kn=!!e.controlsContainer&&e.controlsContainer,Nn=e.nav,Pn=e.navContainer||!1,On=[],In=On,zn=-1,Sn=0,Hn=0,Fn="gallery"===Kt?0:gn,Wn=Fn,Bn=rn?1:0,Rn=Bn,jn=e.autoplay,Gn=e.autoplayTimeout,_n="forward"===e.autoplayDirection?1:-1,qn=e.autoplayText,Un=e.autoplayHoverPause,Xn=e.autoplayButton,Yn=!1,Kn=!1,Vn="<span hidden>Stop Animation</span>",$n=e.autoplayResetOnVisibility,Jn=!1,Qn=e.touch,Zn=null,te=null,ne=e.mouseDrag,ee=!1,ie=!1,ae=O?e.animateIn:"tns-fadeIn",oe=O?e.animateOut:"tns-fadeOut",re=O?e.animateNormal:"tns-normal",ce=!!O&&e.animateDelay,le=e.onInit,se=new x;A&&(Cn=A,Mn="translate"+En+"(",An=")");var ue=function(){return cn?function(){return Math.max(1,Math.min(tn,Math.floor(jt/cn)))}:function(){var t=e.items,n="object"==typeof hn&&Object.keys(hn);return n&&n.forEach(function(n){jt>=n&&(t=hn[n])}),Math.max(1,Math.min(tn,t))}}(),de=function(){return e.navContainer?function(){return tn}:function(){return Math.ceil(tn/nn)}}(),fe=function(){return"horizontal"===Vt&&!cn&&rn?function(){return $t.clientWidth-2*(rn+on)}:function(){return $t.clientWidth}}();!function(){a(Qt,Jt),a(Jt,$t),C(),M(),H(),Y(),T(),D(),L(),F(),W(),B(),R(),j(),g(),G(),_(),"function"==typeof le&&le(Pt()),"inner"===an&&se.emit("innerLoaded",Pt())}();var he=function(){return"carousel"===Kt?function(t,n){n||(n=-St[Fn]),wn&&Fn===Rt&&(n=Math.max(n,-bn*pn+jt+on)),k||!t?Qt.style[Cn]=Mn+Math.round(n)+"px"+An:E(Qt,Cn,Mn,An,n,sn,et),"vertical"===Vt&&(Jt.style.height=K()+"px")}:function(){yn=[];var t={};t[P]=et,t[z]=et,w(Zt[Wn],t);var n={};n[P]=et,n[z]=et,b(Zt[Fn],n),function(){for(var t=Wn,n=Wn+nn;t<n;t++){var e=Zt[t];if(k&&Z(sn,e),ce&&N){var i=ce*(t-Wn)/1e3;e.style[N]=i+"s",e.style[I]=i+"s"}e.classList.remove(ae),e.classList.add(oe),yn.push(e)}}(),function(){for(var t=Fn,n=Fn+nn;t<n;t++){var e=Zt[t];if(k&&Z(sn,e),ce&&N){var i=ce*(t-Fn)/1e3;e.style[N]=i+"s",e.style[I]=i+"s"}e.classList.remove(re),e.classList.add(ae),t>Fn&&(e.style.left=(t-Fn)*pn+"px")}}()}}(),me=function(){return dn?function(){var t="carousel"===Kt?en+Rn:Rn,n="carousel"===Kt?Rt-en:Rt;if(cn&&jt%pn!=0&&(n-=1),Fn>n)for(;Fn>=t+tn;)Fn-=tn;else if(Fn<t)for(;Fn<=n-tn;)Fn+=tn}:function(){Fn=Math.max(Rn,Math.min(Rt,Fn))}}();return{getInfo:Pt,events:se,goTo:Ot,destroy:function(){if(o($t),o(Jt),$t=Jt=null,h(Qt,["id","style","data-tns-role","data-tns-features"]),dn)for(var t=gn;t--;)Zt[0].remove(),Zt[Zt.length-1].remove();h(Zt,["id","style","aria-hidden","tabindex"]),vn=tn=null,Dn&&(e.controlsContainer?(h(kn,["aria-label","tabindex"]),h(kn.children,["aria-controls","tabindex"]),m(kn)):(kn.remove(),kn=Ht=Ft=null)),Nn&&(e.navContainer?(h(Pn,["aria-label"]),h(Wt,["aria-selected","aria-controls","tabindex"]),m(Pn)):(Pn.remove(),Pn=null),Wt=null),jn&&(e.navContainer||null===Pn?m(Xn):(Pn.remove(),Pn=null),w(document,{visibilitychange:ht})),m(Qt),ln&&w(document,{keydown:mt}),w(window,{resize:zt})}}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
