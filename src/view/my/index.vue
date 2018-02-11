<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcMinibar, WxcCell, Utils} from 'weex-ui';

    // const loginBroadcastChannel = new BroadcastChannel('loginBroadcastChannel');

    export default {
        components: {
            WxcMinibar,
            WxcCell
        },
        data: () => ({

        }),
        created() {
            this.containerStyle = {
                height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 - 90
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
