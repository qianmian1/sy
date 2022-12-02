<template>
  <view>
    <nabb></nabb>
    <view class="box">
      <view class="input-box">
        <text class="txt">登录</text>
        <text>用户名</text>
        <input type="text" v-model="username" placeholder="用户名" @blur="validate(username)" />
      </view>
      <view class="input-box">
        <text>密码</text>
        <input v-model="password" placeholder="密码" type="password" @blur="validate(password)" />
        <text class="xxx" @click="zhuce()">注册</text>
      </view>
      <view class="but-box">
        <button @click="login()" size="mini" class="btn">登录</button>
      </view>
    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        api: "login",
        rules: {
          username: {
            rule: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
            msg: "账号不能为空"
          },
          password: {
            rule: /^[0-9a-zA-Z]{6,16}$/,
            msg: "密码应该为6-16位"
          }
        }
      };
    },
    onLoad() {},
    methods: {
      login() {
        uniCloud
          .callFunction({
            name: "user",
            data: {
              username: this.username,
              password: this.password,
              api: this.api,
            },
          })
          .then((res) => {
            if (res.result.code == 200) {
              //console.log(res.sult.token);
              uni.redirectTo({
                url: '/pages/index/index'
              })
              uni.setStorageSync("token", res.result.token);
            }
          })
          .catch((e) => {
            if (e.message == "密码错误") {
              uni.showToast({
                title: '密码或账号错误',
                icon: 'error'
              })
            }
            if (e.message == "用户不存在") {
              uni.showToast({
                title: '用户不存在',
                icon: 'error'
              })
            }
          });
      },
      zhuce() {
        uni.redirectTo({
          url: '/pages/zhuche/tiaozhuan/tiaozhuan'
        })
      },
      validate(key) {
        let bool = true;
        if (!this.rules[key].rule.test(this[key])) {
          //提示信息
          uni.showToast({
            title: this.rules[key].msg,
          })
          //取反
          bool = false;
          return false;
        }
        return bool;
      }
    },
  };
</script>

<style lang="scss">
  page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url('@/static/1.PNG');
    block-size: 100% 80%;
    background-position: 50% 50%;
    background-repeat: on-repeat;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700rpx;
    height: 760rpx;


    .input-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 10rpx;

      .txt {
        font-size: 32px;
        text-align: center;
        position: relative;
        top: -10px;
        left: 40%;
      }

      .xxx {
        position: relative;
        left: 90%;
        top: 10px;
      }
    }

    .input-box>text {
      margin-bottom: 20rpx;
      color: rgba(255, 255, 255, 0.9);
    }

    .input-box>input {
      color: rgba(255, 255, 255, 0.9);
      font-size: 28rpx;
      height: 70rpx;
      width: 500rpx;
      background: rgba(255, 255, 255, 0.3);
      border: 2rpx solid #ffffff;
      border-radius: 20rpx;
      outline: none;
      padding: 0 20rpx;
    }

    .input-box {
      .btn {
        border: 2rpx solid rgba(255, 255, 255, 0.8);
      }
    }
  }
</style>
