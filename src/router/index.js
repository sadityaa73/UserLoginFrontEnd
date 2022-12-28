import Vue from 'vue'
import VueRouter from 'vue-router'
import mainComponent from "../views/mainComponent"
import login from "../components/login/login"
import signup from "../components/signup/signup"
import reset from "../components/reset/reset"

Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "mainComponent",
        component: mainComponent
    },
    {
        path: "/login",
        name: "login",
        component: login
    },
    {
        path: "/signup",
        name: "signup",
        component: signup
    },
    {
        path: "/resetPassword",
        name: "reset",
        component: reset
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router