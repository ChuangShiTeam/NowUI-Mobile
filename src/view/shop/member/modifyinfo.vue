<style src="./modifyinfo.css" scoped></style>
<template src="./modifyinfo.html"></template>

<script>
    import {WxcMinibar, WxcCell} from 'weex-ui';

    import mixins from '../../../mixins/index';

    export default {
        components: {
            WxcMinibar,
            WxcCell
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
            minibarLeftButtonClick() {
                this.push('/view/shop/member/index.html');
            },
            minibarRightButtonClick() {
                this.push('/view/shop/member/index.html');
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
