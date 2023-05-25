<template>
  <div class="container">
    <el-carousel height="calc(100vh - 57px)">
      <el-carousel-item>
        <div
          :style="{ backgroundImage: `url(${require('@/assets/home1.jpg')})` }"
        ></div>
      </el-carousel-item>
      <el-carousel-item>
        <div
          :style="{ backgroundImage: `url(${require('@/assets/home2.jpg')})` }"
        ></div>
      </el-carousel-item>
      <el-carousel-item>
        <div
          :style="{ backgroundImage: `url(${require('@/assets/home3.jpg')})` }"
        ></div>
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      欢迎来到我们的新闻网站！我们是一个专注于报道各类新闻、深度评论和独家报道的网站，致力于为读者提供最新、最全面、最深入的新闻报道和信息。
      作为一个全球性的媒体机构，我们关注世界各地的重要事件和突发新闻，涵盖国际政治、经济、科技、文化等各个领域，时刻关注全球热点话题和大事小情。
      我们希望通过我们的努力和专业，为读者提供全方位和高质量的新闻和资讯服务，与您共同见证历史的变革和世界的发展。感谢您对我们网站的支持和信赖，
      希望您能够在这里感受到最真实、最深入的新闻报道和信息服务！
    </div>
  </div>
</template>
<style lang="scss" scoped>
.el-carousel div {
  width: 100%;
  height: 100%;
  background-size: cover;
  :deep .el-carousel-item {
    .content {
      color: white;
    }
  }
}
.container {
  position: relative;
}
.content {
  color: white;
  font-size: 20px;
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
