<template>
<div>
    <el-container>
        <el-aside style="height:100%;" >
            <LeftNavigator></LeftNavigator>
        </el-aside>
        <el-container>
            <el-header>
                <TopHeader></TopHeader>
            </el-header>
            <el-main>
                <Content></Content>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>


<script>

import LeftNavigator from '@/components/leftNavigator.vue';
import TopHeader from '@/components/topHeader.vue';
import Content from '@/components/goodsContent.vue';

export default {
    name:'Index',
    components:{
        LeftNavigator,
        TopHeader,
        Content        
    }

}
</script>
    

<style>
.el-aside {
  display: inline-block;
  position: fixed;

}
</style>