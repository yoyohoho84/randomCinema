(this.webpackJsonprandomCinema=this.webpackJsonprandomCinema||[]).push([[0],{104:function(e,t,a){},212:function(e,t,a){e.exports=a(482)},482:function(e,t,a){"use strict";a.r(t);a(213),a(239),a(241),a(242),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(281);var n=a(0),c=a.n(n),o=a(123),r=a.n(o),l=a(17),s=a.n(l),i=a(126),m=a(39),u=a.n(m),d=a(14),p=a(125),g=a.n(p),b=(a(290),a(86)),f=a.n(b),h=a(69),E=a.n(h),v=a(70),y=a.n(v),O=a(90),j=a.n(O),S=a(15),k=a.n(S),C=a(203),N=a.n(C),F=a(204),x=a.n(F),I=a(89),w=a.n(I),A=a(205),P=a.n(A),K=a(208),V=a.n(K),W=a(67),_=a.n(W),B=a(68),G=a.n(B),T=a(124),U=a.n(T),D=(a(104),a(85)),J=a.n(D),z=function(e){var t=e.name,a=e.photo,n=e.year,o=e.idItem;return c.a.createElement(J.a,{top:!0},c.a.createElement(k.a,{className:"cardHome bg-color"},c.a.createElement(_.a,{className:"myItem",id:o,description:n,before:c.a.createElement(G.a,{type:"image",src:a,size:100})},t)))},L=(a(311),function(e){var t=e.name,a=e.photo,n=e.year,o=e.idItem,r=e.storyFavorites,l=(e.share,c.a.createElement(k.a,{id:o,onClick:r},c.a.createElement(U.a,{fill:"var(--accent)"})));return c.a.createElement(J.a,{top:!0},c.a.createElement(k.a,{className:"card bg-color"},c.a.createElement(_.a,{className:"myItem",id:o,description:n,before:c.a.createElement(G.a,{type:"image",src:a,size:100}),asideContent:l},t)))}),Y=(a(312),a(88)),H=a.n(Y),q=a(206),M=a.n(q),Q=a(207),Z=a.n(Q),R=a(87),X=a.n(R),$=function(e){var t=e.id,a=e.dataStorage,n=(e.go,e.activeTab),o=e.tabHome,r=e.tabFavorites,l=(e.count,e.maxDataLength),s=e.lastItem,i=(e.pay,e.getPlatform),m=e.story,u=e.addGroup,d=(e.targetList1,e.storyFavorites),p=e.onChangeSlider,g=e.year,b=e.checkBoxOnClick,h=(e.isAnyYear,e.genre,e.handleChange),v=e.searchError,O=e.tabAddFilms,S=(e.ref_sourceName,e.refName,e.updateTheme,e.share,e.networkStatus),C=e.updateConnection,F=e.fetchedUser,I=e.openBase,A=(a=a.filter(Boolean)).map((function(e){var t="".concat(e.year,", IMDb ").concat(e.rating);return c.a.createElement(L,{key:"itemFavorites"+e.id,idItem:e.id,photo:e.photo,name:e.name,year:t,storyFavorites:d})}));return c.a.createElement(f.a,{id:t},c.a.createElement(E.a,{noShadow:!0},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u043a\u0438\u043d\u043e"),c.a.createElement(N.a,{vertical:"top"},c.a.createElement(x.a,{className:"TabsDefaultUser"},c.a.createElement(w.a,{onClick:o,selected:"home"===n,className:"tabUser"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),c.a.createElement(w.a,{onClick:r,selected:"favorites"===n,className:"tabUser"},"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),c.a.createElement(w.a,{onClick:O,selected:"addFilms"===n,className:"tabUser"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))),S?c.a.createElement(k.a,{className:"divSpinner"},c.a.createElement(k.a,{className:"navigatorDiv"},"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 - \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435!"),c.a.createElement(X.a,{className:"navigator",onClick:C,align:"center"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c")):c.a.createElement(c.a.Fragment,null,"home"===n&&!1===l?c.a.createElement(c.a.Fragment,null,"ios"===i?c.a.createElement(k.a,{className:"GroupIos"},"\u0414\u0430\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 iOS"):c.a.createElement(c.a.Fragment,null,c.a.createElement(k.a,null,""!==s.length?c.a.createElement(z,{key:"itemHome"+s.id,idItem:s.id,photo:s.photo,name:s.name,year:s.year}):"",c.a.createElement(k.a,{className:"SliderDiv"},c.a.createElement(H.a,null,c.a.createElement(P.a,{step:1,min:2e3,max:2019,value:Number(g),onChange:p,top:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0434",bottom:"".concat(g)})),c.a.createElement(M.a,{onClick:b},"\u041b\u044e\u0431\u043e\u0439")),c.a.createElement(j.a,{title:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0436\u0430\u043d\u0440"}),c.a.createElement(Z.a,{onChange:h},c.a.createElement("option",{value:"\u041b\u044e\u0431\u043e\u0439"},"\u041b\u044e\u0431\u043e\u0439"),c.a.createElement("option",{value:"\u0431\u043e\u0435\u0432\u0438\u043a"},"\u0431\u043e\u0435\u0432\u0438\u043a"),c.a.createElement("option",{value:"\u0438\u0441\u0442\u043e\u0440\u0438\u044f"},"\u0438\u0441\u0442\u043e\u0440\u0438\u044f"),c.a.createElement("option",{value:"\u0434\u0440\u0430\u043c\u0430"},"\u0434\u0440\u0430\u043c\u0430"),c.a.createElement("option",{value:"\u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"},"\u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"),c.a.createElement("option",{value:"\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043b"},"\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043b"),c.a.createElement("option",{value:"\u043c\u0435\u043b\u043e\u0434\u0440\u0430\u043c\u0430"},"\u043c\u0435\u043b\u043e\u0434\u0440\u0430\u043c\u0430")),v?c.a.createElement(j.a,null,c.a.createElement(X.a,{level:"danger"},"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0432\u0441\u0435 \u0444\u0438\u043b\u044c\u043c\u044b \u0441 \u0442\u0435\u043a\u0443\u0449\u0438\u043c\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u0430")):"",c.a.createElement(j.a,{title:"\u041d\u0430\u0439\u0442\u0438 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u0444\u0438\u043b\u044c\u043c \u0437\u0430 1 \u0440\u0443\u0431"}),c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{level:"commerce",onClick:I,size:"xl",stretched:!0},"\u041d\u0430\u0439\u0442\u0438"),c.a.createElement(y.a,{className:"buttonAddGroup",level:"secondary",onClick:u,size:"xl",stretched:!0},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0430\u0448\u0443 \u0433\u0440\u0443\u043f\u043f\u0443"),c.a.createElement(y.a,{className:"buttonStory",level:"primary",onClick:m,size:"xl",stretched:!0},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"))))):c.a.createElement(k.a,null,"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0432\u0441\u0435 \u0444\u0438\u043b\u044c\u043c\u044b !"),"home"===n&&!0===l?c.a.createElement(k.a,null,"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0432\u0441\u0435 \u0444\u0438\u043b\u044c\u043c\u044b !"):"","favorites"===n?c.a.createElement(c.a.Fragment,null,c.a.createElement(k.a,null,A)):"",c.a.createElement(c.a.Fragment,null,"addFilms"===n?c.a.createElement(k.a,null,c.a.createElement(k.a,null,c.a.createElement(V.a,{href:"https://vk.me/public190534237?ref=".concat(F.id,"&ref_source=").concat(F.id),target:"_blank"},c.a.createElement(y.a,{level:"commerce",size:"xl",stretched:!0},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))):"")))},ee=(a(210),a(209),a(211)),te=a.n(ee),ae=a(91),ne=a.n(ae),ce=(a(324),a(328),!0);var oe=function(e){return(ce?"http://localhost:8181/":"https://random-cinema.tk/api/")+e},re=a(127),le=a.n(re),se=function(){var e,t=Object(n.useState)("main"),a=Object(d.a)(t,2),o=a[0],r=a[1],l=Object(n.useState)(null),m=Object(d.a)(l,2),p=m[0],b=m[1],f=Object(n.useState)("home"),h=Object(d.a)(f,2),E=h[0],v=h[1],y=Object(n.useState)(0),O=Object(d.a)(y,2),j=O[0],S=(O[1],Object(n.useState)([])),k=Object(d.a)(S,2),C=k[0],N=k[1],F=Object(n.useState)(!1),x=Object(d.a)(F,2),I=x[0],w=(x[1],Object(n.useState)([])),A=Object(d.a)(w,2),P=(A[0],A[1],Object(n.useState)("")),K=Object(d.a)(P,2),V=K[0],W=K[1],_=Object(n.useState)(),B=Object(d.a)(_,2),G=B[0],T=B[1],U=Object(n.useState)("online"),D=Object(d.a)(U,2),J=(D[0],D[1],Object(n.useState)(!1)),Y=Object(d.a)(J,2),H=(Y[0],Y[1]),q=Object(n.useState)(2e3),M=Object(d.a)(q,2),Q=M[0],Z=M[1],R=Object(n.useState)(!0),X=Object(d.a)(R,2),ee=X[0],ae=X[1],ce=Object(n.useState)(!1),re=Object(d.a)(ce,2),se=(re[0],re[1],Object(n.useState)("\u041b\u044e\u0431\u043e\u0439")),ie=Object(d.a)(se,2),me=ie[0],ue=ie[1],de=Object(n.useState)(!1),pe=Object(d.a)(de,2),ge=pe[0],be=pe[1],fe=Object(n.useState)(),he=Object(d.a)(fe,2),Ee=he[0],ve=(he[1],Object(n.useState)("\u0416\u0430\u043d\u0440")),ye=Object(d.a)(ve,2),Oe=ye[0],je=(ye[1],Object(n.useState)([])),Se=Object(d.a)(je,2),ke=(Se[0],Se[1],Object(n.useState)(!1)),Ce=Object(d.a)(ke,2),Ne=Ce[0],Fe=Ce[1],xe=Object(n.useState)({id:0,photo:"https://sun9-60.userapi.com/c855424/v855424816/1b98c7/NOZvWdKJbOY.jpg",name:"\u0416\u043c\u0438  - \u043d\u0430\u0439\u0442\u0438!"}),Ie=Object(d.a)(xe,2),we=Ie[0],Ae=Ie[1],Pe=window.navigator.onLine;function Ke(){var e,t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=JSON.stringify(C.filter(Boolean).map((function(e){return e.id}))),a.next=3,u.a.awrap(le.a.get(oe("getFilmByFilters?genre=".concat(me,"&year=").concat(Q,"&isAnyYear=").concat(!ee,"&currentFilmsIDs=").concat(e))));case 3:"success"!==(t=a.sent.data).status?be(!0):(We(t.message),be(!1));case 5:case"end":return a.stop()}}))}function Ve(){console.log("\u0412\u044b\u0437\u0432\u0430\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f pay"),s.a.sendPromise("VKWebAppOpenPayForm",{app_id:7254171,action:"pay-to-group",params:{amount:1,group_id:190534237}}).then((function(e){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.status&&!e.result.status){t.next=10;break}return t.prev=1,t.next=4,u.a.awrap(le.a.get(oe("checkTransaction?userId=".concat(p.id))));case 4:"success"===t.sent.data.status&&(H(!0),console.log("\u041e\u041f\u041b\u0410\u0422\u0410 \u041f\u0420\u041e\u0428\u041b\u0410 1"),Ke()),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),null,null,[[1,8]])})).catch((function(e){console.log(e)}))}function We(e){C.push(e),N(C);var t=C[C.length-1];Ae(t);var a=JSON.stringify(C);s.a.sendPromise("VKWebAppStorageSet",{key:"dataStorage",value:a}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}Object(n.useEffect)((function(){Pe?(Fe(!1),console.log("checkNetworkStatus",Pe)):(Fe(!0),console.log("checkNetworkStatus",Pe))})),Object(n.useEffect)((function(){s.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(s.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,b(e);case 4:case"end":return t.stop()}}))}()}),[]),Object(n.useEffect)((function(){s.a.sendPromise("VKWebAppGetClientVersion").then((function(e){console.log("\u0412\u0415\u0420\u0421\u0418\u042f \u041f\u0420\u0418\u041b\u041e\u0416\u0415\u041d\u0418\u042f:",e),"ios"===e.platform&&W("ios")})).catch((function(e){console.log(e)})),s.a.sendPromise("VKWebAppStorageGet",{keys:["dataStorage"]}).then((function(e){var t=e.keys[0].value.replace(/&quot;/gi,'"'),a=JSON.parse(t);N(a),console.log("dataStorage",a)})).catch((function(e){console.log(e)}))}),[]);var _e=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(g.a,{activePanel:o,popout:G},c.a.createElement($,(e={id:"main",dataStorage:C,activeTab:E,tabHome:function(){v("home")},tabFavorites:function(){v("favorites")},targetList1:Ke,count:j,maxDataLength:I,lastItem:we,fetchedUser:p,refName:Ee,ref_sourceName:Oe,tabAddFilms:function(){v("addFilms")},searchError:ge,handleChange:function(e){ue(e.target.value),console.log("setGenre :",me)},genre:me,year:Q,onChangeSlider:function(e){Z(e),console.log("setYear :",e)},storyFavorites:function(e){console.log("storyFavorites:"),e.preventDefault();var t=+e.currentTarget.id,a=C.find((function(e){return e.id===t})),n=a.photo;console.log("targetId:",t),console.log("findTargetId:",a),console.log("findTargetIdPhoto:",n),s.a.sendPromise("VKWebAppShowStoryBox",{background_type:"image",url:n,attachment:{text:"go_to",type:"url",url:"https://vk.com/app7254171"}}).then((function(e){console.log("story res:",e)})).catch((function(e){console.log("story error:",e)}))},addGroup:function(){s.a.send("VKWebAppJoinGroup",{group_id:190534237})},isAnyYear:ee,checkBoxOnClick:function(){ae(!ee),console.log("isAnyYear:",ee)},story:function(){s.a.sendPromise("VKWebAppShowStoryBox",{background_type:"image",url:we.photo,attachment:{text:"go_to",type:"url",url:"https://vk.com/app7254171"}}).then((function(e){console.log("story res:",e)})).catch((function(e){console.log("story error:",e)}))},getPlatform:V,pay:Ve,networkStatus:Ne,updateConnection:function(){var e=window.navigator.onLine;Fe(!e)}},Object(i.a)(e,"fetchedUser",p),Object(i.a)(e,"openBase",(function(){T(c.a.createElement(c.a.Fragment,null,c.a.createElement(te.a,{onClose:function(){return T(null)}},c.a.createElement(ne.a,{autoclose:!0,onClick:document.qiwiPay},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 QIWI"),c.a.createElement(ne.a,{autoclose:!0,onClick:Ve},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 VK Pay"),c.a.createElement(ne.a,{autoclose:!0,mode:"cancel"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"))))})),e)),c.a.createElement(z,{id:"home",go:_e}),c.a.createElement(L,{id:"favorites",go:_e}))};s.a.send("VKWebAppInit"),r.a.render(c.a.createElement(se,null),document.getElementById("root"))}},[[212,1,2]]]);
//# sourceMappingURL=main.28e7daaa.chunk.js.map