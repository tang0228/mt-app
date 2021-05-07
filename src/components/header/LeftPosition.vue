<template>
  <div class="left-position-container">
    <div class="position">
      <i class="el-icon-location-information"></i>
      {{position}}
      <RouterLink :to="{ name: 'changeCity' }" class="change-city"> 切换城市 </RouterLink>
      [
      <a href="#">奉新</a>
      <a href="#">共青城</a>
      <a href="#">丰城</a>
      ]
    </div>
    <div class="user">
      <RouterLink :to="{ name: 'login' }" class="login"> 立即登录 </RouterLink>
      <RouterLink :to="{ name: 'register' }"> 注册 </RouterLink>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['position']),
  },
};
</script>

<style lang="less" scoped>
.left-position-container {
    padding-top: 12px;
    display: flex;
    .position {
        margin-right: 15px;
        font-size: 12px;
        color: #666;
        a {
            margin: 0 4px;
            color: #999;
        }
        a.change-city {
            background-color: #f4f4f4;
            border: 1px solid #e5e5e5;
            border-radius: 2px;
            color: #666;
            padding: 0 2px;
        }
        a:hover{
            color: #fe8c00;
        }
    }
    .user {
        font-size: 12px;
        color: #999;
        a {
            margin-right: 10px;
        }
        a.login {
            color: #fe8c00;
        }
        a:hover{
            color: #fe8c00;
        }
    }
}
</style>
