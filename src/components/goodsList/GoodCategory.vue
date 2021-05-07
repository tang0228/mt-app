<template>
  <div class="good-category-container">
    <dl class="category">
      <dt>分类</dt>
      <dt>全部</dt>
      <div class="box">
        <dd v-for="item in cateList" :key="item.type">
          <GoodSelect :name="item.title" :list="item.subList" />
        </dd>
      </div>
    </dl>
    <dl class="category">
      <dt>区域</dt>
      <dt>全部</dt>
      <div class="box">
        <dd v-for="(item, index) in positionList" :key="index">
          <GoodSelect :name="item.title" :list="item.subList" />
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
import GoodSelect from './GoodSelect.vue';

export default {
  data() {
    return {
      cateList: [
        {
          title: '美食',
          type: 'food',
          subList: [
            {
              name: '日本菜',
              id: 'Japan',
            },
          ],
        },
        {
          title: '酒店住宿',
          type: 'hotal',
          subList: [
            {
              name: '温泉酒店',
              id: 'hot_spring',
            },
          ],
        },
      ],
      positionList: [
        {
          title: '推荐商圈',
          subList: [
            {
              name: '望京',
              id: 120000,
            },
            {
              name: '昌平',
              id: 12222,
            },
          ],
        },
      ],
    };
  },
  components: {
    GoodSelect,
  },
};
</script>

<style lang="less" scoped>
.good-category-container {
    background-color: #fff;
    margin-top: 20px;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    border: 1px solid #e5e5e5;
  .category {
    display: flex;
    font-size: 14px;
    margin-bottom: 25px;
    dt {
      margin-right: 30px;
      &:nth-of-type(2) {
        background-color: #ffc300;
        align-self: flex-start;
        padding: 0 5px;
        border-radius: 20px;
      }
    }
    .box {
        flex: 1;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 10px;
        dd {
            display: inline-block;
        }
    }
  }
}
</style>
