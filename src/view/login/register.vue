<style src="./register.css" scoped></style>
<template src="./register.html"></template>

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
                password: '',
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
            handleFast() {
                event.$emit('login-click', {
                    name: 'fast'
                });
            },
            handleCompleteCountDown() {
                this.time = 1;
            },
            handleSendRegisterCaptcha() {
                if (this.mobile == '') {
                    this.toast('手机号码不能为空');

                    return;
                }

                this.request({
                    url: '/member/mobile/v1/register/sms/captcha/send',
                    data: {
                        userAccount: this.mobile
                    },
                    success: (data) => {
                        this.toast('发送成功');
                        this.time = new Date().getTime() + 60000;
                    },
                    error: () => {

                    }
                });
            },
            handleSubmit() {
                if (this.mobile == '') {
                    this.toast('手机号码不能为空');

                    return;
                }
                if (this.password == '') {
                    this.toast('密码不能为空');

                    return;
                }
                if (this.captcha == '') {
                    this.toast('验证码不能为空');

                    return;
                }

                this.isLoad = true;

                this.request({
                    url: '/member/mobile/v1/mobile/register',
                    data: {
                        userAccount: this.mobile,
                        userPassword: this.password,
                        smsCaptchaCode: this.captcha
                    },
                    success: (data) => {
                        this.isLoad = false;
                        this.setToken(data.token);
                        this.setUserAvatarFilePath(data.userAvatarFilePath);
                        this.setUserNickName(data.userNickName);
                        this.setMemberId(data.memberId);
                        this.toast('注册成功', () => {
                            this.mobile = '';
                            this.password = '';
                            this.captcha = '';
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
