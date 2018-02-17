<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcTabBar, WxcPopup} from 'weex-ui';

    import mixins from '../mixins/index';
    import event from "../common/event";

    import HomeIndex from './home/index.vue';
    import SnsIndex from './sns/index.vue';
    import ServiceIndex from './service/index.vue';
    import MyIndex from './my/index.vue';
    import LoginIndex from './login/index.vue';

    export default {
        components: {
            WxcTabBar,
            WxcPopup,
            HomeIndex,
            SnsIndex,
            ServiceIndex,
            MyIndex,
            LoginIndex
        },
        mixins: [mixins],
        data: () => ({
            activeIndex: 0,
            isLoginShow: false
        }),
        created() {

        },
        mounted() {
            event.$on('login-show', (data) => {
                this.isLoginShow = true;
            });

            event.$on('login-close', (data) => {
                this.$refs.login.hide();
            });
        },
        methods: {
            handleBar(index) {
                this.activeIndex = index;
            },
            handleLogin() {
                this.isLoginShow = false;
            }
        }
    }
</script>
