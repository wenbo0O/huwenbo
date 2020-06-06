<template>
  <div>
    <!-- 登录 -->
    <from-login></from-login>
    <!-- <from-pas-res></from-pas-res> -->
  </div>
</template>

<script>
import mixin from "./components/Mixins";
import components from "./components";
export default {
  mixins: [components, mixin],

  data() {
    return {};
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus"></style>



