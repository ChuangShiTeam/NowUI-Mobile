<style src="./password.css" scoped></style>
<template src="./password.html"></template>

<script>
    import mixins from '../../mixins/index';
    import event from "../../common/event";

    export default {
        components: {

        },
        mixins: [mixins],
        data() {
            return {
                mobile: '',
                password: ''
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            handleForget() {
                event.$emit('login-click', {
                    name: 'forget'
                });
            },
            handleFast() {
                event.$emit('login-click', {
                    name: 'fast'
                });
            },
            handleRegister() {
                event.$emit('login-click', {
                    name: 'register'
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
                this.isLoad = true;
                this.request({
                    url: '/member/mobile/v1/password/login',
                    data: {
                        userAccount: this.mobile,
                        userPassword: this.password
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
