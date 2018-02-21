<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcCell} from 'weex-ui';

    import mixins from '../../mixins/index';

    export default {
        components: {
            WxcCell
        },
        props: {
            topic: {
                type: Object,
                required: true
            },
            containerStyle: {
                type: Object
            }
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
            handleLoad() {
                console.log(1);
            },
            handleHomepage() {
                this.push('/view/member/homepage.html');
            },
            handleTopic() {
                this.push('/view/topic/detail.html');
            }
        }
    }
</script>
