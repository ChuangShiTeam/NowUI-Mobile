export default {
    state: {
        aaa: '1234567890'
    },
    mutations: {
        home(state, data) {
            state = Object.assign(state, data);
        }
    }
}