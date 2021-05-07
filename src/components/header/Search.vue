<template>
  <div class="search-container">
    <el-row>
      <el-col :span="3" class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
          alt="美团"
        />
      </el-col>
      <el-col :span="15" class="right">
        <div class="search-wrap">
          <el-input
            v-model="searchWord"
            placeholder="搜索商家或地点"
            class="inp"
            @focus="focus"
            @blur="blur"
          ></el-input>
          <el-button icon="el-icon-search" class="btn"></el-button>
          <dl v-if="showKeyWord" class="key-word">
            <dt>最近搜索</dt>
            <dd v-for="(item, i) in keyWordList" :key="i">
              <RouterLink :to="{ name: 'goods', params: { name: item } }">{{
                item
              }}</RouterLink>
            </dd>
          </dl>
          <dl v-if="showSearchList" class="search-list">
            <dd v-for="(item, i) in searchList" :key="i">
              <RouterLink :to="{ name: 'goods', params: { name: item } }">{{
                item
              }}</RouterLink>
            </dd>
          </dl>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: '',
      isFocus: false,
      keyWordList: ['火锅', '烤肉', '饮料', '啤酒'],
      searchList: ['火锅', '麻辣火锅', '火锅底料', '烤肉', '饮料', '啤酒'],
    };
  },
  computed: {
    showKeyWord() {
      return this.isFocus && !this.searchWord;
    },
    showSearchList() {
      return this.isFocus && this.searchWord;
    },
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
  },
};
</script>

<style lang="less" scoped>
.search-container {
  width: 1190px;
  margin: 0 auto;
  .left {
    padding-top: 28px;
    padding-right: 60px;
    padding-bottom: 40px;
    font-size: 16px;
    min-width: 220px;
    height: 54px;
    box-sizing: content-box;
    vertical-align: sub;
    img {
      width: 126px;
      height: 46px;
    }
  }
  .right {
    padding-top: 28px;
    .search-wrap {
      width: 550px;
      height: 40px;
      background: #fff;
      position: relative;
      .inp {
        width: 85.45%;
      }
      .btn {
        position: absolute;
        top: -1px;
        right: 0;
        width: 14.55%;
        background: #ffc300;
        border: none;
        color: #222222;
        height: 100%;
      }
      .key-word,
      .search-list {
        width: 85.45%;
        background-color: #fff;
        padding: 8px 5px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        color: #999;
        font-size: 12px;
        border-top: none;
        line-height: 10px;
        z-index: 88;
        dt {
          margin-bottom: 5px;
          font-size: 13px;
        }
        dd {
          padding: 5px 3px 10px;
          &:hover a {
            color: #fe8c00;
          }
        }
      }
    }
  }
}
</style>
