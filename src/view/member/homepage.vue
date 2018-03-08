<style src="./homepage.css" scoped></style>
<template src="./homepage.html"></template>

<script type="text/ecmascript-6">
    import {WxcMinibar, WxcCell, WxcLoading} from 'weex-ui';

    import mixins from '../../mixins/index';

    import Topic from '../../component/topic/index.vue';

    var moment = require('moment');
    moment.locale('zh-cn');

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            Topic,
            WxcLoading
        },
        mixins: [mixins],
        data: () => ({
            memberId: '',
            member: {},
            topicPageIndex: 1,
            topicPageSize: 20,

            topicTotal: 0,
            topicList: [],

            commentPageIndex: 1,
            commentPageSize: 3,

            selfHomePage: false,

            isShowLoaing: false
        }),
        created() {
            this.memberId = weex.config.parameter.memberId;
            if (this.memberId){
                if (this.memberId === this.getMemberId()){
                    this.handleLoadSelfMemberInfo();
                    this.handleLoadSelfTopicList();
                    this.selfHomePage = true;
                }else {
                    this.handleLoadOtherMemberInfo(this.memberId);
                    this.handleLoadOtherTopicList(this.memberId);
                }
            } else {
                this.handleLoadSelfMemberInfo();
                this.handleLoadSelfTopicList();
                this.selfHomePage = true;
            }
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

            handleLoadOtherTopicList(memberId) {
                console.log('开始加载别人的个人主页动态列表')
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
            },
            handleLoadSelfTopicList() {
                console.log('开始加载自己的个人主页动态列表')
                this.request({
                    url: '/topic/mobile/v1/self/home/topic',
                    data: {
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
            },
            handleLoadSelfMemberInfo() {
                console.log('开始加载自己的个人主页信息')
                this.request({
                    url: '/topic/mobile/v1/home/self/info',
                    data: {},
                    success: (data) => {
                        this.member = data
                    },
                    error: () => {
                    }
                });
            },
            handleLoadOtherMemberInfo(memberId) {
                if (memberId) {
                    console.log('开始加载别人的个人主页信息')
                    this.request({
                        url: '/topic/mobile/v1/home/user/info',
                        data: {
                            memberId: memberId
                        },
                        success: (data) => {
                            this.member = data
                        },
                        error: () => {
                        }
                    });
                }
            },
            handleFollow(memberId) {
                this.isShowLoaing = true;
                if (memberId) {
                    this.request({
                        url: this.member.memberIsFollow ? '/sns/member/follow/mobile/v1/delete' : '/sns/member/follow/mobile/v1/save',
                        data: {
                            followMemberId: memberId
                        },
                        success: (data) => {
                            if (data){
                                this.member.memberIsFollow = !this.member.memberIsFollow;
                                if (this.member.memberIsFollow){
                                    this.member.memberBeFollowCount = this.member.memberBeFollowCount + 1;
                                }else{
                                    if(this.member.memberBeFollowCount > 0){
                                        this.member.memberBeFollowCount = this.member.memberBeFollowCount - 1;
                                    }
                                }
                            }
                            this.isShowLoaing = false;
                        },
                        error: () => {
                            this.isShowLoaing = false;
                        }
                    });
                }
            }

        }
    }
</script>
