<template>
  <div>
    <!-- 账号管理 - 新建账号 -->
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="角色：">
        <el-radio-group v-model="form.radio">
          <el-radio :label="3">操作者</el-radio>
          <el-radio :label="6">审核者</el-radio>
          <el-radio :label="9">单位管理员</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="登录账号：">
        <el-input v-model="form.name" placeholder="请输入登录账号"></el-input>
      </el-form-item>

      <el-form-item label="登录密码：">
        <span>123456</span>
      </el-form-item>

      <el-form-item label="使用者：">
        <el-input v-model="form.name" placeholder="请输入使用者姓名"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="handleNewly">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import mixin from "../Mixins";

export default {
  mixins: [mixin],
  data() {
    return {
      form: {
        name: "",
        region: "",
        data: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        value1: "",
        radio: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.SETOPTIONS({ indexAccountManagement: 0 });
    },

    handleNewly() {
      this.SETOPTIONS({ indexAccountManagement: 0 });
    }
  }
};
</script>

<style lang="stylus"></style>