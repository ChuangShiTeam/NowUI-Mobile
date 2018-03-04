<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcMinibar, WxcCell,WxcIcon,WxcTag} from 'weex-ui';

    import mixins from '../../../mixins/index';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            WxcIcon,
            WxcTag
        },
        props: {
            tabHeight: {
                type: Number,
                required: true
            }
        },
        mixins: [mixins],
        data: () => ({
            categoryList: [{
                name: '未付款',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                name: '待发货',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                name: '未收货',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                name: '未评价',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                name: '售后',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }]
        }),
        created() {

        },
        mounted() {

        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            handleSetting() {
                this.push('/view/shop/member/setting.html');
            },
            handleWallet() {
                this.push('/view/shop/member/wallet.html');
            },
            handleBookmark() {
                this.push('/view/member/bookmark.html');
            },
            handleProfile() {
                this.push('/view/member/profile.html');
            },
            handlePet() {
                this.push('/view/member/pet.html');
            },
            handleFollow() {
                this.push('/view/member/follow.html');
            },
            handleQrcode() {
                this.push('/view/member/qrcode.html');
            },
            handleCategory() {
                this.push('/view/article/index.html');
            },
        }
    }
</script>
