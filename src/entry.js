import Vue from 'vue';
import weex from 'weex-vue-render';

//接收参数
window.weex.config.parameter = {};
var parameterArray = window.location.search.slice(1).split('&');
for (var i = 0; i < parameterArray.length; i++) {
    var parameter = parameterArray[i].split("=");
    window.weex.config.parameter[parameter[0]] = encodeURIComponent(parameter[1]);
}

weex.init(Vue);
