<template>
  <div class="top-bar-container">
      <el-row>
          <el-col :span="10">
              <LeftPosition />
          </el-col>
          <el-col :span="14">
              <RightNav />
          </el-col>
      </el-row>
  </div>
</template>

<script>
import LeftPosition from './LeftPosition.vue';
import RightNav from './RightNav.vue';

export default {
  components: {
    LeftPosition,
    RightNav,
  },

};
</script>
<style lang="less" scoped>
.top-bar-container {
    width: 1190px;
    margin: 0 auto;
}
</style>
