<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcMinibar, WxcCell} from 'weex-ui';

    import util from '../../common/util';

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
