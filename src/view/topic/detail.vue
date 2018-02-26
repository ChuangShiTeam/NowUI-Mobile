<style src="./detail.css" scoped></style>
<template src="./detail.html"></template>

<script>
    import {WxcCell, WxcLightbox} from 'weex-ui';

    import mixins from '../../mixins/index';

    export default {
        components: {
            WxcCell,
            WxcLightbox
        },
        mixins: [mixins],
        data() {
            return {
                isShow: false,
                imageList: [
                    {src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
                    {src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
                    {src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
                ],
                feedbackList: [{}, {}, {}, {}, {}, {}]
            }
        },
        created() {

        },
        methods: {
            handleHomepage() {
                this.push('/view/member/homepage.html');
            },
            handleOpenImage() {
                this.isShow = true;
            },
            handleCloseImage() {
                this.isShow = false;
            }
        }
    }
</script>