<template>
<el-container>
    <el-aside>
        <LeftNavigator></LeftNavigator>
    </el-aside>
    <el-main style="height:100vh">
        <el-container direction="vertical">
            <el-header>
                <TopHeader></TopHeader>
            </el-header>
            <el-main >
                <el-divider ></el-divider>
                <router-view ></router-view>
            </el-main>
        </el-container>
    </el-main>
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
  position: relative;
  top:0px;
}


</style>