<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcMinibar, WxcCell} from 'weex-ui';

    import util from '../../common/util';

    export default {
        components: {
            WxcMinibar,
            WxcCell
        },
        data: () => ({
            bannerList: [{
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/11.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/11.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/11.png'
            }],
            categoryList: [{
                name: '美容',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/service-category-0.png'
            }, {
                name: '医疗',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/service-category-1.png'
            }, {
                name: '美食',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/service-category-2.png'
            }, {
                name: '培训',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/service-category-3.png'
            }, {
                name: '乐园',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/service-category-4.png'
            }, {
                name: '公园',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/service-category-5.png'
            }, {
                name: '办证',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/service-category-6.png'
            }, {
                name: '寄养',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/service-category-7.png'
            }, {
                name: '摄影',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/service-category-8.png'
            }, {
                name: '购宠',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/service-category-9.png'
            }, {
                name: '酒店',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/service-category-10.png'
            }, {
                name: '领养',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/service-category-11.png'
            }],
            shopList: [{
                color: '#FFE7E8'
            }, {
                color: '#defafd'
            }, {
                color: '#FFEEC8'
            }, {
                color: '#DFF9F3'
            }, {
                color: '#FFE7E8'
            }, {
                color: '#defafd'
            }, {
                color: '#FFEEC8'
            }, {
                color: '#DFF9F3'
            }, {
                color: '#FFE7E8'
            }, {
                color: '#defafd'
            }, {
                color: '#FFEEC8'
            }, {
                color: '#DFF9F3'
            }, {
                color: '#FFE7E8'
            }, {
                color: '#defafd'
            }, {
                color: '#FFEEC8'
            }, {
                color: '#DFF9F3'
            }],
            articleList: [{
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/12.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/13.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/14.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/12.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/13.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/14.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/12.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/13.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/14.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/12.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/13.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/14.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/12.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/13.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/14.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/12.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/13.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/14.png'
            }]
        }),
        created() {
            this.containerStyle = {
                height: (util.getPageHeight() - 80) + 'px'
            };
        },
        mounted() {

        },
        methods: {

        }
    }
</script>