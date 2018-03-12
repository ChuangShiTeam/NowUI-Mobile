<style src="./orderinfo.css" scoped></style>
<template src="./orderinfo.html"></template>

<script>
    import {WxcMinibar, WxcCell} from 'weex-ui';

    import mixins from '../../../mixins/index';

    export default {
        components: {
            WxcMinibar,
            WxcCell
        },
        props: {

        },
        mixins: [mixins],
        data: () => ({

        }),
        created() {

        },
        mounted() {

        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            handleBack() {
                this.pop();
            },
            handleSelectAddress(){
                this.push('/view/shop/member/address.html');
            },
            handleCancelOrder(){
                console.log('取消订单');
                this.pop();
            },
            handleInput(){
                console.log('填写备注');
            },
            handleSubmit(){
                this.push('/view/shop/order/orderdetail.html');
            }
        }
    }
</script>
