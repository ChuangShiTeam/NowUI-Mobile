<style src="./detail.css" scoped></style>
<template src="./detail.html"></template>

<script type="text/ecmascript-6">
    import {WxcCell, WxcLightbox, WxcLoading} from 'weex-ui';

    import mixins from '../../mixins/index';

    var moment = require('moment');
    moment.locale('zh-cn');

    export default {
        components: {
            WxcCell,
            WxcLightbox,
            WxcLoading
        },
        mixins: [mixins],
        data() {
            return {
                topicId: '',
                topic: {},

                selfMemberId: '',

                commentPageIndex: 1,
                commentPageSize: 50,
                topicCommentList: [],
                topicCommentTotal: 0,

                isShowLoaing: false,
                isShow: false,
                imageList:[],
                // imageList: [
                //     {src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
                //     {src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
                //     {src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
                // ],

                placeholder: '我也要说点什么',
                topicReplyMemberId: '',
                topicReplyCommentId: '',
                topicReplyuserAvatarFilePath: '',
                topicReplyUserNickName: '',
                topicCommentContent: ''

                // feedbackList: [{}, {}, {}, {}, {}, {}]
            }
        },
        created() {
            this.selfMemberId = this.getMemberId();

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
                            topicId: this.topicId,
                            memberId: this.getMemberId()
                        },
                        success: (data) => {
                            this.topic = data;
                            this.imageList = data.topicMediaList.map((topicMedia, index) => {
                                console.log(this.imageHost + topicMedia.topicMediaFilePath)
                                return {
                                    src: this.imageHost + topicMedia.topicMediaFilePath,
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
                this.isShowLoaing = true;
                this.request({
                    url: this.topic.topicUserIsLike ? '/topic/user/unlike/mobile/v1/save' : '/topic/user/like/mobile/v1/save',
                    data: {
                        topicId: this.topicId,
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
                        console.log(this.topic)

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
                        topicId: this.topicId,
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
                        console.log(this.topic)
                        this.isShowLoaing = false;
                    },
                    error: () => {
                        this.isShowLoaing = false;
                    }
                });
            },
            handleClickLikeComment(index) {
                this.isShowLoaing = true;
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

                        this.isShowLoaing = false;
                    },
                    error: () => {
                        this.isShowLoaing = false;
                    }
                });
            },
            handleTopicUserLikeList(topicId) {
                this.push('/topic/like.html?topicId=' + topicId);
            },
            handleHomepage() {
                this.push('/member/homepage.html');
            },
            handleOpenImage() {
                this.isShow = true;
            },
            handleCloseImage() {
                this.isShow = false;
            },
            handleForumHomePage(forumId) {
                this.push('/forum/homepage.html?forumId=' + forumId);
            },
            handleMemberHomepage(memberId) {
                if (memberId){
                    this.push('/member/homepage.html?memberId=' + memberId);
                }else {
                    this.push('/member/homepage.html');
                }

            },
            handleFollow(memberId) {
                if (memberId) {
                    this.isShowLoaing = true;
                    this.request({
                        url: this.topic.memberIsFollow ? '/sns/member/follow/mobile/v1/delete' : '/sns/member/follow/mobile/v1/save',
                        data: {
                            followMemberId: memberId
                        },
                        success: (data) => {
                            if (data){
                                this.topic.memberIsFollow = !this.topic.memberIsFollow;
                            }
                            console.log(data)
                            this.isShowLoaing = false;
                        },
                        error: () => {
                            this.isShowLoaing = false;
                        }
                    });
                }
            },
            handleChooseReply(topicReplyMemberId, topicReplyUserNickName, topicReplyUserAvatarFilePath, topicReplyCommentId) {
                if (topicReplyMemberId === this.getMemberId()) {
                    this.topicReplyMemberId = '',
                    this.placeholder = '我也要说点什么',
                    this.topicReplyCommentId = '',
                    this.topicReplyUserNickName = '',
                    this.topicReplyuserAvatarFilePath = '',
                    this.topicCommentContent = ''
                } else {
                    this.topicReplyMemberId = topicReplyMemberId,
                    this.placeholder = '回复: ' + topicReplyUserNickName + ' ：',
                    this.topicReplyCommentId = topicReplyCommentId,
                    this.topicReplyUserNickName = topicReplyUserNickName,
                    this.topicReplyuserAvatarFilePath = topicReplyUserAvatarFilePath
                }

            },
            handleCancelReply() {
                this.topicReplyMemberId = '',
                this.placeholder = '我也要说点什么',
                this.topicReplyCommentId = '',
                this.topicReplyUserNickName = '',
                this.topicReplyuserAvatarFilePath = '',
                this.topicCommentContent = ''
            },
            handleSubmit() {
                let topicId = this.topic.topicId;
                if (!topicId){
                    return;
                }
                if (this.topicCommentContent === '') {
                    this.toast('评论不能为空', () => {
                    });
                    return;
                }
                // 判断整个字符串是否为空
                if (this.topicCommentContent.charAt(0) === ' ') {
                    let arr = this.topicCommentContent.split('');
                    let isNone = true;
                    for(var j = 0,len = arr.length; j < len; j++){
                        if(arr[j] !== ' '){
                            isNone = false;
                        }
                    }
                    if (isNone){
                        this.toast('不说点什么?', () => {
                        });
                        return;
                    }
                }

                this.isShowLoaing = true;
                this.request({
                    url: '/topic/comment/mobile/v1/save',
                    data: {
                        topicId: topicId,

                        topicReplyMemberId: this.topicReplyMemberId,
                        topicReplyCommentId: this.topicReplyCommentId,
                        topicReplyUserAvatarFilePath: this.topicReplyuserAvatarFilePath,
                        topicReplyUserNickName: this.topicReplyUserNickName,

                        memberId: this.getMemberId(),
                        userNickName: this.getUserNickName(),
                        userAvatarFilePath: this.getUserAvatarFilePath(),

                        topicCommentContent: this.topicCommentContent
                    },
                    success: (data) => {
                        if (data) {
                            this.handleLoadComment();
                            this.handleCancelReply();
                        }
                        this.isShowLoaing = false;
                    },
                    error: () => {
                        this.isShowLoaing = false;
                    }
                });

            }
        },
        filters: {
            formNow: function(value) {
                return moment(value).fromNow();
            }
        }
    }
</script>