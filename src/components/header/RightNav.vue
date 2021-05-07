<template>
  <div class="right-nav-container">
    <ul class="nav clearfix">
      <li class="list">
        <RouterLink to="/">我的美团</RouterLink>
        <dl class="child">
          <dd>
            <RouterLink to="/">我的订单</RouterLink>
          </dd>
          <dd>
            <RouterLink to="/">我的收藏</RouterLink>
          </dd>
          <dd>
            <RouterLink to="/">抵用券</RouterLink>
          </dd>
          <dd>
            <RouterLink to="/">账户设置</RouterLink>
          </dd>
        </dl>
      </li>
      <li>
        <RouterLink to="/">手机APP</RouterLink>
      </li>
      <li class="list">
        <RouterLink to="/">商家中心</RouterLink>
        <dl class="child center">
          <dd>
            <RouterLink to="/">美团餐饮商户中心</RouterLink>
          </dd>
          <dd>
            <RouterLink to="/">登录商家中心</RouterLink>
          </dd>
          <dd>
            <RouterLink to="/">美团智能收银</RouterLink>
          </dd>
          <dd>
            <RouterLink to="/">我想合作</RouterLink>
          </dd>
          <dd>
            <RouterLink to="/">手机免费开店</RouterLink>
          </dd>
          <dd>
            <RouterLink to="/">到店综合业务招募</RouterLink>
          </dd>
          <dd>
            <RouterLink to="/">餐饮合作商招募</RouterLink>
          </dd>
          <dd>
            <RouterLink to="/">商家申请开票</RouterLink>
          </dd>
          <dd>
            <RouterLink to="/">免费合作美团排队</RouterLink>
          </dd>
        </dl>
      </li>
      <li class="list">
        <RouterLink to="/">美团规则</RouterLink>
        <dl class="child role">
          <dd>
            <RouterLink to="/">规则中心</RouterLink>
          </dd>
          <dd>
            <RouterLink to="/">规则目录</RouterLink>
          </dd>
          <dd>
            <RouterLink to="/">规则评议院</RouterLink>
          </dd>
        </dl>
      </li>
      <li class="list nav">
        <RouterLink to="/">网站导航</RouterLink>
        <div class="nav-content">
          <dl class="first item">
            <dt>酒店旅游</dt>
            <dd><RouterLink to="/">国际机票</RouterLink></dd>
            <dd><RouterLink to="/">火车票</RouterLink></dd>
            <dd><RouterLink to="/">民宿</RouterLink></dd>
            <dd><RouterLink to="/">经济型酒店</RouterLink></dd>
            <dd><RouterLink to="/">商务酒店</RouterLink></dd>
            <dd><RouterLink to="/">公寓</RouterLink></dd>
            <dd><RouterLink to="/">豪华酒店</RouterLink></dd>
            <dd><RouterLink to="/">客栈</RouterLink></dd>
            <dd><RouterLink to="/">青年旅社</RouterLink></dd>
            <dd><RouterLink to="/">度假酒店</RouterLink></dd>
            <dd><RouterLink to="/">别墅</RouterLink></dd>
            <dd><RouterLink to="/">农家院</RouterLink></dd>
          </dl>
          <dl class="second item">
            <dt>吃美食</dt>
            <dd><RouterLink to="/">烤鱼</RouterLink></dd>
            <dd><RouterLink to="/">特色小吃</RouterLink></dd>
            <dd><RouterLink to="/">烧烤</RouterLink></dd>
            <dd><RouterLink to="/">自助餐</RouterLink></dd>
            <dd><RouterLink to="/">火锅</RouterLink></dd>
            <dd><RouterLink to="/">代金卷</RouterLink></dd>
          </dl>
          <dl class="third item">
            <dt>看电影</dt>
            <dd><RouterLink to="/">热映电影</RouterLink></dd>
            <dd><RouterLink to="/">热门影院</RouterLink></dd>
            <dd><RouterLink to="/">热映电影口碑榜</RouterLink></dd>
            <dd><RouterLink to="/">最受期待电影</RouterLink></dd>
            <dd><RouterLink to="/">国内票房榜</RouterLink></dd>
            <dd><RouterLink to="/">北美票房榜</RouterLink></dd>
            <dd><RouterLink to="/">电影排行榜</RouterLink></dd>
          </dl>
          <dl class="fourth item">
            <dt>手机应用</dt>
            <dd>
              <RouterLink to="/">
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                />
              </RouterLink>
            </dd>
            <dd>
              <RouterLink to="/">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                  title="外卖app"
                  alt="外卖app"
                />
              </RouterLink>
            </dd>
            <dd>
              <RouterLink to="/">
                <img
                  class="appicon"
                  src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                  title="民宿app"
                  alt="民宿app"
                />
              </RouterLink>
            </dd>
            <dd>
              <RouterLink to="/">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                  title="点评app"
                  alt="点评app"
                />
              </RouterLink>
            </dd>
            <dd>
              <RouterLink to="/">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                  title="猫眼app"
                  alt="猫眼app"
              /></RouterLink>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nav {
  float: right;
  > li:hover > a {
    color: #ff8c00;
  }
  li {
    float: left;
    height: 40px;
    font-size: 12px;
    color: #999;
    padding: 12px 14px;
    box-sizing: border-box;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    position: relative;
    z-index: 10;
    .child {
      width: 100%;
      display: none;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      position: absolute;
      text-align: center;
      top: 95%;
      right: -1px;
      border: 1px solid #e5e5e5;
      z-index: 100;
      dd {
        line-height: 35px;
        &:hover a {
          color: #ff8c00;
        }
      }
      &.center {
        width: 120px;
      }
    }
    &.list:hover {
      border-color: #e5e5e5;
      background-color: #fff;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    }
    &.list:hover .child {
      display: block;
      background-color: #fff;
    }
    .nav-content {
      display: none;
      position: absolute;
      right: -1px;
      top: 95%;
      background-color: #fff;
      width: 1190px;
      padding: 30px 36px 36px 47px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border: 1px solid #e5e5e5;
      box-sizing: border-box;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      z-index: 1000;
      .item {
        text-align: center;
        float: left;
        margin-right: 47px;
        dt {
          margin-bottom: 26px;
          font-size: 14px;
          color: #222222;
          font-weight: 500;
        }
        dd {
          line-height: 26px;
          &:hover a {
            color: #ff8c00;
          }
        }
      }
      .first {
        width: 234px;
        dd {
          width: 33%;
          float: left;
          text-align: center;
        }
      }
      .second {
        width: 156px;
        dd {
          width: 50%;
          float: left;
          text-align: center;
        }
      }
      .third {
        width: 90px;
        dd {
          text-align: center;
        }
      }
      .fourth {
        float: right;
        dd {
          display: inline-block;
          margin: 0 8px;
          a {
            padding: 5px 0;
            display: block;
            img {
              width: 60px;
              height: 60px;
            }
          }
        }
      }
    }
    &.nav:hover .nav-content {
      display: block;
    }
  }
}
.clearfix::after {
  content: "";
  clear: both;
  display: block;
}
</style>
