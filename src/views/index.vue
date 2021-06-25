<template>
<div>
    <el-container>
        <el-aside style="height:100%">
            <LeftNavigator></LeftNavigator>
        </el-aside>
        <el-container>
            <el-header>
                <TopHeader></TopHeader>
            </el-header>
            <el-main >
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
    data(){
        return{
            height:window.innerHeight
        } 
    },
    components:{
        LeftNavigator,
        TopHeader,
     
    }
}
</script>
    
<style>
.el-aside {
  position: fixed;
}
</style>