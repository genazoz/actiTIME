import '@babel/polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
var Home = require('./main.vue').default;

Vue.use(VueRouter);


var router = new VueRouter({
    mode: 'history',
    routes: [
        {   
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: 'Features actiTIME'
            },
        },

        {   
            path: '*',
            component: Home,
            meta: {
                title: 'Features actiTIME'
            },
        },
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
});

var app = new Vue({
    el: "#app",
    router: router,
});