<style src="./homepage.css" scoped></style>
<template src="./homepage.html"></template>

<script>
    import {WxcCell} from 'weex-ui'

    import mixins from '../../mixins/index';

    import Topic from '../../component/topic/index.vue';

    var moment = require('moment');
    moment.locale('zh-cn');

    export default {
        components: {
            WxcCell,
            Topic
        },
        mixins: [mixins],
        data() {
            return {
                forum : {},
                forumId : '',

                topicPageIndex: 0,
                topicPageSize: 50,
                topicTotal: 0,
                topicList: [],

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
            }
        },
        created() {
            console.log('开始加载论坛 : ' + weex.config.parameter.forumId + ' 的数据');
            this.forumId = weex.config.parameter.forumId;
            this.handleLoadForumInfo(this.forumId);
            this.handleLoadTopicList(this.forumId)
        },
        methods: {

            handleMember() {
                this.push('/view/member/homepage.html')
            },
            handleLoadForumInfo(forumId)  {
                if (forumId) {
                    this.request({
                        url: '/forum/mobile/v1/home',
                        data: {
                            forumId: forumId
                        },
                        success: (data) => {
                            if (data) {
                                this.forum = data
                            }
                            console.log(this.forum)
                        },
                        error: () => {
                        }
                    });
                }
            },

            handleLoadTopicList(forumId)  {
                if (forumId) {
                    this.request({
                        url: '/forum/mobile/v1/home/topic/list',
                        data: {
                            forumId: forumId,
                            pageIndex: this.topicPageIndex,
                            pageSize: this.topicPageSize,
                            systemCreateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                            excludeTopicIdList: []
                        },
                        success: (data) => {
                            if (data) {
                                if (data && data.list && data.list.length > 0) {
                                    let topicList = data.list;
                                    let topicTotal = data.total;
                                    this.topicTotal = topicTotal;
                                    this.topicList = topicList;
                                    // hasMore: topicList.length < topicTotal
                                }
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