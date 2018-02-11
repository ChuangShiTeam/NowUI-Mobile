<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcCell} from 'weex-ui';

    export default {
        components: {
            WxcCell
        },
        props: {
            topic: {
                type: Object,
                required: true
            },
            topicStyle: {
                type: Object
            }
        },
        data() {
            return {}
        },
        created() {

        }
    }
</script>
