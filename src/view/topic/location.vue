<style src="./location.css" scoped></style>
<template src="./location.html"></template>

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
                shopList: [{
                    isSelect: false
                }, {
                    isSelect: false
                }, {
                    isSelect: false
                }, {
                    isSelect: false
                }, {
                    isSelect: false
                }, {
                    isSelect: false
                }, {
                    isSelect: false
                }, {
                    isSelect: false
                }, {
                    isSelect: false
                }, {
                    isSelect: false
                }, {
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
                this.shopList[index].isSelect = !this.shopList[index].isSelect;
            },
            handleSubmit() {
                var memberSelectList = [];

                this.shopList.forEach((item, index) => {
                    if (item.isSelect) {
                        memberSelectList.push(item);
                    }
                });

                this.storage.setItem('topic-member-location-list', JSON.stringify(memberSelectList), event => {
                    this.pop();
                })
            },
            handleCancel() {
                this.pop();
            }
        }
    }
</script>