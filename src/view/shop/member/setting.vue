<style src="./setting.css" scoped></style>
<template src="./setting.html"></template>

<script>
    import {WxcMinibar, WxcCell,WxcIcon} from 'weex-ui';

    import mixins from '../../../mixins/index';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            WxcIcon
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
            handleProfile() {
                this.push('/view/shop/member/modifyinfo.html');
            },
            handleAddress() {
                this.push('/view/shop/member/address.html');
            }
        }
    }
</script>
