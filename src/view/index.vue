<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcTabBar, WxcPopup} from 'weex-ui';

    import mixins from '../mixins/index';

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
            isShowLogin: false
        }),
        created() {

        },
        mounted() {
            // this.$refs['wxc-tab-bar'].setPage(0);
        },
        methods: {
            handleBar(index) {
                this.activeIndex = index;

                // this.toast(this.store.state.home.aaa)
                this.commit('home', {
                    aaa: '222'
                })
            }
        }
    }
</script>
