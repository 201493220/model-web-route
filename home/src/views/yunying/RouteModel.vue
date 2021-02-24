<template>
  <div class="yuedu">
    <div class="title">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="8">
          <span
            >优化目标：
            <el-select
              v-model="value"
              placeholder="请选择优化目标"
              size="small"
              style="width: 50%"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              >
              </el-option> </el-select
          ></span>
        </el-col>
        <el-col :span="8">
          <span>模型状态 ：</span> <span>{{ isTrue }}</span>
        </el-col>
        <el-col :span="8">
          <el-button type="primary" size="mini" @click="go" plain
            >开始计算</el-button
          >
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="8" :offset="0">
          <span
            >计划开始时间 ：<span>{{ nowTime }}</span>
          </span>
        </el-col>
        <el-col :span="8" :offset="0">
          <span>计划结束时间 ：</span> <span>{{ finishTime }}</span>
        </el-col>
        <el-col :span="8" :offset="0">
          <el-button type="primary" size="mini" @click="goBack" :disabled="isOk"
            >查看结果</el-button
          >
        </el-col>
      </el-row>
    </div>

    <div class="yuedu-content">
      <el-row>
        <el-col :span="4">
          <el-table
            :data="tableData"
            style="width: 100%"
            border
            :height="tableHeight"
            ref="table"
            :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
          >
            <el-table-column prop="orgName" label="煤源单位" align="center">
            </el-table-column>
            <el-table-column prop="saleName" label="销售区域" align="center">
            </el-table-column>
          </el-table>
        </el-col>

        <el-col :span="20" :style="conheight">
          <iframe
            :src="`/Graph/Navigator.html?token=${token};graph=能源运输图.ene.pic.g&amp;menubarshow=0&amp;statusbarshow=0&amp;toolbarshow=0`"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            style="width: 100%; height: 100%; outline: none"
          >
          </iframe>

          <!-- <iframe
            src="http://172.29.68.251:30080/Graph/Navigator.html?graph=能源运输图.ene.pic.g&amp;menubarshow=0&amp;statusbarshow=0&amp;toolbarshow=0"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            style="width: 100%; height: 100%; outline: none"
          ></iframe> -->
          <div class="hidden">
            <el-button
              type="text"
              @click="dialogTableVisible = true"
            ></el-button>
          </div>
          <!--站点信息弹窗 -->
          <el-dialog
            title="站点信息"
            :visible.sync="dialogTableVisible"
            align="center"
          >
            <el-table :data="gridData">
              <el-table-column property="zcd" label="装车端" align="center">
              </el-table-column>
              <el-table-column property="zcl" label="装车量" align="center">
              </el-table-column>
              <el-table-column property="mz" label="煤种" align="center">
              </el-table-column>
              <el-table-column property="mk" label="煤矿" align="center">
              </el-table-column>
              <el-table-column property="xsd" label="销售点" align="center">
              </el-table-column>
              <el-table-column property="xql" label="需求量" align="center">
              </el-table-column>
            </el-table>
          </el-dialog>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import message from "../mixins/message";
export default {
  name: "RouteModel",
  data() {
    return {
      conheight: {
        height: "",
      },
      tableHeight: 0,
      nowTime: "",
      finishTime: "",
      isTrue: "",
      tableData: [],
      gridData: [
        {
          zcd: "北京",
          zcl: "100",
          mz: "100",
          mk: "100",
          xsd: "100",
          xql: "100",
        },
      ],
      dialogTableVisible: false,
      value: "",
      options: [
        {
          value: "3000",
          label: "月度路径优化模型(运输成本)",
        },
        {
          value: "3001",
          label: "月度路径优化模型(利润最大)",
          disabled: true
        },
      ],
      isOk: true,
      token: "",
    };
  },
  mounted() {
    this.getHeight();
    window.addEventListener("resize", this.getHeight);
    this.$nextTick(function () {
      this.tableHeight =
        window.innerHeight - this.$refs.table.$el.offsetTop - 250;
      // 监听窗口大小变化
      let self = this;
      window.onresize = function () {
        self.tableHeight =
          window.innerHeight - self.$refs.table.$el.offsetTop - 250;
      };
    });
  },
  mixins: [message],
  created() {
    this.getTime();
    this.getToken();
    this.get();
    this.getTableData();
    if (!sessionStorage.getItem("M_isTrue")) {
      this.isTrue = "未计算";
    } else {
      this.isTrue = sessionStorage.getItem("M_isTrue");
    }
  },
  methods: {
    getHeight() {
      this.conheight.height = window.innerHeight - 250 + "px";
    },
    getToken() {
      this.token = localStorage.getItem("token");
    },
    getTableData() {
      this.$http.post(this.$config.LJYHURL).then((res) => {
        this.tableData = res.data.data;
      });
    },
    goBack() {
      this.$router.push("RouteModelResult");
    },
    getTime() {
      this.nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
      this.finishTime = moment().format("YYYY-MM-DD HH:mm:ss");
    },
    go() {
      if (this.value == "") this.$warning("请选择优化目标！");
      else {
        this.nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
        const loading = this.$loading({
          lock: true,
          text: "模型计算中...",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
        });
        // 模型计算
        let params = { modelType: this.value };
        this.$http.post(this.$config.YJHMX, params).then((res) => {
          // console.log(res.data.data);
          if (res.data.data.data) {
            if (res.data.data.data.retCode == 1) this.isTrue = "收敛";
            else if (res.data.data.data.retCode == 0) this.isTrue = "不收敛";
            sessionStorage.setItem("M_isTrue", this.isTrue);
            this.isOk = false;
            this.finishTime = moment().format("YYYY-MM-DD HH:mm:ss");
            this.getTableData();
            // 模型结果
            this.$http.post(this.$config.LJYHRESULTURL).then((res) => {
              sessionStorage.setItem(
                "resultData",
                JSON.stringify(res.data.data)
              );
            });
            this.$success("模型计算已完成！");
            loading.close();
          } else {
            setTimeout(() => {
              this.$warning("模型计算失败！");
              this.isTrue = "失败！";
              sessionStorage.setItem("M_isTrue", this.isTrue);
              this.isOk = true;
              this.finishTime = moment().format("YYYY-MM-DD HH:mm:ss");
              this.getTableData();
              loading.close();
            }, 60000);
          }
        });
      }
    },
    get() {
      window.addEventListener("message", (e) => {
        // console.log(e); //{data:'params'}
        if (e.data.messageType == "click") {
          // this.dialogTableVisible = true;
          this.dialogTableVisible = false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.yuedu {
  .title {
    margin-bottom: 10px;
    line-height: 40px;
  }
  .yuedu-content .left {
    height: 100px;
  }
  .el-table__header tr,
  .el-table__header th {
    padding: 0;
    height: 30px;
  }
  .el-table__body tr,
  .el-table__body td {
    padding: 5px 0;
    height: 20px;
  }
  span {
    font-size: 14px;
  }
}
</style>
