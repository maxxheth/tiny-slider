var tinySlider=function(){"use strict";function t(t){function l(){Z.style.width=U*nt+"px";var t;t=0!==it&&"marginLeft"===rt?pt?B*U+it:it:B*U,Z.style.marginLeft=-t+"px";for(var e=nt;e--;)tt[e].style.width=U-it+"px",0!==it&&(tt[e].style[rt]=it+"px")}function d(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function u(t){for(var e=t.length;e--;)d(t[e])&&t.splice(e,1);0===t.length?v():setTimeout(function(){u(t)},16)}function c(){for(var t=Ft(),e=[],n=nt;n--;)if(n>=t&&n<t+X)for(var i=tt[n].querySelectorAll("img"),r=i.length;r--;)e.push(i[r]);0===e.length?v():u(e)}function v(){for(var t,e=Ft(),n=[],i=nt;i--;)i>=e&&i<e+X&&n.push(tt[i].offsetHeight);t=Math.max.apply(null,n),a&&(Z.style[a]=vt/1e3+"s"),Z.style.height=t+"px",wt=!0,setTimeout(function(){a&&(Z.style[a]="0s"),wt=!1},vt)}function f(t){a&&(Z.style[a]=vt*t/1e3+"s",wt=!0)}function h(){navigator.msMaxTouchPoints&&(Z.parentNode.style.msScrollSnapPointsX="snapInterval(0%, "+U+")")}function m(){for(var t=nt;t--;){var e=Ft(),n=tt[t];t>=e&&t<e+X?n.hasAttribute("aria-hidden")&&"true"!==n.getAttribute("aria-hidden")||n.setAttribute("aria-hidden","false"):n.hasAttribute("aria-hidden")&&"false"!==n.getAttribute("aria-hidden")||n.setAttribute("aria-hidden","true")}}function b(){pt||(et>X?(0===xt?(K.disabled=!0,W(K,Y)):K.disabled=!1,xt===et-X?(Y.disabled=!0,W(Y,K)):Y.disabled=!1):(0!==xt&&(xt=0,g()),K.disabled=!0,Y.disabled=!0,K.setAttribute("tabindex","-1"),Y.setAttribute("tabindex","-1"),K===document.activeElement&&K.blur(),Y===document.activeElement&&Y.blur()))}function p(){if(dt&&!t.navContainer)for(var e=$;e--;){var n=V[e];e<J?n.hasAttribute("hidden")&&n.removeAttribute("hidden"):n.hasAttribute("hidden")||n.setAttribute("hidden","")}}function y(){if(dt){var e;if(Lt===-1){var n=xt<0?xt+et:xt>=et?xt-et:xt;if(e=t.navContainer?n:Math.floor(n/X),!pt&&!t.navContainer){var i=/^-?[0-9]+$/,r=i.test(et/X);r||xt!==et-X||(e+=1)}}else e=Lt,Lt=-1;for(var a=J;a--;){var o=V[a];a===e?"false"===o.getAttribute("aria-selected")&&(o.setAttribute("tabindex","0"),o.setAttribute("aria-selected","true")):"true"===o.getAttribute("aria-selected")&&(o.setAttribute("tabindex","-1"),o.setAttribute("aria-selected","false"))}}}function g(){var t=Z.parentNode.offsetWidth;Pt=-U*xt,at&&!pt&&(Pt=Math.max(Pt,-Math.abs(et*U-it-t))),o?Z.style[o]="translate3d("+Pt+"px, 0, 0)":Z.style.left=Pt+"px"}function E(){l(),h(),g(),p(),y(),m(),b(),yt&&c(),Et&&O()}function A(){if(pt){var t=gt?xt<X-B:xt<=-B,e=gt?xt>et+B-2*X-1:xt>=et+B-X;at&&B&&!gt&&(e=xt>=et+B-X-1),t&&(xt+=et),e&&(xt-=et),a&&(Z.style[a]="0s"),g()}}function L(t){Z.setAttribute("aria-busy","true"),f(t),g(),setTimeout(function(){A(),m(),b(),y(),O(),yt&&c(),wt=!1,Z.setAttribute("aria-busy","false")},vt*t)}function x(t){if(!wt){t=gt?t*X:t;var e=Math.abs(t);xt=pt?xt+t:Math.max(0,Math.min(xt+t,et-X)),L(e)}}function w(){x(-1)}function M(){x(1)}function C(e){if(!wt){for(var n,i=e.target||e.srcElement;gn.indexOf(V,i)===-1;)i=i.parentNode;Lt=n=Number(i.getAttribute("data-slide"));var r,a;r=t.navContainer?n:n*X,r=pt?r:Math.min(r,et-X),a=Math.abs(r-xt),xt=r,L(a)}}function T(){Ct=setInterval(function(){x(mt)},ht),Tt.setAttribute("data-action","stop"),Tt.innerHTML="<span hidden>Stop Animation</span>"+bt[1],kt=!0}function k(){clearInterval(Ct),Tt.setAttribute("data-action","start"),Tt.innerHTML="<span hidden>Stop Animation</span>"+bt[0],kt=!1}function S(){kt?k():T()}function N(){kt&&k()}function P(t){t=t||window.event,t.keyCode===s.LEFT?x(-1):t.keyCode===s.RIGHT&&x(1)}function W(t,e){"object"==typeof t&&"object"==typeof e&&t===document.activeElement&&(t.blur(),e.focus())}function D(t){t=t||window.event;var e=t.keyCode,n=document.activeElement;e!==s.LEFT&&e!==s.UP&&e!==s.HOME&&e!==s.PAGEUP||n!==K&&K.disabled!==!0&&W(n,K),e!==s.RIGHT&&e!==s.DOWN&&e!==s.END&&e!==s.PAGEDOWN||n!==Y&&Y.disabled!==!0&&W(n,Y),e!==s.ENTER&&e!==s.SPACE||(n===Y?M():w())}function I(t){t=t||window.event;var e=t.keyCode,n=document.activeElement;e!==s.LEFT&&e!==s.PAGEUP||n.getAttribute("data-slide")>0&&W(n,n.previousElementSibling),e!==s.UP&&e!==s.HOME||0!==n.getAttribute("data-slide")&&W(n,V[0]),e!==s.RIGHT&&e!==s.PAGEDOWN||n.getAttribute("data-slide")<J-1&&W(n,n.nextElementSibling),e!==s.DOWN&&e!==s.END||n.getAttribute("data-slide")<J-1&&W(n,V[J-1]),e!==s.ENTER&&e!==s.SPACE||C(t)}function O(){if(gn.isInViewport(Z)){var t=Z.querySelectorAll('[aria-hidden="false"] .tiny-lazy');if(0!==t.length)for(var e=0,n=t.length;e<n;e++)t[e].classList.contains("loaded")||(t[e].src=t[e].getAttribute("data-src"),t[e].classList.add("loaded"))}}function H(){Z.style[a]="0s",Z.style.transform="translate3d(-"+-Z.scrollLeft()+"px,0,0)"}function q(t){var e=t.changedTouches[0];St=parseInt(e.clientX),Nt=parseInt(e.clientY)}function G(t){var e=t.changedTouches[0];Wt=parseInt(e.clientX)-St,Dt=parseInt(e.clientY)-Nt;var r=n(Math.atan2(Dt,Wt)),s=i(r,15);if("horizontal"===s&&wt===!1&&(It=!0),It){a&&(Z.style[a]="0s");var l=pt?-(et+B-X)*U:-(et-X)*U,d=pt?B*U:0;!pt&&at&&(l=-(et*U-Z.parentNode.offsetWidth)),Pt=-xt*U+Wt,Pt=Math.max(l,Math.min(Pt,d)),o?Z.style[o]="translate3d("+Pt+"px, 0, 0)":Z.style.left=Pt+"px",t.preventDefault()}}function z(t){var e=t.changedTouches[0];if(Wt=parseInt(e.clientX)-St,It&&0!==Wt){t.preventDefault(),It=!1,Pt=-xt*U+Wt;var n,i=pt?-B:0,r=pt?et+B-X:et-X;n=-(Pt/U),n=Wt<0?Math.ceil(n):Math.floor(n),n=Math.max(i,Math.min(n,r)),xt=n,L(1)}}function R(){clearTimeout(Q),Q=setTimeout(function(){X=Gt(),U=Rt(),J=jt(),E()},100)}function j(){Mt||window.requestAnimationFrame(function(){Et&&O(),Mt=!1}),Mt=!0}if(t=gn.extend({container:document.querySelector(".slider"),items:1,gutter:0,gutterPosition:"right",fixedWidth:!1,maxContainerWidth:!1,slideByPage:!1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:250,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0},t||{}),"object"!=typeof t.container||null===t.container)return{init:function(){},destory:function(){}};var F,U,B,X,K,Y,V,$,J,Q,Z=t.container,_=document.createElement("div"),tt=Z.children,et=tt.length,nt=tt.length,it=t.gutter,rt="right"===t.gutterPosition?"marginRight":"marginLeft",at=t.fixedWidth,ot=t.controls,st=t.controlsText,lt=!!t.controlsContainer&&t.controlsContainer,dt=t.nav,ut=!!t.navContainer&&t.navContainer,ct=t.arrowKeys,vt=a?t.speed:0,ft=t.autoplay,ht=t.autoplayTimeout,mt="forward"===t.autoplayDirection?1:-1,bt=t.autoplayText,pt=!(at&&!t.maxContainerWidth)&&t.loop,yt=t.autoHeight,gt=t.slideByPage,Et=t.lazyload,At=t.touch,Lt=-1,xt=0,wt=!1,Mt=!1;if(ft)var Ct,Tt,kt=!1;if(At)var St=0,Nt=0,Pt=0,Wt=0,Dt=0,It=!1;var Ot=!at&&t.responsive,Ht="object"==typeof Ot&&Object.keys(Ot),qt=r(Ot),Gt=function(){return at?function(){return Math.max(Math.min(et,Math.floor(Z.parentNode.offsetWidth/at)),1)}:function(){var e,n=document.documentElement.clientWidth;if(void 0!==Ht.length&&void 0!==qt&&Ht.length===qt.length)if(n<Ht[0])e=t.items;else if(n>=Ht[Ht.length-1])e=qt[qt.length-1];else for(var i=0;i<Ht.length-1;i++)n>=Ht[i]&&n<=Ht[i+1]&&(e=qt[i]);else e=t.items;return Math.max(Math.min(et,e),1)}}(),zt=function(){var e;return e=at?!!t.maxContainerWidth&&Math.ceil(t.maxContainerWidth/at):void 0!==qt.length?Math.max.apply(Math,qt):t.items,e?Math.min(et,e):e},Rt=function(){return at?function(){return at+it}:function(){return(gn.getWidth(Z.parentNode)+it)/X}}(),jt=function(){return t.navContainer?function(){return et}:function(){return Math.ceil(et/X)}}(),Ft=function(){return pt?function(){return xt+B}:function(){return xt}}();return X=Gt(),B=zt(),U=Rt(),J=jt(),{init:function(){Z.classList.add("tiny-content"),0===Z.id.length?Z.id=F=e():F=Z.id,_.className="tiny-slider",gn.wrap(Z,_),navigator.msMaxTouchPoints&&(_.classList.add("ms-touch"),_.addEventListener("scroll",H,!1));for(var n=0;n<et;n++)tt[n].id=F+"item"+n;if(pt){for(var i=document.createDocumentFragment(),r=document.createDocumentFragment(),a=B;a--;){var o=tt[a].cloneNode(!0),s=tt[et-1-a].cloneNode(!0);o.id="",s.id="",i.insertBefore(o,i.firstChild),r.appendChild(s)}Z.appendChild(i),Z.insertBefore(r,Z.firstChild),nt=Z.children.length,tt=Z.children}if(dt){if(!t.navContainer){for(var l="",d=0;d<et;d++)l+='<button data-slide="'+d+'" tabindex="-1" aria-selected="false" aria-controls="'+F+"item"+d+'" type="button"></button>';ft&&(l+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+bt[0]+"</button>"),l='<div class="tiny-nav" aria-label="Carousel Pagination">'+l+"</div>",gn.append(_,l),ut=_.querySelector(".tiny-nav")}if(V=ut.querySelectorAll("[data-slide]"),$=V.length,!ut.hasAttribute("aria-label")){ut.setAttribute("aria-label","Carousel Pagination");for(var u=0;u<$;u++){var c=V[u];c.setAttribute("tabindex","-1"),c.setAttribute("aria-selected","false"),c.setAttribute("aria-controls",F+"item"+u)}}}if(ot&&(t.controlsContainer||(gn.append(_,'<div class="tiny-controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+F+'" type="button">'+st[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+F+'" type="button">'+st[1]+"</button></div>"),lt=_.querySelector(".tiny-controls")),K=lt.querySelector('[data-controls="prev"]'),Y=lt.querySelector('[data-controls="next"]'),lt.hasAttribute("tabindex")||(lt.setAttribute("aria-label","Carousel Navigation"),K.setAttribute("aria-controls",F),Y.setAttribute("aria-controls",F),K.setAttribute("tabindex","-1"),Y.setAttribute("tabindex","0"))),ft&&(ut||(gn.append(_,'<div class="tiny-nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+bt[0]+"</button></div>"),ut=_.querySelector(".tiny-nav")),Tt=ut.querySelector("[data-action]")),E(),At&&(Z.addEventListener("touchstart",q,!1),Z.addEventListener("touchmove",G,!1),Z.addEventListener("touchend",z,!1),Z.addEventListener("touchcancel",z,!1)),ot&&(b(),K.addEventListener("click",w,!1),Y.addEventListener("click",M,!1),K.addEventListener("keydown",D,!1),Y.addEventListener("keydown",D,!1)),dt)for(var v=V.length;v--;)V[v].addEventListener("click",C,!1),V[v].addEventListener("keydown",I,!1);if(ft&&(T(),Tt.addEventListener("click",S,!1),ot&&(K.addEventListener("click",N,!1),Y.addEventListener("click",N,!1)),dt))for(var f=0;f<$;f++)V[f].addEventListener("click",N,!1);ct&&document.addEventListener("keydown",P,!1),window.addEventListener("resize",R,!1),window.addEventListener("scroll",j,!1)},destory:function(){if(Z.classList.remove("tiny-content"),Z.style.width="",Z.style[a]="",Z.style.transform="",Z.style.marginLeft="",Z.style.left="",gn.unwrap(_),pt)for(var e=B;e--;)tt[0].remove(),tt[tt.length-1].remove();if(void 0!==F){F=null,Z.removeAttribute("id");for(var n=et;n--;)tt[n].removeAttribute("id"),tt[n].removeAttribute("aria-hidden"),tt[n].style.width=""}if(At&&(Z.removeEventListener("touchstart",q,!1),Z.removeEventListener("touchmove",G,!1),Z.removeEventListener("touchend",z,!1),Z.removeEventListener("touchcancel",z,!1)),ot&&(t.controlsContainer?(lt.removeAttribute("aria-label"),K.removeAttribute("aria-controls"),K.removeAttribute("tabindex"),K.removeEventListener("click",w,!1),K.removeEventListener("keydown",D,!1),Y.removeAttribute("aria-controls"),Y.removeAttribute("tabindex"),Y.removeEventListener("click",M,!1),Y.removeEventListener("keydown",D,!1)):(lt.remove(),lt=null,K=null,Y=null)),dt){if(t.navContainer){ut.removeAttribute("aria-label");for(var i=V.length;i--;)V[i].removeAttribute("aria-selected"),V[i].removeAttribute("aria-controls"),V[i].removeEventListener("click",C,!1),V[i].removeEventListener("keydown",I,!1)}else ut.remove(),ut=null;V=null,$=null}if(ft)if(t.navContainer||null===ut){if(Tt.removeEventListener("click",S,!1),Tt=null,ot&&t.controlsContainer&&(K.removeEventListener("click",N,!1),Y.removeEventListener("click",N,!1)),dt&&t.navContainer)for(var r=0;r<$;r++)V[r].removeEventListener("click",N,!1)}else ut.remove(),ut=null;ct&&document.removeEventListener("keydown",ct,!1),window.removeEventListener("resize",R,!1),window.removeEventListener("scroll",j,!1)}}}function e(){return void 0===window.tinySliderNumber?window.tinySliderNumber=1:window.tinySliderNumber++,"tinySlider"+window.tinySliderNumber}function n(t){return t*(180/Math.PI)}function i(t,e){return Math.abs(90-Math.abs(t))>=90-e?"horizontal":Math.abs(90-Math.abs(t))<=e&&"vertical"}function r(t){if("object"==typeof t){for(var e=[],n=Object.keys(t),i=0,r=n.length;i<r;i++){var a=n[i];e.push(t[a])}return e}return!1}var a=gn.getSupportedProp(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),o=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),s={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.native.js.map
