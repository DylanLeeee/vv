import Vue from 'vue'
import VueRouter from 'vue-router'

// 商品类
import FurnitureCatagory from '@/components/productions/furnitureCatagory.vue'  
import ElectricsCatagory from '@/components/productions/electricsCatagory.vue'

//商品编辑
import AddProductions from '@/components/admin/addProductions.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/getFurnitures',
    name: 'getFurnitures',
    component: FurnitureCatagory
  },
  {
    path: '/getElectrics',
    name: 'getElectrics',
    component: ElectricsCatagory
  },
  {
    path: '/addProductions',
    name: 'addProductions',
    component:AddProductions
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

