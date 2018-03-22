import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloTest from '@/components/HelloTest'
import New_file from '@/components/New_file'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/HelloTest',
			name: 'HelloTest',
			component: HelloTest,
			children: [{
				path: '/HelloTest/aaa',
				component: HelloWorld
			}, {
				path: '/HelloTest/bbb',
				component: HelloTest
			}]
		},
		{
			path:'/new_file',
			component:New_file
		}
	]
})