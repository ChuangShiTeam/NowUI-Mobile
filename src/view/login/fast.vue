<style src="./fast.css" scoped></style>
<template src="./fast.html"></template>

<script>
    import mixins from '../../mixins/index';
    import event from "../../common/event";

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
                event.$emit('login-click', {
                    name: 'password'
                });
            },
            handleRegister() {
                event.$emit('login-click', {
                    name: 'register'
                });
            },
            handleMobileChange(event) {
                this.mobile = event.value;
            },
            handleSubmit() {
                // if (this.mobile == '') {
                //     this.toast('手机号码不能为空');
                //
                //     return;
                // }

                this.request({
                    url: '/member/mobile/v1/sms/captcha/login',
                    data: {
                        userAccount: '123',
                        smsCaptchaCode: ''
                    },
                    success: (data) => {
                        console.log(data);
                    }
                });
            }
        }
    }
</script>
