<template>
  <div class="menu-container">
    <dl @mouseleave="navLeave">
      <dt>全部分类</dt>
      <dd v-for="item in navList" :key="item.type" @mouseenter="navEnter(item)">
        <i class="el-icon-ship"></i>
        {{ item.name }}
        <i class="el-icon-arrow-right"></i>
      </dd>
    </dl>
    <div
      class="detail"
      v-if="currentDetail"
      @mouseenter="detailEnter"
      @mouseleave="detailLeave"
    >
      <template v-for="(item, index) in currentDetail.items">
        <h3 :key="index">{{ item.title }}</h3>
        <span v-for="(v, i) in item.items" :key="i + '_' + v"
          ><a href="#">{{ v }}</a></span
        >
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDetail: null,
      navList: [
        {
          type: 'food',
          name: '美食',
          items: [
            {
              title: '美食',
              items: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐'],
            },
          ],
        },
        {
          type: 'takeout',
          name: '外卖',
          items: [
            {
              title: '外卖',
              items: ['美团外卖'],
            },
          ],
        },
      ],
    };
  },
  methods: {
    navEnter(item) {
      this.currentDetail = item;
    },
    navLeave() {
      this.timer = setTimeout(() => {
        this.currentDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.currentDetail = null;
    },
  },
};
</script>

<style lang="less" scoped>
.menu-container {
  width: 230px;
  height: 475px;
  position: relative;
  text-align: left;
  box-sizing: border-box;
  float: left;
  margin-top: -70px;
  color: #646464;
  background: #fff;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  dl {
    padding: 0 0 8px;
    dt {
      height: 50px;
      padding-top: 15px;
      box-sizing: border-box;
      color: #222222;
      font-size: 16px;
      font-weight: 700;
      margin-left: 15px;
      margin-bottom: 10px;
    }
    dd {
      box-sizing: border-box;
      padding: 2px 12px;
      height: 26px;
      font-size: 13px;
      line-height: 20px;
      height: 20px;
      color: #646464;
      cursor: pointer;
      &:hover {
        background: rgba(255, 150, 0, 0.08);
        color: #222222;
        font-weight: bold;
      }
      i {
        width: 16px;
        height: 16px;
        font-size: 16px;
        margin-right: 10px;
        &.el-icon-arrow-right {
          float: right;
          font-size: 12px;
          margin-right: 0;
        }
      }
    }
  }
  .detail {
    position: absolute;
    top: 58px;
    left: 230px;
    width: 400px;
    height: 416px;
    background-color: #fff;
    z-index: 199;
    color: #666;
    overflow: hidden;
    padding: 0 30px;
    h3 {
      margin-top: 24px;
      height: 22px;
      line-height: 22px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e5e5e5;
      font-weight: normal;
    }
    span {
      a {
        color: #999;
        font-size: 12px;
        line-height: 15px;
        display: inline-block;
        margin-right: 16px;
        margin-top: 10px;
        cursor: pointer;
      }
      &:hover a {
        color: #ff8c00;
      }
    }
  }
}
</style>
