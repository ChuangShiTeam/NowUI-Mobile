<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcTabBar, WxcPopup, Utils} from 'weex-ui';
    import HomeIndex from './home/index.vue';
    import SnsIndex from './sns/index.vue';
    import ServiceIndex from './service/index.vue';
    import MyIndex from './my/index.vue';

    const modal = weex.requireModule('modal');
    // const loginBroadcastChannel = new BroadcastChannel('loginBroadcastChannel');

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
        data: () => ({
            tabList: [{
                title: '首页',
                icon: 'http://h5.chuangshi.nowui.com/wawipet/image/index.png',
                activeIcon: 'http://h5.chuangshi.nowui.com/wawipet/image/index-active.png'
            }, {
                title: '社区',
                url: '/view/forum/index.html',
                icon: 'http://h5.chuangshi.nowui.com/wawipet/image/forum.png',
                activeIcon: 'http://h5.chuangshi.nowui.com/wawipet/image/forum-active.png'
            }, {
                title: '服务',
                url: '/view/service/index.html',
                icon: 'http://h5.chuangshi.nowui.com/wawipet/image/service.png',
                activeIcon: 'http://h5.chuangshi.nowui.com/wawipet/image/service-active.png'
            }, {
                title: '我的',
                url: '/view/my/index.html',
                icon: 'http://h5.chuangshi.nowui.com/wawipet/image/my.png',
                activeIcon: 'http://h5.chuangshi.nowui.com/wawipet/image/my-active.png'
            }],
            tabStyle: {
                bgColor: '#FFFFFF',
                titleColor: '#000000',
                activeTitleColor: '#b59768',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: false,
                iconWidth: 36,
                iconHeight: 36,
                width: 160,
                height: 80,
                fontSize: 18,
                textPaddingLeft: 10,
                textPaddingRight: 10
            },
            pageHeight: 0,
            isShowLogin: false
        }),
        created() {
            // loginBroadcastChannel.onmessage = function (event) {
            //     // modal.toast({
            //     //     message: '123',
            //     //     duration: 1.3
            //     // });
            //
            //     this.isShowLogin = !this.isShowLogin;
            // }.bind(this)
        },
        mounted() {
            // this.$refs['wxc-tab-bar'].setPage(0);

            this.pageHeight = Utils.env.getPageHeight();
        },
        methods: {
            handerTabSelected(e) {
                const index = e.page;
                console.log(index);
            }
        }
    }
</script>
