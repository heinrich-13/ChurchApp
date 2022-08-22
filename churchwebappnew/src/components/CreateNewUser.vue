<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create New User</h3>
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
                <button class="btn btn-danger btn-block" @click="verifyUserDetails">Create</button>
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
                date: '',
                name: '',
                surname: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:4000/api3/createUL';
            axios.post(apiURL, this.userLogin).then(() => {
                this.$router.push({ name: "viewUserDetails" })
                this.userLogin = {
                    date: '',
                    name: '',
                    surname: '',
                    email: '',
                    password: ''
                }
            }).catch(error => {
                console.log(error)
            });
        },
        //############################################################
        //Still in progress.....
        async verifyUserDetails() {
            var validRegex = /^[a-zA-Z0-9.!#$%&'/^[A-Za*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            //const validPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            let apiURL = `http://localhost:4000/api3/checkEmail`;
            console.log('!!!!!')
            if (this.userLogin.date === "" || this.userLogin.name === "" || this.userLogin.surname === "" || this.userLogin.email === "" || this.userLogin.password === "") {
                alert("Please enter details in all fields")
            } else {
                if (this.userLogin.email.match(validRegex)) {
                    if (this.userLogin.password.match(validRegex)) {
                        try {
                            const res = await axios.post(apiURL, { email: this.userLogin.email });
                            this.userLogin = res.data;
                            if (res.status === 200) {
                                alert("Email has been used")
                            }
                        } catch (e) {
                            if (e.response && e.response.status === 404) {
                                this.handleSubmitForm()
                            } else {
                                alert("Unexpeted error")
                            }
                            console.log(e);
                        }
                    } else {
                        alert("Please enter a valid password.")
                    }
                } else {
                    alert("Please enter a valid email.")
                }
            }
        }
    }
}
</script>