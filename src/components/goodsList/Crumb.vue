<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">{{position}}美团</el-breadcrumb-item>
    <el-breadcrumb-item>{{position}}{{$route.params.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['position']),
  },
};
</script>

<style>
</style>
