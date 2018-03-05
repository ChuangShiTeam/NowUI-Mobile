<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcMinibar, WxcCell} from 'weex-ui';

    import mixins from '../../mixins/index';

    export default {
        components: {
            WxcMinibar,
            WxcCell
        },
        mixins: [mixins],
        data: () => ({

        }),
        created() {

        },
        mounted() {

        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            handleHomepage() {
                this.push('/member/homepage.html');
            },
            handleMessage() {
                this.push('/member/message.html');
            },
            handleBookmark() {
                this.push('/member/bookmark.html');
            },
            handleProfile() {
                this.push('/member/profile.html');
            },
            handlePet() {
                this.push('/member/pet.html');
            },
            handleFollow() {
                this.push('/member/follow.html');
            },
            handleQrcode() {
                this.push('/member/qrcode.html');
            }
        }
    }
</script>
