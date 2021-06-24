import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../components/goodsContent.vue'
import AddProductions from '../components/addProductions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/getFurniture',
    name: 'getFurniture',
    component: Content
  },
  {
    path: '/getElectric',
    name: 'getElectric',
    component: Content
  },
  {
    path: '/addProductions',
    name: 'addProductions',
    component: AddProductions
  }
]

const router = new VueRouter({
  routes
})


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router

