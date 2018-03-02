<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script type="text/ecmascript-6">
    import mixins from '../../mixins/index';
    import event from "../../common/event";

    import ForumIndex from '../forum/index.vue';
    import TopicIndex from '../topic/index.vue';

    export default {
        components: {
            ForumIndex,
            TopicIndex
        },
        mixins: [mixins],
        data: () => ({
            activeIndex: 0
        }),
        created() {

        },
        mounted() {
            event.$on('sns-click', (data) => {
                switch (data.name) {
                    case 'forum':
                        this.activeIndex = 0;
                        break;
                    case 'topic':
                        this.activeIndex = 1;
                        break;
                }
            });
        },
        methods: {

        }
    }
</script>
