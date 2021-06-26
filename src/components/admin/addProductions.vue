<template >
  <el-container class="content">
    <div>
      <div style="height: 50px">
        <div style="float: right; margin-right: 40%">
          <el-button type="primary" round @click="dialogFormVisible = true"
            >新增</el-button
          >
        </div>
        <div style="width: 300px; float: right; margin-right: 50px">
          <el-input placeholder="请输入内容" v-model="search">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div>
        <el-table
          :data="
            tableData.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )
          "
          style="width: 100%"
        >
          <el-table-column prop="date" label="日期"> </el-table-column>
          <el-table-column prop="name" label="商品名"> </el-table-column>
          <el-table-column prop="address" label="京东地址"> </el-table-column>
          <el-table-column prop="unitPrice" label="单价"> </el-table-column>
          <el-table-column prop="bestPrice" label="活动价"> </el-table-column>
          <el-table-column prop="imgUrl" label="图片链接"> </el-table-column>
          <el-table-column prop="startDate" label="开始日期"> </el-table-column>
          <el-table-column prop="endDate" label="结束日期"> </el-table-column>
          <el-table-column prop="catagory" label="类别"> </el-table-column>
          <el-table-column prop="isJdSale" label="自营"> </el-table-column>
          <el-table-column prop="materialUrl" label="商品链接">
          </el-table-column>
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
            style="float: right; margin-top: 15px"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <div>
      <el-dialog title="新增商品" :visible.sync="dialogFormVisible" style="width:1100px">
        <el-form :model="form" >
          <el-form-item label="商品ID" :label-width="formLabelWidth">
            <el-input v-model="form.skuid" placeholder="请输入京东商品ID" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label="价格" :label-width="formLabelWidth">
            <el-input v-model="form.bestPrice" placeholder="卖价" style="width:300px" ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addProduct"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
  </el-container>
</template>

<script>
import axios from 'axios'
export default {
  name: "AddProductions",
  data() {
    return {
      pageSize: 10, //每页多少条
      currentPage: 1, // 当前页
      tableData: [
        {
          date: "2016-05-02",
          name: "王小5虎",
          address: "上海市普陀区金沙江路 1518 弄",
          unitPrice: "￥200",
          bestPrice: "￥150",
          catagory: "沙发",
          isJdSale: "是",
          materialUrl: "www.taobao.com",
          imgUrl: "www.baidu.com",
          startDate: "2021-06-30",
          endDate: "2021-07-30",
        },
      ],
      form: {
        skuid:'',
        bestPrice:''
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
    addProduct(){
      this.dialogFormVisible=false;
      //此处通过skuid传参调取api，去抓取京东商品信息
      let product_info = axios.post('http://127.0.0.1:5000/get_product_info',{'skuid':this.form.skuid,'bestPrice':this.form.bestPrice}).then(res=>{
          return res.data.data
      });
      product_info.then(res=>{
            console.log(res[0].goodsName);  //获得state里的数据，把数据赋值给data里的变量
        })
    }
  }
};
</script>
.content {
  margin-left: 250px;
}
<style>
</style>