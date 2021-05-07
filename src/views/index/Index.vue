<template>
  <div class="index-container">
      <el-row>
        <el-col :span="5">
          <Menu />
        </el-col>
        <el-col :span="19">
          <Life />
        </el-col>
      </el-row>
      <el-row>
        <Container />
      </el-row>
  </div>
</template>

<script>
import Menu from '@/components/index/Menu.vue';
import Life from '@/components/index/Life.vue';
import Container from '@/components/index/Container.vue';

export default {
  components: {
    Menu,
    Life,
    Container,
  },
};
</script>

<style lang="less" scoped>
.index-container {
  width: 1190px;
  margin: 0 auto;
}
</style>
