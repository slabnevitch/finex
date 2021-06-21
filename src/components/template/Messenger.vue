<template lang="pug">
	.messenger(:class="selected ? 'has-selected-dialog' : ''")
		.messenger__dialogs.dialogs

			.dialogs__current-user.user-dialogs-current
				.dialog__user
					.dialog__image-wrap
						.dialog__image
							img(src="@/assets/img/messenger/user.png", alt="alt")
						.dialog__online.active
					.dialog__author
						.dialog__name Георгий Георгиевский
						.dialog__status.status-dialog(@click.stop="statusClick")
							span.dialog__status-value {{statuses[currentStatus]}}
							svg.dialog__status-icon
								use(xlink:href="@/assets/img/messenger/icons/sprite.svg#status-arrow")

				ul.status-dialog__menu(v-show="statusMenuShow")
					li(v-for="(status, name) in statuses"
						:class="currentStatus === name ? 'active' : ''"
						@click="statusSelect(name)") {{status}}


			.messenger__search
				label
					input(type="text" placeholder="Введите имя")
					svg.messenger__magficon
						use(xlink:href="@/assets/img/main.svg#search")

			.messenger__tabs
				.messenger__tab(@click="activeChatsVisible=true"
					:class="activeChatsVisible? 'active' : ''")
					.dialogs__header.header-dialogs
						.header-dialogs__label
							span Активные чаты
							.dialogs__count 10

				.messenger__tab(@click="activeChatsVisible=false"
					:class="!activeChatsVisible? 'active' : ''")
					.dialogs__header.header-dialogs
						.header-dialogs__label
							span Архив
							.dialogs__count.dialogs__count--archived  10

			.dialogs__blocks.dialogs__blocks--desktop
				.dialogs__block(:class="activeChatsVisible ? 'opened' : ''")
					.dialogs__header.header-dialogs
						.header-dialogs__label
							span Активные чаты
							.dialogs__count 10

						.header-dialogs__toggler(@click="activeChatsVisible=true")
							svg
								use(xlink:href="@/assets/img/messenger/icons/sprite.svg#dialog-arrow-down")
						
					slide-up-down(:active="activeChatsVisible" :duration="500")
						ul.dialogs__list
							li.dialog(v-for="(dialog, ind) in dialogs" :key="dialog.id"
								@click="dialogSelect(dialog.id)"
								:class="dialog.isActive ? 'active' : ''")
									.dialog__user
										.dialog__image-wrap
											.dialog__image
												img(:src="require('@/assets/img/messenger/authors/'+(ind+1)+'.jpg')", alt="alt")
												//- img(src="@/assets/img/messenger/authors/3.jpg", alt="alt")
											.dialog__online(:class="dialog.online ? 'active' : ''")
										.dialog__author
											.dialog__name {{dialog.name}}
											.dialog__role Эксперт
									.dialog__info
										.dialog__time 9:00
										.dialogs__count.dialogs__count--unread(v-show="dialog.unread > 0") {{dialog.unread}}

				.dialogs__block.dialogs__block--archive(:class="!activeChatsVisible ? 'opened' : ''")
					.dialogs__header.header-dialogs
						.header-dialogs__label
							span Архивированные чаты
							.dialogs__count.dialogs__count--archived 10

						.header-dialogs__toggler(@click="activeChatsVisible=false"
							:class="!activeChatsVisible ? 'active' : ''")
							svg
								use(xlink:href="@/assets/img/messenger/icons/sprite.svg#dialog-arrow-down")
					
					slide-up-down(:active="!activeChatsVisible" :duration="500")
						ul.dialogs__list
							li.dialog(v-for="dialog in dialogs" :key="dialog.id"
								@click="dialogSelect(dialog.id)"
								:class="dialog.isActive ? 'active' : ''")
								.dialog__user
									.dialog__image-wrap
										.dialog__image
											img(src="@/assets/img/experts-1.jpg", alt="alt")
										.dialog__online
									.dialog__author
										.dialog__name {{dialog.name}}
										.dialog__role Эксперт
								.dialog__info
									.dialog__time 9:00

			.dialogs__blocks.dialogs__blocks--mobile(@scroll="scroll")
				transition(name="slide")
					.dialogs__block(v-show="activeChatsVisible")
						.dialogs__header.header-dialogs
							.header-dialogs__label
								span Активные чаты
								.dialogs__count 10

							.header-dialogs__toggler(@click="activeChatsVisible=true"
								:class="activeChatsVisible ? 'active' : ''")
								svg
									use(xlink:href="@/assets/img/messenger/icons/sprite.svg#dialog-arrow-down")
							
						ul.dialogs__list
							li.dialog(v-for="(dialog, ind) in dialogs" :key="dialog.id"
								@click="dialogSelect(dialog.id)"
								:class="dialog.isActive ? 'active' : ''")
									.dialog__user
										.dialog__image-wrap
											.dialog__image
												img(:src="require('@/assets/img/messenger/authors/'+(ind+1)+'.jpg')", alt="alt")
												//- img(src="@/assets/img/messenger/authors/3.jpg", alt="alt")
											.dialog__online(:class="dialog.online ? 'active' : ''")
										.dialog__author
											.dialog__name {{dialog.name}}
											.dialog__role Эксперт
									.dialog__info
										.dialog__time 9:00
										.dialogs__count.dialogs__count--unread(v-show="dialog.unread > 0") {{dialog.unread}}

				transition(name="slide-archive")
					.dialogs__block.dialogs__block--archive(v-show="!activeChatsVisible")
						.dialogs__header.header-dialogs
							.header-dialogs__label
								span Архивированные чаты
								.dialogs__count.dialogs__count--archived 10

							.header-dialogs__toggler(@click="activeChatsVisible=false"
								:class="!activeChatsVisible ? 'active' : ''")
								svg
									use(xlink:href="@/assets/img/messenger/icons/sprite.svg#dialog-arrow-down")
						
						ul.dialogs__list
							li.dialog(v-for="(dialog, ind) in 3" :key="ind"
								@click="dialogSelect(dialog.id)"
								:class="dialog.isActive ? 'active' : ''")
								.dialog__user
									.dialog__image-wrap
										.dialog__image
											img(src="@/assets/img/experts-1.jpg", alt="alt")
										.dialog__online
									.dialog__author
										.dialog__name Элеонор Кондратюк
										.dialog__role Эксперт
								.dialog__info
									.dialog__time 9:00

		transition(name="chat-slide")
			.messenger__chat.chat-messenger(v-if="selected")
				.chat-messenger__header
					.chat-messenger__back(@click="selected = null")
						svg
							use(xlink:href="@/assets/img/messenger/icons/sprite.svg#dialog-arrow-down")
					
					.chat-messenger__collocutor
						.dialog__online(:class="selected.online ? 'active' : ''")
						.chat-messenger__name {{selected.name}}

					.dialog__user
						.dialog__image-wrap
							.dialog__image
								img(:src="require('@/assets/img/messenger/authors/'+(selected.id)+'.jpg')")
							.dialog__online(:class="selected.online ? 'active' : ''")
						.dialog__author
							.dialog__name {{selected.name}}
							.dialog__role Эксперт

					.chat-messenger__burger(@click.stop="chatMenuActive = !chatMenuActive"
						:class="chatMenuActive ? 'active': ''")
						span
						ul.chat-messenger__menu(v-show="chatMenuActive")
							li Отправить чат в архив
								svg
									use(xlink:href="@/assets/img/messenger/icons/sprite.svg#dialog-archive")
							li Удалить переписку
								svg
									use(xlink:href="@/assets/img/messenger/icons/sprite.svg#dialog-delete")

				.chat-messenger__messages
					div(v-for="item in 5")
						.chat-messenger__message.chat-message.chat-message--theme
							.chat-message__conversation
									img(src="@/assets/img/messenger/icons/conversation.svg")

							.chat-message__text Клиент обратился с вопросом по услуге: #[a Материнский капитал]
								.chat-message__time 10:20

						.chat-messenger__message.chat-message.chat-message--simple
							.chat-message__text Подробную информацию о мерах поддержки можно получить на портале «Малый бизнес на Кубани» или по телефону горячей линии: 8 (861) 992- 03-68, сообщает пресс-служба краевой администрации.
								.chat-message__time 10:20


						.chat-messenger__message.chat-message(v-for="(message, ind) in selected.messages" :key="ind")
							.chat-message__img
									img(:src="require('@/assets/img/messenger/authors/'+(selected.id)+'.jpg')")

							.chat-message__text {{message.text}}
								.chat-message__time {{message.time}}

						.chat-messenger__message.chat-message.chat-message--own
							.chat-message__img
									img(src="@/assets/img/messenger/user.png")

							.chat-message__text Если не получилось найти ответа в автоматической системе, можно задать вопрос, вступив в переписку. Вопрос рассмотрят специалисты инфраструктуры поддержки бизнеса.
								.chat-message__time 10:20

					.chat-messenger__unread 
						span Непрочитанные сообщения

					.chat-messenger__message.chat-message
						.chat-message__img
								img(:src="require('@/assets/img/messenger/authors/'+(selected.id)+'.jpg')")

						.chat-message__text Привет! 👋🏻 Вы тут? 
							.chat-message__time 10:20

				form.chat-messenger__form(@submit.prevent="createMessage($event, selected.id)")
					label.chat-messenger__label
						input.chat-messenger__file(type="file" @change="showFile")
						span.chat-messenger__false-fileinput
							svg
								use(xlink:href="@/assets/img/messenger/icons/sprite.svg#paperclip")

					input.chat-messenger__field(type="text" placeholder="Ваш сообщение..." v-model="newMessage")
					button.chat-messenger__send
						svg
							use(xlink:href="@/assets/img/messenger/icons/sprite.svg#send")
</template>

<script>
	import SlideUpDown from 'vue-slide-up-down'
	export default {
		name: 'Messenger',
		data() {
            return {
                dialogs:[],
                selected: null,
                newMessage: '',
                file: null,

                activeChatsVisible: true,
                // archivedChatsVisible: false
                statuses: {
                  available: 'Доступен',
                  absent: 'Отсутствую'
                },
                statusMenuShow: false,
                currentStatus: 'available',

                chatMenuActive: false
            }
        },
        components: {
         SlideUpDown
        },
        created(){
         this.dialogs = this.$store.getters['messenger/getDialogs'];
         this.selected = this.dialogs[0];
         this.dialogs[0].isActive = true;

         document.addEventListener('click', this.closeAllDropdowns);
        },

        async mounted() {
        },
        computed: {},

        methods: {
						scroll($evt){
							// console.log($evt.target.scrollTop);
							if($evt.target.scrollTop === 0){
								document.querySelector('.wrap-messenger').classList.remove('fixed');
							}
						},
            dialogSelect(id){
                const selectedDialog = this.dialogs.find(dialog => dialog.id === id);
               
                this.dialogs.map(dialog => {
                    if(dialog === selectedDialog){
                        dialog.isActive = true;
                    }else{
                        dialog.isActive = false;
                    }
                });
                
                this.selected = selectedDialog;
                // console.log(selectedDialog);
                // console.log(this.dialogs);
            },
            createMessage(evt, id){
                this.dialogs.find(dialog => dialog.id === id).messages.push({time: 'now', text: this.newMessage});
                
                const formInfo = {message: this.newMessage, file: this.file};

                for (let prop in formInfo){
                    console.log(prop)
                    console.log(formInfo[prop])

                }
                this.newMessage = ''
            },
            showFile(evt){
                this.file = evt.target.files[0];
            },
            closeDropdowns(){
                    console.log('closeDropdowns');

                this.statusMenuShow = this.chatMenuActive = false;
            },
            closeAllDropdowns(){
							this.statusMenuShow = false;
							this.chatMenuActive = false;
            },
            statusClick(){
							this.statusMenuShow = !this.statusMenuShow;
            },
            statusSelect(name){
              this.currentStatus = name;
              this.statusMenuShow = false;
            }
        }
	}
</script>

<style lang="scss">
@import '@/assets/scss/messenger/messenger.scss'
</style>