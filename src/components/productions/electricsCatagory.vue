<template >
  <div>
    <el-row>
        <el-col
            :span="4"
            v-for="(o, index) in 24"
            :key="o"
            :offset="index > 0 ? 0 : 0"
        >
            <el-card :body-style="{ padding: '20px' }" shadow="always">
            <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
            />
            <div style="padding: 14px">
                <span>好吃的汉堡</span>
            </div>
            </el-card>
        </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "ElectricsCatagory",
};
</script>

<style scoped>

.image {
  width: 100%;
  display: block;
}

.clearfix:after {
  clear: both;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
</style>