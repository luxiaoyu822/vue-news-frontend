<template>
  <div class="navbar">
    <el-menu
      :default-active="route.fullPath"
      class="el-menu-demo"
      mode="horizontal"
      :router="true"
    >
      <div class="logo-container">
        <a href="" style="height: 100%; display: flex; align-items: center">
          <img
            style="height: 40px"
            src="@/assets/facebook_cover_photo_1.png"
            alt=""
          />
        </a>
      </div>

      <div class="flex-grow" />
      <div class="menu-container">
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/news">新闻中心</el-menu-item>
        <el-menu-item index="/product">产品与服务</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  .el-menu {
    padding: 0 200px;
    justify-content: space-between;
    .log-container {
      width: 10%;
      height: 100%;
    }
    .menu-container {
      display: flex;
      width: 20%;
      .el-menu-item {
        font-size: 15px;
      }
    }
  }
}
</style>
