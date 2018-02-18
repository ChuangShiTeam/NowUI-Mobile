<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcMinibar, WxcCell, WxcEpSlider, WxcPanItem} from 'weex-ui';

    import mixins from '../../mixins/index';
    import event from "../../common/event";

    import Topic from '../../component/topic/index.vue';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            WxcEpSlider,
            WxcPanItem,
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

        },
        mounted() {

        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            handleTopic() {
                event.$emit('sns-click', {
                    name: 'topic'
                });
            },
            handleHomepage() {
                this.push('/view/forum/homepage.html');
            },
            handleFollow(e) {
                this.push('/view/forum/follow.html');
            },
            handleAdd() {
                this.push('/view/forum/search.html');
            },
            handleSearch() {
                this.push('/view/forum/search.html');
            }
        }
    }
</script>
