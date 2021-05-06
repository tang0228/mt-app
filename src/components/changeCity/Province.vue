<template>
  <div class="province-container">
    按省份选择：
    <Select
      title="省份"
      :list="provinceList"
      :value="province"
      @change="isShowProvince"
      :show="showProvince"
      @changeValue="changeProvince"
    />
    <Select
      title="城市"
      :list="cityList"
      :value="city"
      @change="isShowCity"
      :show="showCity"
      @changeValue="changeCity"
    />
    <span class="search">直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或拼音"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import Select from './Select.vue';

export default {
  data() {
    return {
      provinceList: ['江西', '北京', '上海', '湖南', '黑龙江'],
      cityList: ['宜春', '南昌', '景德镇', '萍乡', '赣州'],
      province: '省份',
      city: '城市',
      showProvince: false,
      showCity: false,
      loading: false,
      searchWord: '',
      searchList: ['宜春', '南昌', '景德镇', '萍乡', '赣州'],
    };
  },
  components: {
    Select,
  },
  methods: {
    isShowProvince(flag) {
      this.showProvince = flag;
      if (flag) {
        this.showCity = false;
      }
    },
    isShowCity(flag) {
      this.showCity = flag;
      if (flag) {
        this.showProvince = false;
      }
    },
    changeProvince(value) {
      this.province = value;
    },
    changeCity(value) {
      this.city = value;
    },
    remoteMethod(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
.search {
    margin-left: 20px;
}
</style>
