<template>
  <div class="user-container">
    <div class="default">
      <div class="img-box">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" />
      </div>
      <p class="username">Hi！你好</p>
      <RouterLink :to="{ name: 'register' }">注册</RouterLink>
      <RouterLink :to="{ name: 'login' }">立即登录</RouterLink>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.user-container {
  margin: 0 10px 0 10px;
  width: 228px;
  height: 238px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  .default {
    padding-top: 30px;
    .img-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto 4px auto;
      img {
        width: 47px;
        height: 47px;
        border-radius: 50%;
        border: 4px solid #e5e5e5;
      }
    }
    .username {
      font-size: 16px;
      color: #222;
      text-align: center;
      font-weight: 500;
      white-space: nowrap;
      width: 6em;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0 auto;
    }
    a {
      width: 118px;
      text-align: center;
      margin: 10px auto 15px auto;
      background: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 40px;
      font-size: 14px;
      color: #333;
      transition: background-color 0.5s;
      display: block;
      line-height: 38px;
      &:hover {
        background-color: #f6f6f6;
        transition: background-color 0.5s;
      }
    }
  }
}
</style>
