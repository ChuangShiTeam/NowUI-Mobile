<style src="./detail.css" scoped></style>
<template src="./detail.html"></template>

<script>
    import {WxcCell, WxcLightbox} from 'weex-ui';

    import mixins from '../../mixins/index';

    var moment = require('moment');
    moment.locale('zh-cn');

    export default {
        components: {
            WxcCell,
            WxcLightbox
        },
        mixins: [mixins],
        data() {
            return {
                topicId: '',
                topic: {},
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
            console.log('开始加载话题 : ' + weex.config.parameter.topicId + ' 的数据');
            this.topicId = weex.config.parameter.topicId;

            this.handleLoadTopic();
        },
        methods: {
            handleLoadTopic(){
                if (this.topicId) {
                    this.request({
                        url: '/topic/mobile/v1/find',
                        data: {
                            topicId: this.topicId
                        },
                        success: (data) => {
                            this.topic = data;
                            console.log(this.topic)
                        },
                        error: () => {
                        }
                    });
                }
            },
            handleHomepage() {
                this.push('/view/member/homepage.html');
            },
            handleOpenImage() {
                this.isShow = true;
            },
            handleCloseImage() {
                this.isShow = false;
            }
        },
        filters: {
            formNow: function(value) {
                return moment(value).fromNow();
            }
        }
    }
</script>