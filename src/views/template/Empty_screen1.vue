<template lang="pug">
    main.block-light.plug.plug-invite
        .plug-wrapper
            .container
                h2.title-with-line
                    span Вы пока одинокий волк
            
                .plug__content
                    .plug__caption Приглашай экспертов в сервис и получай процент с их продаж
                    a(href="").invite-button Копировать ссылку для приглашения
                        img(src="@/assets/img/plugs/link.svg")
                
                    .plug__img
                        img(src="@/assets/img/plugs/invite.svg")

        //- .plug-footer
        //-     .container
        //-         .col-12
        //-             .plug-footer__inner Copyright (c)

</template>


<script>
    export default {

        name: 'main.template.Empty_screen1',
        components: {
        },

        data() {
            return {
            }
        },

        created(){},

        async mounted() {},

        computed: {},

        methods: {}

    }
</script>

<style lang="scss">
    @import '@/assets/scss/plugs/plugs.scss';
</style>