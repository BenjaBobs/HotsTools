(this.webpackJsonphotstools=this.webpackJsonphotstools||[]).push([[0],{115:function(e,t,a){e.exports=a(212)},120:function(e,t,a){},212:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),l=(a(120),a(219)),s=a(218),u=a(220),i=a(217),h=a(45),m=a.n(h),p=a(35),f=a(8),d=a(112),b=a(43),g=a(9),y=a(40),v=a.n(y),j=a(60),k=Object(f.atom)({key:"s_HeroNames",default:["abathur","alarak","alexstrasza","ana","anduin","anubarak","artanis","arthas","auriel","azmodan","blaze","brightwing","thebutcher","cassia","chen","chogall","chromie","deathwing","deckard","dehaka","diablo","dva","etc","falstad","fenix","gall","garrosh","gazlowe","genji","greymane","guldan","hanzo","illidan","imperius","jaina","johanna","junkrat","kaelthas","kelthuzad","kerrigan","kharazim","leoric","lili","liming","lostvikings","ltmorales","lucio","lunara","maiev","malfurion","malganis","malthael","medivh","mei","mephisto","muradin","murky","nazeebo","nova","orphea","probius","qhira","ragnaros","raynor","rehgar","rexxar","samuro","sgthammer","sonya","stitches","stukov","sylvanas","tassadar","thrall","tracer","tychus","tyrael","tyrande","uther","valeera","valla","varian","whitemane","xul","yrel","zagara","zarya","zeratul","zuljin"]}),O=Object(f.selector)({key:"s_Heroes",get:function(){var e=Object(j.a)(v.a.mark((function e(t){var a,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.get,n=a(k),e.next=4,Promise.all(n.map((function(e){return fetch("https://heroespatchnotes.github.io/heroes-talents/hero/".concat(e,".json")).then(function(){var e=Object(j.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})));case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),E=Object(f.selectorFamily)({key:"s_Hero",get:function(e){return function(t){return(0,t.get)(O).find((function(t){return t.shortName===e}))}}});function w(){var e=Object(f.useRecoilValue)(O);return r.a.createElement(s.a,{justify:"space-between"},e.map((function(e){return r.a.createElement(p.a,{key:e.shortName,to:function(t){return"".concat(t.pathname,"/heroes/").concat(e.shortName)}},r.a.createElement("img",{alt:e.shortName,src:(t=e.icon,"https://heroespatchnotes.github.io/heroes-talents/images/heroes/"+t)}));var t})))}function x(e){var t=Object(f.useRecoilValue)(E(e.hero));return r.a.createElement("pre",{style:{wordWrap:"break-word",whiteSpace:"pre-wrap"}},JSON.stringify(t,null,"  "))}var _={name:"Overview",path:"",component:r.a.createElement(w,null),nestedApps:[{name:"Hero details",path:"heroes/:hero",component:r.a.createElement(x,null)}]},z=a(111),A=a(17),N=Object(A.a)();function P(){var e=Object(f.useSetRecoilState)(R);return Object(n.useEffect)((function(){return N.listen((function(t,a){e(t)}))}),[e]),r.a.createElement(r.a.Fragment,null)}Object(f.atom)({key:"historyState",default:N});var R=Object(f.atom)({key:"location",default:N.location}),S=Object(f.selector)({key:"urlPath",get:function(e){return(0,e.get)(R).pathname}}),H=(Object(f.selector)({key:"queryParams",get:function(e){var t,a=(0,e.get)(R).search.slice(1).split("&"),n={},r=Object(b.a)(a);try{for(r.s();!(t=r.n()).done;){var o=t.value.split("="),c=Object(z.a)(o,2),l=c[0],s=c[1],u=n[l];u?Array.isArray(u)?u.push(s):(u=[u,s],n[l]=u):n[l]=s}}catch(i){r.e(i)}finally{r.f()}return n}}),Object(f.atom)({key:"raw_apps",default:[_]})),V=Object(f.selector)({key:"apps",get:function(e){return function e(t,a){var n,r=Object(b.a)(t);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.absolutePath=a?a.absolutePath+"/"+o.path:"/HotsTools"+o.path,o.nestedApps&&e(o.nestedApps,o)}}catch(c){r.e(c)}finally{r.f()}return t}((0,e.get)(H))}}),L=Object(f.selector)({key:"appsFlat",get:function(e){return(0,e.get)(V).flatMap((function e(t){var a;return[t].concat(Object(d.a)((null===t||void 0===t||null===(a=t.nestedApps)||void 0===a?void 0:a.flatMap(e))||[]))}))}}),M=Object(f.selector)({key:"appMatch",get:function(e){var t,a=e.get,n=a(S),r=a(L),o=Object(b.a)(r);try{for(o.s();!(t=o.n()).done;){var c=t.value,l=Object(g.c)(n,{path:c.absolutePath,exact:!0,strict:!1});if(l)return{match:l,app:c}}}catch(s){o.e(s)}finally{o.f()}return{match:null,app:null}}}),F=Object(f.selector)({key:"currentApp",get:function(e){var t=(0,e.get)(M);return null===t||void 0===t?void 0:t.app}}),J=Object(f.selector)({key:"currentAppParams",get:function(e){var t,a=(0,e.get)(M);return null===a||void 0===a||null===(t=a.match)||void 0===t?void 0:t.params}}),T=a(216),W=a(59),q=a.n(W),B=l.a.Header,Z=l.a.Content;function C(){var e=Object(f.useRecoilValue)(V),t=Object(f.useRecoilValue)(F),a=Object(f.useRecoilValue)(J);return r.a.createElement(l.a,{className:m.a.layout},r.a.createElement(B,{className:m.a.header},r.a.createElement(s.a,{align:"middle",justify:"space-around",className:m.a.header},e.map((function(e){return r.a.createElement(p.a,{key:e.absolutePath,to:e.absolutePath},e.name)})))),r.a.createElement(Z,{className:m.a.content},r.a.createElement(s.a,{justify:"center"},r.a.createElement(u.a,{style:{color:"white"},flex:"1"},t?r.a.createElement(q.a,{message:r.a.createElement(i.a,{status:"500",title:"Error",subTitle:"Sorry, something tralala went wrong."})},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(i.a,{title:"Loading...",icon:r.a.createElement(T.a,null)})},r.a.cloneElement(null===t||void 0===t?void 0:t.component,a))):r.a.createElement(i.a,{status:"404",title:"Not found",subTitle:"Sorry, the page you visited does not exist."})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.RecoilRoot,null,r.a.createElement(P,null),r.a.createElement(g.a,{history:N},r.a.createElement(C,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,a){e.exports={layout:"App_layout__1LipR",header:"App_header__3ZZ1n",content:"App_content__3La4L"}}},[[115,1,2]]]);
//# sourceMappingURL=main.949f6563.chunk.js.map