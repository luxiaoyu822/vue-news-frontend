<template>
  <Navbar />
  <router-view />
</template>
<script setup>
import Navbar from '@/components/Navbar'
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, \5fae\8f6f\96c5\9ed1, Arial, sans-serif;
}
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  position: absolute;
}

::-webkit-scrollbar-thumb {
  background: #92c4da;
}
::-webkit-scrollbar-track {
  background: #42839f;
}
</style>
