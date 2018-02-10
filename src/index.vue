<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcButton} from 'weex-ui';
    const modal = weex.requireModule('modal')
    const navigator = weex.requireModule('navigator');

    import util from './common/util';

    export default {
        components: {
            WxcButton
        },
        data(){
            return {}
        },
        created(){
        },
        mounted(){
        },
        methods: {
            wxcButtonClicked(e) {
                // util.push('/view/home/search.html');

                modal.toast({
                    message: util.push('/view/index.html'),
                    duration: 10.3
                })
            }
        }
    }
</script>