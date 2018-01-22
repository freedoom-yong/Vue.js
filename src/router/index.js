import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '../demo/demo'
import demo1 from '../demo/demo1'
import demo2 from '../demo/demo2'
import demo3 from '../demo/demo3'
import demo4 from '../demo/demo4'
import demo5 from '../demo/demo5'
import demo6 from '../demo/demo6'
import demo7 from '../demo/demo7'
import demo8 from '../demo/demo8'
import demo9 from '../demo/demo9'
import demo10 from '../demo/demo10'
import demo11 from '../demo/demo11'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: demo3
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: demo4
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: demo5
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: demo6
    },
    {
      path: '/demo7',
      name: 'demo7',
      component: demo7
    },
    {
      path: '/demo8',
      name: 'demo8',
      component: demo8
    },
    {
      path: '/demo9',
      name: 'demo9',
      component: demo9
    },
    {
      path: '/demo10',
      name: 'demo10',
      component: demo10
    },
    {
      path: '/demo11',
      name: 'demo11',
      component: demo11
    }
  ]
})
