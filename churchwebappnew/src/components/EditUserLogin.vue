<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update User Login</h3>
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
                <button class="btn btn-danger btn-block" @click="handleUpdateUserDetails">Update</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            userLogin: {}
        }
    },
    async created() {
        let apiURL = `http://localhost:4000/api3/editUL/${this.$route.params.id}`;
        try {
            const res = await axios.get(apiURL);
            this.userLogin = res.data;
        } catch (e) {
            alert("Could not fetch user details")
            console.log(e);
        }
    },
    methods: {
        async handleUpdateUserDetails() {
            let apiURL = `http://localhost:4000/api3/updateUL/${this.$route.params.id}`;
            try {
                const res = await axios.post(apiURL, this.userLogin);
                this.userLogin = res.data;
                this.$router.push({ name: "viewUserDetails" })
            } catch (e) {
                alert("Could not update user details")
                console.log(e);
            }
        }
    }
}
</script> 