<template>
  <div class="category-container">
    <dl>
      <dt class="cate-title">按拼音首字母选择：</dt>
      <dd class="cate-item" v-for="(item, index) in categoryList" :key="index">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      class="all-city"
      v-for="(item, index) in cityObj"
      :key="index"
      :id="'city-' + index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <a v-for="city in item" :key="city.id" href="#">{{ city.name }}</a>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryList: 'ABCDEFGHJKLMNPQRSTWXYZ'.split(''),
      cityObj: {},
    };
  },
  created() {
    const cityList = [
      {
        id: 1,
        name: '北京',
        pinyin: 'beijing',
        acronym: 'bj',
        rank: 'S',
        firstChar: 'b',
      },
      {
        id: 2,
        name: '南昌',
        pinyin: 'nanchang',
        acronym: 'nc',
        rank: 'S',
        firstChar: 'n',
      },
      {
        id: 10,
        name: '上海',
        pinyin: 'shanghai',
        acronym: 'sh',
        rank: 'S',
        firstChar: 's',
      },
      {
        id: 11,
        name: '深圳',
        pinyin: 'shenzhen',
        acronym: 'sz',
        rank: 'S',
        firstChar: 's',
      },
      {
        id: 20,
        name: '广州',
        pinyin: 'guangzhou',
        acronym: 'gz',
        rank: 'S',
        firstChar: 'g',
      },
      {
        id: 15,
        name: '大连',
        pinyin: 'dalian',
        acronym: 'dl',
        rank: 'S',
        firstChar: 'd',
      },
      {
        id: 3,
        name: '宜春',
        pinyin: 'yichun',
        acronym: 'yc',
        rank: 'S',
        firstChar: 'y',
      },
      {
        id: 8,
        name: '杭州',
        pinyin: 'hangzhou',
        acronym: 'hz',
        rank: 'S',
        firstChar: 'h',
      },
    ];
    const obj = {};
    cityList.forEach((item) => {
      if (!obj[item.firstChar.toUpperCase()]) {
        obj[item.firstChar.toUpperCase()] = [];
      }
      obj[item.firstChar.toUpperCase()].push(item);
    });
    this.cityObj = obj;
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.category-container {
  dl {
    padding: 30px 0;
    .cate-title {
      font-size: 16px;
      color: #333;
      font-weight: 500;
      vertical-align: top;
      display: inline-block;
    }
    .cate-item {
      font-size: 15px;
      margin: 0 17px;
      color: #666;
      display: inline-block;
      margin: 0 9px;
      width: 25px;
      height: 25px;
      padding-top: 2px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border-radius: 50%;
      font-size: 14px;
    }
  }
  .all-city {
    padding: 13px 30px 13px 10px;
    border-radius: 10px;
    dt {
      box-sizing: border-box;
      vertical-align: top;
      padding-top: 10px;
      display: inline-block;
      text-align: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #222222;
      background: #ffd000;
    }
    dd {
      display: inline-block;
      max-width: 1065px;
      a {
        margin: 10px 20px;
        color: #666;
        display: inline-block;
        font-size: 14px;
      }
    }
    &:hover {
      background: #f8f8f8;
    }
  }
}
</style>
