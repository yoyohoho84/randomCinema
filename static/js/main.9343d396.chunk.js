(this.webpackJsonprandomCinema=this.webpackJsonprandomCinema||[]).push([[0],{114:function(e,t,a){e.exports=a(227)},227:function(e,t,a){"use strict";a.r(t);a(115),a(141),a(143),a(144),a(146),a(147),a(148),a(149),a(150),a(151),a(152),a(153),a(155),a(156),a(157),a(158),a(159),a(160),a(161),a(162),a(163),a(164),a(166),a(167),a(168),a(169),a(170),a(171),a(172),a(173),a(174),a(175),a(176),a(177),a(178),a(179),a(180),a(181),a(182),a(183);var n=a(0),o=a.n(n),c=a(73),r=a.n(c),i=a(28),l=a.n(i),s=a(16),m=a(74),u=a.n(m),d=(a(191),a(54)),p=a.n(d),g=a(46),h=a.n(g),b=a(47),f=a.n(b),E=a(10),v=a.n(E),y=a(111),O=a.n(y),j=a(112),S=a.n(j),I=a(76),k=a.n(I),x=a(113),N=a.n(x),P=a(56),C=a.n(P),F=a(57),_=a.n(F),A=(a(71),a(55)),L=a.n(A),V=function(e){var t=e.name,a=e.photo,n=e.year,c=e.idItem;return o.a.createElement(L.a,{top:!0},o.a.createElement(v.a,{className:"card bg-color"},o.a.createElement(C.a,{className:"myItem",id:c,description:n,before:o.a.createElement(_.a,{type:"image",src:a,size:140})},t)))},J=function(e){var t=e.name,a=e.photo,n=e.year,c=e.idItem;return o.a.createElement(L.a,{top:!0},o.a.createElement(v.a,{className:"card bg-color"},o.a.createElement(C.a,{className:"myItem",id:c,description:n,before:o.a.createElement(_.a,{type:"image",src:a,size:140})},t)))},K=a(110),W=a(75),z=a.n(W),M=function(e){var t=e.id,a=e.dataStorage,n=(e.go,e.activeTab),c=e.tabHome,r=e.tabFavorites,i=e.count,l=e.maxDataLength,s=e.lastItem,m=e.pay,u=e.getPlatform,d=Object(K.a)(),g=(d.isOnline,d.isOffline),b=a.map((function(e){return o.a.createElement(J,{key:"itemFavorites"+e.id,idItem:e.id,photo:e.photo,name:e.name,year:e.year})}));return console.log("lastItem",s),o.a.createElement(p.a,{id:t},o.a.createElement(h.a,null,"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u043a\u0438\u043d\u043e"),o.a.createElement(O.a,{vertical:"top"},o.a.createElement(S.a,{theme:"header",type:"buttons"},o.a.createElement(N.a,null,o.a.createElement(k.a,{onClick:c,selected:"home"===n},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),o.a.createElement(k.a,{onClick:r,selected:"favorites"===n},"\u041c\u043e\u0438 \u0444\u0438\u043b\u044c\u043c\u044b")))),g?o.a.createElement(v.a,{className:"divSpinner"},o.a.createElement(v.a,null,"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 - \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435!"),o.a.createElement(z.a,{size:"large"})):o.a.createElement(v.a,null,"home"===n&&!1===l?o.a.createElement(v.a,null,o.a.createElement(v.a,null,"\u041d\u0430\u0436\u0430\u0442\u0438\u0439: ",i),""!==s.length?o.a.createElement(V,{key:"itemHome"+s.id,idItem:s.id,photo:s.photo,name:s.name,year:s.year}):"","iOS"===u?o.a.createElement(v.a,{className:"button"},o.a.createElement(f.a,{level:"commerce",onClick:m,size:"xl",stretched:!0,style:{margin:40}},"\u041d\u0430\u0439\u0442\u0438 \u0437\u0430 1 \u0440\u0443\u0431")):o.a.createElement(v.a,{className:"button"},o.a.createElement(v.a,{className:"divButton"},"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043f\u043b\u0430\u0442\u0435\u0436\u0438 \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u0435 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 iOS"),o.a.createElement(f.a,{level:"disabled",size:"xl",stretched:!0,style:{margin:40}},"\u041d\u0430\u0439\u0442\u0438 \u0437\u0430 1 \u0440\u0443\u0431"))):o.a.createElement(v.a,null,"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0432\u0441\u0435 \u0444\u0438\u043b\u044c\u043c\u044b !"),"home"===n&&!0===l?o.a.createElement(v.a,null,o.a.createElement(v.a,null,"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0432\u0441\u0435 \u0444\u0438\u043b\u044c\u043c\u044b !")):"","favorites"===n?o.a.createElement(v.a,null,b):""))},D=function(){var e=Object(n.useState)("main"),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(s.a)(r,2),m=i[0],d=(i[1],Object(n.useState)("home")),p=Object(s.a)(d,2),g=p[0],h=p[1],b=Object(n.useState)(0),f=Object(s.a)(b,2),E=f[0],v=f[1],y=Object(n.useState)([]),O=Object(s.a)(y,2),j=O[0],S=O[1],I=Object(n.useState)(!1),k=Object(s.a)(I,2),x=k[0],N=k[1],P=Object(n.useState)([]),C=Object(s.a)(P,2),F=C[0],_=(C[1],Object(n.useState)("")),A=Object(s.a)(_,2),L=A[0],K=A[1],W=Object(n.useState)(),z=Object(s.a)(W,2),D=z[0],H=(z[1],Object(n.useState)("online")),T=Object(s.a)(H,2),U=(T[0],T[1],Object(n.useState)(!1)),Y=Object(s.a)(U,2),q=(Y[0],Y[1]),w=Object(n.useState)({id:0,photo:"https://sun9-17.userapi.com/c854524/v854524232/1ab0cc/YP4_Xic08oY.jpg",name:"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u0444\u0438\u043b\u044c\u043c, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u043d\u0438\u0436\u0435"}),B=Object(s.a)(w,2),G=B[0],X=B[1],Z=[{id:1,photo:"https://st.kp.yandex.net/images/film_big/1188529.jpg",name:"\u0414\u043e\u0441\u0442\u0430\u0442\u044c \u043d\u043e\u0436\u0438 \u0414\u043e\u0441\u0442\u0430\u0442\u044c \u043d\u043e\u0436\u0438 \u0414\u043e\u0441\u0442\u0430\u0442\u044c \u043d\u043e\u0436\u0438 \u0414\u043e\u0441\u0442\u0430\u0442\u044c \u043d\u043e\u0436\u0438",year:2019},{id:2,photo:"https://st.kp.yandex.net/images/film_big/1207545.jpg",name:"\u041a\u0443\u0440\u044c\u0435\u0440",year:2019},{id:3,photo:"https://st.kp.yandex.net/images/film_big/835086.jpg",name:"Ford \u043f\u0440\u043e\u0442\u0438\u0432 Ferrari",year:2019},{id:4,photo:"https://st.kp.yandex.net/images/film_big/837737.jpg",name:"\u0421\u0438\u0440\u043e\u0442\u0441\u043a\u0438\u0439 \u0411\u0440\u0443\u043a\u043b\u0438\u043d",year:2019},{id:5,photo:"https://sun9-64.userapi.com/c204716/v204716471/1c563/J4xlZLC9Yeg.jpg",name:"\u0412\u0430\u043d\u0438\u043b\u044c\u043d\u043e\u0435 \u043d\u0435\u0431\u043e",year:2001},{id:6,photo:"https://sun9-20.userapi.com/c204724/v204724471/1cf8a/-ubqon4oJF0.jpg",name:"\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0443\u043c",year:2001}],Q=1,R=Z.length+1,$=Z.length;function ee(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function te(){console.log(" targetList1 lastItem:",G);var e=ee(Q,R),t=Z[e-1];if(v(E+1),j.length<=0){void 0===j.find((function(e){return e.id===t.id}))&&j.length!==$?ne(t):(ae(),N(!0))}else{var a=j.find((function(e){return e.id===t.id}));j.length!==$?void 0===a?ne(t):ae():N(!0)}}function ae(){console.log(" targetList1 lastItem:",G);var e=ee(Q,R),t=Z[e-1],a=j.find((function(e){return e.id===t.id}));j.length!==$?void 0===a?ne(t):te():(N(!0),console.log(" 0000 maxDataLength:",x))}function ne(e){j.push(e),S(j);var t=j[j.length-1];X(t);var a=JSON.stringify(j);console.log(" setId dataFirst:",F),l.a.sendPromise("VKWebAppStorageSet",{key:"dataStorage",value:a}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}Object(n.useEffect)((function(){l.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var o=document.createAttribute("scheme");o.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(o)}})),l.a.sendPromise("VKWebAppGetClientVersion").then((function(e){console.log("\u0412\u0415\u0420\u0421\u0418\u042f \u041f\u0420\u0418\u041b\u041e\u0416\u0415\u041d\u0418\u042f:",e),"iOS"===e.platform&&K("iOS")})).catch((function(e){console.log(e)})),l.a.sendPromise("VKWebAppStorageGet",{keys:["dataStorage"]}).then((function(e){var t=e.keys[0].value.replace(/&quot;/gi,'"'),a=JSON.parse(t);S(a)})).catch((function(e){console.log(e)}))}),[]);var oe=function(e){c(e.currentTarget.dataset.to)};return o.a.createElement(u.a,{activePanel:a,popout:D},o.a.createElement(M,{id:"main",fetchedUser:m,dataStorage:j,activeTab:g,tabHome:function(){h("home")},tabFavorites:function(){h("favorites")},targetList1:te,count:E,maxDataLength:x,lastItem:G,pay:function(){l.a.sendPromise("VKWebAppOpenPayForm",{app_id:7254171,action:"pay-to-group",params:{amount:1,group_id:189804850}}).then((function(e){(e.status||e.result.status)&&(q(!0),console.log("\u041e\u041f\u041b\u0410\u0422\u0410 \u041f\u0420\u041e\u0428\u041b\u0410 1"),te(),console.log(e.status))})).catch((function(e){console.log(e)}))},getPlatform:L}),o.a.createElement(V,{id:"home",fetchedUser:m,go:oe}),o.a.createElement(J,{id:"favorites",go:oe}))};l.a.send("VKWebAppInit"),r.a.render(o.a.createElement(D,null),document.getElementById("root"))},71:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.9343d396.chunk.js.map