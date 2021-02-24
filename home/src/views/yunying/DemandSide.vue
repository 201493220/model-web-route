<template>
  <div class="xuqiu">
    <el-form
      :model="form"
      ref="form"
      :rules="rules"
      :inline-message="true"
      :show-message="false"
    >
      <el-table
        :data="form.tableData"
        border
        stripe
        :height="tableHeight"
        ref="table"
        :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      >
        <el-table-column
          prop="sale_area"
          label="销售区域"
          align="center"
        ></el-table-column>
        <el-table-column label="煤种" align="center" prop="coaltype_name">
        </el-table-column>
        <el-table-column label="煤种占比" align="center" prop="coal_percent">
        </el-table-column>
        <el-table-column prop="caozuo" label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="xiugai(scope.row)"
              plain
              >修改</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-form>

    <el-dialog
      title="信息修改"
      :visible.sync="dialogVisible"
      width="30%"
      :rules="rules"
      :close-on-click-modal="false"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="padding: 20px"
      >
        <el-form-item label="煤种">
          <el-select
            v-model="form.meizhong"
            placeholder="请选择煤种类型"
            style="width: 220px"
          >
            <el-option label="准混4300" value="1"></el-option>
            <el-option label="准混4900" value="2"></el-option>
            <el-option label="外购4500" value="3"></el-option>
            <el-option label="外购5000" value="4"></el-option>
            <el-option label="神混4500" value="5"></el-option>
            <el-option label="神混5000" value="6"></el-option>
            <el-option label="特地灰" value="7"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="煤种占比" prop="coal_percent">
          <el-input v-model="ruleForm.coal_percent" style="width: 220px" />
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import message from "../mixins/message";
export default {
  name: "DemandSide",
  data() {
    const validateNumber = (rule, value, callback) => {
      if (value.toString().split(".").length > 2) {
        callback(new Error());
      } else {
        callback();
      }
    };
    return {
      tableHeight: 0,
      dialogVisible: false,
      form: {
        tableData: [],
        meizhong: "",
      },
      ruleForm: {
        coal_percent: "",
        coal_need_id: "",
        coaltype_id: "",
      },
      rules: {
        coal_percent: [
          { required: true, message: "请输入数字", trigger: "blur" },
          { validator: validateNumber, message: "输入有误！", min: 0 },
        ],
      },
    };
  },
  mounted() {
    this.getData();
    this.$nextTick(function () {
      this.tableHeight =
        window.innerHeight - this.$refs.table.$el.offsetTop - 150;
      // 监听窗口大小变化
      let self = this;
      window.onresize = function () {
        self.tableHeight =
          window.innerHeight - self.$refs.table.$el.offsetTop - 150;
      };
    });
  },
  mixins: [message],
  methods: {
    xiugai(row) {
      this.dialogVisible = true;
      this.form.meizhong = row.coaltype_name;
      this.ruleForm.coal_percent = row.coal_percent;
      this.ruleForm.coal_need_id = row.coal_need_id;
      this.ruleForm.coaltype_id = row.coaltype_id;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {
            coal_need_id: this.ruleForm.coal_need_id,
            coaltype_id: this.ruleForm.coaltype_id,
            coal_percent: Number(this.ruleForm.coal_percent),
            coaltype_name: Number(this.form.meizhong),
          };
          console.log(params);
          this.$http.post(this.$config.R_XQDURL,params).then((res) => {
            console.log(res);
            if(res.success) {
              this.getData()
              this.$success("修改成功！");
            }else {
              this.$warning("修改失败！");
            }
          });
          this.$success("修改成功！");
          this.dialogVisible = false;
        }
        this.getData();
      });
    },
    getData() {
      this.$http.post(this.$config.XQDURL).then((res) => {
        // console.log(res.data.data);
        this.form.tableData = res.data.data;
      });
    },
  },
};
</script>

<style lang="scss">
.xuqiu {
  .el-table__header tr,
  .el-table__header th {
    padding: 0;
    height: 30px;
  }
  .el-table__body tr,
  .el-table__body td {
    padding: 3px 0;
    height: 20px;
  }
}
</style>
