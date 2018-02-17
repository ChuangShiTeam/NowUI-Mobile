<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcMinibar, WxcCell, WxcEpSlider, WxcPanItem, Utils} from 'weex-ui';

    import Topic from '../../component/topic/index.vue';

    import util from '../../common/util';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            WxcEpSlider,
            WxcPanItem,
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
            }],
            topicList: [{
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }]
            }]
        }),
        created() {
            this.containerStyle = {
                height: util.getPageHeight() - 90 - 80
            };
        },
        mounted() {

        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            handleClickFollowForum(e) {
                util.push('/view/forum/follow.html');
            },
            handleSearch() {
                this.push('/view/forum/search.html');
            }
        }
    }
</script>
