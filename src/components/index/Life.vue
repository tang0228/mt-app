<template>
  <div class="life-container">
    <el-row>
      <ul class="nav">
        <li class="yellow">美团外卖</li>
        <li>猫眼电影</li>
        <li>美团酒店</li>
        <li class="yellow">民宿／公寓</li>
        <li class="orange">商家入驻</li>
        <li>美团公益</li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14">
        <Slider />
      </el-col>
      <el-col :span="4">
        <div class="pic1"></div>
      </el-col>
      <el-col :span="6">
        <User />
      </el-col>
    </el-row>
    <el-row>
      <a href="#"><div class="p1"></div></a>
      <a href="#"><div class="p2"></div></a>
      <a href="#"><div class="p3"></div></a>
      <div class="code">
        <div class="img-wrap">
          <img
            src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
          />
        </div>
        <p>美团APP手机版</p>
        <p><span>1元起</span>吃喝玩乐</p>
      </div>
    </el-row>
  </div>
</template>

<script>
import Slider from './Slider.vue';
import User from './User.vue';

export default {
  components: {
    Slider,
    User,
  },
};
</script>

<style lang="less" scoped>
.life-container {
  position: relative;
  transform: translate(-10px, -10px);
  .nav {
    position: absolute;
    display: flex;
    top: -55px;
    left: 20px;
    li {
      color: #222;
      font-weight: 700;
      font-size: 16px;
      margin: 0 20px;
      cursor: pointer;
      &:hover {
        color: #f04d4e;
      }
      &.yellow:hover {
        color: #fbc700;
      }
      &.orange:hover {
        color: #fe8c00;
      }
    }
  }
}
.pic1 {
  margin: 0 10px 0 10px;
  width: 150px;
  height: 240px;
  background-image: url(http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg);
  background-size: 150px;
}
.p1 {
  display: inline-block;
  margin: 10px 10px 10px 0;
  background-image: url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png);
  width: 270px;
  height: 165px;
  background-size: 270px;
  background-position: 50%;
  background-repeat: no-repeat;
}
.p2 {
  display: inline-block;
  margin: 0 10px 10px 0;
  background-image: url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg);
  width: 270px;
  height: 165px;
  background-size: 270px;
  background-position: 50%;
  background-repeat: no-repeat;
}
.p3 {
  display: inline-block;
  background-image: url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg);
  width: 150px;
  height: 165px;
  background-size: 150px;
  background-repeat: no-repeat;
  background-color: #fff;
  transform: translateY(-10px);
}
.code {
  display: inline-block;
  width: 228px;
    height: 165px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    transform: translate(8px, -35px);
    .img-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      img {
        width: 95px;
        height: 95px;
      }
    }
    p:nth-of-type(1){
      font-size: 16px;
    color: #222222;
    font-weight: 500;
    text-align: center;
    }
    p:nth-of-type(2){
      text-align: center;
      font-size: 12px;
    font-weight: 500;
    margin-top: 2px;
    span {
      color: #ec5330;
    }
    }
}
</style>
