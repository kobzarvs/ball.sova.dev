(this.webpackJsonplaballatory=this.webpackJsonplaballatory||[]).push([[0],{31:function(e,n,t){e.exports=t(44)},36:function(e,n,t){},37:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(22),l=(t(36),t(29)),o=(t(37),function(e){var n=e.children;return r.createElement(r.Fragment,null,r.createElement("main",null,n),r.createElement("nav",{className:"navigation"},r.createElement("a",{href:"https://effector.now.sh"},"Effector"),r.createElement("a",{href:"https://github.com/sergeysova/ball.sova.dev"},"Source Code")))}),a=t(30),i=t(6),u=t(9),d=t(7),s=t(23),f=t(8),m=t(4),b=t(1),g={easy:5,medium:8,hard:12},v=Object(b.d)({name:"startClicked",sid:"qmnl4o"}),p=Object(b.d)({name:"restartClicked",sid:"-s1fxsy"}),h=Object(b.d)({name:"toMainMenuClicked",sid:"car786"}),j=Object(b.d)({name:"difficultyClicked",sid:"rk1xfx"}),O=Object(b.d)({name:"tubeClicked",sid:"-lca0wz"}),k=O.filterMap((function(e){return e.currentTarget.dataset.position})).map((function(e){return Number.parseInt(e,10)})),y=Object(b.e)("easy",{name:"$difficulty",sid:"uc5i38"}),x=Object(b.e)("start",{name:"$state",sid:"-zdvlhr"}),E=Object(b.e)(0,{name:"$moves",sid:"mvm96p"}),w=Object(b.e)([],{name:"$tubes",sid:"-uimuwj"}),C=Object(b.e)(-1,{name:"$selectedTubeIndex",sid:"g8tcff"}),I=Object(b.b)({"\u0254":[w,C,function(e,n){return e.map((function(e,t){var r=e.balls;return n===t?{balls:r.slice(1),complete:!1,over:r[0]}:{balls:r,complete:N({balls:r})&&r.every(W),over:null}}))}],config:{name:"$tubesWithSelected",sid:"-yipqnq"}}),$=Object(b.b)({"\u0254":[w,C,function(e,n){var t;return null!==(t=e.filter((function(e,t){return n===t}))[0])&&void 0!==t?t:null}],config:{name:"$selectedTube",sid:"-t28f3w"}}).map((function(e){var n;return null!==(n=e?e.balls[0]:null)&&void 0!==n?n:null})),z=Object(b.g)({"\u0254":[{source:w,filter:function(e){var n,t=Object(s.a)(e);try{for(t.s();!(n=t.n()).done;){var r=n.value;if(!F(r)&&!N(r))return!1;if(!r.balls.every(W))return!1}}catch(c){t.e(c)}finally{t.f()}return!0}}],config:{name:"won",sid:"-vvcqy2"}});Object(b.f)({"\u0254":{from:p,to:v},config:{sid:"mw7n37"}});var T=Object(b.j)({"\u0254":[{source:y,clock:v,fn:function(e){return g[e]}}],config:{name:"gameStarted",sid:"9xw87g"}}),A=Object(b.j)({"\u0254":[{source:[w,C,$],clock:k,fn:function(e,n){var t=Object(m.a)(e,3),r=t[0];return{tubes:r,selectedIndex:t[1],selectedBall:t[2],clickedIndex:n,clickedTube:r[n]}}}],config:{name:"tubeSelectedWithTubes",sid:"pvlbzt"}}),M=Object(b.g)({"\u0254":[{source:A,filter:function(e){var n,t=e.selectedIndex,r=e.clickedIndex,c=e.selectedBall,l=e.clickedTube;return null!==c&&(t!==r&&(!N(l)&&(!!F(l)||(n=c,l.balls[0]===n))))}}],config:{name:"ballMoved",sid:"-7lz29n"}}),q=Object(b.g)({"\u0254":[{source:A,filter:function(e){var n=e.selectedBall,t=e.clickedTube;return null===n&&!F(t)}}],config:{name:"ballIsTaken",sid:"-5hq4hn"}}),B=Object(b.g)({"\u0254":[{source:A,filter:function(e){return e.selectedIndex===e.clickedIndex}}],config:{name:"ballPutBack",sid:"-ohdd76"}});function S(e){return e.sort((function(){return Math.random()-.5}))}function F(e){return 0===e.balls.length}function N(e){return 4===e.balls.length}function W(e,n,t){return e===t[0]}y.on(j,(function(e,n){return n})),x.on(T,(function(){return"ingame"})).on(z,(function(){return"won"})).on(h,(function(){return"start"})),w.on(T,(function(e,n){return function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=Array.from({length:e},(function(e,n){return new Array(4).fill(n)})),c=S((n=[]).concat.apply(n,Object(f.a)(r)));return Array.from({length:e},(function(){return Array.from({length:4},(function(){return c.pop()}))})).concat(Array.from({length:t},(function(){return[]}))).map((function(e){return{balls:e}}))}(n)})),E.reset(T).on(M,(function(e){return e+1})),C.on(q,(function(e,n){return n.clickedIndex})).reset(B,M,T),w.on(M,(function(e,n){var t=n.tubes,r=n.clickedIndex,c=n.selectedIndex,l=n.selectedBall;return t.map((function(e,n){return n===c?{balls:e.balls.slice(1)}:n===r?{balls:[l].concat(Object(f.a)(e.balls))}:e}))}));var L=Object(b.d)({name:"undoClicked",sid:"-yvdkmv"}),R=Object(b.d)({name:"redoClicked",sid:"-6nziim"}),H=Object(b.d)({name:"historyWrote",sid:"2eyetb"}),J=Object(b.d)({name:"historyRestored",sid:"94on3n"}),P=Object(b.d)({name:"historyForward",sid:"xmgbay"}),Y=Object(b.e)([],{name:"$history",sid:"-jvo06m"}),D=Object(b.e)(-1,{name:"$currentPosition",sid:"ho5cv6"}),G=D.map((function(e){return e<0?0:e})),K=Object(b.b)({"\u0254":[Y,D,function(e,n){return e.length-1-n}],config:{name:"$redoCount",sid:"-zhp2aa"}});function Q(){var e=Object(i.a)(["\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  border: 2px solid lightgray;\n  background-color: var(--ball-color);\n  margin: 1px;\n  flex-shrink: 0;\n"]);return Q=function(){return e},e}function U(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  flex-shrink: 0;\n  align-items: center;\n  border: 2px solid lightgray;\n  border-top: none;\n  width: 3rem;\n  height: 10rem;\n  padding-bottom: 0.4rem;\n  padding-top: 0.4rem;\n  border-bottom-left-radius: 2.4rem;\n  border-bottom-right-radius: 2.4rem;\n\n  &[data-complete='true'] {\n    background-color: lightgray;\n  }\n"]);return U=function(){return e},e}function V(){var e=Object(i.a)(["\n  display: flex;\n  height: 3rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 4px solid lightgray;\n"]);return V=function(){return e},e}function X(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n"]);return X=function(){return e},e}function Z(){var e=Object(i.a)(["\n  display: flex;\n  flex-flow: column;\n  position: fixed;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(255, 255, 255, 0.6);\n  backdrop-filter: blur(6px);\n  align-items: center;\n  padding-top: 5rem;\n\n  & > * + * {\n    margin-top: 1rem;\n  }\n"]);return Z=function(){return e},e}function _(){var e=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 38rem;\n"]);return _=function(){return e},e}function ee(){var e=Object(i.a)(["\n  color: black;\n  padding: 0.6rem 0.4rem;\n  font-size: 1.3rem;\n  margin: 0;\n"]);return ee=function(){return e},e}function ne(){var e=Object(i.a)(["\n  background-color: white;\n  color: black;\n  padding: 0.6rem 1rem;\n  font-size: 1.3rem;\n  margin: 0 0.2rem;\n  border: 2px solid lightgray;\n  cursor: pointer;\n  position: relative;\n\n  &:hover {\n    background-color: #f1f1f1;\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 4px lightblue;\n    border-color: lightblue;\n  }\n\n  &[data-selected='true'] {\n    border-color: gray;\n    background-color: gray;\n    color: white;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(i.a)(["\n  font-size: 3rem;\n  font-weight: 300;\n\n  & span {\n    text-decoration: underline;\n  }\n"]);return te=function(){return e},e}function re(){var e=Object(i.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n"]);return re=function(){return e},e}Object(b.j)({"\u0254":[{source:w,clock:T,target:H}],config:{sid:"b92sow"}}),Object(b.j)({"\u0254":[{source:w,clock:M,target:H}],config:{sid:"b9mla9"}}),Y.reset(T),D.reset(T).on(H,(function(e){return e+1})).on(P,(function(e,n){return Object(m.a)(n,1)[0]})).on(L,(function(e){return e<=1?0:e-1})),Object(b.j)({"\u0254":[{source:[Y,D],clock:H,fn:function(e,n){var t=Object(m.a)(e,2),r=t[0],c=t[1];return r.slice(0,c).concat([n])},target:Y}],config:{sid:"bqo7og"}}),Object(b.j)({"\u0254":[{source:[Y,D],clock:R,fn:function(e){var n=Object(m.a)(e,2),t=n[0],r=n[1]+1;return t[r]?[r,t[r]]:[t.length-1,t[t.length-1]]},target:P}],config:{sid:"c6m8vx"}}),Object(b.j)({"\u0254":[{source:[Y,D],clock:L,fn:function(e){var n=Object(m.a)(e,2);return n[0][n[1]]},target:J}],config:{sid:"cpb927"}}),w.on(J,(function(e,n){return n})).on(P,(function(e,n){return Object(m.a)(n,2)[1]}));var ce=x.map((function(e){return"won"===e})),le=function(){var e=Object(u.b)(y);return r.createElement(oe,null,r.createElement(ae,null,"LA",r.createElement("span",null,"BALL"),"ATORY"),r.createElement("fieldset",null,r.createElement("legend",null,"Difficulty"),r.createElement(ie,{selected:"easy"===e,onClick:function(){return j("easy")},text:"Easy"}),r.createElement(ie,{selected:"medium"===e,onClick:function(){return j("medium")},text:"Medium"}),r.createElement(ie,{selected:"hard"===e,onClick:function(){return j("hard")},text:"Hard"})),r.createElement("br",null),r.createElement(ie,{onClick:v,text:"Start game"}))},oe=d.a.div(re()),ae=d.a.h2(te()),ie=d.a.button.attrs((function(e){var n=e.selected;return{"data-selected":null!==n&&void 0!==n&&n,type:"button",children:e.text}}))(ne()),ue=function(){var e=Object(u.b)(ce),n=Object(u.a)(I,(function(e,n){return r.createElement(ve,{tube:e,position:n,onClick:O})}));return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement(ie,{onClick:h,text:"\u2190"}),r.createElement(ie,{onClick:p,text:"Restart"}),r.createElement(me,null),r.createElement(se,null),r.createElement(fe,null)),r.createElement(be,null,n),e&&r.createElement(de,null))},de=function(){var e=Object(u.b)(E);return r.createElement(ge,null,r.createElement("h2",null,"You won!"),r.createElement(ie,{onClick:p,text:"New game"}),r.createElement(ie,{onClick:h,text:"Menu"}),r.createElement("h3",null,"In ",e," moves"))},se=function(){var e=Object(u.b)(G);return r.createElement(ie,{onClick:L,text:r.createElement(r.Fragment,null,"\u21a9",r.createElement("sup",null,e))})},fe=function(){var e=Object(u.b)(K);return r.createElement(ie,{onClick:R,text:r.createElement(r.Fragment,null,r.createElement("sup",null,e),"\u21aa")})},me=Object(d.a)((function(e){var n=e.className,t=Object(u.b)(E);return r.createElement("span",{className:n},"Moves: ",t)}))(ee()),be=d.a.div(_()),ge=d.a.div(Z()),ve=function(e){var n=e.tube,t=e.position,c=e.onClick;return r.createElement(pe,{onClick:c,"data-position":t},r.createElement(he,null,null!==n.over?r.createElement(ke,{ball:n.over}):null),r.createElement(je,{complete:n.complete},n.balls.map((function(e,n){return r.createElement(ke,{key:n,ball:e})}))))},pe=d.a.div(X()),he=d.a.div(V()),je=d.a.div.attrs((function(e){return{"data-complete":e.complete}}))(U()),Oe=["blue","red","yellow","lime","purple","orange","pink","brown","lightblue","gray","cyan","darkgreen"],ke=d.a.div.attrs((function(e){var n=e.ball;return{style:{"--ball-color":Oe[n]}}}))(Q()),ye=[{path:"/",exact:!0,component:function(){return"start"===Object(u.b)(x)?r.createElement(le,null):r.createElement(ue,null)}},{path:"*",component:function(){return r.createElement("div",null,"Here not found")}}],xe=function(){return Object(a.a)(ye)},Ee=function(){return r.createElement(l.a,null,r.createElement(o,null,r.createElement(xe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.render(r.createElement(Ee,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.5e0edc73.chunk.js.map