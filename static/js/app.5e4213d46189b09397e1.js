webpackJsonp([0],{EEK1:function(t,e,i){t.exports=i.p+"./static/media/sounds_3.c1c96b4.mp3"},"Ha+0":function(t,e,i){t.exports=i.p+"./static/media/sounds_4.36d5a72.mp3"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n=i("lnew"),r=i("n7pR"),a=i("EEK1"),o=i("Ha+0"),c={name:"simonTheGame",data:function(){return{rhythm:[],"cheсkUserArray":[],difficult:1500,roundNumber:0,victory:0,soundGreen:n,soundRed:r,soundOrange:a,soundBlue:o,activeGame:!1,activeShowRhythm:!1,userLooser:!1}},methods:{playAudio:function(t){var e="1"===t?this.soundGreen:"2"===t?this.soundRed:"3"===t?this.soundOrange:this.soundBlue;new Audio(e).play()},setRhythm:function(){this.rhythm.push(Math.floor(4*Math.random())+1+""),this.cheсkUserArray=this.rhythm.slice()},showRhythm:function(){var t=this,e=Number(this.difficult),i=0;this.rhythm.forEach(function(s,n){setTimeout(function(){t.playAudio(s);var n=document.getElementById(s);n.style.opacity=1,setTimeout(function(){n.style.opacity=.6,++i===t.rhythm.length&&(t.activeShowRhythm=!1)},e/2)},e*n)})},startRound:function(){var t=this;0===this.roundNumber&&(this.victory=0),this.userLooser=!1,this.activeGame=!0,this.roundNumber=this.victory+1,this.activeShowRhythm=!0,this.setRhythm(),setTimeout(function(){t.showRhythm()},2e3)},checkUser:function(t){this.playAudio(t);var e=this.cheсkUserArray;this.activeGame&&(t!==e[0]?(this.userLooser=!0,this.reset()):(e.shift(),0===e.length&&(this.victory++,this.startRound())))},reset:function(){this.rhythm=[],this.roundNumber=0,this.activeGame=!1}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Simon The Game")]),t._v(" "),i("div",{staticClass:"panel game-panel",class:{disabled:t.activeShowRhythm}},[i("div",{staticClass:"square green-square",attrs:{id:"1"},on:{click:function(e){return t.checkUser(e.target.id)}}}),t._v(" "),i("div",{staticClass:"square red-square",attrs:{id:"2"},on:{click:function(e){return t.checkUser(e.target.id)}}}),t._v(" "),i("div",{staticClass:"square orange-square",attrs:{id:"3"},on:{click:function(e){return t.checkUser(e.target.id)}}}),t._v(" "),i("div",{staticClass:"square blue-square",attrs:{id:"4"},on:{click:function(e){return t.checkUser(e.target.id)}}})]),t._v(" "),i("div",{staticClass:"panel control-panel"},[i("div",[t.userLooser?t._e():i("h2",[t._v("Текущий раунд: "+t._s(t.roundNumber))]),t._v(" "),t.userLooser?i("h2",[t._v("Вы проиграли!"),i("br"),t._v("Серия побед: "+t._s(t.victory))]):t._e()]),t._v(" "),i("div",[i("h3",[t._v("Уровень сложности:")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.difficult,expression:"difficult"}],attrs:{disabled:t.activeGame},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.difficult=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"1500"}},[t._v("Легкий")]),t._v(" "),i("option",{attrs:{value:"1000"}},[t._v("Средний")]),t._v(" "),i("option",{attrs:{value:"400"}},[t._v("Сложный")])])]),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("div",[i("button",{attrs:{disabled:t.activeGame},on:{click:function(e){return t.startRound()}}},[t._v("Начать!")])])])])},staticRenderFns:[]},h=i("VU/8")(c,u,!1,null,null,null).exports,d=(i("tN0j"),{name:"App",components:{simonTheGame:h}}),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("simonTheGame")],1)},staticRenderFns:[]};var v=i("VU/8")(d,l,!1,function(t){i("XLXL")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:v},template:"<App/>"}),s.a.config.devtools=!0},XLXL:function(t,e){},lnew:function(t,e,i){t.exports=i.p+"./static/media/sounds_1.99e50f7.mp3"},n7pR:function(t,e,i){t.exports=i.p+"./static/media/sounds_2.d2c4a2c.mp3"},tN0j:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5e4213d46189b09397e1.js.map
