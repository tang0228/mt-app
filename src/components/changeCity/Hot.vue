<template>
  <div class="hot-container">
    <dl>
      <dt>{{ title }}：</dt>
      <dd v-for="(item, index) in list" :key="index">{{ item }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['title', 'list'],
};
</script>

<style lang="less" scoped>
.hot-container {
    dl {
        dt {
            font-size: 16px;
    color: #333;
    font-weight: 500;
    vertical-align: top;
    display: inline-block;
        }
        dd {
            margin: 0 20px;
    color: #666;
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
        }
    }
}
</style>
