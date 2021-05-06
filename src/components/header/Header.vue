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
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
}
</style>
