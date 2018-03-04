<style src="./forget.css" scoped></style>
<template src="./forget.html"></template>

<script>
    import mixins from '../../mixins/index';

    export default {
        components: {

        },
        mixins: [mixins],
        data() {
            return {
                mobile: '',
                captcha: ''
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
            handleNext() {
                if (this.mobile == '') {
                    this.toast('手机号码不能为空');

                    return;
                }
            }
        }
    }
</script>
