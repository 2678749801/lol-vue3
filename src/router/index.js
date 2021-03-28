import { createRouter, createWebHistory } from 'vue-router'
const Home = () =>
    import ('../views/home/Home')
const ZiLiao = () =>
    import ('../views/ziliao/ZiLiao')


const routes = [
  {
    path: '',
    redirect: '/home'
},
{
  path: '/home',
  component: Home
},
{
  path: '/ziliao',
  component: ZiLiao
},
  {
    // path: '/',
    // name: 'Home',
    // component: Home
    
  },
  {
    // path: '/about',
    // name: 'About',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
