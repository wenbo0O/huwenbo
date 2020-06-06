<template>
  <div>
    <ol>
      <router-link
        :to="{ path: '/Unit/AccountManagementView' }"
        tag="li"
        active-class="activeClass"
      >账号管理</router-link>
      <router-link
        :to="{ path: '/Unit/HallManagementView' }"
        tag="li"
        active-class="activeClass"
      >告别厅管理</router-link>
      <router-link :to="{ path: '/Unit/CustomInfoView' }" tag="li" active-class="activeClass">风俗信息管理</router-link>
    </ol>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.activeClass {
  color: #ff6600;
  border-bottom: 2px solid #ff6600;
}

ol {
  border-bottom: 1px solid #000;

  &:after {
    content: ' ';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  li {
    float: left;
    width: 120px;
    height: 70px;
    line-height: 70px;
    font-size: 18px;
    text-align: center;

    &.activeClass {
      color: #ff6600;
      border-bottom: 2px solid #ff6600;
    }
  }
}
</style>

