<template>
   <div class="q-pa-md row items-start justify-center q-gutter-md">
    <q-card class="my-card" style="height:390px;width:800px;padding:30px;position:relative;top:200px;">
      <q-card-section>
        <div style="width:50%;height:100%;">
  <img
      alt="ChotaBeta logo"
      src="~assets/CB Logo.png"
      style="height: 200px;position: absolute;top: 108px;left: 45px;"
    >
        </div>
        <div style="width:50%;float:right;">
       <h4>Login Here</h4>
         <q-input v-model="email" label="Email" />
           <q-input v-model="password" label="Password" />
           <q-btn color="primary" label="Submit" style="margin-top:20px;"/>
           </div>
      </q-card-section>
    </q-card>
   </div>
</template>
<script>
export default {
  data () {
    return {
      email:'',
      password:''
    }
  }
}
</script>
