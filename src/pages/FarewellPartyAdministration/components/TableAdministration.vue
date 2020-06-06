<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="状态" width="180"></el-table-column>
      <el-table-column prop="name" label="逝者姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="二维码"></el-table-column>
      <el-table-column prop="address" label="告别厅"></el-table-column>
      <el-table-column prop="address" label="使用日期"></el-table-column>
      <el-table-column prop="address" label="使用时间"></el-table-column>
      <el-table-column prop="address" label="承办人姓名"></el-table-column>
      <el-table-column prop="address" label="承办人手机号"></el-table-column>
      <el-table-column prop="address" label="操作者"></el-table-column>
      <el-table-column prop="address" label="审核者">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small">逝者资料</el-button>
          <el-button type="text" size="small">模板设置</el-button>
          <el-button type="text" size="small">相册管理</el-button>
          <el-button type="text" size="small">审核管理</el-button>
          <el-button type="text" size="small">确定预约</el-button>
          <el-button type="text" size="small">删除</el-button>
          <el-button type="text" size="small">仪式完成</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="40"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      currentPage4: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
.template-form-administration {
}
</style>



