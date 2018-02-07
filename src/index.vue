<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcTabBar, WxcMinibar, Utils} from 'weex-ui';

    const Config = {
        tabTitles: [
            {
                title: '首页',
                icon: 'http://h5.chuangshi.nowui.com/wawipet/image/index.png',
                activeIcon: 'http://h5.chuangshi.nowui.com/wawipet/image/index-active.png'
            },
            {
                title: '社区',
                icon: 'http://h5.chuangshi.nowui.com/wawipet/image/forum.png',
                activeIcon: 'http://h5.chuangshi.nowui.com/wawipet/image/forum-active.png'
            },
            {
                title: '服务',
                icon: 'http://h5.chuangshi.nowui.com/wawipet/image/service.png',
                activeIcon: 'http://h5.chuangshi.nowui.com/wawipet/image/service-active.png'
            },
            {
                title: '我的',
                icon: 'http://h5.chuangshi.nowui.com/wawipet/image/my.png',
                activeIcon: 'http://h5.chuangshi.nowui.com/wawipet/image/my-active.png'
            }
        ],
        tabStyles: {
            bgColor: '#FFFFFF',
            titleColor: '#000000',
            activeTitleColor: '#b59768',
            activeBgColor: '#FFFFFF',
            isActiveTitleBold: true,
            iconWidth: 32,
            iconHeight: 36,
            width: 160,
            height: 80,
            fontSize: 18,
            textPaddingLeft: 10,
            textPaddingRight: 10
        },
        tabIconFontTitles: [
            {
                title: '首页',
                codePoint: '\ue623'
            },
            {
                title: '特别推荐',
                codePoint: '\ue608'
            },
            {
                title: '消息中心',
                codePoint: '\ue752',
                badge: 5
            },
            {
                title: '我的主页',
                codePoint: '\ue601',
                dot: true
            }
        ],
        tabIconFontStyles: {
            bgColor: '#FFFFFF',
            titleColor: '#666666',
            activeTitleColor: '#3D3D3D',
            activeBgColor: '#FFFFFF',
            isActiveTitleBold: true,
            width: 160,
            height: 120,
            fontSize: 24,
            textPaddingLeft: 10,
            textPaddingRight: 10,
            iconFontSize: 50,
            iconFontColor: '#333333',
            activeIconFontColor: 'red',
            iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
        }
    }

    export default {
        components: {
            WxcTabBar,
            WxcMinibar
        },
        data: () => ({
            tabTitles: Config.tabTitles,
            tabStyles: Config.tabStyles,
            posters: [
                'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/320',
                'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/320',
                'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/320',
                'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/320',
                'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/320'
            ],
            lists: ['A', 'B', 'C', 'D', 'E', 'F']
        }),
        created() {
            const tabPageHeight = Utils.env.getPageHeight();
            // If the page doesn't have a navigation bar
            // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
            const { tabStyles } = this;
            this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };

        },
        mounted() {
            //this.$refs['wxc-tab-bar'].setPage(2);
        },
        methods: {
            wxcTabBarCurrentTabSelected (e) {
                const index = e.page;
                console.log(index);
            },
            handerScroll (e) {
                console.log(e);
            }
        }
    }
</script>
