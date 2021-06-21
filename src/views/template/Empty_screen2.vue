<template lang="pug">
     main.block-light.plug.plug-learning
        .plug-wrapper
            .container
                h2.title-with-line
                    span Обучение

                .plug__content
                    .plug__img
                        img(src="@/assets/img/plugs/learning.svg")
                    
                    .plug__caption Некий текст бла бла бла бла
                    .offer__btn.offer__btn--blue Добавить
        //- .plug-footer
        //-     .container
        //-         .col-12
                    .plug-footer__inner Copyright (c)
</template>


<script>
    export default {

        name: 'main.template.Empty_screen2',
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