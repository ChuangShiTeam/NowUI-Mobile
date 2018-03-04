<style src="./homepage.css" scoped></style>
<template src="./homepage.html"></template>

<script type="text/ecmascript-6">
    import {WxcMinibar, WxcCell} from 'weex-ui';

    import mixins from '../../mixins/index';

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
            memberId: '',
            topicPageIndex: 1,
            topicPageSize: 20,

            topicTotal: 0,
            topicList: [],

            commentPageIndex: 1,
            commentPageSize: 3,

            // topicList: [{
            //     topicId: '0',
            //     topicMediaList: [{
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }]
            // }, {
            //     topicId: '0',
            //     topicMediaList: [{
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }]
            // }, {
            //     topicId: '0',
            //     topicMediaList: [{
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }]
            // }, {
            //     topicId: '0',
            //     topicMediaList: [{
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }]
            // }, {
            //     topicId: '0',
            //     topicMediaList: [{
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }]
            // }, {
            //     topicId: '0',
            //     topicMediaList: [{
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }]
            // }, {
            //     topicId: '0',
            //     topicMediaList: [{
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }]
            // }, {
            //     topicId: '0',
            //     topicMediaList: [{
            //         filePath: ''
            //     }, {
            //         filePath: ''
            //     }]
            // }, {
            //     topicId: '0',
            //     topicMediaList: [{
            //         filePath: ''
            //     }]
            // }]
        }),
        created() {
            console.log('开始加载用户: ' + weex.config.parameter.memberId + ' 的个人主页');
            this.memberId = weex.config.parameter.memberId;
            this.handleLoadTopicList(this.memberId);

        },
        mounted() {

        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            hadleClickHeaderLeft() {
                // loginBroadcastChannel.postMessage({
                //     callbackName: ''
                // });
            },

            handleLoadTopicList(memberId) {
                if (memberId) {
                    this.request({
                        url: '/topic/mobile/v1/home/topic',
                        data: {
                            memberId: memberId,
                            pageIndex: this.topicPageIndex,
                            pageSize: this.topicPageSize,
                            systemCreateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                            excludeTopicIdList: [],
                            commentPageIndex: this.commentPageIndex,
                            commentPageSize: this.commentPageSize
                        },
                        success: (data) => {
                            if (data && data.list && data.list.length > 0) {

                                let topicList = data.list;
                                let topicTotal = data.total;
                                this.topicTotal= topicTotal,
                                this.topicList= topicList
                                    // this.hasMore: topicList.length < topicTotal
                            }
                            console.log(this.topicList)
                        },
                        error: () => {
                        }
                    });
                }
            }
        }
    }
</script>
