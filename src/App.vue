<template>
  <div id="app">
    <div class="youlin-toolbar">
      <span class="youlin-toolbar-name">xxxxxx管理平台</span>
      <span class="youlin-toolbar-version">V1.0</span>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './assets/stylus/base.styl';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .youlin-toolbar {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #000;
    line-height: 60px;

    .youlin-toolbar-name {
      font-size: 24px;
      margin: 0 0 0 30px;
    }

    .youlin-toolbar-version {
      font-size: 14px;
      margin: 0 0 0 20px;
    }
  }
}
</style>
