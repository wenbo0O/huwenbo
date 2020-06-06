<template>
  <div>
    <div>
      <!-- 审核管理 -->
      <p>来宾姓名审核</p>xxx
      <p>来宾留言审核</p>xxx
      <el-row>
        <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
        <el-button type="danger" @click="dialogVisible = true">删除</el-button>
      </el-row>

      <el-row>
        <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
        <el-button type="danger" @click="dialogVisible = true">删除</el-button>
      </el-row>

      <el-row>
        <el-button type="primary" @click="onSubmit">审核通过</el-button>
        <el-button>保存并退出</el-button>
      </el-row>
    </div>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
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
      form: {
        region: ""
      },
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    onSubmit() {
      console.log("submit!");
    }
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

