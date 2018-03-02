<style src="./register.css" scoped></style>
<template src="./register.html"></template>

<script type="text/ecmascript-6">
    import mixins from '../../mixins/index';

    export default {
        components: {

        },
        mixins: [mixins],
        data() {
            return {
                mobile: ''
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            handlePassword() {
                //this.push('/view/login/password.html');
            },
            handleMobileChange(event) {
                this.mobile = event.value;
            },
            handleSendRegisterCaptcha() {
                if (this.mobile == '') {
                    this.toast('手机号码不能为空');

                    return;
                }

                this.request({
                    url: '/forum/mobile/v1/save',
                    data: {
                        forumName: this.forumName,
                        forumMediaType: 'IMAGE',
                        forumMedia: this.imageList[0].filePath,
                        forumDescription: this.forumDescription,
                        forumModeratorInfo : {
                            userNickName: '谁用了我的头像(新)',
                            userAvatar: '/upload/df2078d6c9eb46babb0df957127273ab/3bdfcbb00f90415989fb53e6677c25df/ae74752bc95c4ed6a9ebbd020d3b4105.jpg',
                            memberSignature: '喵咪太可爱了!(新签名)'
                        },
                        userNickName: '谁用了我的头像(新)',
                        userAvatar: '/upload/df2078d6c9eb46babb0df957127273ab/3bdfcbb00f90415989fb53e6677c25df/ae74752bc95c4ed6a9ebbd020d3b4105.jpg',
                        memberSignature: '喵咪太可爱了!(新签名)'
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
            },
            handleSubmit() {
                if (this.mobile == '') {
                    this.toast('手机号码不能为空');

                    return;
                }
                this.isLoad = true;

                this.request({
                    url: '/forum/mobile/v1/save',
                    data: {
                        forumName: this.forumName,
                        forumMediaType: 'IMAGE',
                        forumMedia: this.imageList[0].filePath,
                        forumDescription: this.forumDescription,
                        forumModeratorInfo : {
                            userNickName: '谁用了我的头像(新)',
                            userAvatar: '/upload/df2078d6c9eb46babb0df957127273ab/3bdfcbb00f90415989fb53e6677c25df/ae74752bc95c4ed6a9ebbd020d3b4105.jpg',
                            memberSignature: '喵咪太可爱了!(新签名)'
                        },
                        userNickName: '谁用了我的头像(新)',
                        userAvatar: '/upload/df2078d6c9eb46babb0df957127273ab/3bdfcbb00f90415989fb53e6677c25df/ae74752bc95c4ed6a9ebbd020d3b4105.jpg',
                        memberSignature: '喵咪太可爱了!(新签名)'
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
