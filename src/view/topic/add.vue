<style src="./add.css" scoped></style>
<template src="./add.html"></template>

<script type="text/ecmascript-6">
    import {WxcMinibar, WxcCell} from 'weex-ui';

    import mixins from '../../mixins/index';
    import event from "../../common/event";

    import Upload from '../../component/upload/index.vue';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            Upload
        },
        mixins: [mixins],
        data: () => ({
            imageList: [],
            topicSummary: '',

            longtitude: '',
            latitude: '',
            topicLocation : '',
            topicIsLocation : false,

            forumList: [],
            topicTipUserList: [],
            topicMediaList: [],
            userNickName: '',
            userAvatar: '',

        }),
        created() {
            this.hanldeLoadForum();

        },
        mounted() {
            event.$on('topic-add-upload', (data) => {
                this.imageList = data.imageList;
            });
        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            handleLocation() {
                this.push('/topic/location.html');
            },
            handleRemind() {
                this.push('/topic/remind.html');
            },
            handleTag() {
                this.push('/topic/tag.html');
            },
            handleTopicSummaryInput(event) {
                this.topicSummary = event.value;
            },
            handleAddTopic() {
                console.log(this.imageList);
                    this.topicMediaList = this.imageList.map((topicMedia, index) => {
                        return {
                            topicMediaFileId: topicMedia.fileId,
                            topicMediaFilePath: topicMedia.filePath,
                            topicMediaType: 'IMAGE',
                            topicMediaSort: index + 1
                        }
                    });

                    // TODO
                let topicTipUserList = '';
                this.storage.getItem('topic-member-remind-list' + this.version, res => {
                    if(res.result === 'success'){
                        topicTipUserList = res.data;
                    }
                });
                this.request({
                    url: '/topic/mobile/v1/save',
                    data: {
                        longtitude: this.longtitude,
                        latitude: this.latitude,
                        topicLocation : this.topicLocation,
                        topicIsLocation : this.topicIsLocation,

                        topicSummary: this.topicSummary,

                        topicForumList: this.forumList.filter(forum => forum.selected).map(forum => {
                            return {
                                forumId: forum.forumId,
                                forumName: forum.forumName
                            }
                        }),
                        topicTipUserList: topicTipUserList,
                        topicMediaList: this.topicMediaList,
                        userNickName: this.getUserNickName(),
                        userAvatarFilePath: this.getUserAvatarFilePath(),
                        memberId: this.getMemberId()
                    },
                    success: (data) => {
                        this.toast('发布成功', () => {
                            this.pop();
                        });
                    },
                    error: () => {
                    }
                });

            },
            hanldeLoadForum() {
                this.request({
                    url: '/forum/user/follow/mobile/v1/name/list',
                    data: {
                        memberId: this.getMemberId()
                    },
                    success: (data) => {
                        let forumList = data;
                        if (forumList && forumList.length > 0) {
                            this.forumList = forumList
                        }
                        // this.toast('发布成功', () => {
                        //     this.pop();
                        // });
                    },
                    error: () => {
                    }
                });
            },
            handleSelectForum(index) {
                let forumList = this.forumList;
                let forum = forumList[index];
                forum.selected = !forum.selected;


                // forumList[index] = forum;
                //TODO vue不会检测到根据索引直接赋值,和数字长度变化然后重新渲染页面,可按照下面两个方法达到效果
                // Vue.set(forumList, index, forum);
                forumList.splice(index, 1, forum)

                this.forumList = forumList;

                let theSelectForumList = this.forumList.filter(forum => forum.selected).map(forum => {
                    return {
                        forumId: forum.forumId,
                        forumName: forum.forumName
                    }
                });
                console.log(theSelectForumList)
            }
        }
    }
</script>
