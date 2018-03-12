<style src="./participate.css" scoped></style>
<template src="./participate.html"></template>

<script>
    import {WxcMinibar, WxcCell,WxcIcon,WxcTag} from 'weex-ui';

    import mixins from '../../../mixins/index';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            WxcIcon,
            WxcTag
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
                name: '未付款',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                name: '待发货',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                name: '未收货',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                name: '未评价',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                name: '售后',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }],
            itemsList: [{
                title: '新疆和田玉枣红皮白玉子玉挂件  荷花翠鸟施蒂利克积分垃圾毒素',
                image: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/110/h/110',
                price:'￥11000',
                starttime:'2018-02-28 19:00:00',
                joinprice:'￥11000',
                jointime:'2018-03-06 21:00:00',
            }, {
                title: '新疆和田玉枣红皮白玉子玉挂件  荷花翠鸟施蒂利克积分垃圾毒素',
                image: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/110/h/110',
                price:'￥11000',
                starttime:'2018-02-28 19:00:00',
                joinprice:'￥11000',
                jointime:'2018-03-06 21:00:00',
            }, {
                title: '新疆和田玉枣红皮白玉子玉挂件  荷花翠鸟施蒂利克积分垃圾毒素',
                image: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/110/h/110',
                price:'￥11000',
                starttime:'2018-02-28 19:00:00',
                joinprice:'￥11000',
                jointime:'2018-03-06 21:00:00',
            }, {
                title: '新疆和田玉枣红皮白玉子玉挂件  荷花翠鸟施蒂利克积分垃圾毒素',
                image: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/110/h/110',
                price:'￥11000',
                starttime:'2018-02-28 19:00:00',
                joinprice:'￥11000',
                jointime:'2018-03-06 21:00:00',
            }, {
                title: '新疆和田玉枣红皮白玉子玉挂件  荷花翠鸟施蒂利克积分垃圾毒素',
                image: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/110/h/110',
                price:'￥11000',
                starttime:'2018-02-28 19:00:00',
                joinprice:'￥11000',
                jointime:'2018-03-06 21:00:00',
            }]
        }),
        created() {

        },
        mounted() {

        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            handleBack(){
                this.pop();
            },
            handleSetting() {
                this.push('/view/shop/member/setting.html');
            },
            handleWallet() {
                this.push('/view/shop/member/wallet.html');
            },
            handleCategory() {
                this.push('/view/shop/member/orderinfo.html');
            },
        }
    }
</script>
