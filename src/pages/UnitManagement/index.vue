<template>
  <div>
    <!-- 单位管理 -->
    <!-- 导航 -->
    <unit-management-nav></unit-management-nav>

    <!-- 账号管理 -->
    <!-- 告别厅管理 -->
    <!-- 风俗信息管理 -->
    <router-view />
  </div>
</template>

<script>
import mixin from "./components/Mixins";
import components from "./components";
import UnitManagementNav from "./UnitManagementNav";

export default {
  mixins: [components, mixin],

  data() {
    return {};
  },

  components: {
    UnitManagementNav
  },

  methods: {}
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus"></style>



