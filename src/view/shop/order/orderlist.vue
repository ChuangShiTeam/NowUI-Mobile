<style src="./orderlist.css" scoped></style>
<template src="./orderlist.html"></template>

<script>
    import {WxcMinibar, WxcCell,WxcTabPage,WxcPanItem,Utils} from 'weex-ui';
    import mixins from '../../../mixins/index';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            WxcTabPage,
            WxcPanItem,
            Utils
        },
        props: {
            tabHeight: {
                type: Number,
                required: true
            }
        },
        mixins: [mixins],
        data: () => ({
            tabList: ['全部','未付款','待发货','已发货','售后'],
            needSlider: true,
            supportSlide: true,
            isTabView: true,
            tabPageHeight: 1334,
            tabTitles: [
                {
                    title: '全部'
                },
                {
                    title: '未付款'
                },
                {
                    title: '待发货'
                },
                {
                    title: '已收货'
                },
                {
                    title: '售后'
                }
            ],
            tabStyles: {
                bgColor: '#ffffff',
                titleColor: '#000000',
                activeTitleColor: 'red',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: true,
                width: 750/5,
                height: 80,
                fontSize: 24,
                hasActiveBottom: true,
                activeBottomColor: 'red',
                activeBottomHeight: 4,
                activeBottomWidth: 120,
                textPaddingLeft: 10,
                textPaddingRight: 10
            }
        }),
        created() {
            this.tabPageHeight = Utils.env.getPageHeight();
            this.tabList = [...Array(this.tabTitles.length).keys()].map(i => []);
//            Vue.set(this.tabList, 0, this.demoList);
        },
        mounted() {

        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            handleBack() {
                this.pop();
            },
            wxcTabPageCurrentTabSelected (e) {
                const self = this;
                const index = e.page;
                /* Unloaded tab analog data request */
                if (!Utils.isNonEmptyArray(self.tabList[index])) {
                    setTimeout(() => {
//                        Vue.set(self.tabList, index, self.demoList);
                    }, 100);
                }
            },
            wxcPanItemPan (e) {
                if (Utils.env.supportsEBForAndroid()) {
                    this.$refs['wxc-tab-page'].bindExp(e.element);
                }
            }
        }
    }
</script>
