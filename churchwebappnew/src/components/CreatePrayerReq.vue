<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Prayer Request</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Date</label>
                    <input type="text" class="form-control" v-model="prayerRequest.date" required>
                </div>

                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="prayerRequest.name" required>
                </div>

                <div class="form-group">
                    <label>Request</label>
                    <input type="text" class="form-control" v-model="prayerRequest.request" required>
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
            prayerRequest: {
                date: '',
                name: '',
                request: ''
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:4000/api2/create-prayerRequest';

            axios.post(apiURL, this.prayerRequest).then(() => {
                this.$router.push({ name: "viewPrayerRequest" })
                this.prayerRequest = {
                    date: '',
                    name: '',
                    request: ''
                }
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>