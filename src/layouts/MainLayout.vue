<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <!-- <q-toolbar class="q-mr-sm"> -->
        <q-toolbar class="bg-black text-white">

        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="test"
        />

<q-toolbar-title >
  <q-item
    clickable
    to="/"
    style="color:white;"
>
          Eagle Dashboard
           </q-item>

         <q-btn icon="power_settings_new"  @click="logout" style="position: absolute;right: 2%;top: 20%;color: white;"></q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-black text-white"
    >
      <q-list>
     <!-- <q-item
    clickable
    to="/"
  >
    <q-item-section
      avatar
    >
      <q-icon name="home" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Dashboard</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item> -->

    <q-expansion-item
        group="somegroup"
        icon="analytics"
        label="Business Reports">

        <q-item
    clickable
    to="/dashboard/list">
    <q-item-section
      avatar>
      <!-- <q-icon name="chat" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>B2B Reports</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>

          <q-item
    clickable
    to="/dashboard/list1">
    <q-item-section
      avatar>
      <!-- <q-icon name="chat" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>B2C Reports</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>


          <q-item
    clickable
    to="/dashboard/De_earnings_main">
    <q-item-section
      avatar>
      <!-- <q-icon name="chat" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>De Earnings Main</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>


          <q-item
    clickable
    to="/dashboard/b4b">
    <q-item-section
      avatar>
      <!-- <q-icon name="chat" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>B4B Vendors List</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>

       <q-item
    clickable
      to="/dashboard/childorders">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>multidrop orders</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>


        <q-item
    clickable
      to="/dashboard/vendorslist">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>Vendors List</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>


        <q-item
    clickable
      to="/dashboard/monthvendorslist">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>Month Vendors Count</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>

   </q-expansion-item>



    <q-expansion-item
        group="somegroup"
        icon="business"
        label="Orders Reports"
      >

 <q-item
    clickable
    to="/dashboard/table"
  >
    <q-item-section

      avatar
    >
      <!-- <q-icon name="business" /> -->
    </q-item-section>

    <q-item-section>
      <q-item-label>Orders Report</q-item-label>
      <q-item-label caption>
        <!-- {{ caption }} -->
      </q-item-label>
    </q-item-section>
  </q-item>

    <q-item
    clickable
      to="/dashboard/ratingorder">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>Orders Rating</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>

  <q-item
    clickable
      to="/dashboard/cancelorders">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>Cancellations Orders</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>

</q-expansion-item>





<q-expansion-item
        group="somegroup"
        icon="manage_accounts"
        label="Management Reports"
        >
<q-item clickable>
<q-item-section avatar>
      <!-- <q-icon name="manage_accounts" /> -->
</q-item-section>
<q-item-section>
      <q-item-label>Management</q-item-label>
      <q-item-label caption>
        <!-- {{ caption }} -->
      </q-item-label>
    </q-item-section>
  </q-item>
</q-expansion-item>



 <!-- <q-item
    clickable
  >
    <q-item-section

      avatar
    >
      <q-icon name="analytics" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Business</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item> -->


<q-expansion-item
        group="somegroup"
        icon="support"
        label="Operations Reports"
        >
  <q-item
    clickable
     to="/dashboard/sla">
    <q-item-section

      avatar
    >
      <!-- <q-icon name="support" /> -->
    </q-item-section>

    <q-item-section>
      <q-item-label>SLA Report</q-item-label>
      <q-item-label caption>
        <!-- {{ caption }} -->
      </q-item-label>
    </q-item-section>
  </q-item>

    <q-item
    clickable
      to="/dashboard/pincodelogs">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>Pincode Logs</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>

  <q-item
   clickable
     to="/dashboard/Today_orders_At_Glance">
   <q-item-section
     avatar >
     <!-- <q-icon name="business" /> -->
   </q-item-section>
   <q-item-section>
     <q-item-label>Today orders At Glance</q-item-label>
     <q-item-label caption>
     </q-item-label>
   </q-item-section>
 </q-item>

    <q-item
    clickable
      to="/dashboard/cancellationorders">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>Cancellation Orders</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>


    <q-item
    clickable
      to="/dashboard/manualordersrestricted">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>manual orders restricted</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>


    <q-item
   clickable
     to="/dashboard/Yesterday_orders_at_glance">
   <q-item-section
     avatar >
     <!-- <q-icon name="business" /> -->
   </q-item-section>
   <q-item-section>
     <q-item-label>Yesterday orders At Glancee</q-item-label>
     <q-item-label caption>
     </q-item-label>
   </q-item-section>
 </q-item>
</q-expansion-item>

<q-expansion-item
        group="somegroup"
        icon="admin_panel_settings"
        label="HR Reports"

        >
<q-item
    clickable >
    <q-item-section
      avatar >
      <!-- <q-icon name="admin_panel_settings" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>HR</q-item-label>
      <q-item-label caption>
        <!-- {{ caption }} -->
      </q-item-label>
    </q-item-section>
  </q-item>
</q-expansion-item>


<!-- Finance Reports Block -->
<q-expansion-item
        group="somegroup"
        icon="attach_money"
        label="Finance Reports"
        >
<q-item
    clickable >
    <q-item-section
      avatar
    >
    <!-- <q-icon name="attach_money"/> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>Finance</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>
</q-expansion-item>


<!-- Genaral Reports block  -->
<q-expansion-item
        group="somegroup"
        icon="book"
        label="General Reports"

        >

   <q-item
    clickable
      to="/dashboard/newuser">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>New user Report</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>

   <q-item
    clickable
      to="/dashboard/usercount">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>User Base Report</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>


   <q-item
    clickable
      to="/dashboard/citybasedusers">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>City Base Users</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>

   <q-item
    clickable
      to="/dashboard/pickfromstore">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>Pick From Store</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>

    <q-item
    clickable
      to="/dashboard/yesterdaypickfromstore">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>yesterday pickfromstore</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>


     <q-item
    clickable
      to="/dashboard/de_earnings">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>De Earnings</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>


     <q-item
    clickable
      to="/dashboard/example">
    <q-item-section
      avatar >
      <!-- <q-icon name="business" /> -->
    </q-item-section>
    <q-item-section>
      <q-item-label>Test1</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>    <!-- yesterdaypickfromstore -->

</q-expansion-item>
</q-list>

  <q-item style="position:absolute;bottom:5%;right:30%">
    <q-item-section
      avatar >
      <q-icon name="person" />
    </q-item-section>
    <q-item-section>
      <q-item-label style="margin-top:5px;postion:relative;right:25px;">{{user_details.name}}</q-item-label>
      <!-- <q-item-label style="margin-top:5px;postion:relative;right:25px;">{{$store.state.token}}</q-item-label> -->

      <!-- <q-item-label caption>{{$store.state.profile.name}}
      </q-item-label> -->
    </q-item-section>
  </q-item>
      <!-- <q-item-label style="position: absolute;right: 40%;bottom: 10%;color: white;">{{user_details.name}}</q-item-label> -->

</q-drawer>
<q-page-container>
<router-view />
</q-page-container>
</q-layout>
</template>

<script>

import EssentialLink from 'components/EssentialLink.vue';


export default {
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: true,
      miniState :false,
      user_details:''
      // essentialLinks: linksData,

    }
  },
  mounted(){
      this.getuser();
      this.logouttime();
  },
   methods: {
     logouttime(){
      //  5*60 * 60 * 1000
          setInterval(() => {
            this.logout();
          }, 1*60 * 60 * 1000);
     },
     getuser(){
       var vm = this;
       vm.user_details = JSON.parse(localStorage.getItem("access_token"));
       console.log(vm.user_details,"vm.user_details");
     },
     test(){
       var vm = this;
       console.log("entered");
       if (vm.leftDrawerOpen == false) {
              vm.leftDrawerOpen = true;
         console.log(vm.leftDrawerOpen,"this.leftDrawerOpen");

       } else {
         vm.leftDrawerOpen = false;
         console.log(vm.leftDrawerOpen,"this.leftDrawerOpen");

       }

     },
     logout(){
       this.$store.dispatch('logout');
       this.$router.push('/');

    },
    drawerClick (e) {
      var vm = this;
      // if in "mini" state and user
      // click on drawer, we switch it to "normal" mode
        console.log(vm.miniState,"this.miniState12345");

      if (vm.drawerRight == true) {
        console.log(vm.miniState,"this.miniState");
        vm.drawerRight = miniState;
        //  this.drawer=false;

        // notice we have registered an event with capture flag;
        // we need to stop further propagation as this click is
        // intended for switching drawer to "normal" mode only
        // e.stopPropagation()
      }
      else{
        vm.drawerRight = true;
      }
    }
  }
}
</script>
