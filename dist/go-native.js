var gn={};gn.optimizedResize=function(){function e(){i||(i=!0,window.requestAnimationFrame?window.requestAnimationFrame(t):setTimeout(t,66))}function t(){r.forEach(function(e){e()}),i=!1}function n(e){e&&r.push(e)}var r=[],i=!1;return{add:function(t){r.length||window.addEventListener("resize",e),n(t)}}}(),gn.ready=function(e){return"function"==typeof e?"complete"===document.readyState?e():void document.addEventListener("DOMContentLoaded",e,!1):void 0},gn.extend=function(){for(var e,t,n,r=arguments[0]||{},i=1,o=arguments.length;o>i;i++)if(null!==(e=arguments[i]))for(t in e)n=e[t],r!==n&&void 0!==n&&(r[t]=n);return r},gn.isInViewport=function(e){var t=e.getBoundingClientRect();return t.bottom>=0&&t.right>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.left<=(window.innerWidth||document.documentElement.clientWidth)},gn.getSupportedProp=function(e){for(var t=document.documentElement,n=0;n<e.length;n++)if(e[n]in t.style)return e[n]},gn.getOffsetLeft=function(e){var t=e.getBoundingClientRect(),n=t.left+document.body.scrollLeft;return Math.round(n)},gn.getOffsetTop=function(e){var t=e.getBoundingClientRect(),n=t.top+document.body.scrollTop;return Math.round(n)},gn.getOuterWidth=function(e){var t=/\d/,n=e.offsetWidth,r=e.currentStyle||getComputedStyle(e),i=null===t.exec(r.marginLeft)?"0px":r.marginLeft,o=null===t.exec(r.marginRight)?"0px":r.marginRight;return n+=parseInt(Length.toPx(e,i))+parseInt(Length.toPx(e,o))},gn.getOuterHeight=function(e){var t=/\d/,n=e.offsetHeight,r=e.currentStyle||getComputedStyle(e),i=null===t.exec(r.marginTop)?"0px":r.marginTop,o=null===t.exec(r.marginBottom)?"0px":r.marginBottom;return n+=parseInt(Length.toPx(e,i))+parseInt(Length.toPx(e,o))},gn.indexOf=function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},gn.getClosest=function(e,t){for(var n=t.charAt(0);e&&e!==document;e=e.parentNode){if("."===n&&e.classList.contains(t.substr(1)))return e;if("#"===n&&e.id===t.substr(1))return e;if("["===n&&e.hasAttribute(t.substr(1,t.length-2)))return e;if(e.tagName.toLowerCase()===t)return e}return!1},gn.getParents=function(e,t){var n=[];if(t)var r=t.charAt(0);for(;e&&e!==document;e=e.parentNode)t?("."===r&&e.classList.contains(t.substr(1))&&n.push(e),"#"===r&&e.id===t.substr(1)&&n.push(e),"["===r&&e.hasAttribute(t.substr(1,t.length-1))&&n.push(e),e.tagName.toLowerCase()===t&&n.push(e)):n.push(e);return 0===n.length?null:n},gn.getParentsUntil=function(e,t,n){var r=[];if(t)var i=t.charAt(0);if(n)var o=n.charAt(0);for(;e&&e!==document;e=e.parentNode){if(t){if("."===i&&e.classList.contains(t.substr(1)))break;if("#"===i&&e.id===t.substr(1))break;if("["===i&&e.hasAttribute(t.substr(1,t.length-1)))break;if(e.tagName.toLowerCase()===t)break}n?("."===o&&e.classList.contains(n.substr(1))&&r.push(e),"#"===o&&e.id===n.substr(1)&&r.push(e),"["===o&&e.hasAttribute(n.substr(1,n.length-1))&&r.push(e),e.tagName.toLowerCase()===n&&r.push(e)):r.push(e)}return 0===r.length?null:r},gn.getSiblings=function(e){for(var t=[],n=e.parentNode.firstChild;n;n=n.nextSibling)1===n.nodeType&&n!==e&&t.push(n);return t},gn.isNodeList=function(e){return"undefined"!=typeof e.item},gn.createElement=function(e){if(!e||!e.tagName)throw{message:"Invalid argument"};var t=document.createElement(e.tagName);if(e.id&&(t.id=e.id),e.className&&(t.className=e.className),e.html&&(t.innerHTML=e.html),"undefined"!=typeof e.attributes){var n=e.attributes,r;for(r in n)n.hasOwnProperty(r)&&t.setAttribute(r,n[r])}if("undefined"!=typeof e.children)for(var i,o=0;i=e.children[o++];)t.appendChild(createElement(i));return t},gn.append=function(e,t){var n=gn.isNodeList(e)?e:[e];if("undefined"!=typeof t.nodeType&&1===t.nodeType)for(var r=n.length;r--;)n[r].appendChild(t);else if("string"==typeof t)for(var r=n.length;r--;)n[r].insertAdjacentHTML("beforeend",t);else if(gn.isNodeList(t)){for(var i=document.createDocumentFragment(),r=t.length;r--;)i.insertBefore(t[r],i.firstChild);for(var o=n.length;o--;)n[o].appendChild(i)}},gn.prepend=function(e,t){var n=gn.isNodeList(e)?e:[e];if("undefined"!=typeof t.nodeType&&1===t.nodeType)for(var r=n.length;r--;)n[r].insertBefore(t,n[r].firstChild);else if("string"==typeof t)for(var r=n.length;r--;)n[r].insertAdjacentHTML("afterbegin",t);else if(gn.isNodeList(t)){for(var i=document.createDocumentFragment(),r=t.length;r--;)i.insertBefore(t[r],i.firstChild);for(var o=n.length;o--;)n[o].insertBefore(i,n[o].firstChild)}},gn.wrap=function(e,t){for(var n=gn.isNodeList(e)?e:[e],r=n.length;r--;){var i=r>0?t.cloneNode(!0):t,o=n[r],a=o.parentNode,s=o.nextSibling;i.appendChild(o),s?a.insertBefore(i,s):a.appendChild(i)}},gn.wrapAll=function(e,t){for(var n=e.length?e[0]:e,r=n.parentNode,i=n.nextSibling,o=0;o<e.length;o++)t.appendChild(e[o]);i!==e[1]?r.insertBefore(t,i):r.appendChild(t)},gn.unwrap=function(e){for(var t=gn.isNodeList(e)?e:[e],n=t.length;n--;){for(var r=t[n],i=r.parentNode;r.firstChild;)i.insertBefore(r.firstChild,r);i.removeChild(r)}};