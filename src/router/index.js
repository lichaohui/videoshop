import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index.vue'
import subpage from '@/components/subpage/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
		{
			path: '/tv',
			name: 'tv',
			component: subpage
		},
		{
			path: '/movie',
			name: 'movie',
			component: subpage
		},
		{
			path: '/variety',
			name: 'variety',
			component: subpage
		},
		{
			path: '/live',
			name: 'live',
			component: subpage
		},
  ]
})
