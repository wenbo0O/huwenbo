<template>
  <div class="template-form-pasres-container">
    <h2 class="template-form-pasres-title">修改密码</h2>

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="登录账户">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="原密码">
        <el-input type="password" v-model="form.pass"></el-input>
      </el-form-item>

      <el-form-item label="新密码">
        <el-input type="password" v-model="form.pass2"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="onSubmit">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import mixin from "./Mixins";

export default {
  mixins: [mixin],

  data() {
    return {
      form: {
        name: "",
        pass: "",
        pass2: "",
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
.template-form-pasres-container {
  width: 480px;
  margin: 20px auto;

  .template-form-pasres-title {
    line-height: 60px;
    text-align center
  }
}
</style>



