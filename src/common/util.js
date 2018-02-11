function push(url) {
    var bundleUrl = weex.config.bundleUrl;
    var navigator = weex.requireModule('navigator')

    var result = 'http://';

    var a = bundleUrl.split('?')[0].replace('http://', '').split('/')[0];
    var b = bundleUrl.split('?')[0].replace('http://', '').split('/')[1];

    if (weex.config.env.platform === 'Web') {
        result += a;
        if (bundleUrl.indexOf('nowui.com') > -1) {
            result += '/wawipet'
        }
        result += url;
    } else {
        result += a + '/dist';
        result += url.replace('.html', '.js');
    }

    navigator.push({
        url: result,
        animated: "true"
    });
}

export default {
    push: push
};