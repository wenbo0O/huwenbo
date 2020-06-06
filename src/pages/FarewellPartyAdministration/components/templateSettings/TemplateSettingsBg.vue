<template>
  <div>
    <!-- 背景模板 -->
    <div class="name">
      <p>逝者姓名：XXXXXXXXXXXX</p>
      <p>背景模板：XXXXXXX</p>
    </div>

    <el-radio-group v-model="radio" class="TemplateSettingsBg">
      <el-radio :label="i" v-for="(item,i) in list" :key="i">
        <div class="content">
          <img src="@/assets/images/imgcode.png" alt="imgcode" />
          <p>{{item}}</p>
        </div>
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "",
      list: ["国子监/孔庙", "胡氏宗祠", "武侯祠", "土楼", "晋祠"]
    };
  }
};
</script>
<style lang="stylus">
.TemplateSettingsBg {
  .el-radio {
    text-align: center;
  }

  .el-radio__label {
    font-size: 14px;
    padding-left: 10px;
    display: inline-block;
  }

  .el-radio__input {
    left: 30px;
  }
}
</style>

<style lang="stylus" scoped>
.name {
  p {
    line-height: 30px;
    font-size: 16px;
    margin: 50px 0;
  }
}

.TemplateSettingsBg {
  .content {
    img {
      width: 220px;
      height: 400px;
    }
  }
}
</style>

