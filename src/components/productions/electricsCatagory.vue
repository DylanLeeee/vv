<template >
  <div>
    <div class="content">
      <el-scrollbar class="scrollbar-wrapper">
        <div>
          <el-row>
            <el-col
              :span="4"
              v-for="(o, index) in 88"
              :key="o"
              :offset="index > 0 ? 0 : 0"
            >
              <el-card :body-style="{ padding: '3px' }">
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
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "ElectricsCatagory",
};
</script>

<style>
.content {
  margin-left: 250px;
}
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