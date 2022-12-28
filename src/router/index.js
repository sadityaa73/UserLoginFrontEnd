import Vue from 'vue'
import VueRouter from 'vue-router'
import mainComponent from "../views/mainComponent"
import signup from "../components/signup/signup"

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "mainComponent",
    component: mainComponent
}, {
    path: "/signup",
    name: "signup",
    component: signup
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router