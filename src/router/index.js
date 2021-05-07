import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Entry from '@/views/Entry.vue';
import Index from '@/views/index/Index.vue';
import ChangeCity from '@/views/changeCity/ChangeCity.vue';
import GoodsList from '@/views/goodsList/GoodsList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: 'goods/:name',
        name: 'goods',
        component: GoodsList,
      },
      {
        path: 'index',
        name: 'index',
        component: Index,
      },
      {
        path: 'changeCity',
        name: 'changeCity',
        component: ChangeCity,
      },
    ],
  },
  {
    path: '/entry',
    name: 'entry',
    component: Entry,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
