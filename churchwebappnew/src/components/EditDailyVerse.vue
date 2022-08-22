<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Daily Verse</h3>
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
                <button class="btn btn-danger btn-block" @click="handleUpdateDailyVerse">Update</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            dailyVerse: {}
        }
    },
    async created() {
        let apiURL = `http://localhost:4000/api/edit-dailyVerse/${this.$route.params.id}`;
        try {
            const res = await axios.get(apiURL);
            this.dailyVerse = res.data;
        }
        catch (e) {
            alert("Could not fetch user details")
            console.log(e);
        }
    },
    methods: {
        async handleUpdateDailyVerse() {
            let apiURL = `http://localhost:4000/api/update-dailyVerse/${this.$route.params.id}`;
            try {
                const res = await axios.post(apiURL, this.dailyVerse);
                this.dailyVerse = res.data;
                this.$router.push({ name: "viewDailyVerse" })
            } catch (e) {
                alert("Could not update daily verse")
                console.log(e)
            }
        }
    }
}
</script>