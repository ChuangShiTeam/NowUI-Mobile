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
                mobile: ''
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
            handleMobileChange(event) {
                this.mobile = event.value;
            },
            handleSubmit() {
                if (this.mobile == '') {
                    this.toast('手机号码不能为空');

                    return;
                }
            }
        }
    }
</script>
