/* eslint-disable */
/*
   Routing File
*/
import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Submit from '@/components/Submit'
import Credits from '@/components/Credits'

Vue.use(Router)

export default new Router({
    base: '/test/todo/',
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Main',
        component: Main
    }, {
        path: '/submit',
        name: 'Submit',
        component: Submit
    }, {
        path: '/credits',
        name: 'Credits',
        component: Credits
    }]
})