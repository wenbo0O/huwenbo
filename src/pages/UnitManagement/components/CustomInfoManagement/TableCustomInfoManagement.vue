<template>
  <div>
    <!-- 风俗信息管理 tab -->
    <el-row>
      <el-button type="primary" @click="handleNewly(1)">新建</el-button>
    </el-row>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="新建时间" width="180"></el-table-column>
      <el-table-column prop="name" label="标题" width="180"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleNewly(2)" type="text" size="small">查看</el-button>
          <el-button @click="deleteClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
          <el-button @click="deleteClick(scope.row)" type="text" size="small">上升</el-button>
          <el-button @click="deleteClick(scope.row)" type="text" size="small">下降</el-button>
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
      <p>信息删除后将无法恢复确定要删除该信息吗？</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
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
          date: "YYYY年MM月DD日",
          name: "XXXXXXX",
          num: 0
        },
        {
          date: "YYYY年MM月DD日",
          name: "222",
          num: 0
        },
        {
          date: "YYYY年MM月DD日",
          name: "XXXXXXX",
          num: 0
        },
        {
          date: "YYYY年MM月DD日",
          name: "qqqqqqqqqqq",
          num: 0
        }
      ],
      currentPage4: 1,
      dialogVisible: false
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    modifyClick() {
      console.log("修改");
    },
    deleteClick() {
      this.dialogVisible = true;
    },

    handleNewly(index) {
      if (typeof index === "number")
        this.SETOPTIONS({ indexCustomInfoManagement: index });
      return false;
    }
  }
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus"></style>



