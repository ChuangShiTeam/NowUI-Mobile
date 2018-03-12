<style src="./wallet.css" scoped></style>
<template src="./wallet.html"></template>

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
            handlerecharge() {
                this.push('/view/shop/member/recharge.html');
            },
            handledraw() {
                this.push('/view/shop/member/drawcash.html');
            },
            handleBankcart() {
                this.push('/view/shop/member/bankcart.html');
            },
            handleFundDetail() {
                this.push('/view/shop/member/funddetail.html');
            }
        }
    }
</script>
