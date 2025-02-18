import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../components/Home.vue';
// import History from '../components/History.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home'
		// component: Home
	},
	{
		path: '/history',
		name: 'History'
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
		// component: () => import(/* webpackChunkName: "about" */ '../components/History.vue')
	},
	{
		path: '/team',
		name: 'Team'
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
		// component: () => import(/* webpackChunkName: "about" */ '../components/Home.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;
