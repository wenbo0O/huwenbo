<template>
	<div class="hello">
		<h1>{{ msg.a }}</h1>
		<ul>
			<li>
				<router-link to="/">go home</router-link>
			</li>
			<li>
				<router-link to="/HelloTest/aaa">tab AAA</router-link>
			</li>
			<li>
				<router-link to="/HelloTest/bbb">tab BBB</router-link>
			</li>
		</ul>
		<p>tab切换 路由</p>
		<router-view></router-view>
		--------------------------
		<p>兄弟组件传数据,子组件改变父级组件数据</p>
		<p v-if="false">
			同级组件传数据
			1, 定义一个中转站
			2, aaa组件主动发送 vm.$emit('数据名称', 数据);
			3, bbb组件接收数据 vm.$on('数据名称', callback);
			
			子组件利用对象引用关系，改变父组件数据
			1, 父组件定义json数据
			2, 子组件调用时<aaa :info="msg"></aaa> 绑定自定义事件并传递父组件的数据
			3, 子组件使用props接收数据
			4, 子组件改变对象时，父组件的对象数据也会被改变
		</p>
		<aaa :info="msg"></aaa>
		<bbb></bbb>
	</div>
</template>

<script>
	import Vue from 'vue'
	let vm = new Vue();

	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: {
					a: '哎呀，成功了！'
				}
			}
		},
		components: {
			'aaa': {
				data() {
					return {
						msg: 'aaa组件子组件数据'
					}
				},
				props: ['info'],
				methods: {
					send() {
						vm.$emit('msg-aaa', this.msg);
					},
					change() {
						this.info.a = 'change了。。'
					}
				},
				template: `
					<div>
						<h1>局部 ->{{ msg }}</h1>
						<button @click="send">Form aaa To bbb</button>
						<button @click="change">change父组件数据</button>
					</div>
				`,
				mounted() {
					vm.$on('msg-bbb', (data) => {
						this.msg = data;
					});
				}
			},
			'bbb': {
				data() {
					return {
						msg: 'bbb组件子组件数据',
						sendMsg: 'bbb组件子组件数据'
					}
				},
				methods: {
					send() {
						vm.$emit('msg-bbb', this.sendMsg);
					}
				},
				template: `
					<div>
						<h1>局部 ->{{ msg }}</h1>
						<button @click="send">Form aaa To bbb</button>
					</div>
				`,
				mounted() {
					vm.$on('msg-aaa', (data) => {
						this.msg = data;
					});
				}

			}
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>