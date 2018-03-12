<style src="./add.css" scoped></style>
<template src="./add.html"></template>

<script>
    import {WxcMinibar, WxcCell, WxcLoading} from 'weex-ui';

    import mixins from '../../mixins/index';
    import event from "../../common/event";

    import Topic from '../../component/topic/index.vue';
    import Upload from '../../component/upload/index.vue';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            WxcLoading,
            Topic,
            Upload
        },
        mixins: [mixins],
        data: () => ({
            isLoad: false,
            imageList: [],
            forumName: '',
            forumMedia: '',
            forumDescription: '',
            forumBackgroundMediaList: ''
        }),
        created() {

        },
        mounted() {
            event.$on('forum-add-upload', (data) => {
                this.imageList = data.imageList;
            });

            event.$on('forum-add-background-upload', (data) => {
                this.forumBackgroundMediaList = data.imageList;
            });
        },
        methods: {
            handleForumNameInput(event) {
                this.forumName = event.value;
            },
            handleForumDescriptionInput(event) {
                this.forumDescription = event.value;
            },
            handleSubmit() {
                if (this.forumName == '') {
                    this.toast('请输入圈子名称');

                    return;
                }

                if (this.imageList.length == 0) {
                    this.toast('请上传圈子照片');

                    return;
                }

                if (this.forumBackgroundMediaList.length == 0) {
                    this.toast('请上传圈子背景照片');

                    return;
                }

                this.forumBackgroundMediaList = this.forumBackgroundMediaList.map((forumBackgroundMedia, index) => {
                    return {
                        forumBackgroundMediaFileId: forumBackgroundMedia.fileId,
                        forumBackgroundMediaFilePath: forumBackgroundMedia.filePath,
                        forumBackgroundMediaType: 'IMAGE',
                        forumBackgroundMediaSort: index + 1
                    }
                });

                this.isLoad = true;
                this.request({
                    url: '/forum/mobile/v1/save',
                    data: {
                        forumName: this.forumName,
                        forumMediaType: 'IMAGE',
                        forumMediaId: this.imageList[0].fileId,
                        forumMediaFilePath: this.imageList[0].filePath,
                        forumDescription: this.forumDescription,
                        userNickName: this.getUserNickName(),
                        userAvatarFilePath: this.getUserAvatarFilePath(),
                        forumModeratorMemberId: this.getMemberId(),

                        forumBackgroundMediaList:  this.forumBackgroundMediaList
                        // memberSignature: '喵咪太可爱了!(新签名)'
                    },
                    success: (data) => {
                        this.isLoad = false;
                        this.toast('创建成功', () => {
                            this.pop();
                        });
                    },
                    error: () => {
                        this.isLoad = false;
                    }
                });
            }
        }
    }
</script>
