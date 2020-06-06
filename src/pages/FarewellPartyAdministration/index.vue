<template>
  <div>
    <!-- 告别会管理 -->

    <!-- <from-administration></from-administration> -->
    <!-- <table-administration></table-administration> -->
    <table-dialog></table-dialog>
    <!-- <newly-build-from></newly-build-from> -->

    <!-- 逝者资料 -->
    <!-- <dead-information></dead-information> -->

    <!-- 模板设置 -->
    <!-- <template-settings></template-settings> -->

    <!-- 相册管理 -->
    <!-- <photo-srttings></photo-srttings> -->

    <!-- 审核管理 -->
    <audit-management></audit-management>
  </div>
</template>

<script>
import mixin from "./components/Mixins";
import components from "./components";
import components_templateSettings from "./components/components";
export default {
  mixins: [components, mixin, components_templateSettings],

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus"></style>



