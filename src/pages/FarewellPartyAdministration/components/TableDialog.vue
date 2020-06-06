<template>
  <div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :show-close="false">
      <p>信息删除后将无法恢复</p>
      <p>确定要删除该信息吗？</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {}
};
</script>

<style lang="stylus"></style>