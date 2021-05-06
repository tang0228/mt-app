<template>
  <div class="select-container" @click="click" v-document-click="documentClick">
    <span>{{ value }}</span>
    <i class="el-icon-caret-bottom"></i>
    <div class="content" v-show="show">
      <dl>
        <dt>{{ title }}</dt>
        <dd
          :class="{ active: item == value }"
          v-for="(item, index) in list"
          :key="index"
          @click="changeValue(item)"
        >
          {{ item }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'list', 'value', 'show'],
  methods: {
    click(e) {
      e.stopPropagation();
      this.$emit('change', true);
    },
    documentClick() {
      this.$emit('change', false);
    },
    changeValue(item) {
      this.$emit('changeValue', item);
    },
  },
};
</script>

<style lang="less" scoped>
.select-container {
  display: inline-block;
  padding: 10px 0 10px 10px;
  cursor: pointer;
  border-radius: 4px;
  vertical-align: middle;
  width: 150px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  margin: 0 10px 0 20px;
  font-size: 14px;
  color: #666;
  position: relative;
  i {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
  }
  .content {
    position: absolute;
    z-index: 20;
    cursor: default;
    top: 45px;
    left: 0;
    width: 264px;
    height: 375px;
    padding: 20px 0 20px 15px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);
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
    dl {
      dt {
        font-size: 16px;
        color: #ccc;
        margin-bottom: 11px;
      }
      dd {
        cursor: pointer;
        font-size: 12px;
        color: #666;
        display: table;
        box-sizing: border-box;
        min-width: 40px;
        height: 20px;
        padding: 1px 8px;
        margin: 6px 38px 6px 0;
        &.active {
          background: linear-gradient(to bottom right, #ffd000, #ffbd00);
          border-radius: 10px;
          color: #222222;
        }
      }
    }
  }
}
</style>
