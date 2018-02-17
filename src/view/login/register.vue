<style src="./register.css" scoped></style>
<template src="./register.html"></template>

<script>
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
            handleSubmit() {
                if (this.mobile == '') {
                    this.toast('手机号码不能为空');

                    return;
                }
            }
        }
    }
</script>
