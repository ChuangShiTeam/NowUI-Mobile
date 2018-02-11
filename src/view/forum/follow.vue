<style src="./follow.css" scoped></style>
<template src="./follow.html"></template>

<script>
    import {WxcMinibar, WxcCell, Utils} from 'weex-ui';

    import Topic from '../../component/topic/index.vue';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            Topic
        },
        data: () => ({
            followForumList: [{
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }, {
                name: '我加入的圈子',
                description: '这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入',
                memberName: '小可爱',
                number: 21
            }]
        }),
        created() {
            this.containerStyle = {
                height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 - 90
            };
        },
        mounted() {

        },
        methods: {
            handleLoad() {
                console.log(1);
            }
        }
    }
</script>
