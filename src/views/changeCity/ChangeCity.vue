<template>
  <div class="change-city-container">
      <el-row>
          <Province />
      </el-row>
      <el-row>
          <Hot title="热门城市" :list="cityList"/>
      </el-row>
      <el-row>
          <Hot title="最近访问" :list="cityList"/>
      </el-row>
      <el-row>
          <Category />
      </el-row>
  </div>
</template>

<script>
import Province from '@/components/changeCity/Province.vue';
import Hot from '@/components/changeCity/Hot.vue';
import Category from '@/components/changeCity/Category.vue';

export default {
  components: {
    Province,
    Hot,
    Category,
  },
  data() {
    return {
      cityList: ['宜春', '南昌', '景德镇', '萍乡', '赣州'],
    };
  },
};
</script>

<style lang="less" scoped>
.change-city-container {
    width: 1190px;
    margin: 0 auto;
    border: 1px solid #e5e5e5;
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;
    .el-row:not(:last-child) {
        border-bottom: 1px solid #e5e5e5;
        padding: 20px 0;
    }
}
</style>
