<template>
<el-container >
    <el-aside >
        <LeftNavigator></LeftNavigator>
    </el-aside>
    <el-container style="height:100vh">
        <el-header>
            <TopHeader></TopHeader>
        </el-header>
        <el-main style="background-color: #E9EEF3; ">
            <router-view ></router-view>
        </el-main>
    </el-container>
</el-container>
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
    
<style scoped>
.el-aside {
  width: auto !important;

}


</style>