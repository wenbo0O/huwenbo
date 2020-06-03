<template>
  <div class="send-list-container">
    <nav-switch />
    <div class="padding">
      <n-switch-box />
    </div>
  </div>
</template>

<script>
import mixin from "./components/Mixins";
import components from "./components";

export default {
  mixins: [components, mixin]
};
</script>
<style lang="stylus" scoped>
.send-list-container {
  width: 100%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  background: #f9f9f9;

  .padding {
    background: #fff;
    padding: 15px;
  }
}
</style>

