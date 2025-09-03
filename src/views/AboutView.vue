<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow">
          <div class="card-header bg-info text-white text-center">
            <h1 class="mb-0">📚 About Our Library</h1>
          </div>
          <div class="card-body">
            <div class="text-center mb-4">
              <h4>Welcome to our digital library!</h4>
              <p class="lead">
                We're dedicated to providing a vast collection of books and resources to our community.
              </p>
            </div>
            
            <!-- 受保护的内容 - 只有登录用户才能看到 -->
            <div v-if="isLoggedIn" class="alert alert-success">
              <h5>🎉 Welcome back, {{ username }}!</h5>
              <p>You have access to our premium content and features.</p>
            </div>
            
            <div class="row">
              <div class="col-md-6">
                <h5>🏛️ Our Mission</h5>
                <p>
                  To provide accessible, high-quality educational resources to students, 
                  researchers, and lifelong learners in our community.
                </p>
              </div>
              <div class="col-md-6">
                <h5>📖 Our Collection</h5>
                <p>
                  We offer thousands of books, journals, and digital resources across 
                  various subjects and disciplines.
                </p>
              </div>
            </div>
        
            <div class="text-center mt-4">
              <p class="text-muted">
                <small>
                  This page is protected and only accessible to authenticated users.
                  <br>
                  Current user: <strong>{{ isLoggedIn ? username : 'Not logged in' }}</strong>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '../composables/useAuth'

const { username, isLoggedIn } = useAuth()
</script>

<style scoped>
.card {
  border: none;
  border-radius: 15px;
}

.card-header {
  border-radius: 15px 15px 0 0 !important;
}

.alert-success {
  background-color: #d1e7dd;
  border-color: #badbcc;
  color: #0f5132;
}

.list-group-item {
  border: none;
  padding: 0.75rem 0;
}

.lead {
  font-size: 1.1rem;
  font-weight: 400;
}
</style>