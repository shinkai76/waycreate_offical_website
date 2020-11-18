import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import './assets/main.less'
import animate from 'animate.css'
import MetaInfo from 'vue-meta-info'
import './icons/index'
import axios from 'axios'
import './js/partners.js'

Vue.prototype.$axios = axios
Vue.use(Element)
Vue.use(MetaInfo)
Vue.use(animate)

Vue.config.productionTip = false
new Vue({
    router,
    store,
    mounted () {
        document.dispatchEvent(new Event('render-event'))
    },
    render: h => h(App)
}).$mount('#app')
