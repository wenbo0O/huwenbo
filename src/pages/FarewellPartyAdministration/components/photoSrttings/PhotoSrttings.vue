<template>
  <div>
    <!-- 照片管理 -->
    <el-row :gutter="30" class="TemplateSettingsText-list">
      <el-col :span="8">
        <div class="grid-content">
          <img src="@/assets/images/imgcode.png" alt="imgcode" />
          <p>xxxxxx</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <img src="@/assets/images/imgcode.png" alt="imgcode" />
          <p>xxxxxxxxx</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <img src="@/assets/images/imgcode.png" alt="imgcode" />
          <p>xxxxxxxxx</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        region: ""
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.TemplateSettingsText-list {
  .grid-content {
    text-align: center;
    width: 300px;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
    }

    p {
      line-height: 50px;
    }
  }
}
</style>

