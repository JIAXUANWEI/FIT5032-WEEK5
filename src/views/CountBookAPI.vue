<template>
<pre>{{ jsondata }}</pre>
</template>

<script>
import axios from 'axios';
// import { error } from 'firebase-functions/logger';
// import { count } from 'firebase/firestore';
// import { count } from 'firebase/firestore';

export default {
    data() {
        return {
            jsondata: null,
            error: null,
        };
    },
    mounted() {
         this.getBookCountAPI();
    },
    methods: {

        async getBookCountAPI() {
            try {
                const response = await axios.get('https://countbooks-q5fgru5sla-uc.a.run.app');
                this.jsondata = response.data;
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