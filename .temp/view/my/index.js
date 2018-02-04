import Vue from 'vue';
import weex from 'weex-vue-render';

window.weex.config.parameter = {};
var parameterArray = window.location.search.slice(1).split('&');
for (var i = 0; i < parameterArray.length; i++) {
    var parameter = parameterArray[i].split("=");

    window.weex.config.parameter[parameter[0]] = encodeURIComponent(parameter[1]);
}

// import render-core.
// import weex from 'weex-vue-render/dist/index.core';

// need to run `npm i weex-vue-slider weex-vue-stream --save` frist.
// import the plugins (components and modules) you want to use.
// import slider from 'weex-vue-slider';
// import stream from 'weex-vue-stream';

// install the plugins.
// weex.install(slider);
// weex.install(stream);

weex.init(Vue);

const App = require('../../../src/view/my/index.vue');
App.el = '#root';
new Vue(App);
