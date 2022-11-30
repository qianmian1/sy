// #ifdef VUE3

import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// Vue 3 转 Vue 2, 在 main.js 中写入以下代码即可
function isPromise(obj) {
	return (
		!!obj &&
		(typeof obj === "object" || typeof obj === "function") &&
		typeof obj.then === "function"
	);
}

uni.addInterceptor({
	returnValue(res) {
		if (!isPromise(res)) {
			return res;
		}
		const returnValue = [undefined, undefined];
		return res
			.then((res) => {
				returnValue[1] = res;
			})
			.catch((err) => {
				returnValue[0] = err;
			})
			.then(() => returnValue);
	},
});

// #endif
