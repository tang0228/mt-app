<template>
  <div class="container">
    <dl class="nav">
      <dt>猫眼电影</dt>
      <dd>正在热映</dd>
      <dd class="active">即将上映</dd>
    </dl>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  .nav {
    width: 100%;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    font-size: 14px;
    color: #fff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background: linear-gradient(
        to right,
        rgb(250, 60, 104) 2%,
        rgb(254, 70, 77) 97%
      )
      rgb(250, 60, 104);
      display: flex;
      dt {
          font-size: 18px;
    margin-left: 13px;
    margin-right: 10px;
      }
      dd {
          padding: 0 5px;
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
    &.active::after {
        position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 7px solid #fff;
    content: " ";
    display: block;
    width: 2px;
    height: 0;
    top: 37px;
    left: 0;
    right: 0;
    margin: auto;
    }
      }
  }
}
</style>
