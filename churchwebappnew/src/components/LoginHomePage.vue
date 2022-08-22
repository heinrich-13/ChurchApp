<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Login Page</h3>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" v-model="userLogin.email" required>
            </div>
            <div class="form-group">
                <label>password</label>
                <input type="text" class="form-control" v-model="userLogin.password" required>
            </div>
            <div class="form-group">
                <button class="btn btn-danger btn-block" @click="checkPassword">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            userLogin: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async checkPassword() {
            let apiURL = `http://localhost:4000/api3/checkPassword`;
            console.log('!!!!!')
            if (this.userLogin.email === "" || this.userLogin.password === "") {
                alert("Please enter email and password!")
            } else {
                alert("Valid user")
                try {
                    const res = await axios.post(apiURL, { email: this.userLogin.email }, { password: this.userLogin.password });
                    this.userLogin = res.data;
                    if (res.status === 200) {
                        alert("Login")
                        this.$router.push({ name: "viewPrayerRequest" })
                    }
                } catch (e) {
                    if (e.response && e.response.status === 404) {
                        alert("Email or password not found")
                    } else {
                        alert("Unexpeted error")
                    }
                    console.log(e);
                }
            }
        }
    }
}
</script>

