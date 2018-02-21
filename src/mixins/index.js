const host = 'http://localhost:8080';

const dom = weex.requireModule('dom');
const modal = weex.requireModule('modal');
const stream = weex.requireModule('stream');
const navigator = weex.requireModule('navigator');

import store from '../store/index';

export default {
    data() {
        return {
            pageHeight: 0,
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
        toast(text) {
            modal.toast({
                message: text,
                duration: 0.3
            })
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
        request(config) {
            stream.fetch({
                method: 'POST',
                url: host + config.url,
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
                    }
                }
            }, function (response) {

            });
        }
    }
}