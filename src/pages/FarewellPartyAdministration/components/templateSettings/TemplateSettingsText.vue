<template>
  <div>
    <!-- 文本模板 -->

    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="逝者姓名：">
        <span>XXXXXXXXXXXX</span>
      </el-form-item>

      <el-form-item label="文案模板：">
        <el-select v-model="form.region" placeholder="请选择(必填项)">
          <el-option label="亲人XXX告别会" value="1"></el-option>
          <el-option label="XXX同志告别会" value="2"></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <el-row :gutter="30" class="TemplateSettingsText-list">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img src="@/assets/images/imgcode.png" alt="imgcode" />
          <p>首页</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img src="@/assets/images/imgcode.png" alt="imgcode" />
          <p>生平</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img src="@/assets/images/imgcode.png" alt="imgcode" />
          <p>签到墙</p>
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

    img {
      width: 220px;
      height: 400px;
    }

    p {
      line-height: 50px;
    }
  }
}
</style>

