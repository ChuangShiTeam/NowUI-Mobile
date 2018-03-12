<style src="./pay.css" scoped></style>
<template src="./pay.html"></template>

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
            handleSubmit() {
                console.log(1);
            },
            handleBack() {
                this.pop();
            }
        }
    }
</script>
