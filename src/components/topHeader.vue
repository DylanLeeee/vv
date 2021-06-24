<template>
  <div class='search'>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
export default {
    name:'TopHeader',
    data(){
        return {
            input:''
        }
    }
}
</script>

<style>
.search{
    display: inline-block;
    width:50%;
}
</style>