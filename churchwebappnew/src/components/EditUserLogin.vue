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
function findEmail(email, callback) {
  // we find the user by email
  const user = getUser()
  console.log('user found')
  callback(user)
}

findEmail("whater@sdsd.com",(user)=> {
  console.log(user)
  foobar()
  .then(() => {

  }).then(() => {

  })
})

function findEmail2(email) {
  return new Promise((resolve)=> {
    // we find the user by email
    const user = getUser()
    console.log('user found')
    resolve(user)
  }, (reject) => {
    reject(new Error("OOPS!"))
  })
}

findEmail2("fo@bar.com").then(user => {
  console.log('user found')
})

const user = await findEmail2()
console.log('user found');


export default {
    data() {
        return {
            userLogin: { }
        }
    },
    async created() {
        let apiURL = `http://localhost:4000/api3/editUL/${this.$route.params.id}`;
        try {
          const res = await axios.get(apiURL);
          this.userLogin = res.data;
        } catch (e) {
          alert("could not fetch data")
          console.log(e);
        }
    },
    methods: {
      handleUpdateForm: async function() {

      },
        async handleUpdateForm2() {
            let apiURL = `http://localhost:4000/api3/editUL/${this.$route.params.id}`;

            const res= await axios.post(apiURL, this.userLogin)
            console.log(res)
            this.$router.push('/editUL')

        }
    }
}
</script>