<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create New User</h3>
            <form @submit.prevent="handleSubmitForm">
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
                userLogin: {
                   date: '',
                   name: '',
                   surname: '',
                   email: '',
                   password:''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api3/createUL';
                
                axios.post(apiURL, this.userLogin).then(() => {
                  this.$router.push('/viewUL')
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
            }
        }
    }
</script>