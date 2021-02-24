<template>
  <div class="lujin">
    <div>
      <el-page-header
        @back="goBack"
        content="路径优化结果"
        style="margin-bottom: 20px"
      >
      </el-page-header>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :height="tableHeight"
        ref="table"
        :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      >
        <el-table-column
          prop="orgName"
          label="煤源单位"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="coaltypeName" label="煤种" align="center">
        </el-table-column>
        <el-table-column
          prop="stationName"
          label="装车站"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="tranRoute" label="流向" align="center">
        </el-table-column>
        <el-table-column prop="saleareaName" label="销售区域" align="center">
        </el-table-column>
        <el-table-column
          prop="transVal"
          label="运量"
          align="center"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "RouteModelResult",
  data() {
    return {
      tableData: [],
      tableHeight: 0,
    };
  },
  mounted() {
    this.getData();
    this.$nextTick(function() {
      this.tableHeight =
        window.innerHeight - this.$refs.table.$el.offsetTop - 200;
      // 监听窗口大小变化
      let self = this;
      window.onresize = function() {
        self.tableHeight =
          window.innerHeight - self.$refs.table.$el.offsetTop - 200;
      };
    });
  },
  methods: {
    goBack() {
      this.$router.push("/RouteModel");
    },
    getData() {
      this.tableData = JSON.parse(sessionStorage.getItem("resultData"));
    },
  },
};
</script>

<style lang="scss">
.lujin {
  .el-pagination {
    margin-top: 10px;
  }
  .el-table__header tr,
  .el-table__header th {
    padding: 0;
    height: 40px;
  }
  .el-table__body tr,
  .el-table__body td {
    padding: 3px 0;
    height: 20px;
  }
}
</style>
