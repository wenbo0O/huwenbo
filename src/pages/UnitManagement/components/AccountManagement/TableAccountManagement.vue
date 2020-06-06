<template>
  <div>
    <!-- 账号管理 tab-->
    <el-row>
      <el-button type="primary" @click="handleNewly(1)">新建</el-button>
    </el-row>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="新建时间" width="180"></el-table-column>
      <el-table-column prop="name" label="登录账号" width="180"></el-table-column>
      <el-table-column prop="address" label="使用者"></el-table-column>
      <el-table-column prop="address" label="手机号码"></el-table-column>
      <el-table-column prop="address" label="电子邮箱"></el-table-column>
      <el-table-column prop="address" label="使用时间"></el-table-column>
      <el-table-column prop="address" label="角色"></el-table-column>
      <el-table-column prop="address" label="状态"></el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="stopClick(scope.row)" type="text" size="small">停用</el-button>
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

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :show-close="false">
      <p>停用后该账号将无法登录，确定要停用该账号吗？</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>

    <el-dialog title="提示" :visible.sync="dialogVisible2" width="30%" :show-close="false">
      <p>该账号尚有未完成工作，停用后将无法对未完成工作进行处理，确定要停用该账号吗？</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
        <el-button @click="handleNewly(1)">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import mixin from "../Mixins";

export default {
  mixins: [mixin],
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
      currentPage4: 1,
      dialogVisible: false,
      dialogVisible2: false
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    editClick() {
      this.dialogVisible = true;
    },
    stopClick() {
      this.dialogVisible2 = true;
    },

    handleNewly(index) {
      if (typeof index === "number")
        this.SETOPTIONS({ indexAccountManagement: index });
      return false;
    }
  }
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus"></style>



