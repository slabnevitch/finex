(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7033f81a"],{3575:function(s,t,a){},"3f37":function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("main",{staticClass:"block-light wrap-messenger"},[a("div",{staticClass:"container"},[s._m(0),a("div",{staticClass:"row wrap-messenger__main"},[a("div",{staticClass:"col-12"},[a("MessengerComponent")],1)])])])},i=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h2",[s._v("Мессенджер")])])])}],l=(a("96cf"),a("1da1")),c=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"messenger",class:s.selected?"has-selected-dialog":""},[e("div",{staticClass:"messenger__dialogs dialogs"},[e("div",{staticClass:"dialogs__current-user user-dialogs-current"},[e("div",{staticClass:"dialog__user"},[s._m(0),e("div",{staticClass:"dialog__author"},[e("div",{staticClass:"dialog__name"},[s._v("Георгий Георгиевский")]),e("div",{staticClass:"dialog__status status-dialog",on:{click:function(t){s.statusMenuShow=!s.statusMenuShow}}},[e("span",{staticClass:"dialog__status-value"},[s._v(s._s(s.statuses[s.currentStatus]))]),e("svg",{staticClass:"dialog__status-icon"},[e("use",{attrs:{"xlink:href":a("f548")+"#status-arrow"}})])])])]),e("ul",{directives:[{name:"show",rawName:"v-show",value:s.statusMenuShow,expression:"statusMenuShow"}],staticClass:"status-dialog__menu"},s._l(s.statuses,(function(t,a){return e("li",{class:s.currentStatus===a?"active":"",on:{click:function(t){return s.statusSelect(a)}}},[s._v(s._s(t))])})),0)]),e("div",{staticClass:"messenger__search"},[e("label",[e("input",{attrs:{type:"text",placeholder:"Введите имя"}}),e("svg",{staticClass:"messenger__magficon"},[e("use",{attrs:{"xlink:href":a("bd16")+"#search"}})])])]),e("div",{staticClass:"messenger__tabs"},[e("div",{staticClass:"messenger__tab",class:s.activeChatsVisible?"active":"",on:{click:function(t){s.activeChatsVisible=!0}}},[s._m(1)]),e("div",{staticClass:"messenger__tab",class:s.activeChatsVisible?"":"active",on:{click:function(t){s.activeChatsVisible=!1}}},[s._m(2)])]),e("div",{staticClass:"dialogs__blocks dialogs__blocks--desktop"},[e("div",{staticClass:"dialogs__block"},[e("div",{staticClass:"dialogs__header header-dialogs"},[s._m(3),e("div",{staticClass:"header-dialogs__toggler",class:s.activeChatsVisible?"active":"",on:{click:function(t){s.activeChatsVisible=!0}}},[e("svg",[e("use",{attrs:{"xlink:href":a("f548")+"#dialog-arrow-down"}})])])]),e("slide-up-down",{attrs:{active:s.activeChatsVisible,duration:1e3}},[e("ul",{staticClass:"dialogs__list"},s._l(s.dialogs,(function(t,i){return e("li",{key:t.id,staticClass:"dialog",class:t.isActive?"active":"",on:{click:function(a){return s.dialogSelect(t.id)}}},[e("div",{staticClass:"dialog__user"},[e("div",{staticClass:"dialog__image-wrap"},[e("div",{staticClass:"dialog__image"},[e("img",{attrs:{src:a("dac0")("./"+(i+1)+".jpg"),alt:"alt"}})]),e("div",{staticClass:"dialog__online",class:t.online?"active":""})]),e("div",{staticClass:"dialog__author"},[e("div",{staticClass:"dialog__name"},[s._v(s._s(t.name))]),e("div",{staticClass:"dialog__role"},[s._v("Эксперт")])])]),e("div",{staticClass:"dialog__info"},[e("div",{staticClass:"dialog__time"},[s._v("9:00")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.unread>0,expression:"dialog.unread > 0"}],staticClass:"dialogs__count dialogs__count--unread"},[s._v(s._s(t.unread))])])])})),0)])],1),e("div",{staticClass:"dialogs__block dialogs__block--archive",class:s.activeChatsVisible?"":"opened"},[e("div",{staticClass:"dialogs__header header-dialogs"},[s._m(4),e("div",{staticClass:"header-dialogs__toggler",class:s.activeChatsVisible?"":"active",on:{click:function(t){s.activeChatsVisible=!1}}},[e("svg",[e("use",{attrs:{"xlink:href":a("f548")+"#dialog-arrow-down"}})])])]),e("slide-up-down",{attrs:{active:!s.activeChatsVisible,duration:1e3}},[e("ul",{staticClass:"dialogs__list"},s._l(s.dialogs,(function(t){return e("li",{key:t.id,staticClass:"dialog",class:t.isActive?"active":"",on:{click:function(a){return s.dialogSelect(t.id)}}},[e("div",{staticClass:"dialog__user"},[e("div",{staticClass:"dialog__image-wrap"},[e("div",{staticClass:"dialog__image"},[e("img",{attrs:{src:a("8364"),alt:"alt"}})]),e("div",{staticClass:"dialog__online"})]),e("div",{staticClass:"dialog__author"},[e("div",{staticClass:"dialog__name"},[s._v(s._s(t.name))]),e("div",{staticClass:"dialog__role"},[s._v("Эксперт")])])]),e("div",{staticClass:"dialog__info"},[e("div",{staticClass:"dialog__time"},[s._v("9:00")])])])})),0)])],1)]),e("div",{staticClass:"dialogs__blocks dialogs__blocks--mobile"},[e("transition",{attrs:{name:"slide"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.activeChatsVisible,expression:"activeChatsVisible"}],staticClass:"dialogs__block"},[e("div",{staticClass:"dialogs__header header-dialogs"},[e("div",{staticClass:"header-dialogs__label"},[e("span",[s._v("Активные чаты")]),e("div",{staticClass:"dialogs__count"},[s._v("10")])]),e("div",{staticClass:"header-dialogs__toggler",class:s.activeChatsVisible?"active":"",on:{click:function(t){s.activeChatsVisible=!0}}},[e("svg",[e("use",{attrs:{"xlink:href":a("f548")+"#dialog-arrow-down"}})])])]),e("ul",{staticClass:"dialogs__list"},s._l(s.dialogs,(function(t,i){return e("li",{key:t.id,staticClass:"dialog",class:t.isActive?"active":"",on:{click:function(a){return s.dialogSelect(t.id)}}},[e("div",{staticClass:"dialog__user"},[e("div",{staticClass:"dialog__image-wrap"},[e("div",{staticClass:"dialog__image"},[e("img",{attrs:{src:a("dac0")("./"+(i+1)+".jpg"),alt:"alt"}})]),e("div",{staticClass:"dialog__online",class:t.online?"active":""})]),e("div",{staticClass:"dialog__author"},[e("div",{staticClass:"dialog__name"},[s._v(s._s(t.name))]),e("div",{staticClass:"dialog__role"},[s._v("Эксперт")])])]),e("div",{staticClass:"dialog__info"},[e("div",{staticClass:"dialog__time"},[s._v("9:00")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.unread>0,expression:"dialog.unread > 0"}],staticClass:"dialogs__count dialogs__count--unread"},[s._v(s._s(t.unread))])])])})),0)])]),e("transition",{attrs:{name:"slide-archive"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!s.activeChatsVisible,expression:"!activeChatsVisible"}],staticClass:"dialogs__block dialogs__block--archive",class:s.activeChatsVisible?"":"opened"},[e("div",{staticClass:"dialogs__header header-dialogs"},[e("div",{staticClass:"header-dialogs__label"},[e("span",[s._v("Архивированные чаты")]),e("div",{staticClass:"dialogs__count dialogs__count--archived"},[s._v("10")])]),e("div",{staticClass:"header-dialogs__toggler",class:s.activeChatsVisible?"":"active",on:{click:function(t){s.activeChatsVisible=!1}}},[e("svg",[e("use",{attrs:{"xlink:href":a("f548")+"#dialog-arrow-down"}})])])]),e("ul",{staticClass:"dialogs__list"},s._l(20,(function(t,i){return e("li",{key:i,staticClass:"dialog",class:t.isActive?"active":"",on:{click:function(a){return s.dialogSelect(t.id)}}},[e("div",{staticClass:"dialog__user"},[e("div",{staticClass:"dialog__image-wrap"},[e("div",{staticClass:"dialog__image"},[e("img",{attrs:{src:a("8364"),alt:"alt"}})]),e("div",{staticClass:"dialog__online"})]),e("div",{staticClass:"dialog__author"},[e("div",{staticClass:"dialog__name"},[s._v("Элеонор Кондратюк")]),e("div",{staticClass:"dialog__role"},[s._v("Эксперт")])])]),e("div",{staticClass:"dialog__info"},[e("div",{staticClass:"dialog__time"},[s._v("9:00")])])])})),0)])])],1)]),e("transition",{attrs:{name:"chat-slide"}},[s.selected?e("div",{staticClass:"messenger__chat chat-messenger"},[e("div",{staticClass:"chat-messenger__header"},[e("div",{staticClass:"chat-messenger__back",on:{click:function(t){s.selected=null}}},[e("svg",[e("use",{attrs:{"xlink:href":a("f548")+"#dialog-arrow-down"}})])]),e("div",{staticClass:"chat-messenger__collocutor"},[e("div",{staticClass:"dialog__online",class:s.selected.online?"active":""}),e("div",{staticClass:"chat-messenger__name"},[s._v(s._s(s.selected.name))])]),e("div",{staticClass:"dialog__user"},[e("div",{staticClass:"dialog__image-wrap"},[e("div",{staticClass:"dialog__image"},[e("img",{attrs:{src:a("dac0")("./"+s.selected.id+".jpg")}})]),e("div",{staticClass:"dialog__online",class:s.selected.online?"active":""})]),e("div",{staticClass:"dialog__author"},[e("div",{staticClass:"dialog__name"},[s._v(s._s(s.selected.name))]),e("div",{staticClass:"dialog__role"},[s._v("Эксперт")])])]),e("div",{staticClass:"chat-messenger__burger",class:s.chatMenuActive?"active":"",on:{click:function(t){s.chatMenuActive=!s.chatMenuActive}}},[e("span"),e("ul",{directives:[{name:"show",rawName:"v-show",value:s.chatMenuActive,expression:"chatMenuActive"}],staticClass:"chat-messenger__menu"},[e("li",[s._v("Отправить чат в архив"),e("svg",[e("use",{attrs:{"xlink:href":a("f548")+"#dialog-archive"}})])]),e("li",[s._v("Удалить переписку"),e("svg",[e("use",{attrs:{"xlink:href":a("f548")+"#dialog-delete"}})])])])])]),e("div",{staticClass:"chat-messenger__messages"},[e("div",{staticClass:"chat-messenger__message chat-message chat-message--theme"},[e("div",{staticClass:"chat-message__conversation"},[e("img",{attrs:{src:a("b05f")}})]),e("div",{staticClass:"chat-message__text"},[s._v("Клиент обратился с вопросом по услуге: "),e("a",[s._v("Материнский капитал")]),e("div",{staticClass:"chat-message__time"},[s._v("10:20")])])]),e("div",{staticClass:"chat-messenger__message chat-message chat-message--simple"},[e("div",{staticClass:"chat-message__text"},[s._v("Подробную информацию о мерах поддержки можно получить на портале «Малый бизнес на Кубани» или по телефону горячей линии: 8 (861) 992- 03-68, сообщает пресс-служба краевой администрации."),e("div",{staticClass:"chat-message__time"},[s._v("10:20")])])]),s._l(s.selected.messages,(function(t,i){return e("div",{key:i,staticClass:"chat-messenger__message chat-message"},[e("div",{staticClass:"chat-message__img"},[e("img",{attrs:{src:a("dac0")("./"+s.selected.id+".jpg")}})]),e("div",{staticClass:"chat-message__text"},[s._v(s._s(t.text)),e("div",{staticClass:"chat-message__time"},[s._v(s._s(t.time))])])])})),e("div",{staticClass:"chat-messenger__message chat-message chat-message--own"},[e("div",{staticClass:"chat-message__img"},[e("img",{attrs:{src:a("5949")}})]),e("div",{staticClass:"chat-message__text"},[s._v("Если не получилось найти ответа в автоматической системе, можно задать вопрос, вступив в переписку. Вопрос рассмотрят специалисты инфраструктуры поддержки бизнеса."),e("div",{staticClass:"chat-message__time"},[s._v("10:20")])])]),e("div",{staticClass:"chat-messenger__unread"},[e("span",[s._v("Непрочитанные сообщения")])]),e("div",{staticClass:"chat-messenger__message chat-message"},[e("div",{staticClass:"chat-message__img"},[e("img",{attrs:{src:a("dac0")("./"+s.selected.id+".jpg")}})]),e("div",{staticClass:"chat-message__text"},[s._v("Привет! 👋🏻 Вы тут? "),e("div",{staticClass:"chat-message__time"},[s._v("10:20")])])])],2),e("form",{staticClass:"chat-messenger__form",on:{submit:function(t){return t.preventDefault(),s.createMessage(t,s.selected.id)}}},[e("label",{staticClass:"chat-messenger__label"},[e("input",{staticClass:"chat-messenger__file",attrs:{type:"file"},on:{change:s.showFile}}),e("span",{staticClass:"chat-messenger__false-fileinput"},[e("svg",[e("use",{attrs:{"xlink:href":a("f548")+"#paperclip"}})])])]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.newMessage,expression:"newMessage"}],staticClass:"chat-messenger__field",attrs:{type:"text",placeholder:"Ваш сообщение..."},domProps:{value:s.newMessage},on:{input:function(t){t.target.composing||(s.newMessage=t.target.value)}}}),e("button",{staticClass:"chat-messenger__send"},[e("svg",[e("use",{attrs:{"xlink:href":a("f548")+"#send"}})])])])]):s._e()])],1)},n=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"dialog__image-wrap"},[e("div",{staticClass:"dialog__image"},[e("img",{attrs:{src:a("5949"),alt:"alt"}})]),e("div",{staticClass:"dialog__online active"})])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"dialogs__header header-dialogs"},[a("div",{staticClass:"header-dialogs__label"},[a("span",[s._v("Активные чаты")]),a("div",{staticClass:"dialogs__count"},[s._v("10")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"dialogs__header header-dialogs"},[a("div",{staticClass:"header-dialogs__label"},[a("span",[s._v("Архив")]),a("div",{staticClass:"dialogs__count dialogs__count--archived"},[s._v(" 10")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"header-dialogs__label"},[a("span",[s._v("Активные чаты")]),a("div",{staticClass:"dialogs__count"},[s._v("10")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"header-dialogs__label"},[a("span",[s._v("Архивированные чаты")]),a("div",{staticClass:"dialogs__count dialogs__count--archived"},[s._v("10")])])}],d=(a("7db0"),a("d81d"),{name:"SlideUpDown",props:{active:Boolean,duration:{type:Number,default:500},tag:{type:String,default:"div"},useHidden:{type:Boolean,default:!0}},data:function(){return{style:{},initial:!1,hidden:!1}},watch:{active:function(){this.layout()}},render:function(s){return s(this.tag,{style:this.style,attrs:this.attrs,ref:"container",on:{transitionend:this.onTransitionEnd}},this.$slots.default)},mounted:function(){this.layout(),this.initial=!0},created:function(){this.hidden=!this.active},computed:{el:function(){return this.$refs.container},attrs:function(){var s={"aria-hidden":!this.active,"aria-expanded":this.active};return this.useHidden&&(s.hidden=this.hidden),s}},methods:{layout:function(){var s=this;this.active?(this.hidden=!1,this.$emit("open-start"),this.initial&&this.setHeight("0px",(function(){return s.el.scrollHeight+"px"}))):(this.$emit("close-start"),this.setHeight(this.el.scrollHeight+"px",(function(){return"0px"})))},asap:function(s){this.initial?this.$nextTick(s):s()},setHeight:function(s,t){var a=this;this.style={height:s},this.asap((function(){a.__=a.el.scrollHeight,a.style={height:t(),overflow:"hidden","transition-property":"height","transition-duration":a.duration+"ms"}}))},onTransitionEnd:function(s){s.target===this.el&&(this.active?(this.style={},this.$emit("open-end")):(this.style={height:"0",overflow:"hidden"},this.hidden=!0,this.$emit("close-end")))}}}),o={name:"Messenger",data:function(){return{dialogs:[],selected:null,newMessage:"",file:null,activeChatsVisible:!0,statuses:{available:"Доступен",absent:"Отсутствую"},statusMenuShow:!1,currentStatus:"available",chatMenuActive:!1}},components:{SlideUpDown:d},created:function(){this.dialogs=this.$store.getters["messenger/getDialogs"],this.selected=this.dialogs[0],this.dialogs[0].isActive=!0},mounted:function(){return Object(l["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:case"end":return s.stop()}}),s)})))()},computed:{},methods:{dialogSelect:function(s){var t=this.dialogs.find((function(t){return t.id===s}));this.dialogs.map((function(s){s.isActive=s===t})),this.selected=t},createMessage:function(s,t){this.dialogs.find((function(s){return s.id===t})).messages.push({time:"now",text:this.newMessage});var a={message:this.newMessage,file:this.file};for(var e in a)console.log(e),console.log(a[e]);this.newMessage=""},showFile:function(s){this.file=s.target.files[0]},statusSelect:function(s){this.currentStatus=s,this.statusMenuShow=!1}}},r=o,_=(a("eecb"),a("2877")),g=Object(_["a"])(r,c,n,!1,null,null,null),v=g.exports,u={name:"main.template.Messenger",components:{MessengerComponent:v},data:function(){return{}},created:function(){},mounted:function(){return Object(l["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:case"end":return s.stop()}}),s)})))()},computed:{},methods:{}},h=u,m=(a("f516"),Object(_["a"])(h,e,i,!1,null,"1f7ef22d",null));t["default"]=m.exports},"7db0":function(s,t,a){"use strict";var e=a("23e7"),i=a("b727").find,l=a("44d2"),c=a("ae40"),n="find",d=!0,o=c(n);n in[]&&Array(1)[n]((function(){d=!1})),e({target:"Array",proto:!0,forced:d||!o},{find:function(s){return i(this,s,arguments.length>1?arguments[1]:void 0)}}),l(n)},b46c:function(s,t,a){},d81d:function(s,t,a){"use strict";var e=a("23e7"),i=a("b727").map,l=a("1dde"),c=a("ae40"),n=l("map"),d=c("map");e({target:"Array",proto:!0,forced:!n||!d},{map:function(s){return i(this,s,arguments.length>1?arguments[1]:void 0)}})},dac0:function(s,t,a){var e={"./1.jpg":"a9a7","./2.jpg":"9bdf","./3.jpg":"183e","./4.jpg":"257d","./5.jpg":"6b24","./6.jpg":"80db","./7.jpg":"3c26","./8.jpg":"d80b"};function i(s){var t=l(s);return a(t)}function l(s){if(!a.o(e,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return e[s]}i.keys=function(){return Object.keys(e)},i.resolve=l,s.exports=i,i.id="dac0"},eecb:function(s,t,a){"use strict";var e=a("b46c"),i=a.n(e);i.a},f516:function(s,t,a){"use strict";var e=a("3575"),i=a.n(e);i.a}}]);
//# sourceMappingURL=chunk-7033f81a.a309c1a4.js.map