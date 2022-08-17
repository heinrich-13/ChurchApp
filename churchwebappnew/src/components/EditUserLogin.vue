<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update User Login</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Date</label>
                    <input type="text" class="form-control" v-model="userLogin.date" required>
                </div>

                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="userLogin.name" required>
                </div>

                <div class="form-group">
                    <label>Surname</label>
                    <input type="text" class="form-control" v-model="userLogin.surname" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="userLogin.email" required>
                </div>
<div class="form-group">
                    <label>Password</label>
                    <input type="text" class="form-control" v-model="userLogin.password" required>
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
            userLogin: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api3/editUL/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.userLogin = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api3/editUL/${this.$route.params.id}`;

            axios.post(apiURL, this.userLogin).then((res) => {
                console.log(res)
                this.$router.push('/editUL')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>