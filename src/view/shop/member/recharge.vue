<style src="./recharge.css" scoped></style>
<template src="./recharge.html"></template>

<script>
    import {WxcMinibar, WxcCell,WxcButton} from 'weex-ui';

    import mixins from '../../../mixins/index';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            WxcButton
        },
        props: {
            tabHeight: {
                type: Number,
                required: true
            }
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
            handleNextSteps(){
                this.push('/view/shop/member/pay.html');
            },
            onchange: function (event) {
                this.txtChange = event.value;
                console.log('onchange', event.value);
            },
            onreturn: function (event) {
                this.txtReturnType = event.returnKeyType;
                console.log('onreturn', event.type);
            },
            oninput: function (event) {
                this.txtInput = event.value;
                console.log('oninput', event.value);
            }
        }
    }
</script>
