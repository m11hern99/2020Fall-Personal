(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},i={app:0},r=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-3b721158":"d9e1b5e5"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-3b721158":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-3b721158":"a92095a4"}[t]+".css",i=c.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete s[t],f.parentNode.removeChild(f),n(r)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){s[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"039a":function(t,e,n){"use strict";var a=n("7174"),s=n.n(a);s.a},"196e":function(t,e,n){t.exports=n.p+"img/Circle2.354759a7.jpg"},"1be2":function(t,e,n){"use strict";var a=n("faf5"),s=n.n(a);s.a},"2ab8":function(t,e,n){"use strict";var a=n("70d5"),s=n.n(a);s.a},"2dad":function(t,e,n){},5147:function(t,e,n){"use strict";var a={user:null,notifications:[]};e["a"]=a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Nav"),n("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand",attrs:{id:"top"}},[t._m(0),n("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.isActive=!t.isActive}}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])]),n("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive},attrs:{id:"navbarBasicExample"},on:{click:function(e){t.isActive=!t.isActive}}},[n("div",{staticClass:"navbar-start"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/",id:"item"}},[n("i",{staticClass:"fas fa-home",attrs:{id:"icon2"}}),t._v("Home")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/feed",id:"item"}},[t._v("Feed")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/users",id:"item"}},[t._v("Admin")])],1),n("LoginBadge")],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:n("196e"),alt:"logo",width:"70",height:"15"}})])}],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"LoginBadge"}},[t.session.user?n("div",{staticClass:"media"},[n("div",{staticClass:"dropdown",class:{"is-active":t.isActive},on:{click:function(e){t.isActive=!t.isActive}}},[n("div",{staticClass:"dropdown"},[n("button",{staticClass:"button",attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu"}},[n("router-link",{attrs:{to:"/feed"}},[n("span",[t._v(t._s(t.session.user.name))]),n("span",{staticClass:"icon is-small",attrs:{id:"pfp"}},[n("img",{attrs:{src:t.session.user.profile,alt:"Profile Picture"}})])])],1)])])]):n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button is-dark",attrs:{to:"/Signup"}},[n("strong",[t._v("Sign up")])]),n("router-link",{staticClass:"button is-light",attrs:{to:"/Login"}},[t._v(" Log in ")])],1)])},l=[],u=n("5147"),d={data:function(){return{session:u["a"],isActive:!1}}},f=d,p=(n("2ab8"),n("2877")),v=Object(p["a"])(f,c,l,!1,null,null,null),m=v.exports,h={data:function(){return{isActive:!1}},components:{LoginBadge:m}},g=h,b=(n("5b49"),Object(p["a"])(g,r,o,!1,null,null,null)),_=b.exports,C={components:{Nav:_}},E=C,y=Object(p["a"])(E,s,i,!1,null,null,null),k=y.exports,w=(n("d3b7"),n("8c4f")),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Login")],1)},j=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field"},[t._m(0),t._m(1),n("p",{staticClass:"control"},[n("button",{staticClass:"button",attrs:{id:"btn"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[n("strong",[t._v(" Login ")])]),n("button",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.fbLogin(e)}}},[n("strong",[t._v(" FB Login")])]),n("button",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.googleLogin(e)}}},[n("strong",[t._v(" Google Login")])])])])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"control has-icons-left has-icons-right"},[n("input",{staticClass:"input",attrs:{type:"text",placeholder:"Email"}}),n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fas fa-envelope"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"control has-icons-left"},[n("input",{staticClass:"input",attrs:{type:"password",placeholder:"Password"}}),n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fas fa-lock"})])])}],L=(n("b0c0"),n("96cf"),n("1da1")),A=null,B={methods:{login:function(){u["a"].user={name:"Maria Hernandez",handle:"m11hern24",profile:"https://mail.google.com/mail/u/1?ui=2&ik=fdc8bf2c36&attid=0.1&permmsgid=msg-a:r4432692003323843178&th=17589f806c709fd0&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9zbt-HM5tNOD9huzPb4NO0uv8Bsf3ES72VF0N6qlvMYr55eP2LUtuGV-8yWBk9d-glE25vT9kPGFUj8KOgBBIinuqrKm2jEE7TmkPOErQmGOizksX2vqqCEIA&disp=emb&realattid=17589f7fad245554d281"},this.$router.push("Feed")},fbLogin:function(){var t=this;FB.login((function(e){FB.api("me?fields=id,name,email,picture",(function(e){u["a"].user={name:e.name,handle:e.email,profile:e.picture.data.url},t.$router.push("Feed")}))}),{scope:"public_profile,email,user_photos"})},googleLogin:function(){var t=this;return Object(L["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.signIn();case 2:n=e.sent,a=n.getBasicProfile(),u["a"].user={name:a.getName(),handle:a.getEmail(),profile:a.getImageUrl()},t.$router.push("feed");case 6:case"end":return e.stop()}}),e)})))()}}};window.fbAsyncInit=function(){FB.init({appId:"1144678312688368",cookie:!0,xfbml:!0,version:"v9.0"}),FB.AppEvents.logPageView()},function(t,e,n){var a,s=t.getElementsByTagName(e)[0];t.getElementById(n)||(a=t.createElement(e),a.id=n,a.src="https://connect.facebook.net/en_US/sdk.js",s.parentNode.insertBefore(a,s))}(document,"script","facebook-jssdk");var N=document.createElement("script");N.setAttribute("src","https://apis.google.com/js/api:client.js"),document.head.appendChild(N),N.onload=function(){gapi.load("auth2",(function(){A=gapi.auth2.init({client_id:"339414840125-sken17fa4hneitcklrl3bpl8goc879c2.apps.googleusercontent.com",cookiepolicy:"single_host_origin",scope:"profile email"})}))};var S=B,$=(n("039a"),Object(p["a"])(S,x,P,!1,null,null,null)),T=$.exports,F={components:{Login:T}},I=F,U=Object(p["a"])(I,O,j,!1,null,null,null),D=U.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Signup")],1)},R=[],q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v(" Name")]),n("div",{staticClass:"control has-icons-left has-icons-right"},[n("input",{staticClass:"input",attrs:{id:"input",type:"text",placeholder:"Name"}}),n("span",{staticClass:"icon is-small is-left",attrs:{id:"icon"}},[n("i",{staticClass:"fas fa-address-card"})])]),n("label",{staticClass:"label"},[t._v("Username")]),n("div",{staticClass:"control has-icons-left has-icons-right"},[n("input",{staticClass:"input",attrs:{id:"input",type:"text",placeholder:"Create Username"}}),n("span",{staticClass:"icon is-small is-left",attrs:{id:"icon"}},[n("i",{staticClass:"fas fa-user"})])]),n("label",{staticClass:"label"},[t._v("Password")]),n("div",{staticClass:"control has-icons-left has-icons-right"},[n("input",{staticClass:"input ",attrs:{id:"input",type:"password",placeholder:"Enter a Password"}}),n("span",{staticClass:"icon is-small is-left",attrs:{id:"icon"}},[n("i",{staticClass:"fas fa-key"})])]),n("div",{staticClass:"control"},[n("label",{staticClass:"checkbox"},[n("input",{attrs:{type:"checkbox"}}),t._v(" I agree to the "),n("a",{attrs:{id:"terms",href:"#"}},[t._v("terms and conditions")])])]),n("div",{staticClass:"field is-grouped"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-dark",attrs:{id:"submit"}},[t._v("Submit")])]),n("div",{staticClass:"control"},[n("button",{staticClass:"button is-light",attrs:{id:"submit"}},[t._v("Cancel")])])])])}],z={},G=z,J=(n("8d1b"),Object(p["a"])(G,q,H,!1,null,null,null)),V=J.exports,K={components:{Signup:V}},W=K,X=Object(p["a"])(W,M,R,!1,null,null,null),Q=X.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Profile")],1)},Z=[],tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center",attrs:{align:"center"}},[a("h1",{staticClass:"welcome"},[t._v(" WELCOME TO THE EXERCISE APP ")]),a("img",{attrs:{src:n("a7d1"),alt:"logo",width:"1000"}})])}],nt={},at=nt,st=(n("1be2"),Object(p["a"])(at,tt,et,!1,null,null,null)),it=st.exports,rt={components:{Profile:it}},ot=rt,ct=Object(p["a"])(ot,Y,Z,!1,null,null,null),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("h2",{staticClass:"title is-2"},[t._v("Users Page")]),n("table",{staticClass:"table is-narrow is-hoverable is-fullwidth"},[t._m(0),n("tbody",t._l(t.list,(function(e,a){return n("tr",{key:a,attrs:{i:a,post:e}},[n("th",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.FirstName))]),n("td",[t._v(t._s(e.LastName))]),n("td",[t._v(t._s(e.Password))]),n("td",[t._v(t._s(e.DOB))]),n("td",[t._v(t._s(e.Type))])])})),0)])])},dt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("id")]),n("th",[t._v("First Name")]),n("th",[t._v("Last Name")]),n("th",[t._v("Password")]),n("th",[t._v("DOB")]),n("th",[t._v("Type")])])])}],ft=n("773f");function pt(){return Object(ft["a"])("users")}var vt={data:function(){return{list:[]}},created:function(){var t=this;return Object(L["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,pt();case 2:t.list=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{},methods:{}},mt=vt,ht=Object(p["a"])(mt,ut,dt,!1,null,null,null),gt=ht.exports;a["a"].use(w["a"]);var bt=[{path:"/",name:"Home",component:lt},{path:"/login",name:"Login",component:D},{path:"/signup",name:"Signup",component:Q},{path:"/users",name:"Users",component:gt},{path:"/feed",name:"Feed",component:function(){return n.e("chunk-3b721158").then(n.bind(null,"4787"))},beforeEnter:Et}],_t=new w["a"]({mode:"history",base:"",routes:bt}),Ct=_t;function Et(t,e,n){u["a"].user?n():n("Login")}n("5abe"),n("15f5");a["a"].config.productionTip=!1,new a["a"]({router:Ct,render:function(t){return t(k)}}).$mount("#app")},"58de":function(t,e,n){},"5b49":function(t,e,n){"use strict";var a=n("58de"),s=n.n(a);s.a},"70d5":function(t,e,n){},7174:function(t,e,n){},"773f":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("d3b7");var a=Object({NODE_ENV:"production",BASE_URL:""}).API_ROOT||"http://localhost:3001/";function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?fetch(a+t,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})):fetch(a+t).then((function(t){return t.json()}))}},"8d1b":function(t,e,n){"use strict";var a=n("2dad"),s=n.n(a);s.a},a7d1:function(t,e,n){t.exports=n.p+"img/Logo.df2e2e71.jpg"},faf5:function(t,e,n){}});
//# sourceMappingURL=app.597c63f6.js.map