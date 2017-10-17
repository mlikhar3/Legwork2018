import Vue from 'vue';
import Router from 'vue-router';
import IndexView from '../views/IndexView.vue';

// Set Vue to use the Router
Vue.use(Router);

// Create the router and return
export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: IndexView }
    ]
  });
}
