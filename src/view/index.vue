<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcTabBar, WxcMinibar, WxcCell, Utils} from 'weex-ui';

    export default {
        components: {
            WxcTabBar,
            WxcMinibar,
            WxcCell
        },
        data: () => ({
            tabList: [{
                title: '首页',
                icon: 'http://h5.chuangshi.nowui.com/wawipet/image/index.png',
                activeIcon: 'http://h5.chuangshi.nowui.com/wawipet/image/index-active.png'
            }, {
                title: '社区',
                icon: 'http://h5.chuangshi.nowui.com/wawipet/image/forum.png',
                activeIcon: 'http://h5.chuangshi.nowui.com/wawipet/image/forum-active.png'
            }, {
                title: '服务',
                icon: 'http://h5.chuangshi.nowui.com/wawipet/image/service.png',
                activeIcon: 'http://h5.chuangshi.nowui.com/wawipet/image/service-active.png'
            }, {
                title: '我的',
                icon: 'http://h5.chuangshi.nowui.com/wawipet/image/my.png',
                activeIcon: 'http://h5.chuangshi.nowui.com/wawipet/image/my-active.png'
            }],
            tabStyle: {
                bgColor: '#FFFFFF',
                titleColor: '#000000',
                activeTitleColor: '#b59768',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: false,
                iconWidth: 32,
                iconHeight: 36,
                width: 160,
                height: 80,
                fontSize: 18,
                textPaddingLeft: 10,
                textPaddingRight: 10
            },
            headerBackgroundOpacity: 0.0,
            bannerList: [{
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }],
            articleList: [{
                title: '谁说猫狗在一起一定打得不可开交？'
            }, {
                title: '谁说猫狗在一起一定打得不可开交？'
            }, {
                title: '谁说猫狗在一起一定打得不可开交？'
            }],
            categoryList: [{
                name: '保健卡',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-0.png'
            }, {
                name: '健康知识',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-1.png'
            }, {
                name: '饮食',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-2.png'
            }, {
                name: '品种',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-3.png'
            }, {
                name: '丧事',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-4.png'
            }, {
                name: '美容时尚',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-5.png'
            }, {
                name: '家居',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-6.png'
            }, {
                name: '寄养出行',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-7.png'
            }, {
                name: '领养',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-8.png'
            }],
            petList: [{
                name: '狗',
                description: 'Dog',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/pet-0.png'
            }, {
                name: '猫',
                description: 'Cat',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/pet-1.png'
            }, {
                name: '兔',
                description: 'Rabbit',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/pet-2.png'
            }, {
                name: '鸟',
                description: 'Bird',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/pet-3.png'
            }, {
                name: '鱼',
                description: 'Fish',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/pet-4.png'
            }, {
                name: '两栖',
                description: 'Amphibians',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/pet-5.png'
            }, {
                name: '其他',
                description: 'Others',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/pet-6.png'
            }],
            scrollHnadlerCallCount:0,
            itemList: [
                {itemId: '520421163634', title: 'item1', pictureUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
                {itemId: '522076777462', title: 'item2', pictureUrl: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
                {itemId: '522076777462', title: 'item3', pictureUrl: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'},
                {itemId: '522076777467', title: 'item4', pictureUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491837948&di=3dcecd1b1d709196873a91f9fd585962&imgtype=jpg&er=1&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160304%2Fmp61863731_1457078539188_3.gif'}
            ]
        }),
        created() {
            const tabPageHeight = Utils.env.getPageHeight();
            // const tabPageHeight = Utils.env.deviceHeight / Utils.env.deviceWidth * 750;
            this.contentStyle = {
                height: (tabPageHeight - this.tabStyle.height) + 'px',
                backgroundColor: '#f6f6f6'
            };

        },
        mounted() {
            //this.$refs['wxc-tab-bar'].setPage(2);
        },
        methods: {
            wxcTabBarCurrentTabSelected(e) {
                const index = e.page;
                console.log(index);
            },
            handerTabItemScroll(e) {
                this.headerBackgroundOpacity = -e.contentOffset.y / 300;
            }
        }
    }
</script>
