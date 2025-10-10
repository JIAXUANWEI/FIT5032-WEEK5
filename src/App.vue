
<template>
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>

    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>
<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import BHeader from './components/BHeader.vue'
import { useAuth } from './composables/useAuth'

// 导入 CountBookAPI 仅在需要时使用
import CountBookAPI from './views/CountBookAPI.vue'

// 初始化身份验证
const { initAuth } = useAuth()
onMounted(() => {
  initAuth()
})

// 使用 Vue Router 的路由信息判断是否显示 Header
const route = useRoute()
const showHeader = computed(() => route.name !== 'CountBookAPI')
</script>


<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
