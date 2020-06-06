<template>
  <div>
    <!-- 音乐模板 -->
    <p>逝者姓名：XXXXXXXXXXXX</p>
    <p>音乐模板：XXXXXXX</p>

    <el-radio-group v-model="radio" class="TemplateSettingsMusic">
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
      list: [
        "爱的礼赞",
        "草原追忆",
        "曾几何时",
        "纯真记忆",
        "红色时光",
        "内心独白",
        "深沉晚霞",
        "似水过往",
        "温馨阳光",
        "致敬辉煌",
        "重拾梦境"
      ]
    };
  }
};
</script>

<style lang="stylus">
.TemplateSettingsMusic {
  .el-radio {
    text-align: center;
  }

  .el-radio__label {
    font-size: 14px;
    padding-left: 10px;
    display: inline-block;
  }

  .el-radio__input {
    left: 10px;
  }
}
</style>

<style lang="stylus" scoped>
.TemplateSettingsMusic {
  .content {
    img {
      width: 124px;
      height: 124px;
    }
  }
}
</style>

