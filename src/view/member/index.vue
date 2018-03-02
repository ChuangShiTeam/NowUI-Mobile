<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script type="text/ecmascript-6">
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
                this.push('/view/member/homepage.html');
            },
            handleMessage() {
                this.push('/view/member/message.html');
            },
            handleBookmark() {
                this.push('/view/member/bookmark.html');
            },
            handleProfile() {
                this.push('/view/member/profile.html');
            },
            handlePet() {
                this.push('/view/member/pet.html');
            },
            handleFollow() {
                this.push('/view/member/follow.html');
            },
            handleQrcode() {
                this.push('/view/member/qrcode.html');
            }
        }
    }
</script>
