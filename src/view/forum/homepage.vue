<style src="./homepage.css" scoped></style>
<template src="./homepage.html"></template>

<script>
    import {WxcCell} from 'weex-ui'

    import mixins from '../../mixins/index';

    import Topic from '../../component/topic/index.vue';

    export default {
        components: {
            WxcCell,
            Topic
        },
        mixins: [mixins],
        data() {
            return {
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
            }
        },
        created() {

        },
        methods: {
            handleMember() {
                this.push('/view/member/homepage.html')
            }
        }
    }
</script>