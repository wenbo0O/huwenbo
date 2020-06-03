<template>
  <div>
    <component :is="apps[appIndex]"></component>
    <w-right-setting />
  </div>
</template>
<script>
import mixin from "./Mixins";
export default {
  mixins: [mixin],
  data() {
    return {
      // 餐点设置", "餐费月订单设置
      apps: ["NList", "NMealFeeSetting"]
    };
  },
  computed: {
    appIndex: function() {
      return this.NurserySetting.numTableActiveIndex;
    }
  }
};
</script>