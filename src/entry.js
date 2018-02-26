import Vue from 'vue';
import weex from 'weex-vue-render';
import Vuex from 'vuex';

Vue.use(Vuex);

//接收参数
weex.config.parameter = {};
var parameterArray = window.location.search.slice(1).split('&');
for (var i = 0; i < parameterArray.length; i++) {
    var parameter = parameterArray[i].split("=");
    weex.config.parameter[parameter[0]] = encodeURIComponent(parameter[1]);
}

//全局事件总线
weex.config.bus = new Vue();

weex.init(Vue);
