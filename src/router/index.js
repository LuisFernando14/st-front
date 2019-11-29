import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Employee from '../views/employee/Index.vue'
import AddEmployee from '../views/employee/Add.vue'
import UpdateEmployee from '../views/employee/Update.vue'
import DeleteEmployee from '../views/employee/Delete.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/employees',
    name: 'Employee',
    component: Employee
  },
  {
    path: '/employees/add',
    name: 'AddEmployee',
    component: AddEmployee
  },
  {
    path: '/employees/edit/:id',
    name: 'UpdateEmployee',
    component: UpdateEmployee
  },
  {
    path: '/employees/delete/:id',
    name: 'DeleteEmployee',
    component: DeleteEmployee
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
