<style src="./bankcart.css" scoped></style>
<template src="./bankcart.html"></template>

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
            bankCartList: [{
                name: '北京银行',
                cartNumber: '*** **** **** 4528'
            }, {
                name: '中国农业银行',
                cartNumber: '*** **** **** 4528'
            }, {
                name: '天津银行',
                cartNumber: '*** **** **** 4528'
            }, {
                name: '中国工商银行',
                cartNumber: '*** **** **** 4528'
            }, {
                name: '中国建设银行',
                cartNumber: '*** **** **** 4528'
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
            handleBack() {
                this.pop();
            },
            handleAdd(){
                this.push('/view/shop/member/addBankCart.html');
            }

        }
    }
</script>
