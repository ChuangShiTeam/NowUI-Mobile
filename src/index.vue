<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcButton} from 'weex-ui';

    var navigator = weex.requireModule('navigator');

    export default {
        components: {
            WxcButton
        },
        data() {
            return {}
        },
        created() {

        },
        methods: {
            wxcButtonClicked(e) {
                navigator.push({
                    url: 'http://192.168.2.10:8081/dist/view/index.js',
                    animated: "true"
                });
            }
        }
    }
</script>