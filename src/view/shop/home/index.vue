<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcMinibar, WxcCell,WxcTag,WxcCountdown} from 'weex-ui';

    import mixins from '../../../mixins/index';
    import event from "../../../common/event";

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            WxcTag,
            WxcCountdown
        },
        props: {
            tabHeight: {
                type: Number,
                required: true
            }
        },
        mixins: [mixins],
        data: () => ({
            headerBackgroundOpacity: 0.0,
            bannerList: [{
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }],
            TIME: new Date().getTime() + 4320000000 + '',
            items: [{
                src:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                desc:'[国外拍品专场] 醉美石头寻找你心中中瓷器你是怎样的人啊啊啊啊',
                time: '今日20:00',
                status: '拍卖中',
                liveStatus:'直播中',
                auctionNum: '38',
            },{
                src:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                desc:'[国外拍品专场] ',
                time: '今日20:00',
                status: '拍卖中',
                auctionNum: '38',
            },{
                src:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                desc:'[国外拍品专场]',
                time: '今日20:00',
                status: '拍卖中',
                auctionNum: '38',
            },{
                src:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                desc:'[国外拍品专场] 醉美石头寻找寻找你心中中瓷器是怎样的人啊啊啊啊',
                time: '今日20:00',
                status: '拍卖中',
                auctionNum: '38',
            }],
            articleList: [{
                imagUrl:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                title: '大清乾隆帝御宝田白雕出游图玺',
                tag:'热拍中',
                timeStamp:new Date().getTime() + 4320000000 + '',
                price:'￥3400',
                num:'0',
                like:'340',
            }, {
                imagUrl:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                title: '大清乾隆帝御宝田白雕出游图玺上海之行怎么样是怎样的人啊啊啊啊是怎样的人啊啊啊啊',
                tag:'热拍中',
                timeStamp:new Date().getTime() + 4320000000 + '',
                price:'￥3400',
                num:'1',
                like:'340',
            },{
                imagUrl:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                title: '大清乾隆帝御宝田白雕出游图玺',
                tag:'热拍中',
                timeStamp:new Date().getTime() + 4320000000 + '',
                price:'￥3400',
                num:'12',
                like:'340',
            },{
                imagUrl:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                title: '大清乾隆帝御宝田白雕出游图玺',
                tag:'热拍中',
                timeStamp:new Date().getTime() + 4320000000 + '',
                price:'￥3400',
                num:'3',
                like:'340',
            },{
                imagUrl:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                title: '大清乾隆帝御宝田白雕出游图玺',
                tag:'热拍中',
                timeStamp:new Date().getTime() + 4320000000 + '',
                price:'￥3400',
                num:'12',
                like:'340',
            },{
                imagUrl:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                title: '大清乾隆帝御宝田白雕出游图玺',
                tag:'热拍中',
                timeStamp:new Date().getTime() + 4320000000 + '',
                price:'￥3400',
                num:'3',
                like:'340',
            },{
                imagUrl:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                title: '大清乾隆帝御宝田白雕出游图玺',
                tag:'热拍中',
                timeStamp:new Date().getTime() + 4320000000 + '',
                price:'￥3400',
                num:'12',
                like:'340',
            },{
                imagUrl:'http://h5.chuangshi.nowui.com/wawipet/image/0.png',
                title: '大清乾隆帝御宝田白雕出游图玺',
                tag:'热拍中',
                timeStamp:new Date().getTime() + 4320000000 + '',
                price:'￥3400',
                num:'3',
                like:'340',
            }]
        }),
        created() {
            this.handleLoadIndexBanner();
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
            handleMyHomepage() {
                event.$emit('login-show', {

                });
            },
            handleLoadIndexBanner() {
                this.request({
                    url: '',
                    data: {
                        servicekey:'Art.Service.Product.Dto.Api.DealersAllProductRequest',
                        jsonobjparam:{
                            CurrentPage:'1',
                            PageSize:'10',
                        },
                    },
                    success: (data) => {
                        if (data && data.length > 0) {
                            this.bannerList = data;
                        }
                    },
                    error: () => {
                    }
                });
            },
            //推荐专场详情
            handleRecommendItem(){
                this.push('/view/shop/home/recommend.html');
            },
            handleGoodsItem(){
                this.push('/view/shop/home/auctionitems.html');
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
        }
    }
</script>
