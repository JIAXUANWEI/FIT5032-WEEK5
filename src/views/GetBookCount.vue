<template>
  <div id="app">
    <h1>Book Counter</h1>
    <button @click="getBookCount">Get Book Count</button>
    <p v-if="count !== null">Total nymbet of books:{{ count }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { error } from 'firebase-functions/logger';
import { count } from 'firebase/firestore';
// import { count } from 'firebase/firestore';

export default {
    data() {
        return {
            count: null,
            error: null,
        };
    },
    methods: {
        async getBookCount() {
            try {
                const response = await axios.get('');
                this.count = response.data.count;
                this.error = null;

            } catch (error) {
                console.error('error fetching book count:', error);
                this.error = error;
                this.count = null;
                
        }
    }
 }
}
</script>

<style>

</style>