<template>
  <div>
    <el-row>
      <el-col :span="17" :offset="1">
        <h2>
          {{ currentNews.title }}
        </h2>
        <div class="time">{{ formatTime(currentNews.editTime) }}</div>
        <el-divider>
          <el-icon><star-filled /></el-icon>
        </el-divider>
        <div v-html="currentNews.content" class="new-content"></div>
      </el-col>
      <el-col :span="5" :offset="1" :style="{ paddingRight: '20px' }">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-weight: bold">最近新闻</span>
            </div>
          </template>
          <div v-for="item of recentNews" :key="item._id" class="text">
            <div
              :title="item.title"
              class="title"
              @click="handleToDetail(item._id)"
            >
              {{ item.title }}
            </div>
            <div class="bottom">
              <time class="time">{{ formatTime(item.editTime) }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { StarFilled } from '@element-plus/icons-vue'
import axios from 'axios'
import { onMounted, onUpdated, ref } from 'vue'
import { useRoute } from 'vue-router'
import moment from 'moment'
import { useRouter } from 'vue-router'

const router = useRouter()
moment.locale('zh-cn')
const route = useRoute()
const currentNews = ref({})
const recentNews = ref([])
onMounted(async () => {
  const singleNewData = await axios.get(`/frontend/news/${route.params.id}`)
  const recentNewsData = await axios.get('/frontend/news/recent?limit=4')
  currentNews.value = singleNewData.data.data
  recentNews.value = recentNewsData.data.data
})

onUpdated(async () => {
  const singleNewData = await axios.get(`/frontend/news/${route.params.id}`)
  const recentNewsData = await axios.get('/frontend/news/recent?limit=4')
  currentNews.value = singleNewData.data.data
  recentNews.value = recentNewsData.data.data
})
const formatTime = item => moment(item).format('lll')
const handleToDetail = item => {
  router.push(`/new-detail/${item}`)
}
</script>
<style lang="scss" scoped>
.el-row {
  margin-top: 30px;
}
.time {
  font-size: 14px;
  color: grey;
}
.text {
  padding: 5px;
}
:deep .new-content img {
  width: 100%;
}
</style>
