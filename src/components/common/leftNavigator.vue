<template>
<div style="height:100vh;">
  <el-col :xs="4" :sm="8" :md="10" :lg="16" :xl="18" style="height:100vh;">
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
      getElectric(){
          this.$router.push({name:'getElectrics'})
      },
      getFurniture(){
          this.$router.push({name:'getFurnitures'})
      },
      addProductions(){
          this.$router.push({name:'addProductions'})
      }

    }
}
</script>

<style>

</style>