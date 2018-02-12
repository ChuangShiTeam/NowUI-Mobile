<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcMinibar, Utils} from 'weex-ui';

    import util from '../../common/util';

    // const loginBroadcastChannel = new BroadcastChannel('loginBroadcastChannel');

    export default {
        components: {
            WxcMinibar
        },
        data() {
            return {}
        },
        created() {
            this.containerStyle = {
                height: util.getPageHeight() - 90
            };
        },
        mounted() {

        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            hadleClickHeaderLeft() {
                // loginBroadcastChannel.postMessage({
                //     callbackName: ''
                // });
            }
        }
    }
</script>
