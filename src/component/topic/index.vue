<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script type="text/ecmascript-6">
    import {WxcDialog, WxcCell, WxcPopup, WxcLoading} from 'weex-ui';

    import mixins from '../../mixins/index';

    var moment = require('moment');
    moment.locale('zh-cn');


    export default {
        components: {
            WxcDialog,
            WxcCell,
            WxcPopup,
            WxcLoading
        },
        props: {
            topic: {
                type: Object,
                required: true
            },
            containerStyle: {
                type: Object
            }
        },
        mixins: [mixins],
        data() {
            return {
                isShowDeleteDialog: false,
                isShowClosePopup: false,
                isShowLoaing: false
            }
        },
        created() {
        },
        mounted() {

        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            handleClickLikeTopic() {
                this.isShowLoaing = true;

                this.request({
                    url: this.topic.topicUserIsLike ? '/topic/user/unlike/mobile/v1/save' : '/topic/user/like/mobile/v1/save',
                    data: {
                        topicId: this.topic.topicId,
                        memberId: this.getMemberId(),
                        userNickName: this.getUserNickName(),
                        userAvatarFilePath: this.getUserAvatarFilePath()
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

                        this.isShowLoaing = false;
                    },
                    error: () => {
                        this.isShowLoaing = false;
                    }
                });

            },
            handleBookmarkTopic() {
                this.isShowLoaing = true;

                this.request({
                    url: this.topic.topicUserIsBookmark ? '/topic/user/unbookmark/mobile/v1/save' : '/topic/user/bookmark/mobile/v1/save',
                    data: {
                        topicId: this.topic.topicId,
                        memberId: this.getMemberId(),
                        userNickName: this.getUserNickName(),
                        userAvatarFilePath: this.getUserAvatarFilePath(),

                        topicFirstMediaFilePath: this.topic.topicMediaList[0].topicMediaFilePath,
                        topicUserNickName: this.topic.userNickName,
                        topicSummary: this.topic.topicSummary,
                        topicUserAvatarFilePath: this.topic.userAvatarFilePath,
                        topicMemberId: this.topic.memberId
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

                        this.isShowLoaing = false;
                    },
                    error: () => {
                        this.isShowLoaing = false;
                    }
                });
            },
            handleMemberHomepage(memberId) {
                this.push('/member/homepage.html?memberId=' + memberId);
            },
            handleTopic(topicId) {
                this.push('/topic/detail.html?topicId=' + topicId);
            },
            handleForumHomePage(forumId) {
                this.push('/forum/homepage.html?forumId=' + forumId);
            },
            handleFollow(memberId) {
                if (memberId) {
                    this.request({
                        url: this.topic.memberIsFollow ? '/sns/member/follow/mobile/v1/delete' : '/sns/member/follow/mobile/v1/save',
                        data: {
                            followMemberId: memberId
                        },
                        success: (data) => {
                            if (data){
                                this.topic.memberIsFollow = !this.topic.memberIsFollow;
                            }

                        },
                        error: () => {
                        }
                    });
                }
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
