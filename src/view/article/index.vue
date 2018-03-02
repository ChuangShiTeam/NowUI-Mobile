<style src="./index.css" scoped></style>
<template src="./index.html"></template>

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

        },
        mounted() {
            this.request({
                url: '/article/admin/v1/list',
                data: {
                    userAccount: '123',
                    smsCaptchaCode: ''
                },
                success: (data) => {
                    console.log(data);
                }
            });
        },
        methods: {
            handleLoad() {
                console.log(1);
            }
        }
    }
</script>
