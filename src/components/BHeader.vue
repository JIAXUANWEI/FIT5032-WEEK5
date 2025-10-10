<script setup>
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { isLoggedIn, username, logout } = useAuth()

const handleLogout = () => {
  logout()
  router.push('/login')
}
</script>

<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-between align-items-center py-3">
      <!-- 左侧导航链接 -->
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page"
            >Home (Week 5)</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Firelogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireRegister" class="nav-link" active-class="active">Firebase Register</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetBookCount" class="nav-link" active-class="active">get book count</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/WeatherCheck" class="nav-link" active-class="active">get Weather</router-link>
        </li>
       <li class="nav-item">
          <router-link to="/CountBookAPI" class="nav-link" active-class="active">Count Book API</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetAllBook" class="nav-link" active-class="active">GetAllBook</router-link>
        </li>
      </ul>
      
      <!-- 右侧用户状态 -->
      <div class="d-flex align-items-center">
        <!-- 未登录状态 -->
        <div v-if="!isLoggedIn" class="d-flex align-items-center">
          <span class="text-muted me-3">Welcome, Guest</span>
          <router-link to="/login" class="btn btn-outline-primary btn-sm">
            🔐 Login
          </router-link>
        </div>
        
        <!-- 已登录状态 -->
        <div v-else class="d-flex align-items-center">
          <span class="text-success me-3">
            👋 Welcome, <strong>{{ username }}</strong>
          </span>
          <button @click="handleLogout" class="btn btn-outline-danger btn-sm">
            🚪 Logout
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}

/* 新增样式 */
.nav-pills .nav-link.active {
  background-color: #0d6efd;
  color: white;
}

.btn-sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
}

.text-success {
  color: #198754 !important;
}
</style>
