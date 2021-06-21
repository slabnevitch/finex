<template lang="pug">
    main.block-light.wrap-messenger(ref="wrapmessenger")
        .container
            .row
                .col-12
                    h2 Мессенджер
            .row.wrap-messenger__main
                .col-12
                    MessengerComponent
                    
</template>

<script>
    import MessengerComponent from '@/components/template/Messenger'
    export default {

        name: 'main.template.Messenger',
        components: {
            MessengerComponent
        },

        data() {
            return {
                titleTop: null
            }
        },

        mounted(){
            document.addEventListener('click', this.closeDropdowns);
            window.addEventListener('scroll', this.handleScroll);
            this.messengerTop = this.$refs.wrapmessenger.querySelector('.messenger__dialogs').getBoundingClientRect().top;
        },

        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        computed: {},

        methods: {
            handleScroll(e){
                console.log(this.$refs.wrapmessenger.querySelector('.messenger__dialogs').getBoundingClientRect().top);
                if(screen.width < 992){
                    if(pageYOffset >= this.messengerTop - 74){
                        this.$refs.wrapmessenger.classList.add('fixed');
                        // this.$refs.wrapmessenger.style.height = 'calc(100vh +'+this.messengerTop - 74+'px)';
                    }else{
                        // this.$refs.wrapmessenger.classList.remove('fixed');
                        // this.$refs.wrapmessenger.style.height = '100vh';

                    }

                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    $overalHeight: calc(100% - 50px);
    $overalHeightSm: calc(100% - 30px);
    .wrap-messenger{
        padding-top: 59px;
        position: fixed;
        height: 100%;
        width: 100%;
            // height: calc(100vh + 74px);

        .container{
            height:  $overalHeight;

        }
        &.fixed{

            .wrap-messenger__main{
                position: fixed;
                width: 100%;
                height: calc(100vh - 74px);
                top: 74px;
                background-color: #fff;

                .messenger{
                    height: 100%;
                }
            }
            .dialogs__blocks{
                overflow-y: auto;
            }
        }
    }
    .wrap-messenger__main{
        height:  $overalHeight;
        // transition: all .5s;
        .col-12,
        .messenger{
            height:  $overalHeight;

        }
    }
    @media screen and (max-width: 991px) {
        .wrap-messenger{
            position: static;
            background-color: #fff;
        }
        .wrap-messenger__main{
            height:  100%;

            .col-12,
            .messenger{
                height:  $overalHeightSm;

            }
        }
    }
</style>