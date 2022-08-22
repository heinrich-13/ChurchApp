<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Daily Verse</h3>
            <div class="form-group">
                <label>Date</label>
                <input type="text" class="form-control" v-model="dailyVerse.date" required>
            </div>

            <div class="form-group">
                <label>Verse</label>
                <input type="text" class="form-control" v-model="dailyVerse.verse" required>
            </div>

            <div class="form-group">
                <label>Heading</label>
                <input type="text" class="form-control" v-model="dailyVerse.head" required>
            </div>

            <div class="form-group">
                <label>Scripture</label>
                <input type="text" class="form-control" v-model="dailyVerse.body" required>
            </div>

            <div class="form-group">
                <button class="btn btn-danger btn-block" @click="createDailyVerseSubmit">Create</button>
            </div>
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
        createDailyVerseSubmit() {
            let apiURL = 'http://localhost:4000/api/create-dailyVerse';

            axios.post(apiURL, this.dailyVerse).then(() => {
                this.$router.push("/daily-verse-view/all")
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