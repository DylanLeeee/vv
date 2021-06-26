<template>
<div>
    <el-container >
        <el-aside >
            <LeftNavigator></LeftNavigator>
        </el-aside>
        <el-container >
            <el-header id="main">
                <TopHeader></TopHeader>
            </el-header>
            <el-main style="height:100%;flex-grow:1;padding:0px">
                <router-view ></router-view>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>
<script>

import LeftNavigator from '@/components/common/leftNavigator.vue';
import TopHeader from '@/components/common/topHeader.vue';


export default {
    name:'Index',
    components:{
        LeftNavigator,
        TopHeader,
     
    }
}
</script>
    
<style>
.el-aside {
  width: auto !important;
}

  body,.el-container{
        /*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
         /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/

        overflow: hidden ;
    }


</style>