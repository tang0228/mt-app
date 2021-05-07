<template>
  <div class="goods-list-container">
    <el-row  class="row">
      <Crumb />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <GoodCategory />
        </el-row>
        <el-row>
          <List />
        </el-row>
      </el-col>
      <el-col :span="5"> 地图+喜欢 </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumb from '@/components/goodsList/Crumb.vue';
import GoodCategory from '@/components/goodsList/GoodCategory.vue';
import List from '@/components/goodsList/List.vue';

export default {
  components: {
    Crumb,
    GoodCategory,
    List,
  },
};
</script>

<style lang="less" scoped>
.goods-list-container {
  width: 1190px;
  margin: 0 auto;
}
</style>
