<style src="./funddetail.css" scoped></style>
<template src="./funddetail.html"></template>

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
            items: [{
                name:'用户充值到用户现金账户',
                date:'2018-02-07 11:59:25',
                price:'￥0.01',
            },{
                name:'用户充值到用户现金账户',
                date:'2018-02-07 11:59:25',
                price:'￥0.01',
            },{
                name:'用户充值到用户现金账户',
                date:'2018-02-07 11:59:25',
                price:'￥0.01',
            },{
                name:'用户充值到用户现金账户',
                date:'2018-02-07 11:59:25',
                price:'￥0.01',
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
            }
        }
    }
</script>
