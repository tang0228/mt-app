<template>
  <div class="item-container">
    <div class="img-box">
      <img :src="meta.image" :alt="meta.title" />
    </div>
    <div class="detail">
      <div class="info">
        <h3>
          <RouterLink to="/"> {{ meta.title }} </RouterLink>
        </h3>
        <p class="score">
          <el-rate
            v-model="meta.score"
            disabled
            text-color="#ff9900"
            score-template="{value}"
            class="rate"
          >
          </el-rate>
          <span v-if="meta.score > 4.5">很好</span>
          <span v-else-if="meta.score > 4">好</span>
          <span v-else-if="meta.score > 3.5">不错</span>
          <span v-else>差</span>
          <span>{{ meta.score }}分</span>
          <span class="comment">{{ meta.commentNum }}人评论</span>
        </p>
        <p class="address">
          <span>
            <span v-for="(item, index) in meta.tab" :key="index"
              >{{ item }}{{ index == meta.tab.length - 1 ? "" : "|" }}</span
            >
          </span>
          <span>{{ meta.address }}</span>
          <span>
            <a href="#">
              <i class="el-icon-location"></i>
              查看地图
            </a>
          </span>
        </p>
        <p class="price">
          <span>人均￥{{ meta.avgPrice }}</span>
        </p>
      </div>
      <ul class="sale-detail">
        <li v-for="(detail, i) in meta.dealItems.slice(0, 2)" :key="i">
          <p class="title">
            {{ detail.title }}
          </p>
          <p class="num">
            <span class="price">￥{{ detail.price }}</span>
            <span>门市价￥{{ detail.counterPrice }}</span>
            <span>已售{{ detail.saleNum }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['meta'],
};
</script>

<style lang="less" scoped>
.item-container {
  display: flex;
  padding: 10px 0;
  .img-box {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-right: 20px;
    img {
      width: 100%;
    }
  }
  .detail {
    flex: 1;
    .info {
      border-bottom: 1px solid #e5e5e5;
      h3 {
        font-weight: normal;
        font-size: 18px;
        margin-bottom: 10px;
      }
      p {
        margin-bottom: 10px;
      }
      .score {
        font-size: 14px;
        .rate {
          display: inline-block;
          margin-right: 10px;
        }
        span {
          margin-right: 10px;
          &.comment {
            color: #ff8c00;
          }
        }
      }
      .address {
        > span {
          margin-right: 10px;
          &:last-child {
            color: #ff8c00;
            cursor: pointer;
          }
        }
      }
      .price {
        font-size: 14px;
        color: #999;
      }
    }
    .sale-detail {
        margin-top: 10px;
        li {
            padding: 10px 0;
            &:hover {
                background-color: #e5e5e5;
            }
            p {
                margin-bottom: 10px;
            }
            .title {
                font-size: 14px;
                cursor: pointer;
                &:hover {
                    color: #ff8c00;
                }
            }
            .num {
                font-size: 13px;
                span {
                    margin-right: 10px;
                }
                .price {
                    color: #ff8c00;
                }
            }
        }
    }
  }
}
</style>
