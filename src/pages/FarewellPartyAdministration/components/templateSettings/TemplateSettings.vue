<template>
  <div>
    <template-settings-nav></template-settings-nav>
    <!-- <router-view></router-view> -->

    <!-- 背景模板 -->
    <!-- 文案模板 -->
    <!-- 音乐会模板 -->
    <component :is="componentName[activeIndex]"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "",
      componentName: [
        "TemplateSettingsBg",
        "TemplateSettingsText",
        "TemplateSettingsMusic"
      ],
      activeIndex: 1
    };
  }
};
</script>

<style lang="stylus" scoped></style>

