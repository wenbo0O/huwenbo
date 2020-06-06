<template>
  <div>
    <ol>
      <li class="activeClass">背景模板</li>
      <li>文案模板</li>
      <li>音乐模板</li>
    </ol>
  </div>
</template>

<style lang="stylus" scoped>
ol {
  border-bottom: 1px solid #000;

  &:after {
    content: ' ';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  li {
    float: left;
    width: 120px;
    height: 70px;
    line-height: 70px;
    font-size: 18px;
    text-align: center;

    &.activeClass {
      color: #ff6600;
      border-bottom: 2px solid #ff6600;
    }
  }
}
</style>

