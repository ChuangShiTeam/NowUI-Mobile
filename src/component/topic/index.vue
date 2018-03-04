<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcCell} from 'weex-ui';

    import mixins from '../../mixins/index';

    var moment = require('moment');
    moment.locale('zh-cn');

    export default {
        components: {
            WxcCell
        },
        props: {
            topic: {
                type: Object,
                required: true
            },
            index: 0,
            containerStyle: {
                type: Object
            }
        },
        mixins: [mixins],
        data() {
            return {}
        },
        created() {
            console.log(this.index + ' : ' + this.topic.topicId)
            console.log(this.topic.topicMediaList[0].topicMedia)
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
            handleTopic(topicId) {
                this.push('/view/topic/detail.html?topicId=' + topicId);
            }
        },
        filters: {
            formNow: function(value) {
                return moment(value).fromNow();
            }
        }
    }
</script>
