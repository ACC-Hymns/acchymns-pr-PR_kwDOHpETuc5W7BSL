import{a6 as m,a7 as v,a8 as b}from"./index-6cf0da3a.js";var l=globalThis&&globalThis.__awaiter||function(a,i,n,c){function r(t){return t instanceof n?t:new n(function(u){u(t)})}return new(n||(n=Promise))(function(t,u){function s(o){try{e(c.next(o))}catch(d){u(d)}}function h(o){try{e(c.throw(o))}catch(d){u(d)}}function e(o){o.done?t(o.value):r(o.value).then(s,h)}e((c=c.apply(a,i||[])).next())})},f=globalThis&&globalThis.__generator||function(a,i){var n={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},c,r,t,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(e){return function(o){return h([e,o])}}function h(e){if(c)throw new TypeError("Generator is already executing.");for(;n;)try{if(c=1,r&&(t=e[0]&2?r.return:e[0]?r.throw||((t=r.return)&&t.call(r),0):r.next)&&!(t=t.call(r,e[1])).done)return t;switch(r=0,t&&(e=[e[0]&2,t.value]),e[0]){case 0:case 1:t=e;break;case 4:return n.label++,{value:e[1],done:!1};case 5:n.label++,r=e[1],e=[0];continue;case 7:e=n.ops.pop(),n.trys.pop();continue;default:if(t=n.trys,!(t=t.length>0&&t[t.length-1])&&(e[0]===6||e[0]===2)){n=0;continue}if(e[0]===3&&(!t||e[1]>t[0]&&e[1]<t[3])){n.label=e[1];break}if(e[0]===6&&n.label<t[1]){n.label=t[1],t=e;break}if(t&&n.label<t[2]){n.label=t[2],n.ops.push(e);break}t[2]&&n.ops.pop(),n.trys.pop();continue}e=i.call(a,n)}catch(o){e=[6,o],r=0}finally{c=t=0}if(e[0]&5)throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}},y=function(){function a(i){v(this,i),this.facingMode="user",this.onPhoto=b(this,"onPhoto",7),this.noDeviceError=b(this,"noDeviceError",7)}return a.prototype.present=function(){return l(this,void 0,void 0,function(){var i,n=this;return f(this,function(c){return i=document.createElement("pwa-camera-modal-instance"),i.facingMode=this.facingMode,i.addEventListener("onPhoto",function(r){return l(n,void 0,void 0,function(){var t;return f(this,function(u){return this._modal?(t=r.detail,this.onPhoto.emit(t),[2]):[2]})})}),i.addEventListener("noDeviceError",function(r){return l(n,void 0,void 0,function(){return f(this,function(t){return this.noDeviceError.emit(r),[2]})})}),document.body.append(i),this._modal=i,[2]})})},a.prototype.dismiss=function(){return l(this,void 0,void 0,function(){return f(this,function(i){return this._modal?(this._modal&&this._modal.parentNode.removeChild(this._modal),this._modal=null,[2]):[2]})})},a.prototype.render=function(){return m("div",null)},Object.defineProperty(a,"style",{get:function(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:600px;height:600px}"},enumerable:!0,configurable:!0}),a}();export{y as pwa_camera_modal};
