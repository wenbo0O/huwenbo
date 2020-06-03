<template>
  <div class="wzj-table">
    <el-form class="demo-form-inline">
      <el-form-item>
        <el-button
          type="primary"
          @click="onAddMealFee"
          icon="el-icon-plus"
          size="small"
          :loading="NurserySetting.loadDstableLoadingabled"
        >添加餐点</el-button>
      </el-form-item>
    </el-form>
    <el-table
      border
      :data="NurserySetting.data"
      :empty-text="NurserySetting.data ? '' : '暂无数据'"
      v-loading="NurserySetting.tableLoading"
      :height="maxHeight"
    >
      <el-table-column
        v-for="item in header_title_new"
        :key="item.id"
        :prop="item.keyname"
        :label="item.label"
        align="center"
      />

      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <div class="operation-box">
            <el-tooltip class="item" effect="dark" content="编辑" placement="top">
              <a class="col-blue" @click="editHandleClick(scope.row)">
                <span class="fa-stack">
                  <i class="fa fa-square fa-stack-2x"></i>
                  <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </el-tooltip>

            <el-tooltip
              class="item"
              effect="dark"
              :content="upperHouse(scope.row.status)"
              placement="top"
            >
              <a :class="{'col-blue':scope.row.status==2, 'col-red':scope.row.status==1}">
                <span
                  class="fa-stack"
                  @click="openConfirm(scope.row, {customClass: 'NList-lowerPop', content:`确定${upperHouse(scope.row.status)}该餐点吗？`, successMsg: `${upperHouse(scope.row.status)}成功！`})"
                >
                  <i class="fa fa-square fa-stack-2x"></i>
                  <i class="fa-eye fa fa-stack-1x fa-inverse" v-show="scope.row.status==2"></i>
                  <i class="fa-eye-slash fa fa-stack-1x fa-inverse" v-show="scope.row.status==1"></i>
                </span>
              </a>
            </el-tooltip>

            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <a class="col-red" @click="openMsgbox(scope.row, {customClass: 'NList-openMsgbox'})">
                <span class="fa-stack">
                  <i class="fa fa-square fa-stack-2x"></i>
                  <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </el-tooltip>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import mixin from "./Mixins";
import { _editMeals } from "@/api/NurserySetting";

export default {
  mixins: [mixin],
  data() {
    return {
      header_title_new: [
        { keyname: "food_name", label: "餐点名称" },
        { keyname: "price", label: "单价" }
      ],
      maxHeight: window.innerHeight - 234
    };
  },
  computed: {},
  methods: {
    upperHouse(status) {
      return status == 2 ? "上架" : "下架";
    },

    onAddMealFee() {
      // 设置显示右侧划框
      this.RESETRULEFORMSLIDERBOX();
      this.SETOPTIONS({ showPrintPage: true, rightPopTitle: "新增餐点" });
    },

    editHandleClick(row) {
      // 设置显示右侧划框
      const parmas = { id: row.id };
      this.SETOPTIONS({ showPrintPage: true, rightPopTitle: "编辑餐点" });
      this.SETRULEFORMSLIDERBOX(parmas);
      this.getStudentList(parmas);
    },

    openConfirm(row, info) {
      let { customClass, content, successMsg } = info;
      this.$confirm(content, "", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
        showClose: false,
        customClass
      })
        .then(() => {
          // 上架|下架
          let status = row.status == 1 ? 2 : 1;
          let parmas = {
            id: row.id,
            status
          };
          _editMeals(parmas).then(response => {
            this.$message({
              type: "success",
              message: successMsg
            });
            this.getStudentList(); // 刷新餐点列表
          });
        })
        .catch(() => {});
    },

    openMsgbox(row, info) {
      let { customClass, content, successMsg } = info;
      const h = this.$createElement;
      this.$msgbox({
        message: h("div", { class: "el-message-box__status el-icon-warning" }, [
          h("h2", null, "确定删除餐点吗？"),
          h(
            "p",
            { style: "display: block" },
            "删除后无法恢复，不会影响已有排课，请谨慎操作"
          )
        ]),
        customClass,
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            let parmas = {
              id: row.id,
              status: 3
            };
            _editMeals(parmas)
              .then(response => {
                done();
                instance.confirmButtonLoading = false;
                this.getStudentList(); // 刷新餐点列表
              })
              .catch(e => {
                instance.confirmButtonLoading = false;
                instance.confirmButtonText = "确定";
              });
          } else {
            instance.confirmButtonLoading = false;
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: "success",
          message: "操作成功"
        });
      });
    }
  },
  created() {
    this.$axios({
      url: "666?a=1"
    });

    this.getStudentList();
  },
  mounted() {
    window.onresize = () => {
      this.maxHeight = window.innerHeight - 234;
    };
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.wzj-table {
  font-size: 12px;
  padding: 15px 0 0;

  .fa-stack {
    cursor: pointer;
  }

  .operation-box {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: block;
      margin-left: 5px;
    }
  }

  .col-red {
    color: red;
  }

  .col-blue {
    color: #03a9f4;
  }
}
</style>

