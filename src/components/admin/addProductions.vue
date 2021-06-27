<template >
  <div>
    <el-container>
      <el-header style="display: inline-block; margin-top: 0px ;">
        <el-row type="flex" justify="end">
          <el-col :span="2">
            <el-button type="primary" round @click="dialogFormVisible = true"
              >新增</el-button
            >
          </el-col>
          <el-col :span="4">
            <el-input placeholder="请输入内容" v-model="search">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <div style="clear: both"></div>
          </el-col>
        </el-row>
      </el-header>
      <el-main >
        <el-table
          :data="
            tableData.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )
          "
          style="width: 100%"
        >
          <el-table-column prop="imgUrl" label="图片链接" width="100px">
            <template slot-scope="scope">
              <img :src="scope.row.imgUrl" style="height: 100px" />
            </template>
          </el-table-column>
          <el-table-column label="商品名" min-width="150px">
            <template slot-scope="scope">
              <a :href="scope.row.materialUrl" target="_blank">{{
                scope.row.name
              }}</a>
            </template>
          </el-table-column>
          <el-table-column prop="unitPrice" label="单价"> </el-table-column>
          <el-table-column prop="bestPrice" label="活动价"> </el-table-column>
          <el-table-column prop="startDate" label="开始日期"> </el-table-column>
          <el-table-column prop="endDate" label="结束日期"> </el-table-column>
          <el-table-column prop="catagory" label="类别"> </el-table-column>
          <el-table-column prop="isJdSale" label="自营"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >编辑</el-button
              >
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 50, 100]"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="tableData.length"
            style="float: right"
          >
          </el-pagination>
        </div>
      </el-main>
    </el-container>
    <div>
      <el-dialog
        title="新增商品"
        :visible.sync="dialogFormVisible"
        style="width: 1100px"
      >
        <el-form :model="form">
          <el-form-item label="商品ID" :label-width="formLabelWidth">
            <el-input
              v-model="form.skuid"
              placeholder="请输入京东商品ID"
              style="width: 300px"
              required
            ></el-input>
          </el-form-item>
          <el-form-item label="价格" :label-width="formLabelWidth">
            <el-input
              v-model="form.bestPrice"
              placeholder="卖价"
              style="width: 300px"
              required
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addProduct">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddProductions",
  data() {
    return {
      pageSize: 4, //每页多少条
      currentPage: 1, // 当前页
      tableData: [],
      form: {
        skuid: "",
        bestPrice: "",
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      search: "",
    };
  },
  methods: {
    // 每页多少条
    handleSizeChange(val) {
      this.pageSize = val;
    },
    // 当前页
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleClick(row) {
      console.log(row.name);
    },
    addProduct() {
      this.dialogFormVisible = false;
      //此处通过skuid传参调取api，去抓取京东商品信息
      let product_info = axios
        .post("http://localhost:5000/get_product_info", {
          skuid: this.form.skuid,
          bestPrice: this.form.bestPrice,
        })
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          this.$message(error.data);
        });
      product_info.then((data) => {
        this.$message(data.msg);
      });
    },
  },
  mounted: function () {
    let tableDataP = axios
      .post("http://localhost:5000/get_goods_list", { goodsName: "" })
      .then((res) => {
        return res.data.data;
      });
    tableDataP.then((res) => {
      this.tableData = res;
    });
  },
};
</script>

<style>
</style>