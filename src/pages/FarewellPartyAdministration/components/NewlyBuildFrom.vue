<template>
  <el-form ref="form" :model="form" label-width="150px">
    <el-form-item label="逝者姓名：">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="逝者性别：">
      <el-select v-model="form.region" placeholder="请选择逝者性别">
        <el-option label="男" value="1"></el-option>
        <el-option label="女" value="2"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="逝者生日:">
      <el-date-picker
        v-model="form.data"
        align="right"
        type="date"
        placeholder="选择逝者生日"
        :picker-options="pickerOptions"
      ></el-date-picker>
    </el-form-item>

    <el-form-item label="逝者忌日:">
      <el-date-picker
        v-model="form.data"
        align="right"
        type="date2"
        placeholder="选择逝者忌日"
        :picker-options="pickerOptions"
      ></el-date-picker>
    </el-form-item>

    <el-form-item label="告别厅：">
      <el-select v-model="form.region" placeholder="请选择告别厅">
        <el-option label="xxxxxx" value="1"></el-option>
        <el-option label="xxx" value="2"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="告别厅使用时间：">
      <el-date-picker
        v-model="form.value1"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
    </el-form-item>

    <el-form-item label="承办人姓名：">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="承办人手机号：">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="承办人性别">
      <el-select v-model="form.region" placeholder="请选择承办人性别">
        <el-option label="男" value="1"></el-option>
        <el-option label="女" value="2"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="与逝者关系：">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="长辈" name="type"></el-checkbox>
        <el-checkbox label="平辈" name="type"></el-checkbox>
        <el-checkbox label="晚辈" name="type"></el-checkbox>
      </el-checkbox-group>
      <span>（注：逝者是承办人的长辈、平辈或晚辈）</span>
    </el-form-item>

    <el-form-item label="对逝者称呼:">
      <el-select v-model="form.region" placeholder="请选择承办人性别">
        <el-option label="称呼1" value="1"></el-option>
        <el-option label="称呼2" value="2"></el-option>
      </el-select>
      <span>（注：承办人对逝者的称呼）</span>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">确定</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
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
        value1: ""
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

<style lang="stylus"></style>