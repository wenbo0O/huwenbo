<template>
  <div>
    <el-form
      label-position="right"
      label-width="150px"
      :model="formData"
      :rules="rules"
      ref="ruleForm"
      class="demo-form-inline"
      id="NMealFeeSetting"
    >
      <el-form-item label="订单生成时间：" prop="date">
        <span class="sub-title">每月</span>
        <el-input type="text" v-model="formData.date" size="small" maxlength="2"></el-input>
        <span class="sub-title">日为学员预约下月餐点并生成下月餐费订单</span>
      </el-form-item>

      <el-form-item label="提醒时间：" prop="time">
        <span class="sub-title">每月{{formData.date | shiftNum}}日</span>
        <el-input type="text" v-model="formData.time" size="small" maxlength="2"></el-input>
        <span class="sub-title">点提醒家长</span>
      </el-form-item>

      <el-form-item label="订单提醒：" prop="checkList">
        <el-checkbox-group v-model="formData.checkList">
          <el-checkbox label="短信">
            <span>短信</span>
            <el-popover
              placement="left"
              width="430"
              trigger="hover"
              title="短信提醒"
              popper-class="wx-popover"
            >
              <dl>
                <dd>{学员姓名}家长您好，{套餐名称}{xxxx年xx月份}餐费已出，请及时缴费{机构名称</dd>
              </dl>
              <i slot="reference" class="el-icon-info"></i>
            </el-popover>
          </el-checkbox>

          <el-checkbox label="微信">
            <span>微信</span>
            <el-popover
              placement="left"
              width="430"
              trigger="hover"
              title="微信内容"
              popper-class="wx-popover"
            >
              <dl>
                <dt>计划事件提醒</dt>
                <dd>{学员昵称}的餐费订单</dd>
                <dd>计划：{套餐名称}{xxxx年xx月份}餐费</dd>
                <dd>关联联系人：{主联系人家长姓名}</dd>
                <dd>计划时间：{订单发送时间}</dd>
                <dd class="link">请及时缴费</dd>
              </dl>
              <i slot="reference" class="el-icon-info"></i>
            </el-popover>
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          :loading="NurserySetting.submitFormLoading"
        >保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import mixin from "./Mixins";
import { _mealsRemind, _saveMealsRemind } from "@/api/NurserySetting";

export default {
  mixins: [mixin],
  data() {
    const validateDate = (rule, value, callback) => {
      if (!Number(value) || value < 1 || value > 28)
        callback(new Error("请输入1-28之间的整数"));
      else callback();
    };

    const validateTime = (rule, value, callback) => {
      if (!Number(value) || value < 8 || value > 20)
        callback(new Error("请输入8-20之间的整数"));
      else callback();
    };

    return {
      formData: {
        date: "",
        org_id: "",
        time: "",
        checkList: []
      },
      rules: {
        date: [{ required: true, validator: validateDate, trigger: "change" }],
        time: [
          {
            required: true,
            validator: validateTime,
            trigger: "change"
          }
        ],
        checkList: [
          { required: true, message: "请选择提醒方式", trigger: "blur" }
        ]
      }
    };
  },
  filters: {
    shiftNum: function(data, arg1) {
      let newVal = parseInt(data) || "";
      let oldNum = "";
      if (oldNum) {
        oldNum = newVal;
        return oldNum;
      } else {
        return newVal;
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let { date, org_id, time, checkList } = this.formData;
          let wechat = checkList.includes("微信") ? 1 : 0;
          let sms = checkList.includes("短信") ? 1 : 0;
          let parmas = { date, org_id, time, wechat, sms };
          this.SETOPTIONS({ submitFormLoading: true });
          // 设置餐费月订单设置信息
          _saveMealsRemind(parmas)
            .then(response => {
              this.$message({
                message: response.message || "保存成功",
                type: "success"
              });
              this.SETOPTIONS({ submitFormLoading: false });
            })
            .catch(err => {
              this.SETOPTIONS({ submitFormLoading: false });
            });
        } else {
          this.$message({
            message: response.message || "系统异常",
            type: "warning"
          });
          this.SETOPTIONS({ submitFormLoading: false });
        }
      });
    }
  },
  created() {
    // 获取餐费月订单设置信息
    _mealsRemind().then(response => {
      let { date, org_id, time } = response.data;
      let checkList = [];
      if (response.data.sms == 1) {
        checkList.push("短信");
      }
      if (response.data.wechat == 1) {
        checkList.push("微信");
      }
      this.formData = { date: date || 25, org_id, time: time || 9, checkList };
    });
  }
};
</script>

<style lang="stylus">
#NMealFeeSetting {
  .el-input {
    display: inline-block;
    width: 30px;

    .el-input__inner {
      padding: 0 5px;
      text-align: center;
    }
  }

  .el-radio {
    display: inline-block;
    margin: 12px 3px 0 0;
  }

  .el-button {
    text-align: center;
    margin-top: 50px;
    width: 160px;
    height: 30px;
    padding: 0;
  }
}

.wx-popover {
  background: #fff !important;
  font-size: 12px !important;
  padding: 0 !important;
  border: 0 !important;
  width: 320px !important;

  .el-popover__title {
    color: #303133;
    font-size: 17px;
    line-height: 33px;
    margin-bottom: 12px;
    background: #f3f3f3;
    text-indent: 12px;
  }

  dl {
    padding: 5px 10px;

    dt {
      line-height: 14px;
      font-size: 16px;
      margin-bottom: 14px;
    }

    dd {
      line-height: 18px;
      margin: 0;
      padding: 0;

      &.link {
        color: #579aff;
        margin-top: 10px;
      }
    }
  }
}
</style>
