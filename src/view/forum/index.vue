<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcMinibar, WxcCell, WxcEpSlider, WxcPanItem} from 'weex-ui';

    import mixins from '../../mixins/index';
    import event from "../../common/event";

    import Topic from '../../component/topic/index.vue';

    var moment = require('moment');

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            WxcEpSlider,
            WxcPanItem,
            Topic
        },
        mixins: [mixins],
        data: () => ({
            forumJoinPageIndex : 1,
            forumJoinPageSize : 3,
            followForumTotal : 0,
            followForumList: [],

            hotTopicPageIndex: 1,
            hotTopicPageSize: 3,
            hotTopicTotal: 0,
            hotTopicList: [],


            // followForumList: [{
            //     name: '我加入的圈子',
            //     description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
            //     memberName: '小可爱',
            //     number: 21
            // }, {
            //     name: '我加入的圈子',
            //     description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
            //     memberName: '小可爱',
            //     number: 21
            // }, {
            //     name: '我加入的圈子',
            //     description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
            //     memberName: '小可爱',
            //     number: 21
            // }],
            topicList: [{
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }]
            }]
        }),
        created() {
            this.handleLoadJoinForumList();
            this.handleLoadHotTopicList();

        },
        mounted() {

        },
        methods: {
            handleLoadJoinForumList() {
                console.log('开始载入加入的论坛列表');
                this.request({
                    url: '/forum/user/follow/mobile/v1/list',
                    data: {
                        pageIndex: this.forumJoinPageIndex,
                        pageSize: this.forumJoinPageSize
                    },
                    success: (data) => {
                        if (data.total > 0) {
                            this.followForumTotal = data.total,
                            this.followForumList = data.list
                        }
                        console.log(this.followForumTotal)
                        console.log(this.followForumList)
                    },
                    error: () => {
                    }
                });
            },
            handleLoadHotTopicList() {
                console.log('开始载入热门动态列表');
                this.request({
                    url: '/topic/mobile/v1/home/list',
                    data: {
                        pageIndex: this.hotTopicPageIndex,
                        pageSize: this.hotTopicPageSize,
                        systemCreateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                        excludeTopicIdList: []
                    },
                    success: (data) => {
                        if (data.total > 0) {
                            this.hotTopicTotal = data.total,
                            this.hotTopicList = data.list
                        }
                        console.log( 'systemTime : ' + moment().format('YYYY-MM-DD HH:mm:ss'))
                    },
                    error: () => {
                    }
                });
            },
            handleHomepage(forumId) {
                this.push('/view/forum/homepage.html?forumId=' + forumId);
            },
            handleTopic() {
                event.$emit('sns-click', {
                    name: 'topic'
                });
            },
            handleFollow(e) {
                this.push('/view/forum/follow.html');
            },
            handleAdd() {
                this.push('/view/forum/add.html');
            },
            handleSearch() {
                this.push('/view/forum/search.html');
            }
        }
    }
</script>
