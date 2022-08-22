<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Request</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="prayerRequest in prayerRequests" :key="prayerRequest._id">
                        <td>{{ prayerRequest.date }}</td>
                        <td>{{ prayerRequest.name }}</td>
                        <td>{{ prayerRequest.request }}</td>
                        <td>
                            <button @click="deletePrayerRequest(prayerRequest._id)"
                                class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            prayerRequests: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api2/viewPR';
        axios.get(apiURL).then(res => {
            this.prayerRequests = res.data;
        }).catch(error => {
            console.log(error)
        });
    },
    methods: {
        deletePrayerRequest(id) {
            let apiURL = `http://localhost:4000/api2/delete-prayerRequest/${id}`;
            let indexOfArrayItem = this.prayerRequests.findIndex(i => i._id === id);

            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.prayerRequests.splice(indexOfArrayItem, 1);
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
}
</script>
<style>
.btn-success {
    margin-right: 10px;
}
</style>