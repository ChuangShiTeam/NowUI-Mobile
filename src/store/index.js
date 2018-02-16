import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import home from '../store/home';
import topic from '../store/topic';

const store = new Vuex.Store({
    modules: {
        home,
        topic
    }
});

export default store;