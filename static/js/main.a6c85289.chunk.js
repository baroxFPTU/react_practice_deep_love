(this.webpackJsonpdeep_love=this.webpackJsonpdeep_love||[]).push([[0],{11:function(e,t,n){e.exports={countdown:"Countdown_countdown__1J0O9"}},12:function(e,t,n){e.exports={modalQuestion:"ModalQuestion_modalQuestion__2Ii9a",appear1:"ModalQuestion_appear1__dq7Um",appear2:"ModalQuestion_appear2__3DyC-"}},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"restart",(function(){return v})),n.d(a,"showQuestion",(function(){return _})),n.d(a,"isReady",(function(){return m})),n.d(a,"updateQuestions",(function(){return x}));var r=n(1),c=n.n(r),s=n(9),i=n.n(s),o=(n(19),n(8)),u=n.n(o),l=n(10),d=n(3),j=(n(21),n.p+"static/media/thumbs-up.d53868eb.svg"),p="https://deep-love-app-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json",b={isReady:0,isStart:!1,playerTurn:null,isShowQuestion:!1,listQuestions:[]},f="RESTART",O="SHOW_QUESTION",y="READY",h="UPDATE_QUESTIONS",v=function(){return{type:f}},_=function(e){return{type:O,playerTurn:e}},m=function(){return{type:y}},x=function(e){return{type:h,newQuestions:e}},Q=n(13),w=n(2);var S=function(e,t){switch(t.type){case f:return Object(w.a)(Object(w.a)({},e),{},{isShowQuestion:!1,playerTurn:null});case O:return Object(w.a)(Object(w.a)({},e),{},{isReady:0,isStart:!1,isShowQuestion:!0,playerTurn:t.playerTurn});case y:return e.isReady<1?Object(w.a)(Object(w.a)({},e),{},{isReady:e.isReady+=1}):Object(w.a)(Object(w.a)({},e),{},{isShowQuestion:!1,isStart:!0});case h:return Object(w.a)(Object(w.a)({},e),{},{listQuestions:Object(Q.a)(t.newQuestions)});default:throw new Error("Invalid action")}};var R=function(e,t){var n=Object(r.useState)(e),a=Object(d.a)(n,2),c=a[0],s=a[1];return Object(r.useEffect)((function(){var e=c>0?setInterval((function(){s(c-1)}),1e3):t();return function(){return clearInterval(e)}}),[c]),[c]};var T=n(14),k=n(0),I=["children","once","onClick"];var N=function(e){var t=e.children,n=e.once,a=e.onClick,c=Object(T.a)(e,I),s=Object(r.useState)(0),i=Object(d.a)(s,2),o=i[0],u=i[1];return Object(k.jsx)("button",Object(w.a)(Object(w.a)({},c),{},{onClick:function(){n&&u(o+1),a()},disabled:o>=1,children:t}))},P=n(11),g=n.n(P);var C=function(e){var t=e.amount,n=e.fallback,a=e.playerId,r=R(t,n),c=Object(d.a)(r,1)[0];return Object(k.jsx)("div",{className:g.a.countdown,"data-player-id":a,children:c})},A=n(4),E=n.n(A);var M=function(e){var t=e.playerId,n=e.isStart,r=e.answerTurn,c=e.dispatch,s=r===t,i=null;return i=r?Object(k.jsx)(k.Fragment,{children:s?Object(k.jsxs)(k.Fragment,{children:[" ",Object(k.jsx)(C,{amount:30,fallback:function(){console.log("im finish")}})]}):Object(k.jsx)("button",{className:E.a.acceptButton,onClick:function(){c(a.restart())},children:"Accept"})}):Object(k.jsxs)(k.Fragment,{children:[n?Object(k.jsx)(C,{amount:3,fallback:function(){var e=Math.floor(2*Math.random()+1)+"";console.log("random playerid ",e),c(a.showQuestion(e))}}):Object(k.jsxs)("div",{className:E.a.readyCaption,children:[Object(k.jsx)("div",{className:E.a.icon,children:Object(k.jsx)("img",{src:j,alt:"icon"})}),"Ready to play"]}),Object(k.jsx)(N,{className:E.a.buttonReady,"data-player-id":t,onClick:function(){c(a.isReady())},once:!0,children:"Start"})]}),Object(k.jsx)("div",{className:E.a.areaPlayer,"data-player-id":t,children:i})},U=n(12),q=n.n(U);function B(e){var t=e.questions,n=e.onUpdateQuestions,a=e.playerTurn,c=Object(r.useState)(null),s=Object(d.a)(c,2),i=s[0],o=s[1];return Object(r.useEffect)((function(){var e=function(e){var t=e[Math.floor(Math.random()*(e.length-1)+1)],n=e.filter((function(e){return e.id!==t.id}));return[t,n]}(t),a=Object(d.a)(e,2),r=a[0],c=a[1];return o(r),n(c),function(){o(null)}}),[]),Object(k.jsxs)("div",{className:q.a.modalQuestion,"data-player-turn":a,children:[Object(k.jsx)("div",{className:"icon"}),i?Object(k.jsxs)("h3",{children:["C\xe2u h\u1ecfi: ",i.content]}):"\u0110\xe3 h\u1ebft c\xe2u h\u1ecfi"]})}B.defaultProps={question:null};var D=B;var F=function(){var e=Object(r.useReducer)(S,b),t=Object(d.a)(e,2),n=t[0],c=t[1],s=n.isStart,i=n.isShowQuestion,o=n.listQuestions,j=n.playerTurn;return Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(a.updateQuestions(n));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}try{!function(){e.apply(this,arguments)}()}catch(t){console.log(t)}}),[]),Object(k.jsxs)("div",{className:"deepLove",children:[Object(k.jsx)(M,{playerId:"1",isStart:s,answerTurn:j,dispatch:c}),Object(k.jsx)(M,{playerId:"2",isStart:s,answerTurn:j,dispatch:c}),i&&Object(k.jsx)(D,{questions:o,onUpdateQuestions:function(e){c(a.updateQuestions(e))},playerTurn:j})]})};i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(F,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={areaPlayer:"AreaPlayer_areaPlayer__2PkIO",buttonReady:"AreaPlayer_buttonReady__212Um",clicked:"AreaPlayer_clicked__iOSNV",acceptButton:"AreaPlayer_acceptButton__RsgeG",icon:"AreaPlayer_icon__1rHtt",readyCaption:"AreaPlayer_readyCaption__3X0M1"}}},[[23,1,2]]]);
//# sourceMappingURL=main.a6c85289.chunk.js.map