!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=2)}([function(e,n,r){"use strict";const t=r(3),o=r(4),a=r(9).stdout,s=r(12),i="win32"===process.platform&&!(process.env.TERM||"").toLowerCase().startsWith("xterm"),l=["ansi","ansi","ansi256","ansi16m"],c=new Set(["gray"]),u=Object.create(null);function h(e,n){n=n||{};const r=a?a.level:0;e.level=void 0===n.level?r:n.level,e.enabled="enabled"in n?n.enabled:e.level>0}function f(e){if(!this||!(this instanceof f)||this.template){const n={};return h(n,e),n.template=function(){const e=[].slice.call(arguments);return function(e,n){if(!Array.isArray(n))return[].slice.call(arguments,1).join(" ");const r=[].slice.call(arguments,2),t=[n.raw[0]];for(let e=1;e<n.length;e++)t.push(String(r[e-1]).replace(/[{}\\]/g,"\\$&")),t.push(String(n.raw[e]));return s(e,t.join(""))}.apply(null,[n.template].concat(e))},Object.setPrototypeOf(n,f.prototype),Object.setPrototypeOf(n.template,n),n.template.constructor=f,n.template}h(this,e)}i&&(o.blue.open="[94m");for(const e of Object.keys(o))o[e].closeRe=new RegExp(t(o[e].close),"g"),u[e]={get(){const n=o[e];return g.call(this,this._styles?this._styles.concat(n):[n],this._empty,e)}};u.visible={get(){return g.call(this,this._styles||[],!0,"visible")}},o.color.closeRe=new RegExp(t(o.color.close),"g");for(const e of Object.keys(o.color.ansi))c.has(e)||(u[e]={get(){const n=this.level;return function(){const r={open:o.color[l[n]][e].apply(null,arguments),close:o.color.close,closeRe:o.color.closeRe};return g.call(this,this._styles?this._styles.concat(r):[r],this._empty,e)}}});o.bgColor.closeRe=new RegExp(t(o.bgColor.close),"g");for(const e of Object.keys(o.bgColor.ansi)){if(c.has(e))continue;u["bg"+e[0].toUpperCase()+e.slice(1)]={get(){const n=this.level;return function(){const r={open:o.bgColor[l[n]][e].apply(null,arguments),close:o.bgColor.close,closeRe:o.bgColor.closeRe};return g.call(this,this._styles?this._styles.concat(r):[r],this._empty,e)}}}}const p=Object.defineProperties(()=>{},u);function g(e,n,r){const t=function(){return function(){const e=arguments,n=e.length;let r=String(arguments[0]);if(0===n)return"";if(n>1)for(let t=1;t<n;t++)r+=" "+e[t];if(!this.enabled||this.level<=0||!r)return this._empty?"":r;const t=o.dim.open;i&&this.hasGrey&&(o.dim.open="");for(const e of this._styles.slice().reverse())r=(r=e.open+r.replace(e.closeRe,e.open)+e.close).replace(/\r?\n/g,`${e.close}$&${e.open}`);return o.dim.open=t,r}.apply(t,arguments)};t._styles=e,t._empty=n;const a=this;return Object.defineProperty(t,"level",{enumerable:!0,get:()=>a.level,set(e){a.level=e}}),Object.defineProperty(t,"enabled",{enumerable:!0,get:()=>a.enabled,set(e){a.enabled=e}}),t.hasGrey=this.hasGrey||"gray"===r||"grey"===r,t.__proto__=p,t}Object.defineProperties(f.prototype,u),e.exports=f(),e.exports.supportsColor=a,e.exports.default=e.exports},function(e,n,r){var t=r(7),o={};for(var a in t)t.hasOwnProperty(a)&&(o[t[a]]=a);var s=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var i in s)if(s.hasOwnProperty(i)){if(!("channels"in s[i]))throw new Error("missing channels property: "+i);if(!("labels"in s[i]))throw new Error("missing channel labels property: "+i);if(s[i].labels.length!==s[i].channels)throw new Error("channel and label counts mismatch: "+i);var l=s[i].channels,c=s[i].labels;delete s[i].channels,delete s[i].labels,Object.defineProperty(s[i],"channels",{value:l}),Object.defineProperty(s[i],"labels",{value:c})}function u(e,n){return Math.pow(e[0]-n[0],2)+Math.pow(e[1]-n[1],2)+Math.pow(e[2]-n[2],2)}s.rgb.hsl=function(e){var n,r,t=e[0]/255,o=e[1]/255,a=e[2]/255,s=Math.min(t,o,a),i=Math.max(t,o,a),l=i-s;return i===s?n=0:t===i?n=(o-a)/l:o===i?n=2+(a-t)/l:a===i&&(n=4+(t-o)/l),(n=Math.min(60*n,360))<0&&(n+=360),r=(s+i)/2,[n,100*(i===s?0:r<=.5?l/(i+s):l/(2-i-s)),100*r]},s.rgb.hsv=function(e){var n,r,t,o,a,s=e[0]/255,i=e[1]/255,l=e[2]/255,c=Math.max(s,i,l),u=c-Math.min(s,i,l),h=function(e){return(c-e)/6/u+.5};return 0===u?o=a=0:(a=u/c,n=h(s),r=h(i),t=h(l),s===c?o=t-r:i===c?o=1/3+n-t:l===c&&(o=2/3+r-n),o<0?o+=1:o>1&&(o-=1)),[360*o,100*a,100*c]},s.rgb.hwb=function(e){var n=e[0],r=e[1],t=e[2];return[s.rgb.hsl(e)[0],100*(1/255*Math.min(n,Math.min(r,t))),100*(t=1-1/255*Math.max(n,Math.max(r,t)))]},s.rgb.cmyk=function(e){var n,r=e[0]/255,t=e[1]/255,o=e[2]/255;return[100*((1-r-(n=Math.min(1-r,1-t,1-o)))/(1-n)||0),100*((1-t-n)/(1-n)||0),100*((1-o-n)/(1-n)||0),100*n]},s.rgb.keyword=function(e){var n=o[e];if(n)return n;var r,a=1/0;for(var s in t)if(t.hasOwnProperty(s)){var i=u(e,t[s]);i<a&&(a=i,r=s)}return r},s.keyword.rgb=function(e){return t[e]},s.rgb.xyz=function(e){var n=e[0]/255,r=e[1]/255,t=e[2]/255;return[100*(.4124*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.3576*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.1805*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)),100*(.2126*n+.7152*r+.0722*t),100*(.0193*n+.1192*r+.9505*t)]},s.rgb.lab=function(e){var n=s.rgb.xyz(e),r=n[0],t=n[1],o=n[2];return t/=100,o/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(r-t),200*(t-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]},s.hsl.rgb=function(e){var n,r,t,o,a,s=e[0]/360,i=e[1]/100,l=e[2]/100;if(0===i)return[a=255*l,a,a];n=2*l-(r=l<.5?l*(1+i):l+i-l*i),o=[0,0,0];for(var c=0;c<3;c++)(t=s+1/3*-(c-1))<0&&t++,t>1&&t--,a=6*t<1?n+6*(r-n)*t:2*t<1?r:3*t<2?n+(r-n)*(2/3-t)*6:n,o[c]=255*a;return o},s.hsl.hsv=function(e){var n=e[0],r=e[1]/100,t=e[2]/100,o=r,a=Math.max(t,.01);return r*=(t*=2)<=1?t:2-t,o*=a<=1?a:2-a,[n,100*(0===t?2*o/(a+o):2*r/(t+r)),100*((t+r)/2)]},s.hsv.rgb=function(e){var n=e[0]/60,r=e[1]/100,t=e[2]/100,o=Math.floor(n)%6,a=n-Math.floor(n),s=255*t*(1-r),i=255*t*(1-r*a),l=255*t*(1-r*(1-a));switch(t*=255,o){case 0:return[t,l,s];case 1:return[i,t,s];case 2:return[s,t,l];case 3:return[s,i,t];case 4:return[l,s,t];case 5:return[t,s,i]}},s.hsv.hsl=function(e){var n,r,t,o=e[0],a=e[1]/100,s=e[2]/100,i=Math.max(s,.01);return t=(2-a)*s,r=a*i,[o,100*(r=(r/=(n=(2-a)*i)<=1?n:2-n)||0),100*(t/=2)]},s.hwb.rgb=function(e){var n,r,t,o,a,s,i,l=e[0]/360,c=e[1]/100,u=e[2]/100,h=c+u;switch(h>1&&(c/=h,u/=h),r=1-u,t=6*l-(n=Math.floor(6*l)),0!=(1&n)&&(t=1-t),o=c+t*(r-c),n){default:case 6:case 0:a=r,s=o,i=c;break;case 1:a=o,s=r,i=c;break;case 2:a=c,s=r,i=o;break;case 3:a=c,s=o,i=r;break;case 4:a=o,s=c,i=r;break;case 5:a=r,s=c,i=o}return[255*a,255*s,255*i]},s.cmyk.rgb=function(e){var n=e[0]/100,r=e[1]/100,t=e[2]/100,o=e[3]/100;return[255*(1-Math.min(1,n*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o)),255*(1-Math.min(1,t*(1-o)+o))]},s.xyz.rgb=function(e){var n,r,t,o=e[0]/100,a=e[1]/100,s=e[2]/100;return r=-.9689*o+1.8758*a+.0415*s,t=.0557*o+-.204*a+1.057*s,n=(n=3.2406*o+-1.5372*a+-.4986*s)>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,[255*(n=Math.min(Math.max(0,n),1)),255*(r=Math.min(Math.max(0,r),1)),255*(t=Math.min(Math.max(0,t),1))]},s.xyz.lab=function(e){var n=e[0],r=e[1],t=e[2];return r/=100,t/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(n-r),200*(r-(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116))]},s.lab.xyz=function(e){var n,r,t,o=e[0],a=e[1],s=e[2];n=a/500+(r=(o+16)/116),t=r-s/200;var i=Math.pow(r,3),l=Math.pow(n,3),c=Math.pow(t,3);return r=i>.008856?i:(r-16/116)/7.787,n=l>.008856?l:(n-16/116)/7.787,t=c>.008856?c:(t-16/116)/7.787,[n*=95.047,r*=100,t*=108.883]},s.lab.lch=function(e){var n,r=e[0],t=e[1],o=e[2];return(n=360*Math.atan2(o,t)/2/Math.PI)<0&&(n+=360),[r,Math.sqrt(t*t+o*o),n]},s.lch.lab=function(e){var n,r=e[0],t=e[1];return n=e[2]/360*2*Math.PI,[r,t*Math.cos(n),t*Math.sin(n)]},s.rgb.ansi16=function(e){var n=e[0],r=e[1],t=e[2],o=1 in arguments?arguments[1]:s.rgb.hsv(e)[2];if(0===(o=Math.round(o/50)))return 30;var a=30+(Math.round(t/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return 2===o&&(a+=60),a},s.hsv.ansi16=function(e){return s.rgb.ansi16(s.hsv.rgb(e),e[2])},s.rgb.ansi256=function(e){var n=e[0],r=e[1],t=e[2];return n===r&&r===t?n<8?16:n>248?231:Math.round((n-8)/247*24)+232:16+36*Math.round(n/255*5)+6*Math.round(r/255*5)+Math.round(t/255*5)},s.ansi16.rgb=function(e){var n=e%10;if(0===n||7===n)return e>50&&(n+=3.5),[n=n/10.5*255,n,n];var r=.5*(1+~~(e>50));return[(1&n)*r*255,(n>>1&1)*r*255,(n>>2&1)*r*255]},s.ansi256.rgb=function(e){if(e>=232){var n=10*(e-232)+8;return[n,n,n]}var r;return e-=16,[Math.floor(e/36)/5*255,Math.floor((r=e%36)/6)/5*255,r%6/5*255]},s.rgb.hex=function(e){var n=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(n.length)+n},s.hex.rgb=function(e){var n=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];var r=n[0];3===n[0].length&&(r=r.split("").map(function(e){return e+e}).join(""));var t=parseInt(r,16);return[t>>16&255,t>>8&255,255&t]},s.rgb.hcg=function(e){var n,r,t=e[0]/255,o=e[1]/255,a=e[2]/255,s=Math.max(Math.max(t,o),a),i=Math.min(Math.min(t,o),a),l=s-i;return n=l<1?i/(1-l):0,r=l<=0?0:s===t?(o-a)/l%6:s===o?2+(a-t)/l:4+(t-o)/l+4,r/=6,[360*(r%=1),100*l,100*n]},s.hsl.hcg=function(e){var n=e[1]/100,r=e[2]/100,t=1,o=0;return(t=r<.5?2*n*r:2*n*(1-r))<1&&(o=(r-.5*t)/(1-t)),[e[0],100*t,100*o]},s.hsv.hcg=function(e){var n=e[1]/100,r=e[2]/100,t=n*r,o=0;return t<1&&(o=(r-t)/(1-t)),[e[0],100*t,100*o]},s.hcg.rgb=function(e){var n=e[0]/360,r=e[1]/100,t=e[2]/100;if(0===r)return[255*t,255*t,255*t];var o,a=[0,0,0],s=n%1*6,i=s%1,l=1-i;switch(Math.floor(s)){case 0:a[0]=1,a[1]=i,a[2]=0;break;case 1:a[0]=l,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=i;break;case 3:a[0]=0,a[1]=l,a[2]=1;break;case 4:a[0]=i,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=l}return o=(1-r)*t,[255*(r*a[0]+o),255*(r*a[1]+o),255*(r*a[2]+o)]},s.hcg.hsv=function(e){var n=e[1]/100,r=n+e[2]/100*(1-n),t=0;return r>0&&(t=n/r),[e[0],100*t,100*r]},s.hcg.hsl=function(e){var n=e[1]/100,r=e[2]/100*(1-n)+.5*n,t=0;return r>0&&r<.5?t=n/(2*r):r>=.5&&r<1&&(t=n/(2*(1-r))),[e[0],100*t,100*r]},s.hcg.hwb=function(e){var n=e[1]/100,r=n+e[2]/100*(1-n);return[e[0],100*(r-n),100*(1-r)]},s.hwb.hcg=function(e){var n=e[1]/100,r=1-e[2]/100,t=r-n,o=0;return t<1&&(o=(r-t)/(1-t)),[e[0],100*t,100*o]},s.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},s.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},s.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},s.gray.hsl=s.gray.hsv=function(e){return[0,0,e[0]]},s.gray.hwb=function(e){return[0,100,e[0]]},s.gray.cmyk=function(e){return[0,0,0,e[0]]},s.gray.lab=function(e){return[e[0],0,0]},s.gray.hex=function(e){var n=255&Math.round(e[0]/100*255),r=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(r.length)+r},s.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},function(e,n,r){"use strict";r(0);var t=r(13),o=(process.argv[2],r(16)(process.argv.slice(2))._);void 0===o[0]?t.commands().help(o):t.commands()[o[0]](o)},function(e,n,r){"use strict";var t=/[|\\{}()[\]^$+*?.]/g;e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(t,"\\$&")}},function(e,n,r){"use strict";(function(e){const n=r(6),t=(e,r)=>(function(){return`[${e.apply(n,arguments)+r}m`}),o=(e,r)=>(function(){const t=e.apply(n,arguments);return`[${38+r};5;${t}m`}),a=(e,r)=>(function(){const t=e.apply(n,arguments);return`[${38+r};2;${t[0]};${t[1]};${t[2]}m`});Object.defineProperty(e,"exports",{enumerable:!0,get:function(){const e=new Map,r={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};r.color.grey=r.color.gray;for(const n of Object.keys(r)){const t=r[n];for(const n of Object.keys(t)){const o=t[n];r[n]={open:`[${o[0]}m`,close:`[${o[1]}m`},t[n]=r[n],e.set(o[0],o[1])}Object.defineProperty(r,n,{value:t,enumerable:!1}),Object.defineProperty(r,"codes",{value:e,enumerable:!1})}const s=e=>e,i=(e,n,r)=>[e,n,r];r.color.close="[39m",r.bgColor.close="[49m",r.color.ansi={ansi:t(s,0)},r.color.ansi256={ansi256:o(s,0)},r.color.ansi16m={rgb:a(i,0)},r.bgColor.ansi={ansi:t(s,10)},r.bgColor.ansi256={ansi256:o(s,10)},r.bgColor.ansi16m={rgb:a(i,10)};for(let e of Object.keys(n)){if("object"!=typeof n[e])continue;const s=n[e];"ansi16"===e&&(e="ansi"),"ansi16"in s&&(r.color.ansi[e]=t(s.ansi16,0),r.bgColor.ansi[e]=t(s.ansi16,10)),"ansi256"in s&&(r.color.ansi256[e]=o(s.ansi256,0),r.bgColor.ansi256[e]=o(s.ansi256,10)),"rgb"in s&&(r.color.ansi16m[e]=a(s.rgb,0),r.bgColor.ansi16m[e]=a(s.rgb,10))}return r}})}).call(this,r(5)(e))},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n,r){var t=r(1),o=r(8),a={};Object.keys(t).forEach(function(e){a[e]={},Object.defineProperty(a[e],"channels",{value:t[e].channels}),Object.defineProperty(a[e],"labels",{value:t[e].labels});var n=o(e);Object.keys(n).forEach(function(r){var t=n[r];a[e][r]=function(e){var n=function(n){if(void 0===n||null===n)return n;arguments.length>1&&(n=Array.prototype.slice.call(arguments));var r=e(n);if("object"==typeof r)for(var t=r.length,o=0;o<t;o++)r[o]=Math.round(r[o]);return r};return"conversion"in e&&(n.conversion=e.conversion),n}(t),a[e][r].raw=function(e){var n=function(n){return void 0===n||null===n?n:(arguments.length>1&&(n=Array.prototype.slice.call(arguments)),e(n))};return"conversion"in e&&(n.conversion=e.conversion),n}(t)})}),e.exports=a},function(e,n,r){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(e,n,r){var t=r(1);function o(e){var n=function(){for(var e={},n=Object.keys(t),r=n.length,o=0;o<r;o++)e[n[o]]={distance:-1,parent:null};return e}(),r=[e];for(n[e].distance=0;r.length;)for(var o=r.pop(),a=Object.keys(t[o]),s=a.length,i=0;i<s;i++){var l=a[i],c=n[l];-1===c.distance&&(c.distance=n[o].distance+1,c.parent=o,r.unshift(l))}return n}function a(e,n){return function(r){return n(e(r))}}function s(e,n){for(var r=[n[e].parent,e],o=t[n[e].parent][e],s=n[e].parent;n[s].parent;)r.unshift(n[s].parent),o=a(t[n[s].parent][s],o),s=n[s].parent;return o.conversion=r,o}e.exports=function(e){for(var n=o(e),r={},t=Object.keys(n),a=t.length,i=0;i<a;i++){var l=t[i];null!==n[l].parent&&(r[l]=s(l,n))}return r}},function(e,n,r){"use strict";const t=r(10),o=r(11),a=process.env;let s;function i(e){return function(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}(function(e){if(!1===s)return 0;if(o("color=16m")||o("color=full")||o("color=truecolor"))return 3;if(o("color=256"))return 2;if(e&&!e.isTTY&&!0!==s)return 0;const n=s?1:0;if("win32"===process.platform){const e=t.release().split(".");return Number(process.versions.node.split(".")[0])>=8&&Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}if("CI"in a)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(e=>e in a)||"codeship"===a.CI_NAME?1:n;if("TEAMCITY_VERSION"in a)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(a.TEAMCITY_VERSION)?1:0;if("truecolor"===a.COLORTERM)return 3;if("TERM_PROGRAM"in a){const e=parseInt((a.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(a.TERM_PROGRAM){case"iTerm.app":return e>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(a.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(a.TERM)?1:"COLORTERM"in a?1:(a.TERM,n)}(e))}o("no-color")||o("no-colors")||o("color=false")?s=!1:(o("color")||o("colors")||o("color=true")||o("color=always"))&&(s=!0),"FORCE_COLOR"in a&&(s=0===a.FORCE_COLOR.length||0!==parseInt(a.FORCE_COLOR,10)),e.exports={supportsColor:i,stdout:i(process.stdout),stderr:i(process.stderr)}},function(e,n){e.exports=require("os")},function(e,n,r){"use strict";e.exports=((e,n)=>{n=n||process.argv;const r=e.startsWith("-")?"":1===e.length?"-":"--",t=n.indexOf(r+e),o=n.indexOf("--");return-1!==t&&(-1===o||t<o)})},function(e,n,r){"use strict";const t=/(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,o=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,a=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,s=/\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,i=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function l(e){return"u"===e[0]&&5===e.length||"x"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):i.get(e)||e}function c(e,n){const r=[],t=n.trim().split(/\s*,\s*/g);let o;for(const n of t)if(isNaN(n)){if(!(o=n.match(a)))throw new Error(`Invalid Chalk template style argument: ${n} (in style '${e}')`);r.push(o[2].replace(s,(e,n,r)=>n?l(n):r))}else r.push(Number(n));return r}function u(e,n){const r={};for(const e of n)for(const n of e.styles)r[n[0]]=e.inverse?null:n.slice(1);let t=e;for(const e of Object.keys(r))if(Array.isArray(r[e])){if(!(e in t))throw new Error(`Unknown Chalk style: ${e}`);t=r[e].length>0?t[e].apply(t,r[e]):t[e]}return t}e.exports=((e,n)=>{const r=[],a=[];let s=[];if(n.replace(t,(n,t,i,h,f,p)=>{if(t)s.push(l(t));else if(h){const n=s.join("");s=[],a.push(0===r.length?n:u(e,r)(n)),r.push({inverse:i,styles:function(e){o.lastIndex=0;const n=[];let r;for(;null!==(r=o.exec(e));){const e=r[1];if(r[2]){const t=c(e,r[2]);n.push([e].concat(t))}else n.push([e])}return n}(h)})}else if(f){if(0===r.length)throw new Error("Found extraneous } in Chalk template literal");a.push(u(e,r)(s.join(""))),s=[],r.pop()}else s.push(p)}),a.push(s.join("")),r.length>0){const e=`Chalk template literal is missing ${r.length} closing bracket${1===r.length?"":"s"} (\`}\`)`;throw new Error(e)}return a.join("")})},function(e,n,r){"use strict";var t=function(e,n,o,a){var s=r(0);console.log(s.green(n+(void 0!==o?" "+o.join(" "):"")));var i=e(n,o,{shell:!0});i.stdout.on("data",function(e){process.stdout.write(e.toString())}),i.stderr.on("data",function(e){process.stdout.write(e.toString())}),i.on("close",function(n){0==n&&void 0!==a&&t(e,a.command,a.options,a.next)})};e.exports={commands:function(){var e=r(0);r(14);return{new:function(n){var o=void 0===n[1]?"app":n[1];console.log(e.bold("App Name : "+o));var a=r(15).spawn;return t(a,"git",["clone","https://github.com/tomoyaf/hyperapp-boilerplate.git","./"+o],{command:"cd",options:["./"+o,"&&","yarn","&&","yarn","new","&&","git","init"]}),void 0===o},help:function(e){console.log("Usage:"),console.log("  hyperapp-cli new APP_NAME")}}}}},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("child_process")},function(e,n){function r(e){return"number"==typeof e||(!!/^0x[0-9a-f]+$/i.test(e)||/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e))}e.exports=function(e,n){n||(n={});var t={bools:{},strings:{},unknownFn:null};"function"==typeof n.unknown&&(t.unknownFn=n.unknown),"boolean"==typeof n.boolean&&n.boolean?t.allBools=!0:[].concat(n.boolean).filter(Boolean).forEach(function(e){t.bools[e]=!0});var o={};Object.keys(n.alias||{}).forEach(function(e){o[e]=[].concat(n.alias[e]),o[e].forEach(function(n){o[n]=[e].concat(o[e].filter(function(e){return n!==e}))})}),[].concat(n.string).filter(Boolean).forEach(function(e){t.strings[e]=!0,o[e]&&(t.strings[o[e]]=!0)});var a=n.default||{},s={_:[]};Object.keys(t.bools).forEach(function(e){l(e,void 0!==a[e]&&a[e])});var i=[];function l(e,n,a){if(!a||!t.unknownFn||function(e,n){return t.allBools&&/^--[^=]+$/.test(n)||t.strings[e]||t.bools[e]||o[e]}(e,a)||!1!==t.unknownFn(a)){var i=!t.strings[e]&&r(n)?Number(n):n;c(s,e.split("."),i),(o[e]||[]).forEach(function(e){c(s,e.split("."),i)})}}function c(e,n,r){var o=e;n.slice(0,-1).forEach(function(e){void 0===o[e]&&(o[e]={}),o=o[e]});var a=n[n.length-1];void 0===o[a]||t.bools[a]||"boolean"==typeof o[a]?o[a]=r:Array.isArray(o[a])?o[a].push(r):o[a]=[o[a],r]}function u(e){return o[e].some(function(e){return t.bools[e]})}-1!==e.indexOf("--")&&(i=e.slice(e.indexOf("--")+1),e=e.slice(0,e.indexOf("--")));for(var h=0;h<e.length;h++){var f=e[h];if(/^--.+=/.test(f)){var p=f.match(/^--([^=]+)=([\s\S]*)$/),g=p[1],b=p[2];t.bools[g]&&(b="false"!==b),l(g,b,f)}else if(/^--no-.+/.test(f)){l(g=f.match(/^--no-(.+)/)[1],!1,f)}else if(/^--.+/.test(f)){g=f.match(/^--(.+)/)[1];void 0===(m=e[h+1])||/^-/.test(m)||t.bools[g]||t.allBools||o[g]&&u(g)?/^(true|false)$/.test(m)?(l(g,"true"===m,f),h++):l(g,!t.strings[g]||"",f):(l(g,m,f),h++)}else if(/^-[^-]+/.test(f)){for(var d=f.slice(1,-1).split(""),y=!1,v=0;v<d.length;v++){var m;if("-"!==(m=f.slice(v+2))){if(/[A-Za-z]/.test(d[v])&&/=/.test(m)){l(d[v],m.split("=")[1],f),y=!0;break}if(/[A-Za-z]/.test(d[v])&&/-?\d+(\.\d*)?(e-?\d+)?$/.test(m)){l(d[v],m,f),y=!0;break}if(d[v+1]&&d[v+1].match(/\W/)){l(d[v],f.slice(v+2),f),y=!0;break}l(d[v],!t.strings[d[v]]||"",f)}else l(d[v],m,f)}g=f.slice(-1)[0];y||"-"===g||(!e[h+1]||/^(-|--)[^-]/.test(e[h+1])||t.bools[g]||o[g]&&u(g)?e[h+1]&&/true|false/.test(e[h+1])?(l(g,"true"===e[h+1],f),h++):l(g,!t.strings[g]||"",f):(l(g,e[h+1],f),h++))}else if(t.unknownFn&&!1===t.unknownFn(f)||s._.push(t.strings._||!r(f)?f:Number(f)),n.stopEarly){s._.push.apply(s._,e.slice(h+1));break}}return Object.keys(a).forEach(function(e){(function(e,n){var r=e;return n.slice(0,-1).forEach(function(e){r=r[e]||{}}),n[n.length-1]in r})(s,e.split("."))||(c(s,e.split("."),a[e]),(o[e]||[]).forEach(function(n){c(s,n.split("."),a[e])}))}),n["--"]?(s["--"]=new Array,i.forEach(function(e){s["--"].push(e)})):i.forEach(function(e){s._.push(e)}),s}}]);