<template>
  <div>
    <!-- 告别厅管理 -->
    <component :is="indexComponent"></component>
  </div>
</template>

<script>
import mixin from "../Mixins";

export default {
  mixins: [mixin],
  data() {
    return {
      componentName: ["TableHallManagement", "NewHallManagementFrom"]
    };
  },
  computed: {
    indexComponent() {
      return this.componentName[this.UnitManagement.indexHallManagement];
    }
  },
  methods: {}
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus"></style>



