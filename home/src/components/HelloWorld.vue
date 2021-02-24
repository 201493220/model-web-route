<template>
  <div v-bind="dataCenter.Panel" ref="Panel" class="drop-panel">
    <el-row>
      <el-button type="primary" @click="changeSkin">主要按钮</el-button>
      <el-button type="info" class="button">测试</el-button>
      <el-button type="info">测试</el-button>
    </el-row>
    <osp-simpletable
      v-bind="dataCenter.Simpletable2"
      ref="Simpletable2"
    ></osp-simpletable>
  </div>
</template>
<script>
import { OspSimpletable } from "usp-ui";
export default {
  props: {},
  components: {
    "osp-simpletable": OspSimpletable,
  },
  data() {
    return {
      dataCenter: {
        Simpletable2: {
          columns: [
            {
              width: "",
              label: "table_id",
              prop: "table_id",
              type: "string",
              fmvalue: "string",
              editype: "el-input",
              showtype: "text",
              showstyle: {
                isall: true,
                condition: [],
              },
              fixed: "false",
              isconf: false,
              datetype: "date",
              valuestyle: "yyyy-MM-dd",
              autonum: 1,
              align: "center",
              order: "false",
              show: true,
              assign: false,
              columnset: {
                isall: true,
                backgroundColor: "",
                color: "",
                condition: [],
              },
              editable: true,
              editset: {
                name: "ElInput",
                isnotempty: false,
                attrs: {},
              },
              key: 1,
            },
            {
              width: "",
              label: "table_name_eng",
              prop: "table_name_eng",
              type: "string",
              fmvalue: "string",
              editype: "el-input",
              showtype: "text",
              showstyle: {
                isall: true,
                condition: [],
              },
              fixed: "false",
              isconf: false,
              datetype: "date",
              valuestyle: "yyyy-MM-dd",
              autonum: 1,
              align: "center",
              order: "false",
              show: true,
              assign: false,
              columnset: {
                isall: true,
                backgroundColor: "",
                color: "",
                condition: [],
              },
              editable: true,
              editset: {
                name: "ElInput",
                isnotempty: false,
                attrs: {},
              },
              key: 2,
            },
            {
              width: "",
              label: "table_name_chn",
              prop: "table_name_chn",
              type: "string",
              fmvalue: "string",
              editype: "el-input",
              showtype: "text",
              showstyle: {
                isall: true,
                condition: [],
              },
              fixed: "false",
              isconf: false,
              datetype: "date",
              valuestyle: "yyyy-MM-dd",
              autonum: 1,
              align: "center",
              order: "false",
              show: true,
              assign: false,
              columnset: {
                isall: true,
                backgroundColor: "",
                color: "",
                condition: [],
              },
              editable: true,
              editset: {
                name: "ElInput",
                isnotempty: false,
                attrs: {},
              },
              key: 3,
            },
            {
              width: "",
              label: "app_type",
              prop: "app_type",
              type: "string",
              fmvalue: "string",
              editype: "el-input",
              showtype: "text",
              showstyle: {
                isall: true,
                condition: [],
              },
              fixed: "false",
              isconf: false,
              datetype: "date",
              valuestyle: "yyyy-MM-dd",
              autonum: 1,
              align: "center",
              order: "false",
              show: true,
              assign: false,
              columnset: {
                isall: true,
                backgroundColor: "",
                color: "",
                condition: [],
              },
              editable: true,
              editset: {
                name: "ElInput",
                isnotempty: false,
                attrs: {},
              },
              key: 4,
            },
            {
              width: "",
              label: "table_type",
              prop: "table_type",
              type: "string",
              fmvalue: "string",
              editype: "el-input",
              showtype: "text",
              showstyle: {
                isall: true,
                condition: [],
              },
              fixed: "false",
              isconf: false,
              datetype: "date",
              valuestyle: "yyyy-MM-dd",
              autonum: 1,
              align: "center",
              order: "false",
              show: true,
              assign: false,
              columnset: {
                isall: true,
                backgroundColor: "",
                color: "",
                condition: [],
              },
              editable: true,
              editset: {
                name: "ElInput",
                isnotempty: false,
                attrs: {},
              },
              key: 5,
            },
          ],
          options: {
            size: "small",
            height: "100%",
            maxHeight: "400px",
            showOverflowTooltip: false,
            showCheckbox: false,
            index: false,
            fit: true,
            showHeader: true,
            dataset: {
              source: [],
              sourceName: "rest311",
              type: "rest",
              subtype: "other",
            },
            rowsColor: [],
            headColor: "rgba(244, 246, 247, 1)",
            headbackColor: "rgba(13, 165, 221, 1)",
            stripe: true,
          },
          tablestyle: "",
          style: "",
        },
        Panel: {
          style:
            "display:flex;flex-direction:column;text-align:left;height:100%;width:100%",
        },
      },
      dataControls: ["Simpletable2"],

      dataSets: [
        {
          id: "rest311",
          name: "table",
          type: "rest",
          subtype: "other",
          // url: "http://172.29.68.87:8888/v1/dbclient/query",
          url: "/apis/v1/dbclient/query",
          saveflag: true,
          defparams: {},
          params: {},
          fields: [
            "table_id",
            "table_name_eng",
            "table_name_chn",
            "app_type",
            "table_type",
          ],
          data: [],
          timerefresh: false,
          intervalnum: 0,
          mode: "get",
          label: "table",
          getData: function(vm, args, callback, cbparams, unsetflag) {
            debugger;
            const me = this;
            const url = me.url;
            const id = me.id;
            const datalist = me.datalist;
            const param = {
              ...me.defparams,
              ...me.params,
              ...args,
            };
            vm.$http({
              method: "get",
              url: url,
              params: param,
              // headers: {
              //   Authorization: "Bearer " + localStorage.getItem("token"),
              // },
            })
              // .get(url, {
              //   params: param,
              // })
              .then((res) => {
                if (res.status === 200) {
                  if (
                    typeof res.data === "string" &&
                    res.data.includes("异常")
                  ) {
                    this.$alert("返回结果异常，不能是一个字符串");
                    return;
                  }
                  let tempdata = res.data;
                  if (datalist && datalist !== "") {
                    const dnamearry = datalist.split(".");
                    for (let ii = 0; ii < dnamearry.length; ii++) {
                      const tempname = dnamearry[ii];
                      tempdata = tempdata[tempname];
                    }
                  }
                  if (!unsetflag) {
                    me.data = tempdata;
                  }
                  vm.$EventBus.$emit(id, tempdata);
                  if (callback) {
                    if (cbparams) callback(tempdata, cbparams, id);
                    else callback(tempdata, id);
                  }
                }
              })
              .catch(function(resp) {
                console.log(
                  url +
                    "错误码：" +
                    resp.status +
                    ";错误信息：" +
                    resp.statusText,
                  "错误提示"
                );
              });
          },
        },
      ],
    };
  },
  methods: {
    onload: function() {},
    datasetRefresh: function(e) {
      this.$gmethods.datasetRefresh.call(this, e);
    },
    refreshDatasetInterval: function() {
      this.$gmethods.refreshDatasetInterval.call(this);
    },
    refreshDataset: function() {
      this.$gmethods.refreshDataset.call(this);
    },
    initData: function() {
      this.$gmethods.initData.call(this);
    },
    initEvent: function() {},
    changeSkin() {
      var head = document.getElementsByTagName("head")[0];
      var link = document.createElement("link");
      link.href = window.__POWERED_BY_QIANKUN__
        ? window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ + "theme/green/index.css"
        : "/theme/green/index.css";
      link.rel = "stylesheet";
      link.type = "text/css";
      head.appendChild(link);
    },
  },
  created() {
    this.initEvent();
    this.initData();
  },
  watch: {
    dataSets: {
      handler() {},
      deep: true,
    },
  },
  mounted() {
    if (Object.keys(this.$props).length === 0) {
      this.refreshDataset();
    }
    this.onload();
  },
};
</script>
