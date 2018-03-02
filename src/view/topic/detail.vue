<style src="./detail.css" scoped></style>
<template src="./detail.html"></template>

<script type="text/ecmascript-6">
    import {WxcCell, WxcLightbox} from 'weex-ui';

    import mixins from '../../mixins/index';

    var moment = require('moment');
    moment.locale('zh-cn');

    export default {
        components: {
            WxcCell,
            WxcLightbox
        },
        mixins: [mixins],
        data() {
            return {
                topicId: '',
                topic: {},

                commentPageIndex: 1,
                commentPageSize: 50,
                topicCommentList: [],
                topicCommentTotal: 0,


                isShow: false,
                imageList:[],
                // imageList: [
                //     {src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
                //     {src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
                //     {src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
                // ],


                // feedbackList: [{}, {}, {}, {}, {}, {}]
            }
        },
        created() {
            console.log('开始加载话题 : ' + weex.config.parameter.topicId + ' 的数据');
            this.topicId = weex.config.parameter.topicId;

            this.handleLoadTopic();
            this.handleLoadComment();
        },
        methods: {
            handleLoadTopic(){
                if (this.topicId) {
                    this.request({
                        url: '/topic/mobile/v1/find',
                        data: {
                            topicId: this.topicId
                        },
                        success: (data) => {
                            this.topic = data;

                            this.imageList = data.topicMediaList.map((topicMedia, index) => {
                                console.log(this.imageHost + topicMedia.topicMedia)
                                return {
                                    src: this.imageHost + topicMedia.topicMedia,
                                }
                            });
                        },
                        error: () => {
                        }
                    });
                }
            },
            handleLoadComment() {
                if (this.topicId) {
                    this.request({
                        url: '/topic/comment/mobile/v1/list',
                        data: {
                            topicId: this.topicId,
                            pageIndex: this.commentPageIndex,
                            pageSize: this.commentPageSize,
                            systemCreateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                            excludeCommentIdList: []
                        },
                        success: (data) => {
                            if (data && data.list && data.list.length > 0) {
                                this.topicCommentTotal = data.total;
                                this.topicCommentList = data.list;
                            }
                            console.log(this.topicCommentList)
                        },
                        error: () => {
                        }
                    });
                }
            },
            handleClickLikeTopic() {
                this.request({
                    url: this.topic.topicUserIsLike ? '/topic/user/unlike/mobile/v1/save' : '/topic/user/like/mobile/v1/save',
                    data: {
                        topicId: this.topicId,
                        userNickName: '谁用了我的头像(测试)',
                        userAvatar: '/upload/df2078d6c9eb46babb0df957127273ab/3bdfcbb00f90415989fb53e6677c25df/ae74752bc95c4ed6a9ebbd020d3b4105.jpg'
                    },
                    success: (data) => {
                        if (data) {
                            let topic = this.topic;
                            topic.topicUserIsLike = !topic.topicUserIsLike;
                            if (topic.topicUserIsLike) {
                                topic.topicCountLike += 1;
                            } else {
                                topic.topicCountLike -= 1;
                            }

                            this.topic = topic;
                        }
                        console.log(this.topic)
                    },
                    error: () => {
                    }
                });

            },
            handleBookmarkTopic() {
                this.request({
                    url: this.topic.topicUserIsBookmark ? '/topic/user/unbookmark/mobile/v1/save' : '/topic/user/bookmark/mobile/v1/save',
                    data: {
                        topicId: this.topicId,
                        userNickName: '谁用了我的头像(测试)',
                        userAvatar: '/upload/df2078d6c9eb46babb0df957127273ab/3bdfcbb00f90415989fb53e6677c25df/ae74752bc95c4ed6a9ebbd020d3b4105.jpg'
                    },
                    success: (data) => {
                        if (data) {
                            let topic = this.topic;
                            topic.topicUserIsBookmark = !topic.topicUserIsBookmark;
                            if (topic.topicUserIsBookmark) {
                                topic.topicCountBookmark += 1;
                            } else {
                                topic.topicCountBookmark -= 1;
                            }

                            this.topic = topic;
                        }
                        console.log(this.topic)
                    },
                    error: () => {
                    }
                });
            },
            handleClickLikeComment(index) {
                this.request({
                    url: this.topicCommentList[index].topicCommentIsLike ? '/topic/comment/user/unlike/mobile/v1/save' : '/topic/comment/user/like/mubile/v1/save',
                    data: {
                        commentId: this.topicCommentList[index].topicCommentId
                    },
                    success: (data) => {
                        if (data) {
                            let topicCommentList = this.topicCommentList;
                            let comment = topicCommentList[index];
                            comment.topicCommentIsLike = !comment.topicCommentIsLike;
                            if (comment.topicCommentIsLike) {
                                comment.topicCommentLikeCount += 1;
                            } else {
                                comment.topicCommentLikeCount -= 1;
                            }
                            topicCommentList[index] = comment;

                            this.topicCommentList= topicCommentList;

                        }
                        console.log(this.topicCommentList)
                    },
                    error: () => {
                    }
                });
            },
            handleTopicUserLikeList(topicId) {
                this.push('/view/topic/like.html?topicId=' + topicId);
            },
            handleHomepage() {
                this.push('/view/member/homepage.html');
            },
            handleOpenImage() {
                this.isShow = true;
            },
            handleCloseImage() {
                this.isShow = false;
            },
            handleForumHomePage(forumId) {
                this.push('/view/forum/homepage.html?forumId=' + forumId);
            }
        },
        filters: {
            formNow: function(value) {
                return moment(value).fromNow();
            }
        }
    }
</script>