<template>
  <!-- 逝者资料 -->
  <div>
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="逝者姓名：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="遗像：">
        <el-upload
          class="avatar-uploader"
          :class="{disabled: uploadDisabled}"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :file-list="imagelist"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>

      <!-- 大图预览 -->
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>

      <el-form-item label="生平：">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="form.textarea"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        textarea: ""
      },
      imageUrl: "",
      dialogImageUrl: "",
      dialogVisible: false,
      imagelist: []
    };
  },
  computed: {
    uploadDisabled: function() {
      return this.imagelist.length > 0;
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG && !isPNG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return (isJPG && isLt2M) || (isPNG && isLt2M);
    },
    handleRemove(file, fileList) {
      this.imageUrl = "";
      console.log(file, fileList);
    },
    // 大图预览
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.disabled .el-upload--picture-card {
  display: none;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>