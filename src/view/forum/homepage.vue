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
                forum : {},
                forumId : '',
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
            console.log('开始加载论坛 : ' + weex.config.parameter.forumId + ' 的数据');
            this.forumId = weex.config.parameter.forumId;
            this.handleLoadForumInfo(this.forumId);
        },
        methods: {

            handleMember() {
                this.push('/view/member/homepage.html')
            },
            handleLoadForumInfo(forumId)  {
                if (forumId) {
                    this.request({
                        url: '/forum/mobile/v1/home',
                        data: {
                            forumId: forumId
                        },
                        success: (data) => {
                            if (data) {
                                this.forum = data
                            }
                            console.log(this.forum)
                        },
                        error: () => {
                        }
                    });
                }
            }

        }
    }
</script>