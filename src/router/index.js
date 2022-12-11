import { createRouter, createWebHistory } from 'vue-router';

/* Creating a router object that will be used to navigate between pages. */
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'search-books',
			// eslint-disable-next-line import/no-unresolved
			component: () => import('@/pages/SearchBooks.vue')
		},
		{
			path: '/list-books',
			name: 'list-books',
			// eslint-disable-next-line import/no-unresolved
			component: () => import('@/pages/ListBooks.vue')
		}
	]
});

export default router;
