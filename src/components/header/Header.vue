<template>
  <div class="header-container">
    <el-row>
      <TopBar />
    </el-row>
    <el-row class="search-bar">
      <Search />
    </el-row>
  </div>
</template>

<script>
import TopBar from './TopBar.vue';
import Search from './Search.vue';

export default {
  components: {
    TopBar,
    Search,
  },
};
</script>

<style lang="less" scoped>
.search-bar {
    background-color: #fff;
}
</style>
