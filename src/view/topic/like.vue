<style src="./like.css" scoped></style>
<template src="./like.html"></template>

<script type="text/ecmascript-6">
    import {WxcMinibar, WxcCell} from 'weex-ui';

    import mixins from '../../mixins/index';

    export default {
        components: {
            WxcMinibar,
            WxcCell
        },
        mixins: [mixins],
        data() {
            return {
                topicId: '',
                userLikePageIndex: 1,
                userLikePageSize: 50,
                userLikeList: [],
                userLikeTotal: 0
            }
        },
        created() {
            console.log('开始加载话题 : ' + weex.config.parameter.topicId + ' 的点赞的用户列表');
            this.topicId = weex.config.parameter.topicId;

            this.handleLoadTopicUserLikeList();
        },
        methods: {
            handleLoadTopicUserLikeList() {
                if (this.topicId) {
                    this.request({
                        url: '/topic/user/like/mobile/v1/list',
                        data: {
                            topicId: this.topicId,
                            pageIndex: this.userLikePageIndex,
                            pageSize: this.userLikePageSize
                        },
                        success: (data) => {
                            this.userLikeList = data.list,
                            this.userLikeTotal = data.total,
                            console.log(data)
                        },
                        error: () => {
                        }
                    });
                }
            },
            handleFollow(memberId, index) {
                if (memberId) {
                    this.request({
                        url: this.userLikeList[index].memberIsFollow ? '/member/follow/mobile/v1/delete' : '/member/follow/mobile/v1/save',
                        data: {
                            followMemberId: memberId
                        },
                        success: (data) => {
                            if (data){
                                let userLikeList = this.userLikeList;
                                let userLike = userLikeList[index];
                                userLike.memberIsFollow = !userLike.memberIsFollow;
                                userLikeList[index] = userLike;

                                this.userLikeList = userLikeList;
                            }
                            console.log(data)
                        },
                        error: () => {
                        }
                    });
                }
            }
        }
    }
</script>