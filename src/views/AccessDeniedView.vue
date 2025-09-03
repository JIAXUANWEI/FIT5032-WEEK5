<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLogin = () => {
  router.push('/login')
}

const goToHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card border-danger">
          <div class="card-header bg-danger text-white text-center">
            <h3 class="mb-0">Access Denied</h3>
          </div>
          <div class="card-body text-center">
            <div class="mb-4">
              <i class="fas fa-lock fa-4x text-danger mb-3"></i>
              <h4 class="text-danger">Authentication Required</h4>
              <p class="text-muted">
                You need to be logged in to access this page. 
                Please log in with your credentials to continue.
              </p>
            </div>
            
            <div class="d-grid gap-2 d-md-block">
              <button @click="goToLogin" class="btn btn-primary me-md-2">
                Go to Login
              </button>
              <button @click="goToHome" class="btn btn-outline-secondary">
                Back to Home
              </button>
            </div>
            
            <div class="mt-4">
              <small class="text-muted">
                <strong>Test Credentials:</strong><br>
                Username: <code>admin</code> | Password: <code>admin123</code>
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
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-header {
  border-radius: 15px 15px 0 0 !important;
}

.fa-lock {
  font-size: 4rem;
}

.btn {
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 500;
}

.btn-primary {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-primary:hover {
  background-color: #c82333;
  border-color: #bd2130;
}
</style>
