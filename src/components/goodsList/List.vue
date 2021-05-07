<template>
  <div class="list-container">
    <el-row>
      <ul class="nav">
        <li
          v-for="item in nav"
          :key="item.key"
          :class="{ active: item.active }"
        >
          {{ item.name }}
        </li>
      </ul>
    </el-row>
    <el-row>
      <Item v-for="(item, index) in productList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
  data() {
    return {
      nav: [
        {
          key: 's-default',
          name: '智能排序',
          active: true,
        },
        {
          key: 's-price',
          name: '价格最低',
          active: false,
        },
        {
          key: 's-score',
          name: '人气最高',
          active: false,
        },
        {
          key: 's-comment',
          name: '评价最高',
          active: false,
        },
      ],
      productList: [
        {
          image:
            '//p1.meituan.net/bbia/09c341219a3ffef1f8a002ec678a176393169.jpg@267w_150h_1e_1c',
          title: '火鸡老店',
          type: 'food',
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: 'xxxx',
              evalaute: '好吃',
            },
          ],
          tab: ['火锅', '沙河'],
          address: '昌平区小汤山尚信村沿温榆河畔北岸向西3.5公里',
          avgPrice: 64,
          dealItems: [
            {
              title: '火鸡宴，建议10-14人使用',
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: '元',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.list-container {
  margin-top: 30px;
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  .nav {
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 20px;
    li {
      margin-right: 30px;
      cursor: pointer;
      &.active {
        color: #ffc300;
      }
    }
  }
}
</style>
