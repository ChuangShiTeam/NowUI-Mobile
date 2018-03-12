<style src="./auctionitems.css" scoped></style>
<template src="./auctionitems.html"></template>

<script>
    import {WxcMinibar, WxcCell,WxcIcon,WxcCountdown,WxcStepper} from 'weex-ui';

    import mixins from '../../../mixins/index';
    import event from "../../../common/event";

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            WxcIcon,
            WxcCountdown,
            WxcStepper
        },
        mixins: [mixins],
        data: () => ({
            GoodsImageList: [{
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
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
            auctionitemsList: [{
                name: '136****8923',
                price: '￥9500',
                image: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/104/h/104'
            }, {
                name: '136****8923',
                price: '￥10000',
                image: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/104/h/104'
            }, {
                name: '136****8923',
                price: '￥6800',
                image: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/104/h/104'
            }, {
                name: '136****8923',
                price: '￥9500',
                image: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/104/h/104'
            }, {
                name: '136****8923',
                price: '￥100',
                image: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/104/h/104'
            }],
            TIME: new Date().getTime() + 4320000000 + '',
        }),
        created() {

        },
        mounted() {
            if (weex.config.env.platform === 'android') {
                this.dom.scrollToElement(this.$refs.banner, {
                    offset: 1
                });
            }
        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            handleBack(){
                this.pop();
            },
            handleMyHomepage() {
                event.$emit('login-show', {

                });
            },
            handleHome() {
                this.push('/view/shop/index.html');
            },
            handleCollect() {
                console.log('收藏');
            },
            handleSubmit() {
                console.log('我要出价');
            },
            handleAllAuctionItems(){
                console.log(22);
                this.push('/view/shop/home/auctionitemsrecord.html');
            }
        }
    }
</script>
