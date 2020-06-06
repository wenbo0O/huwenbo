<template>
  <div>
    <!-- 新建账号 -->
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="标题：">
        <el-input v-model="form.name" placeholder="请输入标题"></el-input>
      </el-form-item>

      <el-form-item label="内容：">
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.textarea"></el-input>
      </el-form-item>

      <el-form-item label="图片：">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>

        <p>温馨提示：上传图片格式限制为jpg或png，大小限制为100KB~1MB，上传图片尺寸要求为370×530，最多上传6张，保存时请确定每张照片都处于上传完成状态再进行保存操作</p>
      </el-form-item>

      <el-form-item label="视频：">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          v-bind:data="{FoldPath:'上传目录',SecretKey:'安全验证'}"
          v-bind:on-progress="uploadVideoProcess"
          v-bind:on-success="handleVideoSuccess"
          v-bind:before-upload="beforeUploadVideo"
          v-bind:show-file-list="false"
        >
          <video
            v-if="videoForm.showVideoPath !='' && !videoFlag"
            v-bind:src="videoForm.showVideoPath"
            class="avatar video-avatar"
            controls="controls"
          >您的浏览器不支持视频播放</video>
          <i
            v-else-if="videoForm.showVideoPath =='' && !videoFlag"
            class="el-icon-plus avatar-uploader-icon"
          ></i>
          <el-progress
            v-if="videoFlag == true"
            type="circle"
            v-bind:percentage="videoUploadPercent"
            style="margin-top:7px;"
          ></el-progress>
        </el-upload>

        <p>上传图片格式限制为jpg或png，大小限制为100KB~1MB，尺寸要求为640×480；上传视频格式限制为mp4，大小限制为10~40MB，尺寸要求为640×480；保存时请确定照片和视频都处于上传完成状态再进行保存操作；</p>
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
        name: "",
        textarea: ""
      },
      dialogImageUrl: "",
      dialogVisible: false,

      videoFlag: false,
      //是否显示进度条
      videoUploadPercent: "",
      //进度条的进度，
      isShowUploadVideo: false,
      //显示上传按钮
      videoForm: {
        showVideoPath: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.SETOPTIONS({ indexCustomInfoManagement: 0 });
    },

    handleNewly() {
      this.SETOPTIONS({ indexCustomInfoManagement: 0 });
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    //上传前回调
    beforeUploadVideo(file) {
      var fileSize = file.size / 1024 / 1024 < 50;
      if (
        [
          "video/mp4",
          "video/ogg",
          "video/flv",
          "video/avi",
          "video/wmv",
          "video/rmvb",
          "video/mov"
        ].indexOf(file.type) == -1
      ) {
        layer.msg("请上传正确的视频格式");
        return false;
      }
      if (!fileSize) {
        layer.msg("视频大小不能超过50MB");
        return false;
      }
      this.isShowUploadVideo = false;
    },
    //进度条
    uploadVideoProcess(event, file, fileList) {
      this.videoFlag = true;
      this.videoUploadPercent = file.percentage.toFixed(0) * 1;
    },
    //上传成功回调
    handleVideoSuccess(res, file) {
      this.isShowUploadVideo = true;
      this.videoFlag = false;
      this.videoUploadPercent = 0;

      //前台上传地址
      //if (file.status == 'success' ) {
      //    this.videoForm.showVideoPath = file.url;
      //} else {
      //     layer.msg("上传失败，请重新上传");
      //}

      //后台上传地址
      if (res.Code == 0) {
        this.videoForm.showVideoPath = res.Data;
      } else {
        layer.msg(res.Message);
      }
    }
  }
};
</script>

<style lang="stylus"></style>