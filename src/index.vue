<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script type="text/ecmascript-6">
    import {WxcButton} from 'weex-ui';

    import mixins from './mixins/index';

    export default {
        components: {
            WxcButton
        },
        mixins: [mixins],
        data() {
            return {}
        },
        created() {

        },
        mounted() {

        },
        methods: {
            wxcButtonClicked(e) {
                // util.push('/home/search.html');

                // modal.toast({
                //     message: util.push('/index.html'),
                //     duration: 10.3
                // })

                this.push('/index.html');
            }
        }
    }
</script>