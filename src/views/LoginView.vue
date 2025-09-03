<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { login } = useAuth()

const loginData = ref({
  username: '',
  password: ''
})

const errors = ref({
  username: null,
  password: null,
  general: null
})

const isLoading = ref(false)

// 硬编码的凭据
const VALID_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
}

const validateForm = () => {
  let isValid = true
  
  // 重置错误
  errors.value = {
    username: null,
    password: null,
    general: null
  }
  
  // 验证用户名
  if (!loginData.value.username.trim()) {
    errors.value.username = 'Username is required'
    isValid = false
  }
  
  // 验证密码
  if (!loginData.value.password.trim()) {
    errors.value.password = 'Password is required'
    isValid = false
  }
  
  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }
  
  isLoading.value = true
  
  // 模拟API调用延迟
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // 验证凭据
  if (loginData.value.username === VALID_CREDENTIALS.username && 
      loginData.value.password === VALID_CREDENTIALS.password) {
    
    // 登录成功，使用身份验证系统
    login(loginData.value.username)
    
    // 重定向到首页
    router.push('/')
  } else {
    // 登录失败
    errors.value.general = 'Invalid username or password'
  }
  
  isLoading.value = false
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="card shadow">
          <div class="card-header bg-primary text-white text-center">
            <h3 class="mb-0">🔐 Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleSubmit">
              <!-- 通用错误消息 -->
              <div v-if="errors.general" class="alert alert-danger" role="alert">
                {{ errors.general }}
              </div>
              
              <!-- 用户名字段 -->
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  v-model="loginData.username"
                  :class="{ 'is-invalid': errors.username }"
                  placeholder="Enter your username"
                  required
                />
                <div v-if="errors.username" class="invalid-feedback">
                  {{ errors.username }}
                </div>
              </div>
              
              <!-- 密码字段 -->
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="loginData.password"
                  :class="{ 'is-invalid': errors.password }"
                  placeholder="Enter your password"
                  required
                />
                <div v-if="errors.password" class="invalid-feedback">
                  {{ errors.password }}
                </div>
              </div>
              
              <!-- 提交按钮 -->
              <div class="d-grid">
                <button 
                  type="submit" 
                  class="btn btn-primary"
                  :disabled="isLoading"
                >
                  <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
                  {{ isLoading ? 'Logging in...' : 'Login' }}
                </button>
              </div>
            </form>
            
            <!-- 测试凭据提示 -->
            <div class="mt-3 text-center">
              <small class="text-muted">
                <strong>Test Credentials:</strong><br>
                Username: <code>admin</code><br>
                Password: <code>password123</code>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: none;
  border-radius: 15px;
}

.card-header {
  border-radius: 15px 15px 0 0 !important;
}

.form-control:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.btn-primary {
  border-radius: 8px;
  padding: 12px;
  font-weight: 500;
}

.btn-primary:disabled {
  opacity: 0.7;
}
</style>
