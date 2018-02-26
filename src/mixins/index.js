const dom = weex.requireModule('dom');
const modal = weex.requireModule('modal');
const stream = weex.requireModule('stream');
const navigator = weex.requireModule('navigator');

import store from '../store/index';

export default {
    data() {
        return {
            pageHeight: 0,
            host: 'http://localhost:8080',
            // imageHost: 'http://118.31.229.16:8080',
            imageHost: 'http://localhost:8080',
            appId: 'df2078d6c9eb46babb0df957127273ab',
            version: '1.0.0',
            platform: weex.config.env.platform.toLowerCase()
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
    },
    mounted() {

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
                    result += '/wawipet'
                }
                result += '/dist';
                result += url.replace('.html', '.js');
            }

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
            config.data.token = 'vjYUoyEmyZo2r7FW+iZ3sbtNCkYrKKLSzQJU7JLG2hH97BeP2+Gk72Hdd9e+qRgA4hePuuGPiTsn9q435nWD5D8+7e0Yosk/FE/M3r+W6GA=';
            config.data.platform = this.platform;
            config.data.version = this.version;
            config.data.timestamp = Math.round(new Date().getTime() / 1000);

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
                    console.log(response.data.code);
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
    }
}