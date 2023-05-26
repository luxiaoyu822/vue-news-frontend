<template>
  <div>
    <el-carousel
      height="calc(100vh - 57px)"
      direction="vertical"
      :autoplay="false"
      v-if="loopProductList.length"
    >
      <el-carousel-item v-for="item in loopProductList" :key="item._id">
        <div
          class="item"
          :style="{
            backgroundImage: `url(http://localhost:3000${item.cover})`,
          }"
        >
          <el-card class="box-card">
            <template #header>
              <h2>{{ item.title }}</h2>
            </template>
            <div>{{ item.introduction }}</div>
            <div class="detail">{{ item.detail }}</div>
          </el-card>
        </div>
      </el-carousel-item>
    </el-carousel>
    <el-empty v-else description="暂无产品" />
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
const loopProductList = ref([])
onMounted(async () => {
  const { data } = await axios.get('/frontend/product/list')
  loopProductList.value = data.data
})
</script>
<style scoped lang="scss">
.item {
  width: 100%;
  height: 100%;
  background-size: cover;
}
.box-card{
  width: 50%;
  height: 100%;
  background-color: rgba($color: white, $alpha: 0.5);
  .detail{
    margin-top: 30px;
  }
}
</style>
