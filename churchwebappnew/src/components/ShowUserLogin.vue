<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="userLogin in userLogins" :key="userLogin._id">
                        <td>{{ userLogin.date }}</td>
                        <td>{{ userLogin.name }}</td>
                        <td>{{ userLogin.surname }}</td>
                        <td>{{ userLogin.email }}</td>
                        <td>{{ userLogin.password }}</td>
                        <td>
                            <router-link :to="{ name: 'userDetailsEdit', params: { id: userLogin._id } }"
                                class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteUserLogin(userLogin._id)"
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
            userLogins: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api3/viewUL';
        axios.get(apiURL).then(res => {
            this.userLogins = res.data;
        }).catch(error => {
            console.log(error)
        });
    },
    methods: {
        deleteUserLogin(id) {
            let apiURL = `http://localhost:4000/api3/deleteUL/${id}`;
            let indexOfArrayItem = this.userLogins.findIndex(i => i._id === id);

            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.userLogins.splice(indexOfArrayItem, 1);
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