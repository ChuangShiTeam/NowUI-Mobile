<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>
    import {WxcMinibar, WxcCell, Utils} from 'weex-ui';

    import Topic from '../../component/topic/index.vue';

    const dom = weex.requireModule('dom');

    import util from '../../common/util';


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
        data: () => ({
            headerBackgroundOpacity: 0.0,
            bannerList: [{
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }, {
                image: 'http://h5.chuangshi.nowui.com/wawipet/image/0.png'
            }],
            articleList: [{
                title: '谁说猫狗在一起一定打得不可开交？'
            }, {
                title: '谁说猫狗在一起一定打得不可开交？'
            }, {
                title: '谁说猫狗在一起一定打得不可开交？'
            }, {
                title: '谁说猫狗在一起一定打得不可开交？'
            }, {
                title: '谁说猫狗在一起一定打得不可开交？'
            }, {
                title: '谁说猫狗在一起一定打得不可开交？'
            }, {
                title: '谁说猫狗在一起一定打得不可开交？'
            }, {
                title: '谁说猫狗在一起一定打得不可开交？'
            }, {
                title: '谁说猫狗在一起一定打得不可开交？'
            }],
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
            const pageHeight = Utils.env.getPageHeight();
            this.containerStyle = {
                height: (pageHeight - 80) + 'px',
                backgroundColor: '#f6f6f6'
            };
        },
        mounted() {
            if (weex.config.env.platform === 'android') {
                dom.scrollToElement(this.$refs.banner, {
                    offset: 1
                });
            }
        },
        methods: {
            handerScroll(e) {
                if (-e.contentOffset.y / 300 < 1 || this.headerBackgroundOpacity < 1) {
                    this.headerBackgroundOpacity = -e.contentOffset.y / 300;
                }
            },
            handleLoad() {
                console.log(1);
            },
            handleHomepage() {
                if (false) {
                    util.push('/view/home/search.html');
                } else {
                    const loginBroadcastChannel = new BroadcastChannel('loginBroadcastChannel');
                    loginBroadcastChannel.postMessage({
                        callbackName: ''
                    });
                }
            },
            handleSearch() {
                util.push('/view/home/search.html');
            },
            handleCategory() {
                util.push('/view/article/index.html');
            }
        }
    }
</script>
