<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcMinibar} from 'weex-ui';

    import ForumIndex from '../forum/index.vue';
    import TopicIndex from '../topic/index.vue';

    export default {
        components: {
            WxcMinibar,
            ForumIndex,
            TopicIndex
        },
        data: () => ({
            selectIndex: 0
        }),
        created() {

        },
        mounted() {

        },
        methods: {
            handleClickForum() {
                if (this.selectIndex != 0) {
                    this.selectIndex = 0;
                }
            },
            handleClickTopic() {
                if (this.selectIndex != 1) {
                    this.selectIndex = 1;
                }
            }
        }
    }
</script>
