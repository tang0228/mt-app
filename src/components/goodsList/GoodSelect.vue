<template>
  <div class="good-select">
    <dl class="row">
      <dt>{{ name }} <i class="el-icon-caret-bottom"></i></dt>
      <dd>
        <h3>{{ name }}</h3>
        <span v-for="item in list" :key="item.id">{{ item.name }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['name', 'list'],
};
</script>

<style lang="less" scoped>
.good-select {
  margin-right: 40px;
  .row {
    position: relative;
    &:hover dd {
        display: block;
    }
    dt {
      cursor: pointer;
    }
    dd {
      display: none;
      position: absolute;
      z-index: 20;
      cursor: default;
      top: 20px;
      left: -6px;
      width: 200px;
      padding: 20px 0 20px 15px;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      &::after {
        content: "";
        position: absolute;
        top: -5px;
        left: 26px;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid #fff;
        border-top: 0;
      }
      h3 {
        font-weight: normal;
        font-size: 14px;
        color: #ccc;
        margin: 0;
      }
      span {
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
