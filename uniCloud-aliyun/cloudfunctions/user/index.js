'use strict';
const db = uniCloud.database({
	throwOnNotFound: false
})
const {
	throws
} = require('assert');
const bcrypt = require('bcryptjs')
exports.main = async (event, context) => {
	let {
		username,
		password,
		api,
		zhucheMa,
		ip
	} = event
	let a = bcrypt.compareSync('$2a$10$Bnf7rwGjB91VGHQEOj3bh.xuL1luk0hpoYTUt/mENv.woTt8NfyV2', hash)
	console.log(a);
	if (api == 'login') {
		let user = await db.collection('user').doc(username).get()
		console.log(user.data[0]);
		if (user.data[0]) {
			let check = await bcrypt.compare(password, user.data[0].hash);
			if (!check) {
				throw Error('密码错误')
			}
			const op = uniCloud.importObject("token")
			const res = await op.token(username)
			let token = res
			return {
				code: 200,
				token
			}
		} else {
			user = await db.collection('user_z').doc(username).get()
			if (user.data[0]) {
				let check = await bcrypt.compare(password, user.data[0].hash);
				if (!check) {
					throw Error('密码错误')
				}
				const op = uniCloud.importObject("token")
				const res = await op.token(username)
				let token = res
				return {
					code: 201,
					token
				}
			} else {
				throw Error('用户不存在')
			}
		}
	}
	if (api == "fuzhu1") {
		let array = []
		for (let i = 0;; i++) {
			if (array.length < 5) {
				suijishu(5)
			} else {
				break
			}
		}
		let suijish = array.toString().replace(/,/g, "")

		function suijishu(o) {
			let rand = parseInt(Math.random() * o)
			for (let i = 0; i < array.length; i++) {
				if (array[i] == rand) {
					return false
				}
			}
			array.push(rand)
		}
		let hash = await bcrypt.hash(password, 10)
		let data = {
			_id: username,
			hash,
			createdAt: Date.now(),
			ip,
			suijishu: suijish
		}
		let useRes = await db.collection('user').add(data);
		const op = uniCloud.importObject("token")
		const res = await op.token(username)
		let token = res
		return {
			code: 200,
			token,
			suijishu: suijish
		}
	} else if (api == 'wanjia1') {
		let hash = await bcrypt.hash(password, 10)
		let data = {
			_id: zhucheMa,
			username,
			hash,
			createdAt: Date.now(),
			zhucheMa: zhucheMa
		}
		let useRes = await db.collection('user1').add(data);
		const op = uniCloud.importObject("token")
		const res = await op.token(username)
		let token = res
		return {
			code: 200,
			token
		}
	}
};
