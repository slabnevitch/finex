<template lang="pug">
	.chat-widget
		.chat-widget__window.window-chat-widget(v-if="selected")
			.chat-widget__header
				.chat-widget__user
					.chat-widget__image-wrap
						.chat-widget__image
							img(:src="require('@/assets/img/messenger/authors/'+(selected.id)+'.jpg')")
						.dialog__online(:class="selected.online ? 'active' : ''")
					.chat-widget__author
						.chat-widget__name {{selected.name}}
						.chat-widget__role Эксперт
			
				.chat-widget__close(@click="selected = null")
					svg
						use(xlink:href="@/assets/img/messenger/icons/sprite.svg#chat-close")
			
			.chat-widget__messages
				temaplate(v-for="div in 4")
					.chat-messenger__message.chat-message
						.chat-message__text Видать у нас методы разные, для тебя безопасно, но не согласен я Из-под ног земля и как в бреду перебираю в голове слова
							.chat-message__time 10:20

					.chat-messenger__message.chat-message.chat-message--own
						.chat-message__text И все они не подходят, хоть убей, наливаю доверху, бери стакан и пей
							.chat-message__time 10:20

			form.chat-messenger__form(@submit.prevent="createMessage($event, selected.id)")
				label.chat-messenger__label
					input.chat-messenger__file(type="file")
					span.chat-messenger__false-fileinput
						svg
							use(xlink:href="@/assets/img/messenger/icons/sprite.svg#paperclip")

				input.chat-messenger__field(type="text" placeholder="Ваш сообщение...")
				button.chat-messenger__send
					svg
						use(xlink:href="@/assets/img/messenger/icons/sprite.svg#send")
		
		.chat-widget__menu
			.chat-widget__image-wrap(v-for="(dialog, ind) in firstFiveDialogs"
				:key="dialog.id"
				@click="dialogSelect(dialog.id)"
				:class="dialog.isActive && selected !== null ? 'active' : ''")
				.dialog__image
					img(:src="require('@/assets/img/messenger/authors/'+(dialog.id)+'.jpg')")
				.dialog__unread-dot(v-show="dialog.unread > 0")

			router-link.chat-widget__icon.chat-widget__link(to="/template/Messenger") 10+
			.chat-widget__icon.chat-widget__help
				svg
					use(xlink:href="@/assets/img/messenger/icons/sprite.svg#chat")

</template>

<script>
	export default{
		name: 'Widget',
		data(){
			return {
				dialogs: [],
				selected: null,
        newMessage: '',
        file: null,
			}
		},
		created(){
			this.dialogs = [...this.$store.getters['messenger/getDialogs']];
		},
		beforeDestroy(){
			this.dialogs = [];
		},
		computed: {
			firstFiveDialogs(){
				return this.dialogs.slice(0, 5);
			}
		},
		methods: {
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

      this.newMessage = '';
      }
    }
	}
</script>

<style lang="scss">
@import '@/assets/scss/messenger/widget.scss';
	

</style>