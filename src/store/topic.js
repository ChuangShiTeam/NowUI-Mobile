export default {
    state: {
        aaa: '000000000'
    },
    mutations: {
        topic(state, data) {
            state = Object.assign(state, data);
        }
    }
}