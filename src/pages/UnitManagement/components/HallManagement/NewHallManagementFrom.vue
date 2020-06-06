<template>
  <div>
    <!-- 告别厅管理 - 新建账号 -->
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="告别厅名称：">
        <el-input v-model="form.name" placeholder="请输入告别厅名称"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
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
        name: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.SETOPTIONS({ indexHallManagement: 0 });
    },

    handleNewly() {
      this.SETOPTIONS({ indexHallManagement: 0 });
    }
  }
};
</script>

<style lang="stylus"></style>