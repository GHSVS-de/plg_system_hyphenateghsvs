"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/**
 * @license Hyphenopoly_Loader 3.4.0 - client side hyphenation
 * ©2019  Mathias Nater, Zürich (mathiasnater at gmail dot com)
 * https://github.com/mnater/Hyphenopoly
 *
 * Released under the MIT license
 * http://mnater.github.io/Hyphenopoly/LICENSE
 */!function(e,n,t,a){var o,s,r=sessionStorage,i=e.WebAssembly,l=new Map,p=new Map;function c(){return a.create(null)}function d(e,n){a.keys(e).forEach(n)}function h(e,a){var o=n.createElement("script");o.src=e+a,"hyphenEngine.asm.js"===a&&o.addEventListener("load",(function(){t.events.dispatch("engineLoaded",{msg:"asm"})})),n.head.appendChild(o)}t.cacheFeatureTests&&r.getItem("Hyphenopoly_Loader")?t.cf=JSON.parse(r.getItem("Hyphenopoly_Loader")):t.cf={langs:c(),polyfill:!1,wasm:null},o=n.currentScript?n.currentScript.src.replace(/Hyphenopoly_Loader.js/i,""):"../",s=o+"patterns/",t.paths?(t.paths.maindir=t.paths.maindir||o,t.paths.patterndir=t.paths.patterndir||s):t.paths=a.create({maindir:o,patterndir:s}),t.setup?(t.setup.selectors=t.setup.selectors||{".hyphenate":{}},t.setup.timeout=t.setup.timeout||1e3,t.setup.hide=t.setup.hide||"all"):t.setup={hide:"all",selectors:{".hyphenate":{}},timeout:1e3},d(t.require,(function(e){p.set(e.toLowerCase(),t.require[e])})),t.fallbacks&&d(t.fallbacks,(function(e){l.set(e.toLowerCase(),t.fallbacks[e].toLowerCase())})),t.toggle=function(e){if("on"===e){var a=n.getElementById("H9Y_Styles");a&&a.parentNode.removeChild(a)}else{var o=" {visibility: hidden !important}\n",s=n.createElement("style"),r="";switch(s.id="H9Y_Styles",t.setup.hide){case"all":r="html"+o;break;case"element":d(t.setup.selectors,(function(e){r+=e+o}));break;case"text":d(t.setup.selectors,(function(e){r+=e+" {color: transparent !important}\n"}))}s.appendChild(n.createTextNode(r)),n.head.appendChild(s)}},function(){var n=new Map,a=[],o=[];function s(e,t,a){n.set(e,{cancellable:a,default:t,register:[]})}function r(e,a,s){n.has(e)?n.get(e).register.push(a):s?o.push({handler:a,name:e}):t.events.dispatch("error",{lvl:"warn",msg:'unknown Event "'+e+'" discarded'})}s("timeout",(function(n){t.toggle("on"),e.console.info("Hyphenopolys 'FOUHC'-prevention timed out after %dms",n.delay)}),!1),s("error",(function(n){switch(n.lvl){case"info":e.console.info(n.msg);break;case"warn":e.console.warn(n.msg);break;default:e.console.error(n.msg)}}),!0),s("contentLoaded",(function(e){a.push({data:e,name:"contentLoaded"})}),!1),s("engineLoaded",(function(e){a.push({data:e,name:"engineLoaded"})}),!1),s("hpbLoaded",(function(e){a.push({data:e,name:"hpbLoaded"})}),!1),s("loadError",(function(e){a.push({data:e,name:"loadError"})}),!1),s("tearDown",null,!0),t.handleEvent&&d(t.handleEvent,(function(e){r(e,t.handleEvent[e],!0)})),t.events=c(),t.events.deferred=a,t.events.tempRegister=o,t.events.dispatch=function(e,t){t=t||c();var a=!1;n.get(e).register.forEach((function(o){t.preventDefault=function(){n.get(e).cancellable&&(a=!0)},o(t)})),!a&&n.get(e).default&&n.get(e).default(t)},t.events.define=s,t.events.addListener=r}();var u=new Map;function f(n,a,o,s){var r,l,p,c;u.has(a)?"hyphenEngine"!==o&&u.get(a).push(s):(u.set(a,[s]),t.cf.wasm?(r=n,l=a,p=o,c=s,e.fetch(r+l,{credentials:"include"}).then((function(e){if(e.ok)if("hyphenEngine"===p)t.bins.set(p,e.arrayBuffer().then((function(e){return new i.Module(e)}))),t.events.dispatch("engineLoaded",{msg:c});else{var n=u.get(l);n.forEach((function(a){t.bins.set(a,n.length>1?e.clone().arrayBuffer():e.arrayBuffer()),t.events.dispatch("hpbLoaded",{msg:a})}))}else t.events.dispatch("loadError",{file:l,msg:c,name:p,path:r})}))):function(e,n,a,o){var s=new XMLHttpRequest;s.onload=function(){200===s.status?u.get(n).forEach((function(e){t.bins.set(e,s.response),t.events.dispatch("hpbLoaded",{msg:e})})):t.events.dispatch("loadError",{file:n,msg:o,name:a,path:e})},s.open("GET",e+n),s.responseType="arraybuffer",s.send()}(n,a,o,s))}function m(){t.setup.hide.match(/^(?:element|text)$/)&&t.toggle("off"),t.events.dispatch("contentLoaded",{msg:["contentLoaded"]})}!function(){var a,o,s=(a=null,o=["visibility:hidden","-moz-hyphens:auto","-webkit-hyphens:auto","-ms-hyphens:auto","hyphens:auto","width:48px","font-size:12px","line-height:12px","border:none","padding:0","word-wrap:normal"].join(";"),{append:function(e){return a?(e.appendChild(a),a):null},clear:function(){a&&a.parentNode.removeChild(a)},create:function(e){if(!t.cf.langs[e]){a=a||n.createElement("body");var s=n.createElement("div");s.lang=e,s.style.cssText=o,s.appendChild(n.createTextNode(p.get(e).toLowerCase())),a.appendChild(s)}}});function r(e){var n=e+".hpb",a=e;t.cf.polyfill=!0,t.cf.langs[e]="H9Y",l&&l.has(e)&&(n=(a=l.get(e))+".hpb"),t.bins=t.bins||new Map,f(t.paths.patterndir,n,a,e)}null===t.cf.wasm&&(t.cf.wasm=function(){if("object"===_typeof(i)&&"function"==typeof i.Instance){var e=new i.Module(Uint8Array.from([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,5,1,1,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]));return 0!==new i.Instance(e).exports.t(4)}return!1}()),p.forEach((function(e,n){"FORCEHYPHENOPOLY"===e||t.cf.langs[n]&&"H9Y"===t.cf.langs[n]?r(n):s.create(n)}));var u=s.append(n.documentElement);if(null!==u){var m=u.querySelectorAll("div");Array.prototype.forEach.call(m,(function(e){var n;("auto"===(n=e).style.hyphens||"auto"===n.style.webkitHyphens||"auto"===n.style.msHyphens||"auto"===n.style["-moz-hyphens"])&&e.offsetHeight>12?t.cf.langs[e.lang]="CSS":r(e.lang)})),s.clear()}t.cf.polyfill&&(h(t.paths.maindir,"Hyphenopoly.js"),t.cf.wasm?f(t.paths.maindir,"hyphenEngine.wasm","hyphenEngine","wasm"):h(t.paths.maindir,"hyphenEngine.asm.js"),d(t.cf.langs,(function(n){"H9Y"===t.cf.langs[n]&&(function(e){var n=new Map([["de",54],["hu",205],["nb-no",91],["nl",41]]).get(e)||32;if(t.specMems=t.specMems||new Map,t.cf.wasm)t.specMems.set(e,new i.Memory({initial:n,maximum:256}));else{var a=2<<Math.floor(Math.log(n)*Math.LOG2E)<<16;t.specMems.set(e,new ArrayBuffer(a))}}(n),function(n){t.hyphenators=t.hyphenators||c(),t.hyphenators[n]||(e.Promise?(t.hyphenators[n]=new Promise((function(e,a){t.events.addListener("engineReady",(function(a){a.msg===n&&e(t.createHyphenator(a.msg))}),!0),t.events.addListener("loadError",(function(e){e.name!==n&&"hyphenEngine"!==e.name||a(new Error("File "+e.file+" can't be loaded from "+e.path))}),!1)})),t.hyphenators[n].catch((function(e){t.events.dispatch("error",{lvl:"error",msg:e.message})}))):t.hyphenators[n]={then:function(){t.events.dispatch("error",{msg:"Promises not supported in this engine. Use a polyfill."})}})}(n))})))}(),t.cf.polyfill?("all"===t.setup.hide&&t.toggle("off"),"none"!==t.setup.hide&&(t.setup.timeOutHandler=e.setTimeout((function(){t.toggle("on"),t.events.dispatch("timeout",{delay:t.setup.timeout})}),t.setup.timeout)),"loading"===n.readyState?n.addEventListener("DOMContentLoaded",m,{once:!0,passive:!0}):m()):(t.events.dispatch("tearDown",{}),e.Hyphenopoly=null),t.cacheFeatureTests&&r.setItem("Hyphenopoly_Loader",JSON.stringify(t.cf))}(window,document,Hyphenopoly,Object);