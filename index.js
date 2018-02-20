!function(){"use strict";function e(e,t){for(var n,r=arguments,a=[],i=[],o=arguments.length;o-- >2;)a.push(r[o]);for(;a.length;)if((n=a.pop())&&n.pop)for(o=n.length;o--;)a.push(n[o]);else null!=n&&!0!==n&&!1!==n&&i.push(n);return"function"==typeof e?e(t||{},i):{nodeName:e,attributes:t||{},children:i,key:t&&t.key}}var t={initialMessage:"Calculadora de tiempo de curación.",initialMonth:"1",initialYear:function(){var e=new Date,t=e.getFullYear()-2;return t=String(t),t=t.substring(2,4)}(),validationSuccess:"✓ Ok",validationError:"✗ Incorrecto",defaultError:"Error, por favor, inténtalo de nuevo.",futureError:"Error, por favor, inténtalo de nuevo."},n={months:t.initialMonth,year:t.initialYear,title:t.initialMessage},r=function(){var e=function(e){var a=new Date,i=a.getTime()-r(e).getTime();return i<0?t.futureError:n(i/2630016e3)},n=function(e){var n,r,a,i,o,u=function(e,t){var n=t||"s";return 1!==e?n:""},l=function(e,t,n){return e>0?e+" "+t+u(e,n):""},s=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=function(){return e.slice(0,-1).join(", ")+" y "+e.slice(-1)+"."},a={0:t.defaultError,1:e[0]+".",2:e[0]+" y "+e[1]+".",default:r};return a[e.length]||a.default()};o=function(e){var t,n,r,a,i;return t=Math.floor(e/12),i=e-12*t,n=Math.floor(i),i-=n,a=Math.round(30.44*i),r=Math.floor(a/7),i=a-7*r,a=0===t&&0===n?i:0,[t,n,r,a]}(e),n=o[0],r=o[1],a=o[2],i=o[3];var c=[];return n=l(n,"año"),r=l(r,"mes","­es"),a=l(a,"se­ma­na"),i=l(i,"día"),""!==n&&c.push(n),""!==r&&c.push(r),""!==a&&c.push(a),""!==i&&c.push(i),""+s.apply(void 0,c)},r=function(e){var t=/^([0-4][0-9]|5[0-3])(\d?\d)$/,n=a(),r=0,o=0,u=0,l=[];try{l=t.exec(e),r=parseInt(l[1]),1===l[2].length?o=2e3+10*parseInt(i(l[2],n))+parseInt(l[2]):(o=parseInt(l[2]),o=o<90?2e3+o:1900+o)}catch(e){return new Date}return u=7*r,new Date(o,0,u,0)},a=function(){var e=localStorage.getItem("currentDecade");if(null!==e)return e;var t=new Date;return e=String(t.getFullYear()).substr(-2,1),localStorage.setItem("currentDecade",e),e},i=function(e,t){var n=new Date,r=String(n.getFullYear()).substr(-1,1);return parseInt(e)<parseInt(r)?t:String(parseInt(t)-1)},o=function(e){return("00"+e).substr(-2,2)};return{monthsSinceSalting:function(t){return e(t)},padNum:function(e){return o(e)}}}(),a={update:function(){return function(e){return{title:r.monthsSinceSalting(r.padNum(e.months)+e.year)}}},updateMonths:function(e){return function(t){return{months:e}}},updateYear:function(e){return function(t){return{year:e}}},reset:function(){return function(e){return{title:t.initialMessage,months:t.initialMonth,year:t.initialYear}}}},i=function(t){return e("span",{className:"card-title"},e("h4",{className:""},t.state.title))},o=function(){return e("div",{class:"card-image"},e("img",{id:"high-res-img",src:"/images/jamones-ibericos.jpg",alt:"Jamones curándose en un secadero"}),e("span",{className:"col s12 card-title cyan-text text-lighten-3 over-image"},"¿Cuánto tiempo hace desde la entrada en sal de un jamón?"))},u=function(){return e("p",{className:"flow-text"},"Introduce debajo las cifras del sello ",e("a",{title:"Sello de entrada en salazón creado por el Ministerio de Agricultura, Pesca y Alimentación (MAPA), actualmente conocido como MAGRAMA",href:"http://www.jamonlovers.es/el-sello-mapa-en-los-jamones-ibericos-el-dni-del-jamon/",target:"_blank"},"M.A.P.A.")," ")},l=function(t){var n=(t.state,t.actions);return e("div",{className:"row"},e("div",{className:"col s5 l6 center"},e("button",{class:"btn-flat teal-text",href:"#!",onclick:n.reset},"Borrar")),e("div",{className:"col s7 l6 center"},e("button",{type:"submit",class:"btn",href:"#!",onclick:n.update},"Calcular")))},s=function(n){var r=n.state,a=n.actions;return e("div",{className:"input-field col s6"},e("input",{id:"months-input",name:"months-input",type:"number",className:"validate",min:"0",max:"53",step:"1",value:r.months,onchange:function(){return a.updateMonths(document.getElementById("months-input").value)},autofocus:!0}),e("label",{for:"months-input","data-error":t.validationError,"data-success":t.validationSuccess},"Dos primeras cifras"))},c=function(n){var r=n.state,a=n.actions;return e("div",{className:"input-field col s6"},e("input",{id:"year-input",name:"year-input",type:"number",className:"validate",min:"0",max:"99",step:"1",value:r.year,onchange:function(){return a.updateYear(document.getElementById("year-input").value)}}),e("label",{for:"year-input","data-error":t.validationError,"data-success":t.validationSuccess},"Última/s cifra/s"))},d=function(t,n){return e("div",{className:"card white z-depth-3 hoverable"},e(o,null),e("div",{className:"card-content"},e(i,{state:t}),e(u,null),e("div",{className:"card-action row"},e(s,{state:t,actions:n}),e(c,{state:t,actions:n})),e(l,{state:t,actions:n})))},f=document.getElementById("app");!function(e,t,n,r){function a(e,t){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:t.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:a(e,t)})}}function i(){y=!y;var e=n(M,S);for(r&&!y&&(N=g(r,N,w,w=e));e=b.pop();)e()}function o(){y||(y=!y,setTimeout(i))}function u(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n}function l(e,t,n){var r={};return e.length?(r[e[0]]=e.length>1?l(e.slice(1),t,n[e[0]]):t,u(n,r)):t}function s(e,t){for(var n=0;n<e.length;n++)t=t[e[n]];return t}function c(e,t,n){for(var r in n)"function"==typeof n[r]?function(r,a){n[r]=function(r){return"function"==typeof(r=a(r))&&(r=r(s(e,M),n)),r&&r!==(t=s(e,M))&&!r.then&&o(M=l(e,u(t,r),M)),r}}(r,n[r]):c(e.concat(r),t[r]=t[r]||{},n[r]=u(n[r]))}function d(e){return e&&e.key}function f(e,t,n,r,a){if("key"===t);else if("style"===t)for(var i in u(a,n))e[t][i]=null==n||null==n[i]?"":n[i];else"function"==typeof n||t in e&&!r?e[t]=null==n?"":n:null!=n&&!1!==n&&e.setAttribute(t,n),null!=n&&!1!==n||e.removeAttribute(t)}function m(e,t){var n="string"==typeof e||"number"==typeof e?document.createTextNode(e):(t=t||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName);if(e.attributes){e.attributes.oncreate&&b.push(function(){e.attributes.oncreate(n)});for(var r=0;r<e.children.length;r++)n.appendChild(m(e.children[r],t));for(var a in e.attributes)f(n,a,e.attributes[a],t)}return n}function h(e,t,n,r){for(var a in u(t,n))n[a]!==("value"===a||"checked"===a?e[a]:t[a])&&f(e,a,n[a],r,t[a]);n.onupdate&&b.push(function(){n.onupdate(e,t)})}function p(e,t,n){if(n=t.attributes){for(var r=0;r<t.children.length;r++)p(e.childNodes[r],t.children[r]);n.ondestroy&&n.ondestroy(e)}return e}function v(e,t,n,r){function a(){e.removeChild(p(t,n))}n.attributes&&(r=n.attributes.onremove)?r(t,a):a()}function g(e,t,n,r,a,i){if(r===n);else if(null==n)t=e.insertBefore(m(r,a),t);else if(r.nodeName&&r.nodeName===n.nodeName){h(t,n.attributes,r.attributes,a=a||"svg"===r.nodeName);for(var o=[],u={},l={},s=0;s<n.children.length;s++){o[s]=t.childNodes[s];var c=n.children[s],f=d(c);null!=f&&(u[f]=[o[s],c])}for(var s=0,p=0;p<r.children.length;){var c=n.children[s],y=r.children[p],f=d(c),b=d(y);if(l[f])s++;else if(null==b)null==f&&(g(t,o[s],c,y,a),p++),s++;else{var N=u[b]||[];f===b?(g(t,N[0],N[1],y,a),s++):N[0]?g(t,t.insertBefore(N[0],o[s]),N[1],y,a):g(t,o[s],null,y,a),p++,l[b]=y}}for(;s<n.children.length;){var c=n.children[s];null==d(c)&&v(t,o[s],c),s++}for(var s in u)l[u[s][1].key]||v(t,u[s][0],u[s][1])}else r.nodeName===n.nodeName?t.nodeValue=r:(t=e.insertBefore(m(r,a),i=t),v(e,i,n));return t}var y,b=[],N=r&&r.children[0]||null,w=N&&a(N,[].map),M=u(e),S=u(t);o(c([],M,S))}(n,a,d,f)}();