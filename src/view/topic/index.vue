<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script type="text/ecmascript-6">
    import {WxcMinibar, WxcCell} from 'weex-ui';

    import mixins from '../../mixins/index';
    import event from "../../common/event";

    import Topic from '../../component/topic/index.vue';

    var moment = require('moment');
    moment.locale('zh-cn');

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            Topic
        },
        mixins: [mixins],
        data: () => ({
            topicPageIndex: 1,
            topicPageSize: 5,
            topicTotal: 0,
            topicList: []
        }),
        created() {
            this.handleLoad();
        },
        mounted() {

        },
        methods: {
            handleLoad() {
                console.log('开始载入话题首页数据');

                this.request({
                    url: '/topic/mobile/v1/home/list',
                    data: {
                        pageIndex: this.topicPageIndex,
                        pageSize: this.topicPageSize,
                        systemCreateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                        excludeTopicIdList: []
                    },
                    success: (data) => {
                        if (data.total > 0) {
                            this.topicTotal = data.total,
                            this.topicList = this.topicList.concat(data.list)
                        }
                        console.log( '载入话题首页数据 - systemTime : ' + moment().format('YYYY-MM-DD HH:mm:ss'))
                    },
                    error: () => {
                    }
                });


            },
            handleForum() {
                event.$emit('sns-click', {
                    name: 'forum'
                });
            },
            handleHomepage() {
                this.push('/view/member/homepage.html');
            },
            handleSearch() {
                this.push('/view/topic/search.html');
            },
            handleAdd() {
                this.push('/view/topic/add.html');
            },

        }
    }
</script>