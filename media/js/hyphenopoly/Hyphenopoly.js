/**
 * @license Hyphenopoly 3.0.2 - client side hyphenation for webbrowsers
 * ©2019  Mathias Nater, Zürich (mathiasnater at gmail dot com)
 * https://github.com/mnater/Hyphenopoly
 *
 * Released under the MIT license
 * http://mnater.github.io/Hyphenopoly/LICENSE
 */
!function(e){"use strict";function n(){return Object.create(null)}function t(e,n){return{configurable:(4&n)>0,enumerable:(2&n)>0,writable:(1&n)>0,value:e}}const r=String.fromCharCode(173);Math.imul=Math.imul||function(e,n){const t=65535&e,r=65535&n;return t*r+((e>>>16&65535)*r+t*(n>>>16&65535)<<16>>>0)|0},function(e){const o=Object.create(null,{defaultLanguage:t("en-us",2),dontHyphenate:t(function(){const e=n();return"abbr,acronym,audio,br,button,code,img,input,kbd,label,math,option,pre,samp,script,style,sub,sup,svg,textarea,var,video".split(",").forEach(function(n){e[n]=!0}),e}(),2),dontHyphenateClass:t("donthyphenate",2),exceptions:t(n(),2),normalize:t(!1,2),safeCopy:t(!0,2),timeout:t(1e3,2)}),a=Object.create(o),i=Object.create(null,{compound:t("hyphen",2),hyphen:t(r,2),leftmin:t(0,2),leftminPerLang:t(0,2),minWordLength:t(6,2),orphanControl:t(1,2),rightmin:t(0,2),rightminPerLang:t(0,2)});Object.keys(e.setup).forEach(function(r){if("selectors"===r){const r=Object.keys(e.setup.selectors);Object.defineProperty(a,"selectors",t(r,2)),r.forEach(function(r){const o=n();Object.keys(e.setup.selectors[r]).forEach(function(n){o[n]=t(e.setup.selectors[r][n],2)}),Object.defineProperty(a,r,t(Object.create(i,o),2))})}else if("dontHyphenate"===r){const i=n();Object.keys(e.setup.dontHyphenate).forEach(function(n){i[n]=t(e.setup.dontHyphenate[n],2)}),Object.defineProperty(a,r,t(Object.create(o.dontHyphenate,i),3))}else Object.defineProperty(a,r,t(e.setup[r],3))}),e.c=a}(Hyphenopoly),function(o){function a(e,n){try{return e.getAttribute("lang")?e.getAttribute("lang").toLowerCase():"html"===e.tagName.toLowerCase()?n?y:null:a(e.parentNode,n)}catch(e){return null}}function i(){function n(e,t,c,s){s=s||!1;const l=function(e,n){return e.lang&&"string"==typeof e.lang?e.lang.toLowerCase():n&&""!==n?n.toLowerCase():a(e,!0)}(e,t);"H9Y"===o.clientFeat.langs[l]?(w.add(e,l,c),!s&&d.safeCopy&&function(e){e.addEventListener("copy",function(e){e.preventDefault();const n=window.getSelection().toString();e.clipboardData.setData("text/plain",n.replace(new RegExp(r,"g"),""))},!0)}(e)):o.clientFeat.langs[l]||o.events.dispatch("error",{lvl:"warn",msg:"Element with '"+l+"' found, but '"+l+".hpb' not loaded. Check language tags!"});const u=e.childNodes;Array.prototype.forEach.call(u,function(e){1!==e.nodeType||function(e,n){return e.matches||(e.matches=e.msMatchesSelector||e.webkitMatchesSelector),e.matches(n)}(e,i)||n(e,l,c,!0)})}w=function(){const e=new Map,n=[0];return{add:function(t,r,o){const a={element:t,selector:o};return e.has(r)||e.set(r,[]),e.get(r).push(a),n[0]+=1,a},counter:n,each:function(n){e.forEach(function(e,t){n(t,e)})},list:e,rem:function(t){let r=0;e.has(t)&&(r=e.get(t).length,e.delete(t),n[0]-=r,0===n[0]&&o.events.dispatch("hyphenopolyEnd"))}}}();const t=function(){let e="."+o.c.dontHyphenateClass,n=null;for(n in d.dontHyphenate)d.dontHyphenate[n]&&(e+=", "+n);return e}(),i=d.selectors.join(", ")+", "+t;d.selectors.forEach(function(t){const r=e.document.querySelectorAll(t);Array.prototype.forEach.call(r,function(e){n(e,a(e,!0),t,!1)})}),o.elementsReady=!0}function c(e,n,t){function r(r){let s=e.cache.get(t).get(r);return s||(e.exceptions.has(r)?s=e.exceptions.get(r).replace(/-/g,a.hyphen):-1===r.indexOf("-")?r.length>61?(o.events.dispatch("error",{lvl:"warn",msg:"found word longer than 61 characters"}),s=r):s=e.hyphenateFunction(r,i,a.leftminPerLang[n],a.rightminPerLang[n]):s=function(r){const o=String.fromCharCode(8203);let i=null,s=null;return"auto"===a.compound||"all"===a.compound?(s=c(e,n,t),i=r.split("-").map(function(e){return e.length>=a.minWordLength?s(e):e}),r="auto"===a.compound?i.join("-"):i.join("-"+o)):r=r.replace("-","-"+o),r}(r),e.cache.get(t).set(r,s)),s}const a=d[t],i=a.hyphen;return e.cache.set(t,new Map),b.set(n+"-"+t,r),r}function s(e,n,t){function r(e){let n=null;return n=l?e.normalize("NFC").replace(p,h):e.replace(p,h),1!==i.orphanControl&&(n=n.replace(/(\u0020*)(\S+)(\s*)$/,f)),n}const a=o.languages.get(e),i=d[n],s=i.minWordLength,l=d.normalize&&Boolean(String.prototype.normalize),u=e+"-"+n,h=b.has(u)?b.get(u):c(a,e,n),f=v.has(n)?v.get(n):function(e){function n(n,t,r,o){const a=d[e];let i=a.hyphen;return-1!==".\\+*?[^]$(){}=!<>|:-".indexOf(a.hyphen)&&(i="\\"+a.hyphen),3===a.orphanControl&&" "===t&&(t=String.fromCharCode(160)),t+r.replace(new RegExp(i,"g"),"")+o}return v.set(e,n),n}(n),p=a.genRegExps.get(n);let g=null;return"string"==typeof t?g=r(t):t instanceof HTMLElement&&function(n){o.events.dispatch("beforeElementHyphenation",{el:n,lang:e});const t=n.childNodes;Array.prototype.forEach.call(t,function(e){3===e.nodeType&&e.data.length>=s&&(e.data=r(e.data))}),w.counter[0]-=1,o.events.dispatch("afterElementHyphenation",{el:n,lang:e})}(t),g}function l(e,n){n?n.forEach(function(n){s(e,n.selector,n.element)}):o.events.dispatch("error",{lvl:"warn",msg:"engine for language '"+e+"' loaded, but no elements found."}),0===w.counter[0]&&o.events.dispatch("hyphenopolyEnd")}function u(e,r,a,i,c){a=a.replace(/-/g,"");const s=function(e){return o.languages||(o.languages=new Map),o.languages.has(e)||o.languages.set(e,n()),o.languages.get(e)}(e);s.engineReady||(s.cache=new Map,o.c.exceptions.global&&(o.c.exceptions[e]?o.c.exceptions[e]+=", "+o.c.exceptions.global:o.c.exceptions[e]=o.c.exceptions.global),o.c.exceptions[e]?(s.exceptions=function(e){const n=new Map;return e.split(", ").forEach(function(e){const t=e.replace(/-/g,"");n.set(t,e)}),n}(o.c.exceptions[e]),delete o.c.exceptions[e]):s.exceptions=new Map,s.genRegExps=new Map,s.leftmin=i,s.rightmin=c,s.hyphenateFunction=r,d.selectors.forEach(function(r){const o=d[r];0===o.leftminPerLang&&Object.defineProperty(o,"leftminPerLang",t(n(),2)),0===o.rightminPerLang&&Object.defineProperty(o,"rightminPerLang",t(n(),2)),o.leftminPerLang[e]?o.leftminPerLang[e]=Math.max(s.leftmin,o.leftmin,o.leftminPerLang[e]):o.leftminPerLang[e]=Math.max(s.leftmin,o.leftmin),o.rightminPerLang[e]?o.rightminPerLang[e]=Math.max(s.rightmin,o.rightmin,o.rightminPerLang[e]):o.rightminPerLang[e]=Math.max(s.rightmin,o.rightmin),s.genRegExps.set(r,new RegExp("[\\w"+a+String.fromCharCode(8204)+"-]{"+o.minWordLength+",}","gi"))}),s.engineReady=!0),Hyphenopoly.events.dispatch("engineReady",{msg:e})}function h(e){const n=new Uint32Array(e).subarray(0,8);if(40005736!==n[0])throw o.events.dispatch("error",{lvl:"error",msg:"Pattern file format error: "+new Uint8Array(Uint32Array.of(n[0]).buffer)}),new Error("Pattern file format error!");const t=n[7],r=1280+t+(4-(1280+t)%4),a=r+4*n[6];return{ho:a+512,hp:a+192,hs:Math.max(function(e){if(o.clientFeat.wasm)return 65536*Math.ceil(e/65536);const n=Math.ceil(Math.log2(e));return n<=12?4096:n<24?1<<n:Math.ceil(e/(1<<24))*(1<<24)}(a+512+n[2]+n[3]),2097152),hw:a+256,lm:n[4],pl:n[3],po:a+512+n[2],pt:r,rm:n[5],to:a+512+n[1],tw:a+128,vs:1280,wo:a}}function f(e,n){const t=o.clientFeat.wasm?e.wasmMemory.buffer:e.heapBuffer,r=new Uint16Array(t).subarray(e.wo>>1,64+(e.wo>>1)),a=e.lm,i=e.rm,c=new Uint16Array(t).subarray(e.hw>>1,128+(e.hw>>1));return r[0]=95,function(e,t,o,s){let l=0,u=e.charCodeAt(l);for(o=o||a,s=s||i;u;)r[l+=1]=u,u=e.charCodeAt(l);return r[l+1]=95,r[l+2]=0,1===n(o,s)&&(e=E(c.subarray(1,c[0]+1)),"­"!==t&&(e=e.replace(/\u00AD/g,t))),e}}function p(e){Promise.all([o.binaries.get(e),o.binaries.get("hyphenEngine")]).then(function(n){const t=n[0],r=h(t),a=n[1],i=o.specMems.get(e),c=i.buffer.byteLength>=r.hs?i:new WebAssembly.Memory({initial:r.hs/65536,maximum:256});new Uint32Array(c.buffer).set(new Uint32Array(t),r.ho>>2),r.wasmMemory=c,WebAssembly.instantiate(a,{env:{memory:r.wasmMemory,memoryBase:0},x:r}).then(function(n){const t=n.exports.convert();u(e,f(r,n.exports.hyphenate),E(new Uint16Array(c.buffer).subarray(385,384+t)),r.lm,r.rm)})})}function g(e){const n=o.binaries.get(e),t=h(n),r=o.specMems.get(e),a=r.byteLength>=t.hs?r:new ArrayBuffer(t.hs),i=new Uint8Array(a),c=new Uint8Array(n);i.set(c,t.ho),t.heapBuffer=a;const s=asmHyphenEngine({Int32Array:window.Int32Array,Math:Math,Uint16Array:window.Uint16Array,Uint8Array:window.Uint8Array},t,t.heapBuffer),l=s.convert();u(e,f(t,s.hyphenate),E(new Uint16Array(a).subarray(385,384+l)),t.lm,t.rm)}function m(e,n){"*"===e?("wasm"===n?x=p:"asm"===n&&(x=g),L.forEach(function(e){x(e)})):x?x(e):L.push(e)}const d=o.c;let y=null,w=null;const b=new Map,v=new Map;o.createHyphenator=function(e){return function(n,t){return t=t||".hyphenate",s(e,t,n)}},o.unhyphenate=function(){w.each(function(e,n){n.forEach(function(e){const n=e.element.firstChild,t=d[e.selector].hyphen;n.data=n.data.replace(new RegExp(t,"g"),"")})})};const E=function(){if(window.TextDecoder){const e=new TextDecoder("utf-16le");return function(n){return e.decode(n)}}return function(e){return String.fromCharCode.apply(null,e)}}();let x=null;const L=[];o.events.define("contentLoaded",function(){!function(){const n=e.document.getElementsByTagName("html")[0];(y=a(n,!1))||""===d.defaultLanguage||(y=d.defaultLanguage)}(),i(),o.events.dispatch("elementsReady")},!1),o.events.define("elementsReady",function(){w.each(function(e,n){o.languages&&o.languages.has(e)&&o.languages.get(e).engineReady&&l(e,n)})},!1),o.events.define("engineLoaded",function(e){m("*",e.msg)},!1),o.events.define("hpbLoaded",function(e){m(e.msg,"*")},!1),o.events.define("loadError",function(e){"wasm"!==e.msg&&w.rem(e.name)},!1),o.events.define("engineReady",function(e){o.elementsReady&&l(e.msg,w.list.get(e.msg))},!1),o.events.define("hyphenopolyStart",null,!0),o.events.define("hyphenopolyEnd",function(){e.clearTimeout(d.timeOutHandler),"none"!==o.c.hide&&o.toggle("on")},!1),o.events.define("beforeElementHyphenation",null,!0),o.events.define("afterElementHyphenation",null,!0),o.events.tempRegister.forEach(function(e){o.events.addListener(e.name,e.handler,!1)}),delete o.events.tempRegister,o.events.dispatch("hyphenopolyStart",{msg:"Hyphenopoly started"}),e.clearTimeout(o.c.timeOutHandler),Object.defineProperty(d,"timeOutHandler",t(e.setTimeout(function(){o.events.dispatch("timeout",{delay:d.timeout})},d.timeout),2)),o.events.deferred.forEach(function(e){o.events.dispatch(e.name,e.data)}),delete o.events.deferred}(Hyphenopoly)}(window);