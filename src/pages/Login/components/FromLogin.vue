<template>
  <div>
    <div class="template-form-login-banner">
      <img src="@/assets/images/imgcode.png" alt="imgcode" />
    </div>

    <div class="template-form-login-container">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="登录账户">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input type="password" v-model="form.pass"></el-input>
        </el-form-item>

        <el-form-item label>
          <div class="imgcode">
            <img src="@/assets/images/imgcode.png" alt="imgcode" />

            <span>刷新</span>
          </div>
        </el-form-item>

        <el-form-item label="验证码" prop="verificationCode">
          <el-input v-model="form.verificationCode" placeholder="请输入验证码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
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
        verificationCode: ""
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
.template-form-login-banner {
  float: left;
  width: 600px;
}

.template-form-login-container {
  float: left;
  width: 600px;

  .imgcode {
    img {
      width: 100px;
      height: 50px;
    }

    span {
      margin: 0 0 0 30px;
    }
  }
}
</style>



