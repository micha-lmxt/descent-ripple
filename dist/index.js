!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self)["descent-ripple"]=n()}(this,(function(){"use strict";function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function i(){return Object.create(null)}function r(t){t.forEach(o)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const l="undefined"!=typeof window;let a=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach((n=>{n.c(t)||(d.delete(n),n.f())})),0!==d.size&&u(f)}function p(t){let n;return 0===d.size&&u(f),{promise:new Promise((e=>{d.add(n={c:t,f:e})})),abort(){d.delete(n)}}}function m(t,n){t.appendChild(n)}function h(t,n,e){t.insertBefore(n,e||null)}function y(t){t.parentNode.removeChild(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(){return t="",document.createTextNode(t);var t}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t,n){for(const e in n)v(t,e,n[e])}const A=new Set;let _,b=0;function k(t,n,e,o,i,r,s,c=0){const l=16.666/o;let a="{\n";for(let t=0;t<=1;t+=l){const o=n+(e-n)*r(t);a+=100*t+`%{${s(o,1-o)}}\n`}const u=a+`100% {${s(e,1-e)}}\n}`,d=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(u)}_${c}`,f=t.ownerDocument;A.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(function(t){return document.createElement(t)}("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${d} ${o}ms linear ${i}ms 1 both`,b+=1,d}function P(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),i=e.length-o.length;i&&(t.style.animation=o.join(", "),b-=i,b||u((()=>{b||(A.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),A.clear())})))}function x(t){_=t}function O(){if(!_)throw new Error("Function called outside component initialization");return _}const I=[],M=[],C=[],R=[],E=Promise.resolve();let S=!1;function T(t){C.push(t)}let L=!1;const z=new Set;function D(){if(!L){L=!0;do{for(let t=0;t<I.length;t+=1){const n=I[t];x(n),j(n.$$)}for(x(null),I.length=0;M.length;)M.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];z.has(n)||(z.add(n),n())}C.length=0}while(I.length);for(;R.length;)R.pop()();S=!1,L=!1,z.clear()}}function j(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(T)}}let B;function F(){return B||(B=Promise.resolve(),B.then((()=>{B=null}))),B}function N(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const H=new Set;let q;function W(){q={r:0,c:[],p:q}}function X(){q.r||r(q.c),q=q.p}function Y(t,n){t&&t.i&&(H.delete(t),t.i(n))}function G(t,n,e,o){if(t&&t.o){if(H.has(t))return;H.add(t),q.c.push((()=>{H.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const J={duration:0};function K(e,o,i){let r,c,l=o(e,i),u=!1,d=0;function f(){r&&P(e,r)}function m(){const{delay:o=0,duration:i=300,easing:s=n,tick:m=t,css:h}=l||J;h&&(r=k(e,0,1,i,o,s,h,d++)),m(0,1);const y=a()+o,g=y+i;c&&c.abort(),u=!0,T((()=>N(e,!0,"start"))),c=p((t=>{if(u){if(t>=g)return m(1,0),N(e,!0,"end"),f(),u=!1;if(t>=y){const n=s((t-y)/i);m(n,1-n)}}return u}))}let h=!1;return{start(){h||(P(e),s(l)?(l=l(),F().then(m)):m())},invalidate(){h=!1},end(){u&&(f(),u=!1)}}}function Q(e,o,i){let c,l=o(e,i),u=!0;const d=q;function f(){const{delay:o=0,duration:i=300,easing:s=n,tick:f=t,css:m}=l||J;m&&(c=k(e,1,0,i,o,s,m));const h=a()+o,y=h+i;T((()=>N(e,!1,"start"))),p((t=>{if(u){if(t>=y)return f(0,1),N(e,!1,"end"),--d.r||r(d.c),!1;if(t>=h){const n=s((t-h)/i);f(1-n,n)}}return u}))}return d.r+=1,s(l)?F().then((()=>{l=l(),f()})):f(),{end(t){t&&l.tick&&l.tick(1,0),u&&(c&&P(e,c),u=!1)}}}function U(t,n){G(t,1,1,(()=>{n.delete(t.key)}))}function V(t,n,e,o,i,r,s,c,l,a,u,d){let f=t.length,p=r.length,m=f;const h={};for(;m--;)h[t[m].key]=m;const y=[],g=new Map,$=new Map;for(m=p;m--;){const t=d(i,r,m),c=e(t);let l=s.get(c);l?o&&l.p(t,n):(l=a(c,t),l.c()),g.set(c,y[m]=l),c in h&&$.set(c,Math.abs(m-h[c]))}const v=new Set,w=new Set;function A(t){Y(t,1),t.m(c,u),s.set(t.key,t),u=t.first,p--}for(;f&&p;){const n=y[p-1],e=t[f-1],o=n.key,i=e.key;n===e?(u=n.first,f--,p--):g.has(i)?!s.has(o)||v.has(o)?A(n):w.has(i)?f--:$.get(o)>$.get(i)?(w.add(o),A(n)):(v.add(i),f--):(l(e,s),f--)}for(;f--;){const n=t[f];g.has(n.key)||l(n,s)}for(;p;)A(y[p-1]);return y}function Z(t,n){const e={},o={},i={$$scope:1};let r=t.length;for(;r--;){const s=t[r],c=n[r];if(c){for(const t in s)t in c||(o[t]=1);for(const t in c)i[t]||(e[t]=c[t],i[t]=1);t[r]=c}else for(const t in s)i[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function tt(t,n){-1===t.$$.dirty[0]&&(I.push(t),S||(S=!0,E.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function nt(n,e,c,l,a,u,d=[-1]){const f=_;x(n);const p=e.props||{},m=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:i(),dirty:d,skip_bound:!1};let h=!1;if(m.ctx=c?c(n,p,((t,e,...o)=>{const i=o.length?o[0]:e;return m.ctx&&a(m.ctx[t],m.ctx[t]=i)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](i),h&&tt(n,t)),e})):[],m.update(),h=!0,r(m.before_update),m.fragment=!!l&&l(m.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);m.fragment&&m.fragment.l(t),t.forEach(y)}else m.fragment&&m.fragment.c();e.intro&&Y(n.$$.fragment),function(t,n,e){const{fragment:i,on_mount:c,on_destroy:l,after_update:a}=t.$$;i&&i.m(n,e),T((()=>{const n=c.map(o).filter(s);l?l.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(T)}(n,e.target,e.anchor),D()}x(f)}function et(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function ot(t){const n=t-1;return n*n*n+1}const it=t=>"function"==typeof t?t:n=>t;function rt(t,{delay:n=0,speed:e,duration:o,easing:i=et}){const r=t.getTotalLength();return void 0===o?o=void 0===e?800:r/e:"function"==typeof o&&(o=o(r)),{delay:n,duration:o,easing:i,css:(t,n)=>`stroke-dasharray: 0 ${n*r} ${t*r} 0`}}function st(t,n,e){const o=t.slice();return o[44]=n[e],o[46]=e,o}function ct(t,n,e){const o=t.slice();return o[47]=n[e],o[46]=e,o}function lt(t){let n,e,o,i=[],r=new Map,s=[],c=new Map,l=t[10];const a=t=>t[47].id;for(let n=0;n<l.length;n+=1){let e=ct(t,l,n),o=a(e);r.set(o,i[n]=ut(o,e))}let u=t[13];const d=t=>t[44].id;for(let n=0;n<u.length;n+=1){let e=st(t,u,n),o=d(e);c.set(o,s[n]=dt(o,e))}return{c(){n=g("svg");for(let t=0;t<i.length;t+=1)i[t].c();e=$();for(let t=0;t<s.length;t+=1)s[t].c();v(n,"xmlns","http://www.w3.org/2000/svg"),v(n,"style",pt),v(n,"width",t[12]),v(n,"height",t[14])},m(r,c){h(r,n,c);for(let t=0;t<i.length;t+=1)i[t].m(n,null);m(n,e);for(let t=0;t<s.length;t+=1)s[t].m(n,null);t[34](n),o=!0},p(t,l){if(1072&l[0]){const o=t[10];W(),i=V(i,l,a,1,t,o,r,n,U,ut,e,ct),X()}if(8960&l[0]){const e=t[13];W(),s=V(s,l,d,1,t,e,c,n,U,dt,null,st),X()}(!o||4096&l[0])&&v(n,"width",t[12]),(!o||16384&l[0])&&v(n,"height",t[14])},i(t){if(!o){for(let t=0;t<l.length;t+=1)Y(i[t]);for(let t=0;t<u.length;t+=1)Y(s[t]);o=!0}},o(t){for(let t=0;t<i.length;t+=1)G(i[t]);for(let t=0;t<s.length;t+=1)G(s[t]);o=!1},d(e){e&&y(n);for(let t=0;t<i.length;t+=1)i[t].d();for(let t=0;t<s.length;t+=1)s[t].d();t[34](null)}}}function at(t){let n,o,i,r,s,c=[{d:o=t[47].path},t[4](t[46])],l={};for(let t=0;t<c.length;t+=1)l=e(l,c[t]);return{c(){n=g("path"),w(n,l)},m(t,e){h(t,n,e),s=!0},p(e,i){t=e,w(n,l=Z(c,[(!s||1024&i[0]&&o!==(o=t[47].path))&&{d:o},1040&i[0]&&t[4](t[46])]))},i(e){s||(T((()=>{r&&r.end(1),i||(i=K(n,t[0],t[6](t[46]))),i.start()})),s=!0)},o(e){i&&i.invalidate(),r=Q(n,t[1],t[5](t[46])),s=!1},d(t){t&&y(n),t&&r&&r.end()}}}function ut(t,n){let e,o,i,r=n[47]&&at(n);return{key:t,first:null,c(){e=$(),r&&r.c(),o=$(),this.first=e},m(t,n){h(t,e,n),r&&r.m(t,n),h(t,o,n),i=!0},p(t,n){t[47]?r?(r.p(t,n),1024&n[0]&&Y(r,1)):(r=at(t),r.c(),Y(r,1),r.m(o.parentNode,o)):r&&(W(),G(r,1,1,(()=>{r=null})),X())},i(t){i||(Y(r),i=!0)},o(t){G(r),i=!1},d(t){t&&y(e),r&&r.d(t),t&&y(o)}}}function dt(t,n){let o,i,r,s,c,l,a,u,d,f=[{cx:r=0},{cy:s=0},{r:c=n[44].r},n[9](n[46])],p={};for(let t=0;t<f.length;t+=1)p=e(p,f[t]);return{key:t,first:null,c(){o=g("g"),i=g("circle"),w(i,p),v(o,"transform",u="translate("+n[44].x+" "+n[44].y+")"),this.first=o},m(t,n){h(t,o,n),m(o,i),d=!0},p(t,e){n=t,w(i,p=Z(f,[{cx:0},{cy:0},(!d||8192&e[0]&&c!==(c=n[44].r))&&{r:c},8704&e[0]&&n[9](n[46])])),(!d||8192&e[0]&&u!==(u="translate("+n[44].x+" "+n[44].y+")"))&&v(o,"transform",u)},i(t){d||(T((()=>{a&&a.end(1),l||(l=K(i,n[2],n[7](n[46]))),l.start()})),d=!0)},o(t){l&&l.invalidate(),a=Q(i,n[3],n[8](n[46])),d=!1},d(t){t&&y(o),t&&a&&a.end()}}}function ft(t){let n,e,o=t[11]&&lt(t);return{c(){o&&o.c(),n=$()},m(t,i){o&&o.m(t,i),h(t,n,i),e=!0},p(t,e){t[11]?o?(o.p(t,e),2048&e[0]&&Y(o,1)):(o=lt(t),o.c(),Y(o,1),o.m(n.parentNode,n)):o&&(W(),G(o,1,1,(()=>{o=null})),X())},i(t){e||(Y(o),e=!0)},o(t){G(o),e=!1},d(t){o&&o.d(t),t&&y(n)}}}let pt="position:absolute;overflow:hidden;top:0px;left:0px;";function mt(t,n,e){let o,i,r,s,c,l,a,u,d,f,p,m,{node:h}=n,{nLines:y=10}=n,{nCircles:g=1}=n,{lineBreakDist:$=.3}=n,{randomness:v=1}=n,{backstep:w=0}=n,{rotation:A=(t=>20*Math.sin(Math.PI*t/90))}=n,{forceRelative:_=!0}=n,{forceOverflowHidden:b=!0}=n,{size:k=1}=n,{timeToRemove:P=500}=n,{circleRadius:x=1}=n,{lineProps:I={fill:"none","stroke-width":"10",stroke:"rgba(99,1,1,.5)"}}=n,{linesInAnimation:C}=n,{linesOutAnimation:R}=n,{linesInAnimationProps:E={duration:500}}=n,{linesOutAnimationProps:S={duration:500,delay:0}}=n,{circleInAnimation:T}=n,{circleOutAnimation:L}=n,{circleOutAnimationProps:z={duration:500}}=n,{circleInAnimationProps:D={duration:700,start:0}}=n,{circleProps:j={fill:"rgba(255,9,9,0.4)"}}=n,B=0,F=[],N=!1,H=1,q=1;const W=(t,n,i)=>{const r=B++,s=Array(y);for(let e=0;e<y;e++){let l=c(e);"string"==typeof l?l=parseFloat(l):l*=i;const a=l;let u="M"+t+" "+n;const d=0===$?a:$;let f=0,p=0;for(;p<a;){p+=d,f++;const i=2*Math.PI*e/y+Math.PI*o(f)/180,r=Math.sin(i),s=Math.cos(i);u+=" L"+(t+(f+1)*d*r+d*v*(Math.random()-.5))+" "+(n+(f+1)*d*s+d*v*(Math.random()-.5)),w>0&&(u+=" l"+-w*d*(r+v*(Math.random()-.5))+" "+-w*d*(s+v*(Math.random()-.5)))}s[e]={path:u+"M0 0",id:r.toString()+"-"+e}}e(10,F=s),e(13,f=Array(g).fill().map(((e,o)=>{let s=d(o);return"number"==typeof s?s*=i:s=parseFloat(s),{x:t,y:n,r:s,id:r.toString()+"+"+o}}))),p=setTimeout(X,P)},X=()=>{e(10,F=[]),e(13,f=[])},Y=(t,n,o)=>{e(12,H=t.clientWidth+1),e(14,q=t.clientHeight+1),p=setTimeout(W,1,n,o,Math.sqrt(H*H+q*q))},G=t=>{X(),e(11,N=!0);const n=h.getBoundingClientRect(),o=window.getComputedStyle(h);_&&"absolute"!==o.position&&"relative"!==o.position&&e(16,h.style.position="relative",h),!b||"hidden"===o.overflowX&&"hidden"===o.overflowY||(e(16,h.style.overflowX="hidden",h),e(16,h.style.overflowY="hidden",h));let i=t.clientX-n.left-(parseFloat(o.borderLeftWidth)||0),r=t.clientY-n.top-(parseFloat(o.borderTopWidth)||0);p=setTimeout(Y,1,h,i,r)};var J;return J=()=>{h.addEventListener("mousedown",G),window.getComputedStyle(h)},O().$$.on_mount.push(J),function(t){O().$$.on_destroy.push(t)}((()=>{h.removeEventListener("mousedown",G),p&&clearTimeout(p)})),t.$$set=t=>{"node"in t&&e(16,h=t.node),"nLines"in t&&e(17,y=t.nLines),"nCircles"in t&&e(18,g=t.nCircles),"lineBreakDist"in t&&e(19,$=t.lineBreakDist),"randomness"in t&&e(20,v=t.randomness),"backstep"in t&&e(21,w=t.backstep),"rotation"in t&&e(22,A=t.rotation),"forceRelative"in t&&e(23,_=t.forceRelative),"forceOverflowHidden"in t&&e(24,b=t.forceOverflowHidden),"size"in t&&e(25,k=t.size),"timeToRemove"in t&&e(26,P=t.timeToRemove),"circleRadius"in t&&e(27,x=t.circleRadius),"lineProps"in t&&e(28,I=t.lineProps),"linesInAnimation"in t&&e(0,C=t.linesInAnimation),"linesOutAnimation"in t&&e(1,R=t.linesOutAnimation),"linesInAnimationProps"in t&&e(29,E=t.linesInAnimationProps),"linesOutAnimationProps"in t&&e(30,S=t.linesOutAnimationProps),"circleInAnimation"in t&&e(2,T=t.circleInAnimation),"circleOutAnimation"in t&&e(3,L=t.circleOutAnimation),"circleOutAnimationProps"in t&&e(31,z=t.circleOutAnimationProps),"circleInAnimationProps"in t&&e(32,D=t.circleInAnimationProps),"circleProps"in t&&e(33,j=t.circleProps)},t.$$.update=()=>{4194304&t.$$.dirty[0]&&(o=it(A)),268435456&t.$$.dirty[0]&&e(4,i=it(I)),1073741824&t.$$.dirty[0]&&e(5,r=it(S)),536870912&t.$$.dirty[0]&&e(6,s=it(E)),33554432&t.$$.dirty[0]&&(c=it(k)),2&t.$$.dirty[1]&&e(7,l=it(D)),1&t.$$.dirty[1]&&e(8,a=it(z)),4&t.$$.dirty[1]&&e(9,u=it(j)),134217728&t.$$.dirty[0]&&(d=it(x))},[C,R,T,L,i,r,s,l,a,u,F,N,H,f,q,m,h,y,g,$,v,w,A,_,b,k,P,x,I,E,S,z,D,j,function(t){M[t?"unshift":"push"]((()=>{m=t,e(15,m)}))}]}class ht extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),nt(this,t,mt,ft,c,{node:16,nLines:17,nCircles:18,lineBreakDist:19,randomness:20,backstep:21,rotation:22,forceRelative:23,forceOverflowHidden:24,size:25,timeToRemove:26,circleRadius:27,lineProps:28,linesInAnimation:0,linesOutAnimation:1,linesInAnimationProps:29,linesOutAnimationProps:30,circleInAnimation:2,circleOutAnimation:3,circleOutAnimationProps:31,circleInAnimationProps:32,circleProps:33},[-1,-1])}}function yt(t,{delay:n=0,duration:e=400,easing:o=et,amount:i=5,opacity:r=0}){const s=getComputedStyle(t),c=+s.opacity,l="none"===s.filter?"":s.filter,a=c*(1-r);return{delay:n,duration:e,easing:o,css:(t,n)=>`opacity: ${c-a*n}; filter: ${l} blur(${n*i}px);`}}function gt(t,{delay:e=0,duration:o=400,easing:i=n}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:i,css:t=>"opacity: "+t*r}}function $t(t,{delay:n=0,duration:e=400,easing:o=ot,x:i=0,y:r=0,opacity:s=0}){const c=getComputedStyle(t),l=+c.opacity,a="none"===c.transform?"":c.transform,u=l*(1-s);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*i}px, ${(1-t)*r}px);\n\t\t\topacity: ${l-u*n}`}}function vt(t,{delay:n=0,duration:e=400,easing:o=ot,start:i=0,opacity:r=0}){const s=getComputedStyle(t),c=+s.opacity,l="none"===s.transform?"":s.transform,a=1-i,u=c*(1-r);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${l} scale(${1-a*n});\n\t\t\topacity: ${c-u*n}\n\t\t`}}function wt(t,{delay:n=0,speed:e,duration:o,easing:i=et}){const r=t.getTotalLength();return void 0===o?o=void 0===e?800:r/e:"function"==typeof o&&(o=o(r)),{delay:n,duration:o,easing:i,css:(t,n)=>`stroke-dasharray: ${t*r} ${n*r}`}}return function(t,n={}){const e=Object.assign({},n,{node:t}),o=(t,n)=>{e[t]?("draw"===e[t]&&(e[t]=wt),"fade"===e[t]&&(e[t]=gt),"scale"===e[t]&&(e[t]=vt),"blur"===e[t]&&(e[t]=yt),"fly"===e[t]&&(e[t]=$t),"draw-reverse"===e[t]&&(e[t]=rt)):e[t]=n};o("linesInAnimation",wt),o("linesOutAnimation",gt),o("circleInAnimation",vt),o("circleOutAnimation",gt);const i=new ht({target:t,props:e});return{onDestroy:()=>i.$destroy()}}}));
//# sourceMappingURL=index.js.map
