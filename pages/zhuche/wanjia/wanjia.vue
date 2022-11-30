<template>
	<view>
		<input type="text" v-model="username" placeholder="123">
		<input type="password" v-model="password" placeholder="123">
		<input type="text" v-model="zhucheMa" placeholder="1234">
		<button @click="login()">注册 {{token}}</button>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				username: '',
				password: '',
				zhucheMa: '',
				api: 'wanjia1',

			}
		},
		computed: {
			...mapState(['token'])
		},
		methods: {
			login() {
				uniCloud.callFunction({
					name: 'user',
					data: {
						username: this.username,
						password: this.password,
						zhucheMa: this.zhucheMa,
						api: this.api
					}
				}).then(res => {
					if (res.result.code == 200) {
						console.log(res);
						// uni.setStorageSync('token', res.result.token)
					}
				})
			}
		},
	}
</script>

<style>

</style>
