<style src="./follow.css" scoped></style>
<template src="./follow.html"></template>

<script type="text/ecmascript-6">
    import {WxcMinibar, WxcCell} from 'weex-ui';

    import mixins from '../../mixins/index';

    import Topic from '../../component/topic/index.vue';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            Topic
        },
        mixins: [mixins],
        data: () => ({
            //TODO 不知道是不是要全部加载还是分页滚动加载
            forumJoinPageIndex : 1,
            forumJoinPageSize : 100,
            followForumTotal : 0,
            followForumList: []
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
            // }]
        }),
        created() {
            this.handleJoinForumLoad();

        },
        mounted() {


        },
        methods: {
            handleJoinForumLoad(){
                console.log('开始载入加入的论坛');
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
            handleLoad(){

            },
            handleForumHomepage(forumId) {
                this.push('/view/forum/homepage.html?forumId=' + forumId);
            },
        }
    }
</script>
