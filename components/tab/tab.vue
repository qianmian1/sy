<template>
	<view class="tab">
		<scroll-view scroll-x="true" class="tab-scroll">
			<view class="tab-scroll_box">
				<view class="tab-scroll_item" v-for="(item,index) in list " :key="index" @click="clickTab(item,index)"
					:class="{as:as===index}">
					{{item.text}}
				</view>
			</view>
		</scroll-view>
		<view class="m">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				default () {
					return []
				}
			}
		},
		name: "tab",
		data() {
			return {
				as: 0
			};
		},
		methods: {
			clickTab(item, index) {
				this.as = index
			}
		}
	}
</script>

<style lang="scss">
	.tab {
		display: flex;
		width: 100%;
		border-bottom: 1px #f5f5f5 solid;
		background-color: #fff;
		box-sizing: border-box;

		.tab-scroll {
			flex: 1;
			over-flow: hidden;
			box-sizing: border-box;

			.tab-scroll_box {
				display: flex;
				height: 45px;
				align-items: center;
				flex-wrap: nowrap;
				box-sizing: border-box;

				.tab-scroll_item {
					flex-shrink: 0;
					padding: 0 10px;
					cocor: #333;
					font-size: 14px;

					&.as {
						color: red;
					}
				}
			}
		}

		.m {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;

			&::after {
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #ddd;
			}
		}
	}
</style>
