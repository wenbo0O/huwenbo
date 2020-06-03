<template>
  <div>
    <w-right v-if="NurserySetting.showPrintPage" @closed="_closed" id="NMealFeeSettingPopRight">
      <div slot="content" class="print-main">
        <el-form
          label-position="top"
          label-width="80px"
          :model="ruleForm"
          :rules="rules"
          ref="refForm"
          class="form-NMealFeeSetting"
        >
          <el-form-item label="餐点名称" prop="food_name">
            <el-input
              type="text"
              v-model="ruleForm.food_name"
              placeholder="请输入餐点名称"
              maxlength="4"
              show-word-limit
              size="medium"
            ></el-input>
          </el-form-item>

          <el-form-item label="单价" prop="price">
            <el-input v-model="ruleForm.price" placeholder="请输入单价" size="medium" maxlength="6">
              <template slot="append">元</template>
            </el-input>
          </el-form-item>

          <el-form-item label="简介" prop="food_content">
            <!-- 文本编辑 -->
            <div class="editor-con">
              <editor
                id="textArea"
                height="300px"
                width="100%"
                :content="ruleForm.food_content"
                :afterChange="afterChange()"
                pluginsPath="/Public/App/kindeditor/plugins/"
                :loadStyleMode="false"
                uploadJson="/Home/Notify/uploadImg?type=image"
                filePostName="imgFile"
                :items="items"
                :filterMode="false"
                @on-content-change="onContentChange"
              ></editor>
            </div>
          </el-form-item>

          <el-form-item class="btn-center">
            <el-button
              type="primary"
              @click="submitForm"
              :loading="NurserySetting.submitFormLoading"
            >保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </w-right>
  </div>
</template>

<script>
import mixin from "./Mixins";
import { _saveMeals } from "@/api/NurserySetting";

export default {
  mixins: [mixin],
  data() {
    const validatePrice = (rule, value, callback) => {
      var reg = /^\d{0,3}(\.\d{0,2})?$/;
      if (isNaN(value) || value.replace(/\s+/g, "") == "") {
        callback(new Error("请正确输入单价"));
      } else if (value <= 0) {
        callback(new Error("单价必须大于0"));
      } else if (value >= 1000) {
        callback(new Error("单价必须小于1000"));
      } else if (
        value.toString().split(".")[1] &&
        value.toString().split(".")[1].length > 2
      ) {
        callback(new Error("单价最多为两位小数"));
      } else if (reg.test(value)) {
        callback();
      }
    };

    return {
      items: [
        "undo",
        "redo",
        "|",
        "preview",
        "template",
        "cut",
        "copy",
        "paste",
        "plainpaste",
        "wordpaste",
        "|",
        "justifyleft",
        "justifycenter",
        "justifyright",
        "justifyfull",
        "insertorderedlist",
        "insertunorderedlist",
        "indent",
        "outdent",
        "subscript",
        "superscript",
        "clearhtml",
        "quickformat",
        "selectall",
        "|",
        "fullscreen",
        "formatblock",
        "fontname",
        "fontsize",
        "|",
        "forecolor",
        "hilitecolor",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "lineheight",
        "removeformat",
        "|",
        "image",
        "multiimage",
        "flash",
        "table",
        "hr",
        "emoticons",
        "baidumap",
        "pagebreak",
        "anchor",
        "link",
        "unlink",
        "|",
        "source"
      ],

      rules: {
        food_name: [
          { required: true, message: "请输入餐点名称", trigger: "blur" },
          { min: 1, max: 4, message: "长度在 1 到 4 个字符", trigger: "blur" }
        ],
        price: [{ required: true, validator: validatePrice, trigger: "blur" }],
        food_content: [
          { required: false, message: "请输入简介内容", trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    ruleForm() {
      // 新增餐点右侧弹窗form
      return this.NurserySetting.ruleFormSlideRBox;
    }
  },
  methods: {
    submitForm() {
      this.$refs.refForm.validate(valid => {
        if (valid) {
          this.SETOPTIONS({ submitFormLoading: true });
          // 编辑传动态ruleForm.id | 添加ruleForm.id传0
          let parmas = this.ruleForm;
          _saveMeals(parmas)
            .then(response => {
              this.SETOPTIONS({ submitFormLoading: false });
              this.RESETRULEFORMSLIDERBOX();
              this.SETOPTIONS({ showPrintPage: false });
              this.getStudentList(); // 刷新餐点列表
            })
            .catch(e => {
              this.SETOPTIONS({ submitFormLoading: false });
            });
        } else {
          return false;
        }
      });
    },
    afterChange() {},
    onContentChange(val) {
      this.ruleForm.food_content = val;
    },
    _closed() {
      // 重置表单数据
      this.RESETRULEFORMSLIDERBOX();
      this.SETOPTIONS({ showPrintPage: false });
    }
  }
};
</script>


<style lang="stylus" scoped>
.ke-container.ke-container-default {
  width: 100% !important;
  z-index: 1;
}

.btn-center {
  text-align: center;
  margin-top: 50px;
}

.print-main {
  padding: 10px 0 100px;
  box-sizing: border-box;
  font-size: 12px;
  background: #fff;
}

.print-main .el-button--text {
  font-weight: 400;
}
</style>