<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script type="text/ecmascript-6">
    import {WxcMinibar, WxcCell} from 'weex-ui';

    import mixins from '../../mixins/index';
    import event from "../../common/event";

    import Topic from '../../component/topic/index.vue';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            Topic
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
            bannerList: [],
            articleList: [],
            categoryList: [{
                name: '保健卡',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-0.png'
            }, {
                name: '健康知识',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-1.png'
            }, {
                name: '饮食',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-2.png'
            }, {
                name: '品种',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-3.png'
            }, {
                name: '丧事',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-4.png'
            }, {
                name: '美容时尚',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-5.png'
            }, {
                name: '家居',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-6.png'
            }, {
                name: '寄养出行',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-7.png'
            }, {
                name: '领养',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/category-8.png'
            }],
            petList: [{
                name: '狗',
                description: 'Dog',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/pet-0.png'
            }, {
                name: '猫',
                description: 'Cat',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/pet-1.png'
            }, {
                name: '兔',
                description: 'Rabbit',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/pet-2.png'
            }, {
                name: '鸟',
                description: 'Bird',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/pet-3.png'
            }, {
                name: '鱼',
                description: 'Fish',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/pet-4.png'
            }, {
                name: '两栖',
                description: 'Amphibians',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/pet-5.png'
            }, {
                name: '其他',
                description: 'Others',
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/pet-6.png'
            }],
            topicList: [{
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }, {
                    filePath: ''
                }]
            }, {
                topicId: '0',
                topicMediaList: [{
                    filePath: ''
                }]
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
        created() {
            this.handleLoadIndexBanner();
            this.handleLoadHotArticle();
        },
        computed: {
            filterArticleList: function () {
                return this.articleList.filter(function (item, index) {
                    return index > 0;
                });
            }
        },
        methods: {
            handerScroll(e) {
                if (-e.contentOffset.y / 300 < 1 || this.headerBackgroundOpacity < 1) {
                    this.headerBackgroundOpacity = -e.contentOffset.y / 300;
                }
            },
            handleLoadIndexBanner() {
                this.request({
                    url: '/advertisement/mobile/v1/index/banner/list',
                    data: {},
                    success: (data) => {
                        if (data && data.length > 0) {
                            this.bannerList = data;
                        }
                    },
                    error: () => {
                    }
                });
            },
            handleLoadHotArticle() {
                this.request({
                    url: '/article/mobile/v1/hot/list',
                    data: {
                        pageIndex: 1,
                        pageSize: 10
                    },
                    success: (data) => {
                        if (data && data.length > 0) {
                            this.articleList = data;
                        }
                    },
                    error: () => {
                    }
                });
            },
            handleMyHomepage() {
                event.$emit('login-show', {

                });
            },
            handleSearch() {
                this.push('/view/home/search.html');
            },
            handleCategory() {
                this.push('/view/article/index.html');
            },
            handleMemberHomepage() {
                this.push('/view/member/homepage.html');
            }
        }
    }
</script>
