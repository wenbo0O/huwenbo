<template>
  <div>
    <h1>标题</h1>
    <p>段落 段落</p>
  </div>
</template>

<script>
import mixin from "../Mixins";

export default {
  mixins: [mixin],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
h1 {
  color: red;
}
</style>