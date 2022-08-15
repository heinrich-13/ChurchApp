<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Daily Verse</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Date</label>
                    <input type="text" class="form-control" v-model="dailyVerse.date" required>
                </div>

                <div class="form-group">
                    <label>Verse</label>
                    <input type="text" class="form-control" v-model="dailyVerse.verse" required>
                </div>

                <div class="form-group">
                    <label>Head</label>
                    <input type="text" class="form-control" v-model="dailyVerse.head" required>
                </div>

                <div class="form-group">
                    <label>Body</label>
                    <input type="text" class="form-control" v-model="dailyVerse.body" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            dailyVerse: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-dailyVerse/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.dailyVerse = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-dailyVerse/${this.$route.params.id}`;

            axios.post(apiURL, this.dailyVerse).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>