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
            <el-main>
                <div style="width:50%">
                    <Content></Content>
                    <AddProductions></AddProductions>
                </div>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>
<script>

import LeftNavigator from '@/components/leftNavigator.vue';
import TopHeader from '@/components/topHeader.vue';
import Content from '@/components/goodsContent.vue';
import AddProductions from '@/components/addProductions.vue'

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
        Content,
        AddProductions        
    }
}
</script>
    
<style>
.el-aside {
  position: fixed;
}
</style>