<style src="./add.css" scoped></style>
<template src="./add.html"></template>

<script>
    import {WxcMinibar, WxcCell, WxcLoading} from 'weex-ui';

    import mixins from '../../mixins/index';

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
            forumName: '',
            forumDescription: ''
        }),
        created() {

        },
        mounted() {

        },
        methods: {
            handleForumNameChange(event) {
                this.forumName = event.value;
            },
            handleForumDescriptionChange(event) {
                this.forumDescription = event.value;
            },
            handleSubmit() {
                this.isLoad = true;

                this.request({
                    url: '/forum/mobile/v1/save',
                    data: {
                        forumName: this.forumName,
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
