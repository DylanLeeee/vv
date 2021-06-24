<template>
<div style="height:100%">
  <el-col :span="20" style="height:100%">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="height:100%"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>商品分类</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="getElectric" @click="getElectric">电器</el-menu-item>
          <el-menu-item index="getFurniture" @click="getFurniture">家居</el-menu-item>
          <el-menu-item index="1-3">手机配件</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">我的订单</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-shopping-cart-2"></i>
        <span slot="title">购物车 </span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-position"></i>
        <span slot="title">物流查询</span>
      </el-menu-item>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>更多设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="addProductions" @click="addProductions">商品添加</el-menu-item>
          <el-menu-item index="5-1">统计信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name:'LeftNavigator',
    data(){
        return{
            productions:'',
            flag:false
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      getElectric() {
        axios.get('http://127.0.0.1:8000/get_electric_list').then(res=>{
          this.productions=res.data.data
        });
        console.log(this.flag)
        this.$router.push({ name: 'getElectric', params: { productions: this.productions }});
      },
      getFurniture(){
        axios.get('http://127.0.0.1:8000/get_furniture_list').then(res=>{
          this.productions=res.data.data
        });

        this.$router.push({ name: 'getFurniture', params: { productions: this.productions }});
      },
      addProductions(){
          this.flag=true
          this.$router.push({ name: 'addProductions',params:{ flag: this.flag }});
          this.flag=false
      }
    }
}
</script>

<style>

</style>