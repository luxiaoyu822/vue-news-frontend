<template>
  <div class="container">
    <div
      class="news-header"
      :style="{
        backgroundImage: `url(${require('@/assets/newsbg.jpg')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }"
    ></div>
    <div class="search">
      <el-popover
        width="40%"
        placement="bottom"
        title="检索结果"
        :visible="visible"
      >
        <template #reference>
          <el-input
            v-model="searchText"
            class="w-50 m-2"
            size="large"
            placeholder="请输入新闻关键字"
            type="search"
            :prefix-icon="Search"
            @input="visible = true"
            @blur="visible = false"
        /></template>
        <div v-if="searchNewsList.length && searchText !== ''">
          <div
            class="search-result"
            v-for="data of searchNewsList"
            :key="data._id"
            @click="handleToDetail(data._id)"
          >
            {{ data.title }}
          </div>
        </div>
        <div v-else>
          <el-empty description="暂无新闻" :image-size="50"></el-empty>
        </div>
      </el-popover>
    </div>
    <div class="topnews">
      <el-row :gutter="15">
        <el-col :span="6" v-for="data of topNewsList" :key="data._id">
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
            @click="handleToDetail(data._id)"
          >
            <div
              class="image"
              :style="{
                backgroundImage: `url(http://localhost:3000${data.cover})`,
              }"
            ></div>
            <div style="padding: 14px">
              <div :title="data.title" class="title">{{ data.title }}</div>
              <div class="bottom">
                <time class="time">{{ formatTime(data.editTime) }}</time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-tabs class="tabs" v-model="activeName">
      <el-tab-pane
        v-for="data of tabsList"
        :label="data.label"
        :name="data.name"
        :key="data.name"
      >
        <el-row :gutter="15">
          <el-col :span="18">
            <div v-for="item of tabNews[data.name]" :key="item._id">
              <el-card
                :body-style="{ padding: '0px' }"
                shadow="hover"
                @click="handleToDetail(item._id)"
              >
                <div
                  class="image"
                  :style="{
                    backgroundImage: `url(http://localhost:3000${item.cover})`,
                  }"
                ></div>
                <div style="padding: 14px; float: left">
                  <div :title="item.title" class="title">{{ item.title }}</div>
                  <div class="bottom">
                    <time class="time">{{ formatTime(item.editTime) }}</time>
                  </div>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="6">
            <el-timeline>
              <el-timeline-item
                v-for="(item, index) in tabNews[data.name]"
                :key="index"
                :timestamp="formatTime(item.editTime)"
              >
                {{ item.title }}
              </el-timeline-item>
            </el-timeline>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <el-backtop :visibility-height="100" :right="100" :bottom="100" />
  </div>
</template>
<script setup>
import { Search } from '@element-plus/icons-vue'
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import moment from 'moment'
import _ from 'lodash'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeName = ref(1)
moment.locale('zh-cn')
const searchText = ref('')
const visible = ref(false)
const newsList = ref([])
onMounted(async () => {
  const { data } = await axios.get('/frontend/news/list')
  newsList.value = data.data
})
const searchNewsList = computed(() =>
  newsList.value.filter(item => item.title.includes(searchText.value))
)
const topNewsList = computed(() => newsList.value.slice(0, 4))
const formatTime = item => moment(item).format('lll')
const tabsList = [
  {
    label: '最新动态',
    name: 1,
  },
  {
    label: '通知公告',
    name: 2,
  },
  {
    label: '典型案例',
    name: 3,
  },
]
const tabNews = computed(() => _.groupBy(newsList.value, item => item.categroy))
const handleToDetail = item => {
  router.push(`/new-detail/${item}`)
}
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  .news-header {
    height: 400px;
  }
  .search {
    position: absolute;
    top: 300px;
    width: 100%;
    text-align: center;
    .el-input {
      width: 40%;
    }
    .el-popover {
      width: 40%;
    }
  }
  .topnews {
    margin: 20px 10px;
    .image {
      width: 100%;
      height: 200px;
      background-size: cover;
    }
    .title {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .time {
      font-size: 14px;
      color: grey;
    }
  }
  .tabs {
    margin: 20px 10px;
    .el-card {
      margin: 10px 0;
    }
    .image {
      width: 20%;
      height: 200px;
      background-size: cover;
      float: left;
    }
    .time {
      font-size: 14px;
      color: grey;
    }
  }
}
.search-result {
  height: 35px;
  line-height: 35px;
  &:hover {
    background-color: rgb(241, 237, 233);
    color: red;
  }
}
</style>
