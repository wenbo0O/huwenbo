<template>
  <div>
    <div class="template-form-administration">
      <el-form ref="formInline" :model="formInline" label-width="120px">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="告别厅：">
              <el-select v-model="formInline.region" placeholder="请选择">
                <el-option label="全部" value="all"></el-option>
                <el-option label="区域一" value="beijing1"></el-option>
                <el-option label="区域二" value="beijing2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="状态：">
              <el-date-picker
                v-model="formInline.value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="状态：">
              <el-select v-model="formInline.region" placeholder="请选择">
                <el-option label="新建" value="all"></el-option>
                <el-option label="已预约" value="beijing1"></el-option>
                <el-option label="已完成-待审核" value="beijing2"></el-option>
                <el-option label="已完成-审核中" value="beijing3"></el-option>
                <el-option label="已完成-已审核" value="beijing4"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="逝者姓名：">
              <el-input v-model="formInline.user" placeholder="请输入逝者姓名"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="承办人姓名：">
              <el-input v-model="formInline.user" placeholder="请输入承办人姓名"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="承办人手机号：">
              <el-input v-model="formInline.user" placeholder="请输入承办人手机号"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
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
      formInline: {
        value2: ""
      },

      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
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
.template-form-administration {
}
</style>



