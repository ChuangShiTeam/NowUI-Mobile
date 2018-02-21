<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcCell, WxcIcon} from 'weex-ui';

    import mixins from '../../mixins/index';

    export default {
        components: {
            WxcCell,
            WxcIcon
        },
        props: {
            containerStyle: {
                type: Object
            }
        },
        mixins: [mixins],
        data() {
            return {
                imageList: [{}, {}, {}, {}]
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            handleClose(index) {
                var imageList = this.imageList;
                imageList.splice(index, 1);
                this.imageList = imageList;
            },
            handleUpload(response) {

                // if (response.errcode == 0) {
                //     this.src = res.data.src;
                // }
            }
        }
    }
</script>
