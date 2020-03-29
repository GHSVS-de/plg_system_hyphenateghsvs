"use strict";
/**
 * @license hyphenEngine.asm.js 3.4.0 - client side hyphenation for webbrowsers
 * ©2019  Mathias Nater, Zürich (mathiasnater at gmail dot com)
 * https://github.com/mnater/Hyphenopoly
 *
 * Released under the MIT license
 * http://mnater.github.io/Hyphenopoly/LICENSE
 */function asmHyphenEngine(r,a,v){"use asm";var e=new r.Uint8Array(v);var i=new r.Uint16Array(v);var n=new r.Int32Array(v);var t=r.Math.imul;var f=a.to|0;var l=a.po|0;var u=a.pl|0;var h=a.vs|0;var w=a.pt|0;var s=a.wo|0;var o=a.tw|0;var c=a.hp|0;var p=a.hw|0;function y(r){r=r|0;var a=0;a=t(r,40503);a=a&255;return a<<1}function m(r,a){r=r|0;a=a|0;var v=0;v=y(r|0)|0;while((i[v>>1]|0)!=0){v=v+2|0}i[v>>1]=r;e[(v>>1)+512|0]=a}function A(r){r=r|0;var a=0;a=y(r)|0;while((i[a>>1]|0)!=(r|0)){a=a+2|0;if((a|0)>=512){return 255}}return e[(a>>1)+512|0]|0}function U(){var r=0;var a=0;var v=0;var e=0;var n=0;var t=0;r=f+2|0;while((r|0)<(l|0)){v=i[r>>1]|0;e=i[r+2>>1]|0;if((e|0)==0){n=255}else{n=A(e)|0}if((n|0)==255){m(v,a);if((e|0)!=0){m(e,a)}a=a+1|0}else{m(v,n)}i[768+(t<<1)>>1]=v;t=t+1|0;r=r+4|0}return t|0}function b(){var r=0;var a=0;var v=0;var t=0;var s=0;var o=0;var c=0;var p=0;var y=0;var m=0;var A=0;var b=0;var g=0;var k=0;var E=0;E=(i[f>>1]<<1)+1<<2;s=w;o=w;c=w;y=h;m=h;A=h;b=U()|0;r=l|0;while((r|0)<(l+u|0)){if((e[r|0]|0)==0){v=e[r+1|0]|0;r=r+2|0}else{if((e[r|0]|0)==255){g=e[r+1|0]|0;k=e[r+2|0]|0;r=r+3|0}while((t|0)<(v|0)){if((t|0)==0){a=g}else if((t|0)==1){a=k}else{a=e[r|0]|0;r=r+1|0}if((a|0)>11){m=m+1|0;if((s|0)==0){o=o+E|0;s=o;n[c+p>>2]=s}p=(a-12|0)<<3;c=s;s=n[c+p>>2]|0}else{e[m|0]=a|0;A=m}t=t+1|0}e[A+1|0]=255;n[c+p+4>>2]=y|0;y=A+2|0;m=y;t=0;c=w;s=w}}return b|0}function g(r,a,v){r=r|0;a=a|0;v=v|0;var t=0;var f=0;var l=0;var u=0;var h=0;var y=0;var m=0;var U=0;var b=0;var g=0;var k=0;var E=0;u=i[s>>1]|0;while((u|0)!=0){E=A(u|0)|0;if((E|0)==255){return 0}e[o+l|0]=E|0;l=l+1|0;e[c+l|0]=0;u=i[s+(l<<1)>>1]|0}f=l;while((t|0)<(f|0)){h=w;l=t|0;while((l|0)<(f|0)){y=e[o+l|0]<<3;m=n[h+y>>2]|0;U=n[h+y+4>>2]|0;if((U|0)>0){b=0;g=e[U|0]|0;while((g|0)!=255){k=c+t+b|0;if((g|0)>(e[k|0]|0)){e[k|0]=g|0}b=b+1|0;g=e[U+b|0]|0}}if((m|0)>0){h=m|0}else{break}l=l+1|0}t=t+1|0}l=1;b=0;f=f-2|0;while((l|0)<=(f|0)){i[p+(l<<1)+b>>1]=i[s+(l<<1)>>1]|0;if(((l|0)>=(r|0)|0)&((l|0)<=(f-a|0)|0)){if(e[c+l+1|0]&1){b=b+2|0;i[p+(l<<1)+b>>1]=v}}l=l+1|0}i[p>>1]=f+(b>>1)|0;return 1}return{convert:b,hyphenate:g}}