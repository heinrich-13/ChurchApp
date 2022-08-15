<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Date</th>
                        <th>Verse</th>
                        <th>Head</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="dailyVerse in dailyVerses" :key="dailyVerse._id">
                        <td>{{ dailyVerse.date }}</td>
                        <td>{{ dailyVerse.verse }}</td>
                        <td>{{ dailyVerse.head }}</td>
                        <td>{{ dailyVerse.body }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: dailyVerse._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteDailyVerse(dailyVerse._id)" class="btn btn-danger">Delete</button>
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
                dailyVerses: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.dailyVerses = res.data;
            }).catch(error => {
                console.log(error)
                });
        },
        methods: {
            deleteDailyVerse(id){
                let apiURL = `http://localhost:4000/api/delete-dailyVerse/${id}`;
                let indexOfArrayItem = this.dailyVerses.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.dailyVerses.splice(indexOfArrayItem, 1);
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