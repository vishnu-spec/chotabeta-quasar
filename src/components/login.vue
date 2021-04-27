<template>

   <div class=" row items-start justify-center q-gutter-md">
     <q-toolbar dense class="bg-primary text-white">
  <q-toolbar-title style="color:white;"> Eagle Dashboard</q-toolbar-title>
     </q-toolbar>
     <!-- <div class="q-pa-md   "> -->
    <q-card class="my-card" style="margin:7%; min-height:390px;width:800px;padding:30px 10px;position:relative;top:50px;">
      <q-card-section>
        <div class="row col-md-12 ">
        <div class="col-md-6" style="text-align:center;">
  <img
      alt="ChotaBeta logo"
      src="~assets/CB Logo.png"
      style="height: 200px;text-align:center;"
    >
        </div>
        <div class="col-md-6">
       <h4>Login Here</h4>
         <q-input v-model="email" type="email" required  label="Email" />
           <q-input v-model="password" type="password" required label="Password" />
           <q-btn color="primary" label="Submit"  style="margin-top:20px;" @click="getlogin"/>
           </div>
           </div>
      </q-card-section>
    </q-card>
     <!-- </div> -->
   </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      email:'',
      password:''
    }
  },
  mounted(){

  },
  methods:{
    getlogin(){
      var vm = this;
        vm.$store
        .dispatch("UserSignin", {
          email: vm.email,
          password: vm.password
        })
        .then(res => {
          console.log(res, "response");
          vm.$router.push("/dashboard");
        })
        .catch(error => {
          console.log(error, "0000");
          // alert("Invalid Login details");
                        vm.$q.notify({
               position:'top-right',
        type: 'negative',
        message: "Invalid login details"
      })

        })

      //   if (vm.email && vm.password) {
      //       axios.post('https://chotabeta.app/dev/testenv/api/vendor/reports-login',
      //       {
      //         email : vm.email,
      //         password : vm.password
      //       })
      // .then(function (response) {
      //   if (response.data.status_code == 200) {
      //   console.log(response,"getstateeee");
      //   }
      //   else{
      //         vm.$q.notify({
      //          position:'top-right',
      //   type: 'negative',
      //   message: response.data.message
      // })
      //   }
      // })
      // .catch(function (error) {
      //     vm.$q.notify({
      //          position:'top-right',
      //   type: 'negative',
      //   message: error
      // })
      // })


      //   } else {
      //       vm.$q.notify({
      //          position:'top-right',
      //   type: 'negative',
      //   message: `Please enter Email and Password!`
      // })

        // }
    }
  }
}
</script>
