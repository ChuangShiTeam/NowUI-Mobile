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
            forumDescription: ''
        }),
        created() {

        },
        mounted() {
            event.$on('forum-add-upload', (data) => {
                this.imageList = data.imageList;
            });
        },
        methods: {
            handleForumNameChange(event) {
                this.forumName = event.value;
            },
            handleForumDescriptionChange(event) {
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

                console.log(this.imageList[0]);

                this.isLoad = true;

                this.request({
                    url: '/forum/mobile/v1/save',
                    data: {
                        forumName: this.forumName,
                        forumMediaType: 'IMAGE',
                        forumMedia: this.imageList[0].fileId,
                        forumDescription: this.forumDescription
                    },
                    success: (data) => {
                        this.isLoad = false;

                        this.toast('创建成功', () => {
                            this.pop();
                        });
                    }
                });
            }
        }
    }
</script>
