import Vue from 'vue'
import VueRouter from 'vue-router'
import mainComponent from "../views/mainComponent"

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "mainComponent",
    component: mainComponent
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router