(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0babe1d2"],{3012:function(s,e,t){},"3f37":function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("main",{staticClass:"block-light wrap-messenger"},[t("div",{staticClass:"container"},[s._m(0),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("MessengerComponent")],1)])])])},i=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("h2",[s._v("Мессенджер")])])])}],n=(t("96cf"),t("1da1")),l=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"messenger",class:s.selected?"has-selected-dialog":""},[a("div",{staticClass:"messenger__dialogs dialogs"},[a("div",{staticClass:"dialogs__current-user user-dialogs-current"},[a("div",{staticClass:"dialog__user"},[s._m(0),a("div",{staticClass:"dialog__author"},[a("div",{staticClass:"dialog__name"},[s._v("Георгий Георгиевский")]),a("div",{staticClass:"dialog__status"},[a("span",{staticClass:"dialog__status-value"},[s._v("Доступен")]),a("svg",{staticClass:"dialog__status-icon"},[a("use",{attrs:{"xlink:href":t("f548")+"#status-arrow"}})])])])])]),a("div",{staticClass:"messenger__search"},[a("label",[a("input",{attrs:{type:"text",placeholder:"Введите имя"}}),a("svg",{staticClass:"messenger__magficon"},[a("use",{attrs:{"xlink:href":t("bd16")+"#search"}})])])]),a("div",{staticClass:"messenger__tabs"},[a("div",{staticClass:"messenger__tab",class:s.activeChatsVisible?"active":"",on:{click:function(e){s.activeChatsVisible=!0}}},[s._m(1)]),a("div",{staticClass:"messenger__tab",class:s.activeChatsVisible?"":"active",on:{click:function(e){s.activeChatsVisible=!1}}},[s._m(2)])]),a("div",{staticClass:"dialogs__blocks"},[a("div",{staticClass:"dialogs__block"},[a("div",{staticClass:"dialogs__header header-dialogs"},[s._m(3),a("div",{staticClass:"header-dialogs__toggler",class:s.activeChatsVisible?"active":"",on:{click:function(e){s.activeChatsVisible=!0}}},[a("svg",[a("use",{attrs:{"xlink:href":t("f548")+"#dialog-arrow-down"}})])])]),s.activeChatsVisible?a("ul",{staticClass:"dialogs__list"},s._l(s.dialogs,(function(e,i){return a("li",{key:e.id,staticClass:"dialog",class:e.isActive?"active":"",on:{click:function(t){return s.dialogSelect(e.id)}}},[a("div",{staticClass:"dialog__user"},[a("div",{staticClass:"dialog__image-wrap"},[a("div",{staticClass:"dialog__image"},[a("img",{attrs:{src:t("dac0")("./"+(i+1)+".jpg"),alt:"alt"}})]),a("div",{staticClass:"dialog__online",class:e.online?"active":""})]),a("div",{staticClass:"dialog__author"},[a("div",{staticClass:"dialog__name"},[s._v(s._s(e.name))]),a("div",{staticClass:"dialog__role"},[s._v("Эксперт")])])]),a("div",{staticClass:"dialog__info"},[a("div",{staticClass:"dialog__time"},[s._v("9:00")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.unread>0,expression:"dialog.unread > 0"}],staticClass:"dialogs__count dialogs__count--unread"},[s._v(s._s(e.unread))])])])})),0):s._e()]),a("div",{staticClass:"dialogs__block dialogs__block--archive"},[a("div",{staticClass:"dialogs__header header-dialogs"},[s._m(4),a("div",{staticClass:"header-dialogs__toggler",class:s.activeChatsVisible?"":"active",on:{click:function(e){s.activeChatsVisible=!1}}},[a("svg",[a("use",{attrs:{"xlink:href":t("f548")+"#dialog-arrow-down"}})])])]),s.activeChatsVisible?s._e():a("ul",{staticClass:"dialogs__list"},s._l(s.dialogs,(function(e){return a("li",{key:e.id,staticClass:"dialog",class:e.isActive?"active":"",on:{click:function(t){return s.dialogSelect(e.id)}}},[a("div",{staticClass:"dialog__user"},[s._m(5,!0),a("div",{staticClass:"dialog__author"},[a("div",{staticClass:"dialog__name"},[s._v(s._s(e.name))]),a("div",{staticClass:"dialog__role"},[s._v("Эксперт")])])]),s._m(6,!0)])})),0)])])]),s.selected?a("div",{staticClass:"messenger__chat chat-messenger"},[a("div",{staticClass:"chat-messenger__header"},[a("div",{staticClass:"chat-messenger__back",on:{click:function(e){s.selected=null}}},[a("svg",[a("use",{attrs:{"xlink:href":t("f548")+"#dialog-arrow-down"}})])]),a("div",{staticClass:"chat-messenger__collocutor"},[a("div",{staticClass:"dialog__online",class:s.selected.online?"active":""}),a("div",{staticClass:"chat-messenger__name"},[s._v(s._s(s.selected.name))])]),a("div",{staticClass:"dialog__user"},[a("div",{staticClass:"dialog__image-wrap"},[a("div",{staticClass:"dialog__image"},[a("img",{attrs:{src:t("dac0")("./"+s.selected.id+".jpg")}})]),a("div",{staticClass:"dialog__online",class:s.selected.online?"active":""})]),a("div",{staticClass:"dialog__author"},[a("div",{staticClass:"dialog__name"},[s._v(s._s(s.selected.name))]),a("div",{staticClass:"dialog__role"},[s._v("Эксперт")])])]),s._m(7)]),a("div",{staticClass:"chat-messenger__messages"},[s._l(s.selected.messages,(function(e,i){return a("div",{key:i,staticClass:"chat-messenger__message chat-message"},[a("div",{staticClass:"chat-message__img"},[a("img",{attrs:{src:t("dac0")("./"+s.selected.id+".jpg")}})]),a("div",{staticClass:"chat-message__text"},[s._v(s._s(e.text)),a("div",{staticClass:"chat-message__time"},[s._v(s._s(e.time))])])])})),s._m(8),s._m(9),a("div",{staticClass:"chat-messenger__message chat-message"},[a("div",{staticClass:"chat-message__img"},[a("img",{attrs:{src:t("dac0")("./"+s.selected.id+".jpg")}})]),s._m(10)])],2),a("form",{staticClass:"chat-messenger__form",on:{submit:function(e){return e.preventDefault(),s.createMessage(e,s.selected.id)}}},[a("label",{staticClass:"chat-messenger__label"},[a("input",{staticClass:"chat-messenger__file",attrs:{type:"file"},on:{change:s.showFile}}),a("span",{staticClass:"chat-messenger__false-fileinput"},[a("svg",[a("use",{attrs:{"xlink:href":t("f548")+"#paperclip"}})])])]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.newMessage,expression:"newMessage"}],staticClass:"chat-messenger__field",attrs:{type:"text",placeholder:"Ваш сообщение..."},domProps:{value:s.newMessage},on:{input:function(e){e.target.composing||(s.newMessage=e.target.value)}}}),a("button",{staticClass:"chat-messenger__send"},[a("svg",[a("use",{attrs:{"xlink:href":t("f548")+"#send"}})])])])]):s._e()])},c=[function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"dialog__image-wrap"},[a("div",{staticClass:"dialog__image"},[a("img",{attrs:{src:t("5949"),alt:"alt"}})]),a("div",{staticClass:"dialog__online active"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"dialogs__header header-dialogs"},[t("div",{staticClass:"header-dialogs__label"},[t("span",[s._v("Активные чаты")]),t("div",{staticClass:"dialogs__count"},[s._v("10")])])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"dialogs__header header-dialogs"},[t("div",{staticClass:"header-dialogs__label"},[t("span",[s._v("Архив")]),t("div",{staticClass:"dialogs__count dialogs__count--archived"},[s._v(" 10")])])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"header-dialogs__label"},[t("span",[s._v("Активные чаты")]),t("div",{staticClass:"dialogs__count"},[s._v("10")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"header-dialogs__label"},[t("span",[s._v("Архивированные чаты")]),t("div",{staticClass:"dialogs__count dialogs__count--archived"},[s._v("10")])])},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"dialog__image-wrap"},[a("div",{staticClass:"dialog__image"},[a("img",{attrs:{src:t("8364"),alt:"alt"}})]),a("div",{staticClass:"dialog__online"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"dialog__info"},[t("div",{staticClass:"dialog__time"},[s._v("9:00")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"chat-messenger__burger"},[t("span")])},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"chat-messenger__message chat-message chat-message--own"},[a("div",{staticClass:"chat-message__img"},[a("img",{attrs:{src:t("5949")}})]),a("div",{staticClass:"chat-message__text"},[s._v("Если не получилось найти ответа в автоматической системе, можно задать вопрос, вступив в переписку. Вопрос рассмотрят специалисты инфраструктуры поддержки бизнеса."),a("div",{staticClass:"chat-message__time"},[s._v("10:20")])])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"chat-messenger__unread"},[t("span",[s._v("Непрочитанные сообщения")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"chat-message__text"},[s._v("Привет! 👋🏻 Вы тут? "),t("div",{staticClass:"chat-message__time"},[s._v("10:20")])])}],r=(t("7db0"),t("d81d"),{name:"Messenger",data:function(){return{dialogs:[{name:"Элеонор Кондратюк",id:1,isActive:!1,online:!0,unread:3,img:"@/assets/img/messenger/authors/1.jpg",messages:[{time:"10:20",text:"Виджет чата и мессенджер должны взаимодействовать с бэком по API."},{time:"10:20",text:"Для этого на бэке реализованы следующие методы: получить список диалогов (активных/архивных), создать диалог, отправить диалог в архив, удалить диалог, отправить сообщение в диалог, получить весь список сообщений, получить список сообщений начиная с конкретной даты и времени.  "}]},{name:"Элеонор Кондратюк",id:2,isActive:!1,online:!0,unread:3,img:"@/assets/img/messenger/authors/2.jpg",messages:[{time:"10:20",text:"Виджет чата и мессенджер должны взаимодействовать с бэком по API."},{time:"10:20а",text:"Для этого на бэке реализованы следующие методы: получить список диалогов (активных/архивных), создать диалог, отправить диалог в архив, удалить диалог, отправить сообщение в диалог, получить весь список сообщений, получить список сообщений начиная с конкретной даты и времени.  "}]},{name:"Элеонор Кондратюк",id:3,isActive:!1,online:!0,unread:3,img:"../assets/img/messenger/authors/3.jpg",messages:[{time:"10:20",text:"Виджет чата и мессенджер должны взаимодействовать с бэком по API."},{time:"10:20",text:"Для этого на бэке реализованы следующие методы: получить список диалогов (активных/архивных), создать диалог, отправить диалог в архив, удалить диалог, отправить сообщение в диалог, получить весь список сообщений, получить список сообщений начиная с конкретной даты и времени.  "}]},{name:"Элеонор Кондратюк",id:4,isActive:!1,online:!1,unread:0,img:"@/assets/img/messenger/authors/4.jpg",messages:[{time:"10:20",text:"Виджет чата и мессенджер должны взаимодействовать с бэком по API."},{time:"10:20",text:"Для этого на бэке реализованы следующие методы: получить список диалогов (активных/архивных), создать диалог, отправить диалог в архив, удалить диалог, отправить сообщение в диалог, получить весь список сообщений, получить список сообщений начиная с конкретной даты и времени.  "}]},{name:"Элеонор Кондратюк",id:5,isActive:!1,online:!1,unread:0,img:"@/assets/img/messenger/authors/5.jpg",messages:[{time:"10:20",text:"Виджет чата и мессенджер должны взаимодействовать с бэком по API."},{time:"10:20",text:"Для этого на бэке реализованы следующие методы: получить список диалогов (активных/архивных), создать диалог, отправить диалог в архив, удалить диалог, отправить сообщение в диалог, получить весь список сообщений, получить список сообщений начиная с конкретной даты и времени.  "}]},{name:"Элеонор Кондратюк",id:6,isActive:!1,online:!0,unread:0,img:"@/assets/img/messenger/authors/6.jpg",messages:[{time:"10:20",text:"Виджет чата и мессенджер должны взаимодействовать с бэком по API."},{time:"10:20",text:"Для этого на бэке реализованы следующие методы: получить список диалогов (активных/архивных), создать диалог, отправить диалог в архив, удалить диалог, отправить сообщение в диалог, получить весь список сообщений, получить список сообщений начиная с конкретной даты и времени.  "}]},{name:"Элеонор Кондратюк",id:7,isActive:!1,online:!1,unread:0,img:"@/assets/img/messenger/authors/7.jpg",messages:[{time:"10:20",text:"Виджет чата и мессенджер должны взаимодействовать с бэком по API."},{time:"10:20",text:"Для этого на бэке реализованы следующие методы: получить список диалогов (активных/архивных), создать диалог, отправить диалог в архив, удалить диалог, отправить сообщение в диалог, получить весь список сообщений, получить список сообщений начиная с конкретной даты и времени.  "}]},{name:"Элеонор Кондратюк",id:8,isActive:!1,online:!0,unread:0,img:"@/assets/img/messenger/authors/8.jpg",messages:[{time:"10:20",text:"Виджет чата и мессенджер должны взаимодействовать с бэком по API."},{time:"10:20",text:"Для этого на бэке реализованы следующие методы: получить список диалогов (активных/архивных), создать диалог, отправить диалог в архив, удалить диалог, отправить сообщение в диалог, получить весь список сообщений, получить список сообщений начиная с конкретной даты и времени.  "}]}],selected:null,newMessage:"",file:null,activeChatsVisible:!0}},created:function(){},mounted:function(){return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:case"end":return s.stop()}}),s)})))()},computed:{},methods:{dialogSelect:function(s){var e=this.dialogs.find((function(e){return e.id===s}));this.dialogs.map((function(s){s.isActive=s===e})),this.selected=e},createMessage:function(s,e){this.dialogs.find((function(s){return s.id===e})).messages.push({time:"now",text:this.newMessage});var t={message:this.newMessage,file:this.file};for(var a in t)console.log(a),console.log(t[a]);this.newMessage=""},showFile:function(s){this.file=s.target.files[0]}}}),d=r,o=(t("eecb"),t("2877")),_=Object(o["a"])(d,l,c,!1,null,null,null),g=_.exports,m={name:"main.template.Messenger",components:{MessengerComponent:g},data:function(){return{}},created:function(){},mounted:function(){return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:case"end":return s.stop()}}),s)})))()},computed:{},methods:{}},v=m,u=(t("9b3c"),Object(o["a"])(v,a,i,!1,null,"291f99b0",null));e["default"]=u.exports},"7db0":function(s,e,t){"use strict";var a=t("23e7"),i=t("b727").find,n=t("44d2"),l=t("ae40"),c="find",r=!0,d=l(c);c in[]&&Array(1)[c]((function(){r=!1})),a({target:"Array",proto:!0,forced:r||!d},{find:function(s){return i(this,s,arguments.length>1?arguments[1]:void 0)}}),n(c)},"9b3c":function(s,e,t){"use strict";var a=t("3012"),i=t.n(a);i.a},b46c:function(s,e,t){},d81d:function(s,e,t){"use strict";var a=t("23e7"),i=t("b727").map,n=t("1dde"),l=t("ae40"),c=n("map"),r=l("map");a({target:"Array",proto:!0,forced:!c||!r},{map:function(s){return i(this,s,arguments.length>1?arguments[1]:void 0)}})},dac0:function(s,e,t){var a={"./1.jpg":"a9a7","./2.jpg":"9bdf","./3.jpg":"183e","./4.jpg":"257d","./5.jpg":"6b24","./6.jpg":"80db","./7.jpg":"3c26","./8.jpg":"d80b"};function i(s){var e=n(s);return t(e)}function n(s){if(!t.o(a,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return a[s]}i.keys=function(){return Object.keys(a)},i.resolve=n,s.exports=i,i.id="dac0"},eecb:function(s,e,t){"use strict";var a=t("b46c"),i=t.n(a);i.a}}]);
//# sourceMappingURL=chunk-0babe1d2.f90d00e7.js.map