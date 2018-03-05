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
            minibarLeftButtonClick() {
                this.push('/shop/member/index.html');
            },
            handlePaySafety() {
                this.push('/shop/member/paysafely.html');
            }
        }
    }
</script>
