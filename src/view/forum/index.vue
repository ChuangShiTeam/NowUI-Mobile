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

            forumRecommendList: [],

            hotTopicPageIndex: 1,
            hotTopicPageSize: 3,
            hotTopicTotal: 0,
            hotTopicList: [],

        }),
        created() {
            this.handleLoadJoinForumList();
            this.handleLoadRecommendForumList();
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
                        pageSize: this.forumJoinPageSize,
                        memberId: this.getMemberId()
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
            handleLoadRecommendForumList() {
                console.log('开始载入你或许感兴趣的圈子列表');
                this.request({
                    url: '/forum/mobile/v1/recommend/list',
                    data: {
                        pageSize: 8,
                        requestMemberId: this.getMemberId()
                    },
                    success: (data) => {
                        if (data.length > 0) {
                            this.forumRecommendList = data
                        }
                        console.log( this.forumRecommendList)
                    },
                    error: () => {
                    }
                });
            },
            handleLoadHotTopicList() {
                console.log('开始载入热门动态列表');
                this.request({
                    url: '/topic/mobile/v1/hot/list',
                    data: {
                        pageIndex: this.hotTopicPageIndex,
                        pageSize: this.hotTopicPageSize,
                        systemCreateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                        excludeTopicIdList: [],
                        memberId: this.getMemberId()
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
                this.push('/forum/homepage.html?forumId=' + forumId);
            },
            handleTopic() {
                event.$emit('sns-click', {
                    name: 'topic'
                });
            },
            handleFollow(e) {
                this.push('/forum/follow.html');
            },
            handleAdd() {
                this.push('/forum/add.html');
            },
            handleSearch() {
                this.push('/forum/search.html');
            }
        }
    }
</script>
