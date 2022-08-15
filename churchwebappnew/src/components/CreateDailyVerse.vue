<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Daily Verse</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Date</label>
                    <input type="text" class="form-control" v-model="dailyVerse.date" required>
                </div>

                <div class="form-group">
                    <label>verse</label>
                    <input type="text" class="form-control" v-model="dailyVerse.verse" required>
                </div>

                <div class="form-group">
                    <label>head</label>
                    <input type="text" class="form-control" v-model="dailyVerse.head" required>
                </div>

                <div class="form-group">
                    <label>body</label>
                    <input type="text" class="form-control" v-model="dailyVerse.body" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
                </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                dailyVerse: {
                   date: '',
                   verse: '',
                   head: '',
                   body: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-dailyVerse';
                
                axios.post(apiURL, this.dailyVerse).then(() => {
                  this.$router.push('/view')
                  this.dailyVerse = {
                    date: '',
                    verse: '',
                    head: '',
                    body: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>