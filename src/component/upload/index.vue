<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcCell, WxcIcon} from 'weex-ui';
    import VueUploadComponent from 'vue-upload-component';

    import mixins from '../../mixins/index';

    export default {
        components: {
            WxcCell,
            WxcIcon,
            'file-upload': VueUploadComponent
        },
        props: {
            limit: {
                type: Number
            },
            containerStyle: {
                type: Object
            }
        },
        mixins: [mixins],
        data() {
            return {
                url: '',
                imageList: []
            }
        },
        created() {

        },
        mounted() {
            this.url = this.host + '/file/mobile/v1/image/upload';
        },
        methods: {
            handleClose(index) {
                var imageList = this.imageList;
                imageList.splice(index, 1);
                this.imageList = imageList;
            },
            handleInputFile: function (newFile, oldFile) {
                if (newFile && oldFile && !newFile.active && oldFile.active) {
                    if (newFile.xhr && newFile.xhr.status == 200) {
                        var response = JSON.parse(newFile.response);
                        if (response.code == 200) {
                            for (var i = 0; i < response.data.length; i++) {
                                var image = response.data[0];
                                image.filePath = this.imageHost + image.filePath;

                                this.imageList.push(image);
                            }
                        } else {
                            this.toast('上传图失败');
                        }
                    }
                }

                // 自动上传
                if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
                    if (!this.$refs.upload.active) {
                        this.$refs.upload.active = true;
                    }
                }
            },
            handleInputFilter: function (newFile, oldFile, prevent) {
                if (newFile && !oldFile) {
                    // 过滤不是图片后缀的文件
                    if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
                        return prevent()
                    }
                }

                // 创建 blob 字段 用于图片预览
                newFile.blob = ''
                let URL = window.URL || window.webkitURL
                if (URL && URL.createObjectURL) {
                    newFile.blob = URL.createObjectURL(newFile.file)
                }
            }
        }
    }
</script>
