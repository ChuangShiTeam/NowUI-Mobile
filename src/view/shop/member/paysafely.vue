<style src="./paysafely.css" scoped></style>
<template src="./paysafely.html"></template>

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
            }
        }
    }
</script>
