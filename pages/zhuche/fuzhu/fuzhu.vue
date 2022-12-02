<template>
  <view class="box">
    <view class="input-box">
      <text class="txt">服主注册</text>
      <text>用户名</text>
      <input type="text" v-model="username" placeholder="用户名" />
    </view>
    <view class="input-box">
      <text>密码</text>
      <input v-model="password" placeholder="密码" type="password" />
    </view>
    <view class="input-box">
      <text>服务器ip</text>
      <input v-model="ip" placeholder="ip或域名" type="text" />
    </view>
    <view class="input-box">
      <text>插件token</text>
      <input v-model="token" placeholder="token" type="text" />
    </view>
    <view class="but-box">
      <button @click="login()" size="mini" class="btn">登录</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        ip: '',
        api: 'fuzhu1',
        token: ''
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
            token: this.token,
            api: this.api
          }
        }).then(res => {
          if (res.result.code == 200) {
            uni.setStorageSync('token', res.result.token)
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url('/static/1.PNG');
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
        left: 30%;
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
