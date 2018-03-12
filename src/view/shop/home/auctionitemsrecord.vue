<style src="./auctionitemsrecord.css" scoped></style>
<template src="./auctionitemsrecord.html"></template>

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
                number:'1',
                phone:'131****1129',
                price:'￥7000',
                date:'03-09 10:15:04',
            },{
                number:'2',
                phone:'131****1129',
                price:'￥7000',
                date:'03-09 10:15:04',
            },{
                number:'3',
                phone:'131****1129',
                price:'￥7000',
                date:'03-09 10:15:04',
            },{
                number:'4',
                phone:'131****1129',
                price:'￥7000',
                date:'03-09 10:15:04',
            },{
                number:'5',
                phone:'131****1129',
                price:'￥7000',
                date:'03-09 10:15:04',
            },{
                number:'6',
                phone:'131****1129',
                price:'￥7000',
                date:'03-09 10:15:04',
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
