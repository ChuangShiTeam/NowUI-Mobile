<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script type="text/ecmascript-6">
    import {WxcDialog, WxcCell, WxcPopup} from 'weex-ui';

    import mixins from '../../mixins/index';

    var moment = require('moment');
    moment.locale('zh-cn');


    export default {
        components: {
            WxcDialog,
            WxcCell,
            WxcPopup
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
            return {
                isShowDeleteDialog: false,
                isShowClosePopup: false
            }
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
            handleClickLikeTopic() {
                this.request({
                    url: this.topic.topicUserIsLike ? '/topic/user/unlike/mobile/v1/save' : '/topic/user/like/mobile/v1/save',
                    data: {
                        topicId: this.topic.topicId,
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
                        topicId: this.topic.topicId,
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
            handleMemberHomepage(memberId) {
                this.push('/view/member/homepage.html?memberId=' + memberId);
            },
            handleTopic(topicId) {
                this.push('/view/topic/detail.html?topicId=' + topicId);
            },
            handleForumHomePage(forumId) {
                this.push('/view/forum/homepage.html?forumId=' + forumId);
            },
            handleFollow() {

            },
            handleDelete() {
              this.isShowDeleteDialog = true;
            },
            handleDeleteConfirm() {
                this.isShowDeleteDialog = false;
            },
            handleDeleteCancel() {
                this.isShowDeleteDialog = false;
            },
            handleClose() {
                this.isShowClosePopup = true
            },
            handleCloseClick() {
                this.isShowClosePopup = false
            }
        },
        filters: {
            formNow: function(value) {
                return moment(value).fromNow();
            }
        }
    }
</script>
