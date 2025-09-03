import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// 创建响应式的身份验证状态
const isAuthenticated = ref(false)
const currentUser = ref(null)

// 从localStorage初始化状态
const initAuth = () => {
  const authStatus = localStorage.getItem('isAuthenticated')
  const user = localStorage.getItem('currentUser')
  
  if (authStatus === 'true' && user) {
    isAuthenticated.value = true
    currentUser.value = user
  }
}

// 登录函数
const login = (username) => {
  isAuthenticated.value = true
  currentUser.value = username
  localStorage.setItem('isAuthenticated', 'true')
  localStorage.setItem('currentUser', username)
}

// 注销函数
const logout = () => {
  isAuthenticated.value = false
  currentUser.value = null
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('currentUser')
}

// 检查用户是否已认证
const checkAuth = () => {
  return isAuthenticated.value
}

// 获取当前用户
const getUser = () => {
  return currentUser.value
}

// 计算属性：用户是否已登录
const isLoggedIn = computed(() => isAuthenticated.value)

// 计算属性：当前用户名
const username = computed(() => currentUser.value)

export function useAuth() {
  return {
    // 状态
    isAuthenticated,
    currentUser,
    
    // 计算属性
    isLoggedIn,
    username,
    
    // 方法
    initAuth,
    login,
    logout,
    checkAuth,
    getUser
  }
}
