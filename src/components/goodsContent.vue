<template>
  <div v-if="this.$route.params.productions" style="margin-left:250px">
    <ul id="example-1">
    <li v-for="item in this.$route.params.productions" :key="item.skuId">
        {{ item.goodsName }}
    </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'Content'
}
</script>


<style>

</style>