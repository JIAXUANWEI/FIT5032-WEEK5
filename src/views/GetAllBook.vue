<template>
  <div class="container mt-5">
    <h1>All Books (from Firebase)</h1>

    <!-- 显示加载状态 -->
    <div v-if="loading" class="alert alert-info">Loading books...</div>

    <!-- 显示错误 -->
    <div v-else-if="error" class="alert alert-danger">{{ error }}</div>

    <!-- 显示 JSON 数据 -->
    <pre v-else class="json-box">{{ formattedBooks }}</pre>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { collection, getDocs } from "firebase/firestore";
import db from "@/firebase/init"; // ✅ 从 firebase.js 导入 Firestore 实例

export default {
  name: "GetAllBookAPI",
  setup() {
    const books = ref([]);
    const loading = ref(true);
    const error = ref("");

    // 定义异步函数：从 Firestore 获取所有书籍
    const fetchBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "books")); // "books" 集合名要与 Firebase 中一致
        books.value = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (err) {
        console.error("❌ Error fetching books:", err);
        error.value = "Failed to fetch books. Please check Firebase connection or rules.";
      } finally {
        loading.value = false;
      }
    };

    // 格式化为 JSON 字符串，方便显示
    const formattedBooks = computed(() => JSON.stringify(books.value, null, 2));

    // 页面加载时调用
    onMounted(() => {
      fetchBooks();
    });

    return { books, loading, error, formattedBooks };
  },
};
</script>

<style scoped>
.json-box {
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  font-family: "Courier New", monospace;
  font-size: 14px;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 80vh;
  overflow-y: auto;
}
</style>
