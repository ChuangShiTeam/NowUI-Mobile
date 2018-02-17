const modal = weex.requireModule('modal');
const navigator = weex.requireModule('navigator');

import store from '../store/index';

export default {
    data() {
        return {
            pageHeight: 0
        }
    },
    created() {
        if (weex.config.env.platform.toLowerCase() === 'web') {
            this.pageHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750;
        } else if (weex.config.env.platform.toLowerCase() === 'ios') {
            this.pageHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 - 116;
        } else {
            this.pageHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750;
        }

        this.store = store;
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
        }
    }
}