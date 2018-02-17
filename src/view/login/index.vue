<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcIcon} from 'weex-ui';

    import mixins from '../../mixins/index';
    import event from "../../common/event";

    import Fast from './fast.vue';
    import Forget from './forget.vue';
    import Password from './password.vue';
    import Register from './register.vue';

    export default {
        components: {
            WxcIcon,
            Fast,
            Forget,
            Password,
            Register
        },
        mixins: [mixins],
        data() {
            return {
                activeIndex: 0
            }
        },
        created() {

        },
        mounted() {
            event.$on('login-push', (data) => {
                console.log(data.name)
                switch (data.name) {
                    case 'fast':
                        this.activeIndex = 0;
                        break;
                    case 'forget':
                        this.activeIndex = 1;
                        break;
                    case 'password':
                        this.activeIndex = 2;
                        break;
                    case 'register':
                        this.activeIndex = 3;
                        break;
                }
            });
        },
        methods: {
            handleClose() {
                event.$emit('login-close', {

                });
            }
        }
    }
</script>
