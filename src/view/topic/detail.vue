<style src="./detail.css" scoped></style>
<template src="./detail.html"></template>

<script>
    import {WxcCell} from 'weex-ui'

    import mixins from '../../mixins/index';

    export default {
        components: {
            WxcCell
        },
        mixins: [mixins],
        data() {
            return {
                feedbackList: [{

                }, {


                }, {


                }, {


                }, {


                }, {

                }]
            }
        },
        created() {

        },
        methods: {
            handleHomepage() {
                this.push('/view/member/homepage.html');
            }
        }
    }
</script>