<style src="./collect.css" scoped></style>
<template src="./collect.html"></template>

<script>
    import {WxcMinibar, WxcCell,WxcSearchbar,WxcIcon} from 'weex-ui';

    import mixins from '../../../mixins/index';
    import event from "../../../common/event";

    export default {
        components: {
            WxcMinibar,
            WxcSearchbar,
            WxcCell,
            WxcIcon
        },
        props: {
            tabHeight: {
                type: Number,
                required: true
            }
        },
        mixins: [mixins],
        data: () => ({
            categoryList: [{
                name: '按分类',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                name: '按价格',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                name: '排序',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }],
            items: [{
                src:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                desc:'大清乾隆帝御宝田白雕大清乾隆帝御宝田白雕大清乾隆帝御宝田白雕',
                price: '￥1.10万',
                num: '出价7次',
            },
                {
                    src:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                    desc:'大清乾隆帝御宝田白雕',
                    price: '￥1.10万',
                    num: '出价7次',
                },
                {
                    src:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                    desc:'大清乾隆帝御宝田白雕大清乾隆帝御宝田白雕大清乾隆帝御宝田白雕',
                    price: '￥1.10万',
                    num: '出价7次',
                },
                {
                    src:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                    desc:'大清乾隆帝御宝田白雕大清乾隆帝御宝田白雕大清乾隆帝御宝田白雕',
                    price: '￥1.10万',
                    num: '出价7次',
                },
                {
                    src:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                    desc:'大清乾隆帝御宝田白雕大清乾隆帝御宝田白雕大清乾隆帝御宝田白雕',
                    price: '￥1.10万',
                    num: '出价7次',
                },
                {
                    src:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                    desc:'大清乾隆帝御宝田白雕',
                    price: '￥1.10万',
                    num: '出价7次',
                },
                {
                    src:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                    desc:'大清乾隆帝御宝田白雕',
                    price: '￥342.00',
                    num: '出价7次',
                },
                {
                    src:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                    desc:'大清乾隆帝御宝田白雕大清乾隆帝御宝田白雕大清乾隆帝御宝田白雕',
                    price: '￥342.00',
                    num: '出价7次',
                },
                {
                    src:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                    desc:'大清乾隆帝御宝田白雕',
                    price: '￥1.10万',
                    num: '出价7次',
                }]
        }),
        created() {

        },
        mounted() {
            if (weex.config.env.platform === 'android') {
                this.dom.scrollToElement(this.$refs.banner, {
                    offset: 1
                });
            }
        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            handleBack(){
                this.pop();
            },
            handleMyHomepage() {
                event.$emit('login-show', {

                });
            },
            handleGoodsItem(){
                this.push('/view/shop/home/detail.html');
            },
            onItemclick: function (behaviour, index) {
                console.log(`click...${behaviour} at index ${index}`)
                switch (behaviour) {
                    case 'changeColumnCount':
                        this.changeColumnCount()
                        break
                    case 'changeColumnGap':
                        this.changeColumnGap()
                        break
                    case 'changeColumnWidth':
                        this.changeColumnWidth()
                        break
                    case 'showScrollbar':
                        this.showOrHideScrollbar()
                        break
                    case 'listenAppear':
                        this.listenAppearAndDisappear()
                        break
                    case 'setScrollable':
                        this.setScrollable()
                        break
                    case 'setPadding':
                        this.setRecyclerPadding()
                        break
                    case 'listenScroll':
                        this.listenScrollEvent()
                        break
                    case 'removeCell':
                        this.removeCell(index)
                        break
                    case 'moveCell':
                        this.moveCell(index)
                        break
                }
            },
            itemAppear: function(src) {
                this.appearImage = src;
            },

            itemDisappear: function(src) {
                this.disappearImage = src;
            },

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

            }
        }
    }
</script>
