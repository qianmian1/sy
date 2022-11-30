<template>
	<view class="home">
		<nabb></nabb>
		<tab :list="list"></tab>
		<list-sorll>
			<list-cord enable-flex="true"></list-cord>
		</list-sorll>
		<!-- <view>
			<uni-data-select v-model="i" :localdata="list2"></uni-data-select>
		</view> -->


	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				list2: [],
				i: ''
			}

		},
		onLoad() {
			this.get_tab()
		},
		methods: {
			get_tab() {
				uniCloud.callFunction({
					name: 'list-tab',
					data: {
						tab: 'tab'
					}
				}).then(res => this.list = res.result)
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;

	}

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		border: 1px black solid;
	}
</style>
