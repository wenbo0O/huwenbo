<template>
  <div>
    <!-- 账号管理 -->
    <component :is="indexComponent"></component>
  </div>
</template>

<script>
import mixin from "../Mixins";

export default {
  mixins: [mixin],
  data() {
    return {
      componentName: ["TableAccountManagement", "NewAccountManagementFrom"]
    };
  },
  computed: {
    indexComponent() {
      return this.componentName[this.UnitManagement.indexAccountManagement];
    }
  },
  methods: {}
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus"></style>



