<template>
<el-row type="flex" justify="end">
<el-col :span="3"> <h2>显示个人信息</h2></el-col>
<el-col :span="1">
<el-avatar :size="46" :src="circleUrl" icon="el-icon-user-solid" style="margin-top:20px"></el-avatar>
</el-col>
  </el-row>
</template>

<script>
export default {
    name:'TopHeader',
}
</script>

<style>

</style>