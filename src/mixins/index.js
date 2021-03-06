const dom = weex.requireModule('dom');
const modal = weex.requireModule('modal');
const stream = weex.requireModule('stream');
const storage = weex.requireModule('storage');
const navigator = weex.requireModule('navigator');

import store from '../store/index';

export default {
    data() {
        return {
            pageHeight: 0,
            host: 'http://localhost:8080',
            // host: 'http://118.31.229.16:80',
            imageHost: 'http://118.31.229.16:80',
            // imageHost: 'http://localhost:8080',
            appId: 'df2078d6c9eb46babb0df957127273ab',
            version: '1.0.0',
            platform: weex.config.env.platform.toLowerCase(),
            loginValidateSuccessAction: '',
            loginValidateSuccessData: ''
        }
    },
    created() {
        if (this.platform == 'web') {
            this.pageHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750;
        } else if (this.platform == 'ios') {
            this.pageHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 - 116;
        } else {
            this.pageHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750;
        }

        this.store = store;

        this.dom = dom;

        this.storage = storage;
    },
    mounted() {
        event.$on('login-validate-start-event', (data) => {
            if (this.loginVlidate()) {
                
            } else {
                this.isLoginShow = true;
            }
        });

        event.$on('login-validate-end-event', (data) => {
            //
            if (data.success) {
                //login-validate-success-event
            }
            this.$refs.login.hide();
        });
    },
    methods: {
        toast(text, callback) {
            modal.toast({
                message: text,
                duration: 1.0
            });

            if (callback) {
                setTimeout(() => {
                    callback();
                }, 1000);
            }
        },
        commit(name, data) {
            this.store.commit(name, data);
        },
        push(url) {
            var bundleUrl = weex.config.bundleUrl;

            var result = 'http://';

            var a = bundleUrl.split('?')[0].replace('http://', '').split('/')[0];
            var b = bundleUrl.split('?')[0].replace('http://', '').split('/')[1];

            if (weex.config.env.platform.toLowerCase() === 'web') {
                result += a;
                if (bundleUrl.indexOf('nowui.com') > -1) {
                    result += '/wawipet'
                }
                result += url;
            } else {
                result += a;
                if (bundleUrl.indexOf('nowui.com') > -1) {
                    result += '/wawipet';
                }
                result += '/dist';
                result += url.replace('.html', '.js');
            }
            // result += b;

            navigator.push({
                url: result,
                animated: "true"
            });
        },
        pop() {
            navigator.pop({
                animated: 'true'
            })
        },
        request(config) {
            config.data.appId = this.appId;
            config.data.token = this.getToken();
            config.data.platform = this.platform;
            config.data.version = this.version;
            config.data.timestamp = Math.round(new Date().getTime() / 1000);

            if (config.url.startsWith('http')) {
                stream.fetch({
                    method: 'POST',
                    url: config.url,
                    type: 'json',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(config.data),
                }, (response) => {
                    if (response.ok) {
                        if (response.data.code == 200) {
                            config.success(response.data.data);
                        } else {
                            this.toast(response.data.message);

                            config.error();
                        }
                    }
                }, function (response) {

                });
            }else {
                stream.fetch({
                    method: 'POST',
                    url: this.host + config.url,
                    type: 'json',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(config.data),
                }, (response) => {
                    if (response.ok) {
                        if (response.data.code == 200) {
                            config.success(response.data.data);
                        } else {
                            this.toast(response.data.message);

                            config.error();
                        }
                    }
                }, function (response) {

                });
            }

        },
        setToken(token) {
            this.storage.setItem('token_' + this.version, token, res => {
                if(res.result === 'success'){
                    // 数据缓存成功
                }
            });
        },
        getToken() {
            let token = '';
            this.storage.getItem('token_' + this.version, res => {
                if(res.result === 'success') {
                    token = res.data;
                }
            });
            if (token === null || token === '' || typeof (token) === 'undefined') {
                return 'vjYUoyEmyZo2r7FW+iZ3sbtNCkYrKKLSzQJU7JLG2hH97BeP2+Gk72Hdd9e+qRgA4hePuuGPiTsn9q435nWD5D8+7e0Yosk/FE/M3r+W6GA=';
            }

            return token;
        },
        setUserAvatarFilePath(userAvatarFilePath) {
            this.storage.setItem('userAvatarFilePath', userAvatarFilePath, res => {
                if(res.result === 'success'){
                    // 数据缓存成功
                }
            });
        },
        getUserAvatarFilePath() {
            let userAvatarFilePath = '';
            this.storage.getItem('userAvatarFilePath', res => {
                if(res.result === 'success'){
                    userAvatarFilePath = res.data;
                }
            });

            return userAvatarFilePath;
        },
        setUserNickName(userNickName) {
            this.storage.setItem('userNickName', userNickName, res => {
                if(res.result === 'success'){
                    // 数据缓存成功
                }
            });
        },
        getUserNickName() {
            let userNickName = '';
            this.storage.getItem('userNickName', res => {
                if(res.result === 'success'){
                    userNickName = res.data;
                }
            });

            return userNickName;
        },
        setMemberId(memberId) {
            this.storage.setItem('memberId', memberId, res => {
                if(res.result === 'success'){
                    // 数据缓存成功
                }
            });
        },
        getMemberId() {
            let memberId = '';
            this.storage.getItem('memberId', res => {
                if(res.result === 'success'){
                    memberId = res.data;
                }
            });

            return memberId;
        },
        loginValidate() {
            let token = getToken();

            if(token === null || token === '' || typeof (token) === 'undefined') {
                
            }
        }

    }
}