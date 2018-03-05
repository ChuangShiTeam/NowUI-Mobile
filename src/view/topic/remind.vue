<style src="./remind.css" scoped></style>
<template src="./remind.html"></template>

<script type="text/ecmascript-6">
    import {WxcSearchbar, WxcCell} from 'weex-ui';

    import mixins from '../../mixins/index';

    export default {
        components: {
            WxcSearchbar,
            WxcCell
        },
        mixins: [mixins],
        data() {
            return {
                memberList: [{
                    isSelect: false
                }, {
                    isSelect: false
                }, {
                    isSelect: false
                }]
            }
        },
        created() {
            this.handleLoadFollowMember();
        },
        methods: {
            wxcSearchbarInputOnFocus() {

            },
            wxcSearchbarInputOnBlur() {

            },
            wxcSearchbarInputReturned() {

            },
            wxcSearchbarCloseClicked() {

            },
            wxcSearchbarInputOnInput(e) {

            },
            wxcSearchbarCancelClicked() {

            },
            wxcSearchbarInputDisabledClicked() {

            },
            wxcSearchbarDepChooseClicked() {

            },
            handleMember(index) {
                console.log(index)
                this.memberList[index].isSelect = !this.memberList[index].isSelect;
                console.log(this.memberList)
            },
            handleSubmit() {
                var memberSelectList = [];

                this.memberList.forEach((item, index)=>{
                    if (item.isSelect) {
                        memberSelectList.push(item);
                    }
                });

                this.storage.setItem('topic-member-remind-list', JSON.stringify(memberSelectList), event => {
                    this.pop();
                })
            },
            handleCancel() {
                this.pop();
            },
            handleLoadFollowMember() {
                this.request({
                    url: '/member/follow/mobile/v1/my/follow/list',
                    data: {},
                    success: (data) => {
                        if (data && data.length > 0) {
                            this.memberList = data;
                        }
                    },
                    error: () => {
                    }
                });
            }
        }
    }
</script>