<style src="./fast.css" scoped></style>
<template src="./fast.html"></template>

<script type="text/ecmascript-6">
    import { WxcCountdown } from 'weex-ui'
    import mixins from '../../mixins/index';
    import event from "../../common/event";

    export default {
        components: {
            WxcCountdown
        },
        mixins: [mixins],
        data() {
            return {
                mobile: '',
                captcha: '',
                time: 0
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            handlePassword() {
                event.$emit('login-click', {
                    name: 'password'
                });
            },
            handleRegister() {
                event.$emit('login-click', {
                    name: 'register'
                });
            },
            handleCompleteCountDown() {
                this.time = 1;
            },
            handleSendLoginCaptcha() {
                 if (this.mobile == '') {
                     this.toast('手机号码不能为空');

                     return;
                 }
                this.request({
                    url: '/member/mobile/v1/login/sms/captcha/send',
                    data: {
                        userAccount: this.mobile,
                        smsCaptchaCode: this.captcha
                    },
                    success: (data) => {
                        this.toast('发送成功');
                        this.time = new Date().getTime() + 60000;
                    }
                });
            },
            handleSubmit() {
                if (this.mobile == '') {
                     this.toast('手机号码不能为空');

                     return;
                }
                if (this.captcha == '') {
                    this.toast('验证码不能为空');

                    return;
                }
                this.isLoad = true;
                this.request({
                    url: '/member/mobile/v1/sms/captcha/login',
                    data: {
                        userAccount: this.mobile,
                        smsCaptchaCode: this.captcha
                    },
                    success: (data) => {
                        this.isLoad = false;
                        this.setToken(data.token);
                        this.setUserAvatarFilePath(data.userAvatarFilePath);
                        this.setUserNickName(data.userNickName);
                        this.setMemberId(data.memberId);
                        this.toast('登录成功', () => {
                            this.push('/index.html');
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
