(function(e){function t(t){for(var r,c,o=t[0],i=t[1],u=t[2],f=0,p=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},s=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/my-project/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2d3f":function(e,t,n){},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-view"},[n("Header"),n("router-view"),n("footer")],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[e._m(0),n("nav",{staticClass:"flex justify-center"},[n("ul",{staticClass:"navlist flex"},[n("router-link",{attrs:{to:"/"}},[n("li",[e._v("Home")])]),n("router-link",{attrs:{to:"/contacts"}},[n("li",[e._v("Contacts")])]),n("router-link",{attrs:{to:"/charts"}},[n("li",[e._v("Charts")])])],1)])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header flex justify-center"},[n("h1",[e._v("Mister BitCoin")])])}],i=n("2877"),u={},l=Object(i["a"])(u,c,o,!1,null,null,null),f=l.exports,p={name:"App",components:{Header:f}},d=p,m=Object(i["a"])(d,a,s,!1,null,null,null),h=m.exports,v=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home"},[e.user?n("div",{staticClass:"user-info flex align-center"},[n("img",{attrs:{src:"https://robohash.org/"+e.user.username+".png"}}),n("div",{staticClass:"flex column"},[n("p",[e._v("Hi "+e._s(e.user.username))]),n("p",[e._v("Balance:")]),n("p",[e._v(" "+e._s(e.user.balance)+" BITS "),n("span",[e._v("( $"+e._s(e.getBtcToUsd)+" )")])])]),n("button",{on:{click:e.logout}},[e._v("logout")])]):n("div",[n("form",{staticClass:"login flex column",on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[n("p",[e._v("Login:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.username,expression:"creds.username"}],attrs:{type:"text",placeholder:"username"},domProps:{value:e.creds.username},on:{input:function(t){t.target.composing||e.$set(e.creds,"username",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.creds.password},on:{input:function(t){t.target.composing||e.$set(e.creds,"password",t.target.value)}}}),n("button",[e._v("log me in")])])]),e.user?n("MoveList",{attrs:{user:e.user}}):e._e()],1)},g=[],j=n("1da1");n("96cf"),n("d3b7"),n("c740"),n("7db0");function w(e,t){localStorage.setItem(e,JSON.stringify(t))}function _(e){var t=localStorage.getItem(e);return JSON.parse(t)}n("4de4"),n("caad"),n("2532"),n("b0c0"),n("b680"),n("a434");var x={query:k,getById:O,save:P,remove:$,transfer:z},y=[{_id:"cont-1",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824",balance:0},{_id:"cont-2",name:"Moshe Blyde",email:"lies@asd.com",phone:"+1 (341) 593-3432",balance:0},{_id:"cont-3",name:"Someone Else",email:"Someone@Someone.com",phone:"+1 (213) 533-2131",balance:0},{_id:"cont-4",name:"Person personson",email:"Person@Person.com",phone:"+972 (1) 123-4533",balance:0},{_id:"cont-5",name:"Miste Bitcoin",email:"bit@coin.con",phone:"+21 (123) 321-123321",balance:0}];function k(e){return C.apply(this,arguments)}function C(){return C=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=_("contact"),null===n||void 0===n||!n.length){e.next=3;break}return e.abrupt("return",Promise.resolve(n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))));case 3:return w("contact",y),e.abrupt("return",Promise.resolve(y));case 5:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function O(e){return R.apply(this,arguments)}function R(){return R=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(n=_("contact"),r=n.find((function(e){return t===e._id})),!r){e.next=6;break}return e.abrupt("return",Promise.resolve(r));case 6:throw new Error("contact not found");case 7:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}function P(e){return B.apply(this,arguments)}function B(){return B=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=_("contact"),t._id?(r=n.findIndex((function(e){return e._id===t._id})),n[r]=t):(t._id="con-".concat(new Date%1e4+(100*Math.random()).toFixed(0)),t.balance=0,n.push(t)),w("contact",n),e.abrupt("return",Promise.resolve());case 4:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}function $(e){return D.apply(this,arguments)}function D(){return D=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=_("contact"),r=n.findIndex((function(e){return t===e._id})),n.splice(r,1),w("contact",n),e.abrupt("return",Promise.resolve());case 5:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function z(e,t){return E.apply(this,arguments)}function E(){return E=Object(j["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=_("contact"),a=r.findIndex((function(e){return e._id===t})),r[a].balance+=n,w("contact",r),e.abrupt("return",Promise.resolve());case 5:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}var S=[{username:"muki",password:"123",balance:200,_id:"u101",moves:[]},{username:"dudeman",password:"123",balance:123,_id:"u102",moves:[]},{username:"mandude",password:"123",balance:666,_id:"u103",moves:[]}],T={getUser:I,updateUser:A,transfer:L,login:N,logout:H};function I(){return M.apply(this,arguments)}function M(){return M=Object(j["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=_("user"),n=t||null,e.abrupt("return",Promise.resolve(n));case 3:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function A(){return F.apply(this,arguments)}function F(){return F=Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("updating user");case 1:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function L(e,t){return U.apply(this,arguments)}function U(){return U=Object(j["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=_("user"),e.t0=r.moves,e.t1=t,e.t2=r.balance,e.next=6,x.getById(n);case 6:return e.t3=e.sent,e.t4=Date.now(),e.t5=Date.now()%1e3,e.t6={amount:e.t1,balanceBefore:e.t2,contact:e.t3,transferedAt:e.t4,id:e.t5},e.t0.unshift.call(e.t0,e.t6),r.balance-=t,w("user",r),a=_("userDb"),s=a.findIndex((function(e){return e._id===r._id})),a[s]=r,w("userDb",a),e.abrupt("return",Promise.resolve());case 18:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function N(e){return q.apply(this,arguments)}function q(){return q=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=_("userDb"),null!==(n=r)&&void 0!==n&&n.length||(w("userDb",S),r=S),a=r.find((function(e){return e.username===t.username&&e.password===t.password})),!a){e.next=7;break}return w("user",a),e.abrupt("return",Promise.resolve(a));case 7:return e.abrupt("return",Promise.reject("no user found"));case 8:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}function H(){return localStorage.removeItem("user"),Promise.resolve()}n("ddb0");var J=n("bc3a"),V=n.n(J),G="https://blockchain.info/tobtc?currency=USD&value=1",K="https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true";function Q(){return W.apply(this,arguments)}function W(){return W=Object(j["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.t0=_("rate"),e.t0){e.next=5;break}return e.next=4,V.a.get(G);case 4:e.t0=e.sent;case 5:return t=e.t0,w("rate",t),e.abrupt("return",t.data);case 8:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function X(){return Y.apply(this,arguments)}function Y(){return Y=Object(j["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=_("marketPrices"),null!==(t=n)&&void 0!==t&&t.data){e.next=5;break}return e.next=4,V.a.get(K);case 4:n=e.sent;case 5:return w("marketPrices",n),e.abrupt("return",n.data.values);case 7:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}function Z(e,t){return ee.apply(this,arguments)}function ee(){return ee=Object(j["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:if(r=e.sent,!(r.balance-n<0)){e.next=5;break}return e.abrupt("return",Promise.reject("not enough bits"));case 5:return e.next=7,L(+n,t);case 7:return e.next=9,x.transfer(t,+n);case 9:return e.abrupt("return",Promise.resolve());case 10:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}var te,ne,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.moves?n("div",{staticClass:"move-list"},[n("h2",[e._v("Recent Activity")]),e._l(e.user.moves,(function(t){return n("MovePreview",{key:t.id,attrs:{move:t,user:e.user}})}))],2):e._e()},ae=[],se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"flex column"},[n("div",{staticClass:"move-preview flex"},[n("div",{staticClass:"from flex column align-center"},[n("img",{attrs:{src:"https://robohash.org/"+e.user.username+".png"}}),n("p",[e._v(e._s(e.user.username))])]),n("strong",[e._v("→")]),n("div",{staticClass:"to flex column align-center",on:{click:function(t){return e.clickToProfile(e.move.contact._id)}}},[n("img",{attrs:{src:"https://robohash.org/"+e.move.contact.name+".png"}}),n("p",[e._v(e._s(e.move.contact.name))])]),n("div",{staticClass:"footer flex"},[n("p",[e._v(e._s(e.move.amount)+" "+e._s(e.move.amount>1?"BITS":"BIT"))]),n("p",[e._v(e._s(new Date(e.move.transferedAt).toLocaleString()))]),n("p",[e._v("balance:"+e._s(e.move.balanceBefore))])])])])},ce=[],oe={props:["move","user"],methods:{clickToProfile:function(e){this.$router.history.current.path.includes("contacts")||this.$router.push("/contacts/".concat(e))}}},ie=oe,ue=Object(i["a"])(ie,se,ce,!1,null,null,null),le=ue.exports,fe={data:function(){return{moves:this.user.moves}},props:["user"],components:{MovePreview:le}},pe=fe,de=Object(i["a"])(pe,re,ae,!1,null,null,null),me=de.exports,he={data:function(){return{user:null,rate:null,creds:{username:"",password:""}}},methods:{loadUser:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.getUser();case 3:e.user=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log("error",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},getRate:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q();case 3:e.rate=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t["catch"](0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()},logout:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:T.logout(),e.user=null;case 2:case"end":return t.stop()}}),t)})))()},login:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.login(e.creds);case 3:n=t.sent,e.user=n,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log("user doesnt exist",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},computed:{getBtcToUsd:function(){return(this.user.balance/this.rate).toLocaleString("en-US")}},created:function(){this.loadUser(),this.getRate()},components:{MoveList:me}},ve=he,be=Object(i["a"])(ve,b,g,!1,null,null,null),ge=be.exports,je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"contacts-page"},[n("ContactFilter",{attrs:{filterBy:e.filterBy},on:{filterChange:e.setFilter}}),n("ContactList",{attrs:{contacts:e.contacts}})],1)},we=[],_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"contact-list flex column align-center"},[n("h2",[e._v("Contacts")]),n("router-link",{attrs:{to:"/contacts/edit"}},[n("button",[e._v("Add new +")])]),e._l(e.contacts,(function(e){return n("ContactPreview",{key:e._id,attrs:{contact:e}})}))],2)},xe=[],ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"contact-preview flex align-center",on:{click:e.goToPage}},[n("img",{attrs:{src:"https://robohash.org/"+e.contact.name}}),n("div",{staticClass:"info"},[n("p",[n("strong",[e._v(e._s(e.contact.name))])]),n("p",[e._v("Balance : "+e._s(e.contact.balance))])])])},ke=[],Ce={props:["contact"],methods:{goToPage:function(){this.$router.push("/contacts/".concat(this.contact._id))}}},Oe=Ce,Re=Object(i["a"])(Oe,ye,ke,!1,null,null,null),Pe=Re.exports,Be={props:["contacts"],components:{ContactPreview:Pe}},$e=Be,De=Object(i["a"])($e,_e,xe,!1,null,null,null),ze=De.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"filter flex column align-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.thisFilterBy,expression:"thisFilterBy"}],staticClass:"input",attrs:{type:"search",placeholder:"contact name"},domProps:{value:e.thisFilterBy},on:{input:[function(t){t.target.composing||(e.thisFilterBy=t.target.value)},e.setFilter]}})])},Se=[],Te={data:function(){return{thisFilterBy:this.filterBy}},methods:{setFilter:function(){this.$emit("filterChange",this.thisFilterBy)}},props:["filterBy"]},Ie=Te,Me=(n("d27a"),Object(i["a"])(Ie,Ee,Se,!1,null,"a3de588e",null)),Ae=Me.exports,Fe={data:function(){return{contacts:null,filterBy:""}},methods:{loadContacts:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x.query(e.filterBy);case 2:e.contacts=t.sent;case 3:case"end":return t.stop()}}),t)})))()},setFilter:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.filterBy=e,t.loadContacts();case 2:case"end":return n.stop()}}),n)})))()}},created:function(){this.loadContacts()},components:{ContactList:ze,ContactFilter:Ae}},Le=Fe,Ue=Object(i["a"])(Le,je,we,!1,null,null,null),Ne=Ue.exports,qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.contact?n("section",{staticClass:"contact-details flex column align-center justify-center"},[n("img",{attrs:{src:"https://robohash.org/"+e.contact.name}}),n("strong",[n("p",[e._v(e._s(e.contact.name))])]),n("p",[e._v(e._s(e.contact.email))]),n("p",[e._v(e._s(e.contact.phone))]),n("p",[e._v("balance: "+e._s(e.contact.balance))]),n("div",{staticClass:"actions flex"},[n("router-link",{attrs:{to:"/contacts"}},[n("button",[e._v("back")])]),n("router-link",{attrs:{to:"/contacts/edit/"+e.contact._id}},[n("button",[e._v("edit")])]),n("button",{on:{click:e.toggleTransfer}},[e._v(" "+e._s(e.isTransfer?"Close":"Transfer")+" ")])],1),e.isTransfer?n("div",{staticClass:"transfer-box fade-in"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.transfer.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.transferAmount,expression:"transferAmount"}],attrs:{type:"number",required:"",placeholder:"Amount to transfer"},domProps:{value:e.transferAmount},on:{input:function(t){t.target.composing||(e.transferAmount=t.target.value)}}}),n("button",[e._v("send bits")])])]):e._e(),n("p",[e._v(e._s(e.transferStatus))]),e.user?n("MoveList",{attrs:{user:e.getFilteredMoves}}):e._e()],1):e._e()},He=[],Je=n("5530"),Ve={data:function(){return{contact:null,transferAmount:0,isTransfer:!1,transferStatus:"",user:null}},created:function(){this.loadContact(),this.loadUser()},methods:{loadContact:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$route.params.contactId,n){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,x.getById(n);case 5:e.contact=t.sent;case 6:case"end":return t.stop()}}),t)})))()},loadUser:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I();case 2:e.user=t.sent;case 3:case"end":return t.stop()}}),t)})))()},transfer:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.transferAmount<=0)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,Z(e.contact._id,e.transferAmount);case 5:e.transferStatus="Complete",e.loadContact(),e.toggleTransfer(),e.transferAmount=0,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),e.transferStatus="Insufficient funds";case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()},toggleTransfer:function(){this.isTransfer=!this.isTransfer}},computed:{getFilteredMoves:function(){var e=this,t=Object(Je["a"])({},this.user);return t.moves=t.moves.filter((function(t){return t.contact._id===e.contact._id})),t}},components:{MoveList:me}},Ge=Ve,Ke=Object(i["a"])(Ge,qe,He,!1,null,null,null),Qe=Ke.exports,We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.contact?n("section",{staticClass:"edit-page flex column align-center"},[n("img",{attrs:{src:"https://robohash.org/"+(e.contact.name?e.contact.name:"new")}}),e.isEdit?e._e():n("p",[e._v("Add new contact")]),e.isEdit?n("p",[e._v("Edit contact")]):e._e(),e.contact?n("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.contact.name,expression:"contact.name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Name",required:""},domProps:{value:e.contact.name},on:{input:function(t){t.target.composing||e.$set(e.contact,"name",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.contact.email,expression:"contact.email"}],attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:e.contact.email},on:{input:function(t){t.target.composing||e.$set(e.contact,"email",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.contact.phone,expression:"contact.phone",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Phone",required:""},domProps:{value:e.contact.phone},on:{input:function(t){t.target.composing||e.$set(e.contact,"phone",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("button",[e._v("save")]),n("router-link",{attrs:{to:"/contacts"}},[n("button",[e._v("back")])])],1):e._e(),e.isEdit?n("button",{on:{click:e.remove}},[e._v("delete")]):e._e()]):e._e()},Xe=[],Ye={data:function(){return{contact:null,isEdit:!0}},created:function(){this.loadContact()},methods:{loadContact:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$route.params.contactId,n){t.next=4;break}return e.isEdit=!1,t.abrupt("return",e.contact={name:"",email:"",phone:""});case 4:return t.t0=Je["a"],t.t1={},t.next=8,x.getById(n);case 8:t.t2=t.sent,e.contact=(0,t.t0)(t.t1,t.t2);case 10:case"end":return t.stop()}}),t)})))()},submit:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x.save(e.contact);case 2:e.$router.push("/contacts");case 3:case"end":return t.stop()}}),t)})))()},remove:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x.remove(e.contact._id);case 2:e.$router.push("/contacts");case 3:case"end":return t.stop()}}),t)})))()}}},Ze=Ye,et=Object(i["a"])(Ze,We,Xe,!1,null,null,null),tt=et.exports,nt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"charts"},[e._v(" Market Price over time: "),n("div",[n("PriceChart",{attrs:{chartData:e.chart1Data}})],1)])},rt=[],at=(n("d81d"),n("1fca")),st={extends:at["a"],mounted:function(){},methods:{chartRender:function(){this.chartData&&this.renderChart({labels:this.getChartLables,datasets:[{label:"$",data:this.getChartValues,backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)"}]},{legend:{display:!1},responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Last 30 Days"}})}},computed:{getChartLables:function(){return this.chartData.map((function(e){return new Date(1e3*e.x).toLocaleDateString("en-GB")}))},getChartValues:function(){return this.chartData.map((function(e){return e.y}))}},props:["chartData"],watch:{chartData:function(){this.chartRender()}}},ct=st,ot=Object(i["a"])(ct,te,ne,!1,null,null,null),it=ot.exports,ut={data:function(){return{chart1Data:null,loaded:!1}},methods:{getChartData:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,X();case 2:e.chart1Data=t.sent,e.loaded=!0;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.getChartData()},components:{PriceChart:it}},lt=ut,ft=Object(i["a"])(lt,nt,rt,!1,null,null,null),pt=ft.exports;r["a"].use(v["a"]);var dt=[{path:"/",name:"Home",component:ge},{path:"/contacts/edit/:contactId?",name:"Contact Edit",component:tt},{path:"/contacts/:contactId",name:"Contact Details",component:Qe},{path:"/contacts",name:"Contacts",component:Ne},{path:"/charts",name:"Charts",component:pt}],mt=new v["a"]({mode:"hash",base:"/my-project/",routes:dt}),ht=mt,vt=n("2f62");r["a"].use(vt["a"]);var bt=new vt["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("2d3f");r["a"].config.productionTip=!1,new r["a"]({router:ht,store:bt,render:function(e){return e(h)}}).$mount("#app")},bdf6:function(e,t,n){},d27a:function(e,t,n){"use strict";n("bdf6")}});
//# sourceMappingURL=app.29e0da35.js.map