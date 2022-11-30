<template>
	<view>
		<input type="text" v-model="username" placeholder="123">
		<input type="password" v-model="password" placeholder="123">
		<input type="text" v-model="ip" placeholder="1234">
		<button @click="login()">注册</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				ip: '',
				api: 'fuzhu1'
			}
		},
		methods: {
			login() {
				uniCloud.callFunction({
					name: 'user',
					data: {
						username: this.username,
						password: this.password,
						ip: this.ip,
						api: this.api
					}
				}).then(res => {
					if (res.result.code == 200) {
						//console.log(res.sult.token);
						uni.setStorageSync('token', res.result.token)
					}
				})
			}
		}
	}
</script>

<style>

</style>
