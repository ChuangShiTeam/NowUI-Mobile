<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script type="text/ecmascript-6">
    import {WxcCell, WxcIcon} from 'weex-ui';
    import VueUploadComponent from 'vue-upload-component';
    import ImageCompressor from 'image-compressor.js';

    import mixins from '../../mixins/index';
    import event from "../../common/event";

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
            eventName: {
                type: String
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
            this.url = this.imageHost + '/file/mobile/v1/image/upload';
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

                                this.imageList.push(image);
                            }

                            event.$emit(this.eventName, {
                                imageList: this.imageList
                            });
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

                // Automatic compression,
                if (newFile && newFile.file && newFile.type.substr(0, 6) === 'image/' && !oldFile) {
                    // Set an error to prevent being uploaded
                    newFile.error = 'compressor'
                    new ImageCompressor(newFile.file, {
                        quality: 0.8,
                        maxWidth: 1440,
                        maxHeight: 1440,
                        success: (result) => {
                            const reader = new FileReader();
                            let base64Data;

                            reader.onload = (e) => {
                                base64Data = e.target.result;

                                this.request({
                                    url: this.imageHost + '/file/mobile/v1/base64/upload',
                                    data: {
                                        base64Data: base64Data
                                    },
                                    success: (data) => {
                                        this.imageList.push(data);

                                        event.$emit(this.eventName, {
                                            imageList: this.imageList
                                        });
                                    }
                                });
                            };

                            reader.readAsDataURL(result)
                        },
                        error: (e) => {

                        },
                    });
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
