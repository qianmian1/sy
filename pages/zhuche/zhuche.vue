<template>
	<view class="box">
		<view class="conten">
			<view class="login-wrapper">
				<h1>登陆</h1>
				<view class="login-form">
					<view class="username form-item">
						<text>用户名</text>
						<input type="text" class="input-item" placeholder="用户名" v-model="username">
					</view>
					<view class="password form-item">
						<text>密码</text>
						<input type="password" class="input-item" placeholder="密码" v-model="password">
					</view>
					<button class="login-btn" @click="login()">登陆</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				api: 'login'
			}
		},
		onLoad() {

		},
		methods: {
			login() {
				uniCloud.callFunction({
					name: 'user',
					data: {
						username: this.username,
						password: this.password,
						api: this.api
					}
				}).then(res => {
					if (res.result.code == 200) {
						//console.log(res.sult.token);
						uni.setStorageSync('token', res.result.token)
					}
					console.log(res);
				}).catch(e => {
					if (e.message == '密码错误') {
						console.log('密码错误');
					}
					if (e.message == '用户不存在') {
						console.log('用户不存在');
					}
				})
			}
		}
	}
</script>

<style>
	/* @import url('../../static/login.css'); */
</style>
