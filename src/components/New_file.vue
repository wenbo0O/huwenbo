<template>
	<div>
		<div v-html="replaceAll"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '正则表达式替换所有字符；正则表达式替换所有字符',
				searchStr: '所有'
			}
		},
		computed: {
			replaceAll: function() {
				let reg =  new RegExp(this.searchStr, "gi");
				return this.msg.replace(reg, `<span>${this.searchStr}</span>`);
			}
		}
	}
</script>
<style>
	span{
		color: red;
	}
</style>