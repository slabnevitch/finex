(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7033f81a"],{3575:function(s,t,a){},"3f37":function(s,t,a){"use strict";a.r(t);var i=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("main",{staticClass:"block-light wrap-messenger"},[a("div",{staticClass:"container"},[s._m(0),a("div",{staticClass:"row wrap-messenger__main"},[a("div",{staticClass:"col-12"},[a("MessengerComponent")],1)])])])},e=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h2",[s._v("Мессенджер")])])])}],l=(a("96cf"),a("1da1")),c=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"messenger",class:s.selected?"has-selected-dialog":""},[i("div",{staticClass:"messenger__dialogs dialogs"},[i("div",{staticClass:"dialogs__current-user user-dialogs-current"},[i("div",{staticClass:"dialog__user"},[s._m(0),i("div",{staticClass:"dialog__author"},[i("div",{staticClass:"dialog__name"},[s._v("Георгий Георгиевский")]),i("div",{staticClass:"dialog__status status-dialog",on:{click:function(t){return t.stopPropagation(),s.statusClick(t)}}},[i("span",{staticClass:"dialog__status-value"},[s._v(s._s(s.statuses[s.currentStatus]))]),i("svg",{staticClass:"dialog__status-icon"},[i("use",{attrs:{"xlink:href":a("f548")+"#status-arrow"}})])])])]),i("ul",{directives:[{name:"show",rawName:"v-show",value:s.statusMenuShow,expression:"statusMenuShow"}],staticClass:"status-dialog__menu"},s._l(s.statuses,(function(t,a){return i("li",{class:s.currentStatus===a?"active":"",on:{click:function(t){return s.statusSelect(a)}}},[s._v(s._s(t))])})),0)]),i("div",{staticClass:"messenger__search"},[i("label",[i("input",{attrs:{type:"text",placeholder:"Введите имя"}}),i("svg",{staticClass:"messenger__magficon"},[i("use",{attrs:{"xlink:href":a("bd16")+"#search"}})])])]),i("div",{staticClass:"messenger__tabs"},[i("div",{staticClass:"messenger__tab",class:s.activeChatsVisible?"active":"",on:{click:function(t){s.activeChatsVisible=!0}}},[s._m(1)]),i("div",{staticClass:"messenger__tab",class:s.activeChatsVisible?"":"active",on:{click:function(t){s.activeChatsVisible=!1}}},[s._m(2)])]),i("div",{staticClass:"dialogs__blocks dialogs__blocks--desktop"},[i("div",{staticClass:"dialogs__block"},[i("div",{staticClass:"dialogs__header header-dialogs"},[s._m(3),i("div",{staticClass:"header-dialogs__toggler",class:s.activeChatsVisible?"active":"",on:{click:function(t){s.activeChatsVisible=!0}}},[i("svg",[i("use",{attrs:{"xlink:href":a("f548")+"#dialog-arrow-down"}})])])]),i("slide-up-down",{attrs:{active:s.activeChatsVisible,duration:500}},[i("ul",{staticClass:"dialogs__list"},s._l(s.dialogs,(function(t,e){return i("li",{key:t.id,staticClass:"dialog",class:t.isActive?"active":"",on:{click:function(a){return s.dialogSelect(t.id)}}},[i("div",{staticClass:"dialog__user"},[i("div",{staticClass:"dialog__image-wrap"},[i("div",{staticClass:"dialog__image"},[i("img",{attrs:{src:a("dac0")("./"+(e+1)+".jpg"),alt:"alt"}})]),i("div",{staticClass:"dialog__online",class:t.online?"active":""})]),i("div",{staticClass:"dialog__author"},[i("div",{staticClass:"dialog__name"},[s._v(s._s(t.name))]),i("div",{staticClass:"dialog__role"},[s._v("Эксперт")])])]),i("div",{staticClass:"dialog__info"},[i("div",{staticClass:"dialog__time"},[s._v("9:00")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.unread>0,expression:"dialog.unread > 0"}],staticClass:"dialogs__count dialogs__count--unread"},[s._v(s._s(t.unread))])])])})),0)])],1),i("div",{staticClass:"dialogs__block dialogs__block--archive",class:s.activeChatsVisible?"":"opened"},[i("div",{staticClass:"dialogs__header header-dialogs"},[s._m(4),i("div",{staticClass:"header-dialogs__toggler",class:s.activeChatsVisible?"":"active",on:{click:function(t){s.activeChatsVisible=!1}}},[i("svg",[i("use",{attrs:{"xlink:href":a("f548")+"#dialog-arrow-down"}})])])]),i("slide-up-down",{attrs:{active:!s.activeChatsVisible,duration:500}},[i("ul",{staticClass:"dialogs__list"},s._l(s.dialogs,(function(t){return i("li",{key:t.id,staticClass:"dialog",class:t.isActive?"active":"",on:{click:function(a){return s.dialogSelect(t.id)}}},[i("div",{staticClass:"dialog__user"},[i("div",{staticClass:"dialog__image-wrap"},[i("div",{staticClass:"dialog__image"},[i("img",{attrs:{src:a("8364"),alt:"alt"}})]),i("div",{staticClass:"dialog__online"})]),i("div",{staticClass:"dialog__author"},[i("div",{staticClass:"dialog__name"},[s._v(s._s(t.name))]),i("div",{staticClass:"dialog__role"},[s._v("Эксперт")])])]),i("div",{staticClass:"dialog__info"},[i("div",{staticClass:"dialog__time"},[s._v("9:00")])])])})),0)])],1)]),i("div",{staticClass:"dialogs__blocks dialogs__blocks--mobile"},[i("transition",{attrs:{name:"slide"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:s.activeChatsVisible,expression:"activeChatsVisible"}],staticClass:"dialogs__block"},[i("div",{staticClass:"dialogs__header header-dialogs"},[i("div",{staticClass:"header-dialogs__label"},[i("span",[s._v("Активные чаты")]),i("div",{staticClass:"dialogs__count"},[s._v("10")])]),i("div",{staticClass:"header-dialogs__toggler",class:s.activeChatsVisible?"active":"",on:{click:function(t){s.activeChatsVisible=!0}}},[i("svg",[i("use",{attrs:{"xlink:href":a("f548")+"#dialog-arrow-down"}})])])]),i("ul",{staticClass:"dialogs__list"},s._l(s.dialogs,(function(t,e){return i("li",{key:t.id,staticClass:"dialog",class:t.isActive?"active":"",on:{click:function(a){return s.dialogSelect(t.id)}}},[i("div",{staticClass:"dialog__user"},[i("div",{staticClass:"dialog__image-wrap"},[i("div",{staticClass:"dialog__image"},[i("img",{attrs:{src:a("dac0")("./"+(e+1)+".jpg"),alt:"alt"}})]),i("div",{staticClass:"dialog__online",class:t.online?"active":""})]),i("div",{staticClass:"dialog__author"},[i("div",{staticClass:"dialog__name"},[s._v(s._s(t.name))]),i("div",{staticClass:"dialog__role"},[s._v("Эксперт")])])]),i("div",{staticClass:"dialog__info"},[i("div",{staticClass:"dialog__time"},[s._v("9:00")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.unread>0,expression:"dialog.unread > 0"}],staticClass:"dialogs__count dialogs__count--unread"},[s._v(s._s(t.unread))])])])})),0)])]),i("transition",{attrs:{name:"slide-archive"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!s.activeChatsVisible,expression:"!activeChatsVisible"}],staticClass:"dialogs__block dialogs__block--archive",class:s.activeChatsVisible?"":"opened"},[i("div",{staticClass:"dialogs__header header-dialogs"},[i("div",{staticClass:"header-dialogs__label"},[i("span",[s._v("Архивированные чаты")]),i("div",{staticClass:"dialogs__count dialogs__count--archived"},[s._v("10")])]),i("div",{staticClass:"header-dialogs__toggler",class:s.activeChatsVisible?"":"active",on:{click:function(t){s.activeChatsVisible=!1}}},[i("svg",[i("use",{attrs:{"xlink:href":a("f548")+"#dialog-arrow-down"}})])])]),i("ul",{staticClass:"dialogs__list"},s._l(s.dialogs,(function(t,e){return i("li",{key:e,staticClass:"dialog",class:t.isActive?"active":"",on:{click:function(a){return s.dialogSelect(t.id)}}},[i("div",{staticClass:"dialog__user"},[i("div",{staticClass:"dialog__image-wrap"},[i("div",{staticClass:"dialog__image"},[i("img",{attrs:{src:a("8364"),alt:"alt"}})]),i("div",{staticClass:"dialog__online"})]),i("div",{staticClass:"dialog__author"},[i("div",{staticClass:"dialog__name"},[s._v("Элеонор Кондратюк")]),i("div",{staticClass:"dialog__role"},[s._v("Эксперт")])])]),i("div",{staticClass:"dialog__info"},[i("div",{staticClass:"dialog__time"},[s._v("9:00")])])])})),0)])])],1)]),i("transition",{attrs:{name:"chat-slide"}},[s.selected?i("div",{staticClass:"messenger__chat chat-messenger"},[i("div",{staticClass:"chat-messenger__header"},[i("div",{staticClass:"chat-messenger__back",on:{click:function(t){s.selected=null}}},[i("svg",[i("use",{attrs:{"xlink:href":a("f548")+"#dialog-arrow-down"}})])]),i("div",{staticClass:"chat-messenger__collocutor"},[i("div",{staticClass:"dialog__online",class:s.selected.online?"active":""}),i("div",{staticClass:"chat-messenger__name"},[s._v(s._s(s.selected.name))])]),i("div",{staticClass:"dialog__user"},[i("div",{staticClass:"dialog__image-wrap"},[i("div",{staticClass:"dialog__image"},[i("img",{attrs:{src:a("dac0")("./"+s.selected.id+".jpg")}})]),i("div",{staticClass:"dialog__online",class:s.selected.online?"active":""})]),i("div",{staticClass:"dialog__author"},[i("div",{staticClass:"dialog__name"},[s._v(s._s(s.selected.name))]),i("div",{staticClass:"dialog__role"},[s._v("Эксперт")])])]),i("div",{staticClass:"chat-messenger__burger",class:s.chatMenuActive?"active":"",on:{click:function(t){t.stopPropagation(),s.chatMenuActive=!s.chatMenuActive}}},[i("span"),i("ul",{directives:[{name:"show",rawName:"v-show",value:s.chatMenuActive,expression:"chatMenuActive"}],staticClass:"chat-messenger__menu"},[i("li",[s._v("Отправить чат в архив"),i("svg",[i("use",{attrs:{"xlink:href":a("f548")+"#dialog-archive"}})])]),i("li",[s._v("Удалить переписку"),i("svg",[i("use",{attrs:{"xlink:href":a("f548")+"#dialog-delete"}})])])])])]),i("div",{staticClass:"chat-messenger__messages"},[i("div",{staticClass:"chat-messenger__message chat-message chat-message--theme"},[i("div",{staticClass:"chat-message__conversation"},[i("img",{attrs:{src:a("b05f")}})]),i("div",{staticClass:"chat-message__text"},[s._v("Клиент обратился с вопросом по услуге: "),i("a",[s._v("Материнский капитал")]),i("div",{staticClass:"chat-message__time"},[s._v("10:20")])])]),i("div",{staticClass:"chat-messenger__message chat-message chat-message--simple"},[i("div",{staticClass:"chat-message__text"},[s._v("Подробную информацию о мерах поддержки можно получить на портале «Малый бизнес на Кубани» или по телефону горячей линии: 8 (861) 992- 03-68, сообщает пресс-служба краевой администрации."),i("div",{staticClass:"chat-message__time"},[s._v("10:20")])])]),s._l(s.selected.messages,(function(t,e){return i("div",{key:e,staticClass:"chat-messenger__message chat-message"},[i("div",{staticClass:"chat-message__img"},[i("img",{attrs:{src:a("dac0")("./"+s.selected.id+".jpg")}})]),i("div",{staticClass:"chat-message__text"},[s._v(s._s(t.text)),i("div",{staticClass:"chat-message__time"},[s._v(s._s(t.time))])])])})),i("div",{staticClass:"chat-messenger__message chat-message chat-message--own"},[i("div",{staticClass:"chat-message__img"},[i("img",{attrs:{src:a("5949")}})]),i("div",{staticClass:"chat-message__text"},[s._v("Если не получилось найти ответа в автоматической системе, можно задать вопрос, вступив в переписку. Вопрос рассмотрят специалисты инфраструктуры поддержки бизнеса."),i("div",{staticClass:"chat-message__time"},[s._v("10:20")])])]),i("div",{staticClass:"chat-messenger__unread"},[i("span",[s._v("Непрочитанные сообщения")])]),i("div",{staticClass:"chat-messenger__message chat-message"},[i("div",{staticClass:"chat-message__img"},[i("img",{attrs:{src:a("dac0")("./"+s.selected.id+".jpg")}})]),i("div",{staticClass:"chat-message__text"},[s._v("Привет! 👋🏻 Вы тут? "),i("div",{staticClass:"chat-message__time"},[s._v("10:20")])])])],2),i("form",{staticClass:"chat-messenger__form",on:{submit:function(t){return t.preventDefault(),s.createMessage(t,s.selected.id)}}},[i("label",{staticClass:"chat-messenger__label"},[i("input",{staticClass:"chat-messenger__file",attrs:{type:"file"},on:{change:s.showFile}}),i("span",{staticClass:"chat-messenger__false-fileinput"},[i("svg",[i("use",{attrs:{"xlink:href":a("f548")+"#paperclip"}})])])]),i("input",{directives:[{name:"model",rawName:"v-model",value:s.newMessage,expression:"newMessage"}],staticClass:"chat-messenger__field",attrs:{type:"text",placeholder:"Ваш сообщение..."},domProps:{value:s.newMessage},on:{input:function(t){t.target.composing||(s.newMessage=t.target.value)}}}),i("button",{staticClass:"chat-messenger__send"},[i("svg",[i("use",{attrs:{"xlink:href":a("f548")+"#send"}})])])])]):s._e()])],1)},n=[function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"dialog__image-wrap"},[i("div",{staticClass:"dialog__image"},[i("img",{attrs:{src:a("5949"),alt:"alt"}})]),i("div",{staticClass:"dialog__online active"})])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"dialogs__header header-dialogs"},[a("div",{staticClass:"header-dialogs__label"},[a("span",[s._v("Активные чаты")]),a("div",{staticClass:"dialogs__count"},[s._v("10")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"dialogs__header header-dialogs"},[a("div",{staticClass:"header-dialogs__label"},[a("span",[s._v("Архив")]),a("div",{staticClass:"dialogs__count dialogs__count--archived"},[s._v(" 10")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"header-dialogs__label"},[a("span",[s._v("Активные чаты")]),a("div",{staticClass:"dialogs__count"},[s._v("10")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"header-dialogs__label"},[a("span",[s._v("Архивированные чаты")]),a("div",{staticClass:"dialogs__count dialogs__count--archived"},[s._v("10")])])}],o=(a("7db0"),a("d81d"),{name:"SlideUpDown",props:{active:Boolean,duration:{type:Number,default:500},tag:{type:String,default:"div"},useHidden:{type:Boolean,default:!0}},data:function(){return{style:{},initial:!1,hidden:!1}},watch:{active:function(){this.layout()}},render:function(s){return s(this.tag,{style:this.style,attrs:this.attrs,ref:"container",on:{transitionend:this.onTransitionEnd}},this.$slots.default)},mounted:function(){this.layout(),this.initial=!0},created:function(){this.hidden=!this.active},computed:{el:function(){return this.$refs.container},attrs:function(){var s={"aria-hidden":!this.active,"aria-expanded":this.active};return this.useHidden&&(s.hidden=this.hidden),s}},methods:{layout:function(){var s=this;this.active?(this.hidden=!1,this.$emit("open-start"),this.initial&&this.setHeight("0px",(function(){return s.el.scrollHeight+"px"}))):(this.$emit("close-start"),this.setHeight(this.el.scrollHeight+"px",(function(){return"0px"})))},asap:function(s){this.initial?this.$nextTick(s):s()},setHeight:function(s,t){var a=this;this.style={height:s},this.asap((function(){a.__=a.el.scrollHeight,a.style={height:t(),overflow:"hidden","transition-property":"height","transition-duration":a.duration+"ms"}}))},onTransitionEnd:function(s){s.target===this.el&&(this.active?(this.style={},this.$emit("open-end")):(this.style={height:"0",overflow:"hidden"},this.hidden=!0,this.$emit("close-end")))}}}),d={name:"Messenger",data:function(){return{dialogs:[],selected:null,newMessage:"",file:null,activeChatsVisible:!0,statuses:{available:"Доступен",absent:"Отсутствую"},statusMenuShow:!1,currentStatus:"available",chatMenuActive:!1}},components:{SlideUpDown:o},created:function(){this.dialogs=this.$store.getters["messenger/getDialogs"],this.selected=this.dialogs[0],this.dialogs[0].isActive=!0,document.addEventListener("click",this.closeDropdowns)},mounted:function(){return Object(l["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:case"end":return s.stop()}}),s)})))()},computed:{},methods:{dialogSelect:function(s){var t=this.dialogs.find((function(t){return t.id===s}));this.dialogs.map((function(s){s.isActive=s===t})),this.selected=t},createMessage:function(s,t){this.dialogs.find((function(s){return s.id===t})).messages.push({time:"now",text:this.newMessage});var a={message:this.newMessage,file:this.file};for(var i in a)console.log(i),console.log(a[i]);this.newMessage=""},showFile:function(s){this.file=s.target.files[0]},closeDropdowns:function(){console.log("closeDropdowns"),this.statusMenuShow=this.chatMenuActive=!1},statusClick:function(){this.statusMenuShow=!this.statusMenuShow},statusSelect:function(s){this.currentStatus=s,this.statusMenuShow=!1}}},r=d,_=(a("eecb"),a("2877")),g=Object(_["a"])(r,c,n,!1,null,null,null),v=g.exports,u={name:"main.template.Messenger",components:{MessengerComponent:v},data:function(){return{}},created:function(){},mounted:function(){return Object(l["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:case"end":return s.stop()}}),s)})))()},computed:{},methods:{}},h=u,m=(a("f516"),Object(_["a"])(h,i,e,!1,null,"1f7ef22d",null));t["default"]=m.exports},"7db0":function(s,t,a){"use strict";var i=a("23e7"),e=a("b727").find,l=a("44d2"),c=a("ae40"),n="find",o=!0,d=c(n);n in[]&&Array(1)[n]((function(){o=!1})),i({target:"Array",proto:!0,forced:o||!d},{find:function(s){return e(this,s,arguments.length>1?arguments[1]:void 0)}}),l(n)},b46c:function(s,t,a){},d81d:function(s,t,a){"use strict";var i=a("23e7"),e=a("b727").map,l=a("1dde"),c=a("ae40"),n=l("map"),o=c("map");i({target:"Array",proto:!0,forced:!n||!o},{map:function(s){return e(this,s,arguments.length>1?arguments[1]:void 0)}})},dac0:function(s,t,a){var i={"./1.jpg":"a9a7","./2.jpg":"9bdf","./3.jpg":"183e","./4.jpg":"257d","./5.jpg":"6b24","./6.jpg":"80db","./7.jpg":"3c26","./8.jpg":"d80b"};function e(s){var t=l(s);return a(t)}function l(s){if(!a.o(i,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return i[s]}e.keys=function(){return Object.keys(i)},e.resolve=l,s.exports=e,e.id="dac0"},eecb:function(s,t,a){"use strict";var i=a("b46c"),e=a.n(i);e.a},f516:function(s,t,a){"use strict";var i=a("3575"),e=a.n(i);e.a}}]);
//# sourceMappingURL=chunk-7033f81a.b1bf5205.js.map