<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcMinibar, WxcCell, Utils} from 'weex-ui';

    import Topic from '../../component/topic/index.vue';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            Topic
        },
        props: {
            isShow: {
                type: Boolean,
                required: true
            }
        },
        data: () => ({
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
                height: Utils.env.getPageHeight() - 90 - 80
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