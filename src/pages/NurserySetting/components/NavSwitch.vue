<template>
  <div>
    <ol class="table-link">
      <li
        v-for="(key, index) in arrTableLink"
        :key="index"
        @click="fnSwitchTab(index)"
        :class="{activeBg: NurserySetting.numTableActiveIndex===index}"
      >{{key}}</li>
    </ol>
  </div>
</template>

<script>
import mixin from "./Mixins";

export default {
  mixins: [mixin],
  data() {
    return {
      arrTableLink: ["餐点设置", "餐费月订单设置"]
    };
  },

  methods: {
    fnSwitchTab(index) {
      this.SETNAVACTIVE(index);
      // test 取消按钮禁用
      this.SETTABLELOADING(false);
    }
  },

  watch: {
    currentPage: function(val) {
      console.log(val, "页码");
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>

