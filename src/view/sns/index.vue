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
            activeIndex: 0
        }),
        created() {

        },
        mounted() {

        },
        methods: {
            handleClickForum() {
                if (this.activeIndex != 0) {
                    this.activeIndex = 0;
                }
            },
            handleClickTopic() {
                if (this.activeIndex != 1) {
                    this.activeIndex = 1;
                }
            }
        }
    }
</script>
