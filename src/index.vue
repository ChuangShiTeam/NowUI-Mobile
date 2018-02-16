<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
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
                // util.push('/view/home/search.html');

                // modal.toast({
                //     message: util.push('/view/index.html'),
                //     duration: 10.3
                // })

                this.push('/view/index.html');
            }
        }
    }
</script>