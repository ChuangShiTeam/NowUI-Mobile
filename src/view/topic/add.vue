<style src="./add.css" scoped></style>
<template src="./add.html"></template>

<script>
    import {WxcMinibar, WxcCell} from 'weex-ui';

    import mixins from '../../mixins/index';
    import event from "../../common/event";

    import Upload from '../../component/upload/index.vue';

    export default {
        components: {
            WxcMinibar,
            WxcCell,
            Upload
        },
        mixins: [mixins],
        data: () => ({
            imageList: [],
            topicSummary: '',

            longtitude: '',
            latitude: '',
            topicLocation : '',
            topicIsLocation : false,

            forumList: [],
            topicTipUserList: [],
            topicMediaList: [],
            theSendInfo: {},
            userNickName: '',
            userAvatar: '',

        }),
        created() {
            this.hanldeLoadForum();

        },
        mounted() {
            event.$on('topic-add-upload', (data) => {
                this.imageList = data.imageList;
            });
        },
        methods: {
            handleLoad() {
                console.log(1);
            },
            handleLocation() {
                this.push('/view/topic/location.html');
            },
            handleRemind() {
                this.push('/view/topic/remind.html');
            },
            handleTag() {
                this.push('/view/topic/tag.html');
            },
            handleTopicSummaryInput(event) {
                this.topicSummary = event.value;
            },
            handleAddTopic() {
                console.log(this.imageList);
                    this.topicMediaList = this.imageList.map((topicMedia, index) => {
                        return {
                            topicMedia: topicMedia.filePath,
                            topicMediaType: 'IMAGE',
                            topicMediaSort: index + 1
                        }
                    });

                this.request({
                    url: '/topic/mobile/v1/save',
                    data: {
                        longtitude: this.longtitude,
                        latitude: this.latitude,
                        topicLocation : this.topicLocation,
                        topicIsLocation : this.topicIsLocation,

                        topicSummary: this.topicSummary,

                        topicForumList: this.forumList.filter(forum => forum.selected).map(forum => {
                            return {
                                forumId: forum.forumId,
                                forumName: forum.forumName
                            }
                        }),
                        topicTipUserList: this.topicTipUserList,
                        topicMediaList: this.topicMediaList,
                        theSendInfo: {
                            userNickName: '谁用了我的头像(新)',
                            userAvatar: '/upload/df2078d6c9eb46babb0df957127273ab/3bdfcbb00f90415989fb53e6677c25df/ae74752bc95c4ed6a9ebbd020d3b4105.jpg',
                            memberSignature: '喵咪太可爱了!(新签名)'
                        },
                        userNickName: '谁用了我的头像(新)',
                        userAvatar: '/upload/df2078d6c9eb46babb0df957127273ab/3bdfcbb00f90415989fb53e6677c25df/ae74752bc95c4ed6a9ebbd020d3b4105.jpg',
                        memberSignature: '喵咪太可爱了!(新签名)'
                    },
                    success: (data) => {
                        this.toast('发布成功', () => {
                            this.pop();
                        });
                    },
                    error: () => {
                    }
                });

                // this.props.form.validateFields((errors, values) => {
                //     values.longtitude = '';
                //     values.latitude = '';
                //     values.topicLocation = '';
                //     values.topicIsLocation = false;
                //     let location = this.props.topicAdd.location;
                //     if (location && location.module === 'locationPicker') {
                //         values.longtitude = location.latlng.lng + "";
                //         values.latitude = location.latlng.lat + "";
                //         values.topicLocation = location.poiaddress;
                //         values.topicIsLocation = true;
                //     }
                //
                //     values.topicForumList = this.state.forumList.filter(forum => forum.selected).map(forum => {
                //         return {
                //             forumId: forum.forumId,
                //             forumName: forum.forumName
                //         }
                //     });
                //     values.topicTipUserList = this.props.topicAdd.topicTipUserList.map(topicTipUser => topicTipUser.value);
                //
                //     values.topicMediaList = values.topicMedia.map((topicMedia, index) => {
                //         return {
                //             topicMedia: topicMedia.filePath,
                //             topicMediaType: 'IMAGE',
                //             topicMediaSort: index + 1
                //         }
                //     });
                //
                //     values.theSendInfo = {
                //         userNickName: '谁用了我的头像(测试)',
                //         userAvatar: '/upload/df2078d6c9eb46babb0df957127273ab/3bdfcbb00f90415989fb53e6677c25df/ae74752bc95c4ed6a9ebbd020d3b4105.jpg',
                //     }
                //
                //     delete values.topicMedia;
                //     http.request({
                //         url: '/topic/mobile/v1/save',
                //         data: values,
                //         success: function (data) {
                //             notification.notice({
                //                 content: '发布成功'
                //             });
                //             this.props.dispatch({
                //                 type: 'topicAdd',
                //                 data: {
                //                     topicTipUserList: [],
                //                     location: {},
                //                     forumList: []
                //                 }
                //             });
                //             this.props.history.push({
                //                 pathname: '/topic/index',
                //                 query: {}
                //             });
                //         }.bind(this),
                //         complete: function () {
                //
                //         }
                //     });
                // });

            },
            hanldeLoadForum() {
                this.request({
                    url: '/forum/user/follow/mobile/v1/name/list',
                    data: {},
                    success: (data) => {
                        let forumList = data;
                        if (forumList && forumList.length > 0) {
                            this.forumList = forumList
                        }
                        // this.toast('发布成功', () => {
                        //     this.pop();
                        // });
                    },
                    error: () => {
                    }
                });
            },
            handleSelectForum(index) {
                let forumList = this.forumList;
                let forum = forumList[index];
                forum.selected = !forum.selected;


                // forumList[index] = forum;
                //TODO 不会检测到根据索引直接赋值,和数字长度变化然后重新渲染页面,可按照下面两个方法达到效果
                // Vue.set(forumList, index, forum);
                forumList.splice(index, 1, forum)

                this.forumList = forumList;

                let theSelectForumList = this.forumList.filter(forum => forum.selected).map(forum => {
                    return {
                        forumId: forum.forumId,
                        forumName: forum.forumName
                    }
                });
                console.log(theSelectForumList)
            }
        }
    }
</script>
