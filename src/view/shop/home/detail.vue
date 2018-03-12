<style src="./detail.css" scoped></style>
<template src="./detail.html"></template>

<script>
    import {WxcMinibar, WxcCell,WxcIcon} from 'weex-ui';

    import mixins from '../../../mixins/index';
    import event from "../../../common/event";

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            WxcIcon,
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
            }]
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
                this.pop();
            },
            handleSubmit() {
                this.push('/view/shop/order/orderinfo.html');
            },
            handleGoodsItem(){
                this.push('/member/index.html');
            }
        }
    }
</script>
