<template>
  <div class="home-container">
    <el-container>
      <el-header height="">
        <Header />
      </el-header>
      <el-main>
          <RouterView />
      </el-main>
      <el-footer height="">
          <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped>
.home-container {
  background-color: #f8f8f8;
  .el-header {
      padding: 0;
  }
  .el-main {
    overflow: visible;
  }
}
</style>
