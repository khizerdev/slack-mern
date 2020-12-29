(this["webpackJsonpslack-react"]=this["webpackJsonpslack-react"]||[]).push([[0],{118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(25),r=t.n(l),s=(t(81),t(13)),o=(t(82),t(83),t(139)),i=t(58),m=t.n(i),u=t(59),d=t.n(u),h=t(60),E=t.n(h),p=Object(n.createContext)(),v=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(p.Provider,{value:Object(n.useReducer)(a,t)},l)},f=function(){return Object(n.useContext)(p)},g=function(){var e=f(),a=Object(s.a)(e,1)[0].user;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement(o.a,{className:"header__avatar",src:null===a||void 0===a?void 0:a.photoURL,alt:null===a||void 0===a?void 0:a.displayName}),c.a.createElement(m.a,null)),c.a.createElement("div",{className:"header__search"},c.a.createElement(d.a,null),c.a.createElement("input",{placeholder:"Search me"})),c.a.createElement("div",{className:"header__right"},c.a.createElement(E.a,null)))},b=(t(88),t(62)),_=t.n(b),N=t(63),I=t.n(N),O=(t(89),t(5)),w=t(30),j=t.n(w),k=(j.a.initializeApp({apiKey:"AIzaSyCeLTp6dTcYyMgrDVboABJihWUR9xEKTeg",authDomain:"mern-slack-40cbc.firebaseapp.com",projectId:"mern-slack-40cbc",storageBucket:"mern-slack-40cbc.appspot.com",messagingSenderId:"338035413292",appId:"1:338035413292:web:0eb2eceb1a17b7aaa1dc89",measurementId:"G-590MGEX50L"}).firestore(),j.a.auth()),S=new j.a.auth.GoogleAuthProvider,C=t(61),y=t.n(C).a.create({baseURL:"https://slack-mern-kz.herokuapp.com/"}),A=function(e){var a=e.Icon,t=e.id,n=e.addChannelOption,l=e.title,r=Object(O.f)();return c.a.createElement("div",{className:"sidebarOption",onClick:n?function(){var e=prompt("Please enter the channel name");e&&y.post("/new/channel",{channelName:e})}:function(){t?r.push("/room/".concat(t)):r.push(l)}},a&&c.a.createElement(a,{className:"sidebarOption__icon"}),a?c.a.createElement("h3",null,l):c.a.createElement("h3",{className:"sidebarOption__channel"},c.a.createElement("span",{className:"sidebarOption__hash"}," # ")," ",l))},L=t(64),D=t.n(L),R=t(65),M=t.n(R),T=t(66),U=t.n(T),P=t(67),W=t.n(P),x=t(68),B=t.n(x),G=t(69),z=t.n(G),J=t(70),F=t.n(J),K=t(71),V=t.n(K),X=t(72),Y=t.n(X),$=t(73),q=t.n($),H=t(37),Q=t.n(H),Z=new Q.a("6872f098377325ccbe24",{cluster:"ap2"}),ee=function(){var e=f(),a=Object(s.a)(e,2),t=a[0].user,l=(a[1],Object(n.useState)([])),r=Object(s.a)(l,2),o=r[0],i=r[1],m=function(){y.get("/get/channelList").then((function(e){i(e.data),console.log(e.data)})),console.log(o)};return Object(n.useEffect)((function(){m(),Z.subscribe("channels").bind("newChannel",(function(e){m()}))}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement("div",{className:"sidebar__info"},c.a.createElement("h2",null,"Slack App"),c.a.createElement("h3",null,c.a.createElement(_.a,null),null===t||void 0===t?void 0:t.displayName)),c.a.createElement(I.a,null)),c.a.createElement(A,{Icon:D.a,title:"Threads"}),c.a.createElement(A,{Icon:M.a,title:"Mentions & reactions"}),c.a.createElement(A,{Icon:U.a,title:"Saved items"}),c.a.createElement(A,{Icon:W.a,title:"Channel browser"}),c.a.createElement(A,{Icon:B.a,title:"People & user groups"}),c.a.createElement(A,{Icon:z.a,title:"Apps"}),c.a.createElement(A,{Icon:F.a,title:"File browser"}),c.a.createElement(A,{Icon:V.a,title:"Show less"}),c.a.createElement("hr",null),c.a.createElement(A,{Icon:Y.a,title:"Channels"}),c.a.createElement("hr",null),c.a.createElement(A,{Icon:q.a,addChannelOption:!0,title:"Add Channel"}),o.map((function(e){return c.a.createElement(A,{title:e.name,id:e.id})})))},ae=t(33),te=(t(118),t(136)),ne=t(137);t(119);var ce=function(e){var a=e.message,t=e.timestamp,n=e.user,l=e.userImage;return c.a.createElement("div",{className:"message"},c.a.createElement("img",{src:l,alt:""}),c.a.createElement("div",{className:"message__info"},c.a.createElement("h4",null,n," ",c.a.createElement("span",{className:"message__timestamp"},new Date(parseInt(t)).toUTCString())),c.a.createElement("p",null,a)))};t(120);var le=function(e){var a=e.channelName,t=e.channelId,l=Object(n.useState)(""),r=Object(s.a)(l,2),o=r[0],i=r[1],m=f(),u=Object(s.a)(m,1)[0].user;return c.a.createElement("div",{className:"chatInput"},c.a.createElement("form",null,c.a.createElement("input",{value:o,onChange:function(e){return i(e.target.value)},placeholder:"Message #".concat(null===a||void 0===a?void 0:a.toLowerCase())}),c.a.createElement("button",{type:"sumbit",onClick:function(e){e.preventDefault(),t&&y.post("/new/message?id=".concat(t),{message:o,timestamp:Date.now(),user:u.displayName,userImage:u.photoURL}),i("")}},"SEND")))},re=new Q.a("6872f098377325ccbe24",{cluster:"ap2"}),se=function(){var e=Object(O.g)().roomId,a=Object(n.useState)(null),t=Object(s.a)(a,2),l=t[0],r=t[1],o=Object(n.useState)([]),i=Object(s.a)(o,2),m=i[0],u=i[1],d=function(){y.get("/get/Conversation?id=".concat(e)).then((function(e){r(e.data[0].channelName),u(e.data[0].conversation)}))};return Object(n.useEffect)((function(){e&&d(),re.subscribe("conversation").bind("newMessage",(function(e){d()}))}),[e]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement("div",{className:"chat__headerLeft"},c.a.createElement("h4",{className:"chat__channelName"},c.a.createElement("strong",null," #",l," "),c.a.createElement(te.a,null))),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement("p",null,c.a.createElement(ne.a,null)," Details"))),c.a.createElement("div",{className:"chat__messages"},m.map((function(e){var a=e.message,t=e.timestamp,n=e.user,l=e.userImage;return c.a.createElement(ce,{message:a,timestamp:t,user:n,userImage:l})}))),c.a.createElement(le,{channelName:l,channelId:e}))},oe=(t(121),t(138)),ie=t(43),me="SET_USER",ue=function(e,a){switch(console.log(a),a.type){case me:return Object(ie.a)(Object(ie.a)({},e),{},{user:a.user});default:return e}},de=function(){var e=f(),a=Object(s.a)(e,2),t=(a[0],a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",alt:""}),c.a.createElement("h1",null,"Sign in to Slack Chat App"),c.a.createElement("p",null),c.a.createElement(oe.a,{onClick:function(){k.signInWithPopup(S).then((function(e){t({type:me,user:e.user})})).catch((function(e){alert(e.message)}))}},"Sign in with Google")))};var he=function(){var e=f(),a=Object(s.a)(e,2),t=a[0].user;return a[1],console.log(t),c.a.createElement("div",{className:"app"},c.a.createElement(ae.a,null,t?c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null),c.a.createElement("div",{className:"app__body"},c.a.createElement(ee,null),c.a.createElement(O.c,null,c.a.createElement(O.a,{path:"/room/:roomId"},c.a.createElement(se,null)),c.a.createElement(O.a,{path:"/"},c.a.createElement("h1",null,"Welcome"))))):c.a.createElement(de,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,{initialState:{user:null},reducer:ue},c.a.createElement(he,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,a,t){e.exports=t(122)},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.61332bed.chunk.js.map