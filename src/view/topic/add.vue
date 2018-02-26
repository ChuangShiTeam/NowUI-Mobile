<style src="./add.css" scoped></style>
<template src="./add.html"></template>

<script>
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
            imageList: []
        }),
        created() {

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
                this.push('/view/topic/location.html');
            },
            handleRemind() {
                this.push('/view/topic/remind.html');
            },
            handleTag() {
                this.push('/view/topic/tag.html');
            }
        }
    }
</script>
