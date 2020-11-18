import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isScrolled: false, // 是否下滚了
        dialogVisible: false
    },
    mutations: {
        GET_SCROLL(state) {
            window.addEventListener('scroll', function () {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                state.isScrolled = scrollTop > 100
            })
        },
        TRIGGER_LOGIN(state, bool) {
            state.dialogVisible = bool
        }
    },
    actions: {}
})
