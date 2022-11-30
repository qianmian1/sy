<template>
	<view class="scroll">
		<scroll-view scroll-y class="list-scroll" enable-flex="true">
			<view>
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "list-sorll",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.scroll {
		flex: 1;
		box-sizing: border-box;
		overflow: hidden;

		.list-scroll {
			height: 80%;
			display: flex;
			flex-direction: column-reverse;

		}
	}
</style>
