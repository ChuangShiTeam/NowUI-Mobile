<style src="./tag.css" scoped></style>
<template src="./tag.html"></template>

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
                this.memberList[index].isSelect = !this.memberList[index].isSelect;
            },
            handleSubmit() {
                var memberSelectList = [];

                this.memberList.forEach((item, index) => {
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
            }
        }
    }
</script>