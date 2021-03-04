<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
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
          CB Dashboard
           </q-item>
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
        label="Business Reports"

      >

        <q-item
    clickable
    to="/list"
  >
    <q-item-section
      avatar
    >
      <!-- <q-icon name="chat" /> -->
    </q-item-section>

    <q-item-section>
      <q-item-label>B2B Reports1</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>
    <q-item
    clickable
    to="/list2"
  >
    <q-item-section
      avatar
    >
      <!-- <q-icon name="chat" /> -->
    </q-item-section>

    <q-item-section>
      <q-item-label>B2B Reports2</q-item-label>
      <q-item-label caption>
      </q-item-label>
    </q-item-section>
  </q-item>
    <q-item
    clickable
    to="/list3"
  >
    <q-item-section
      avatar
    >
      <!-- <q-icon name="chat" /> -->
    </q-item-section>

    <q-item-section>
      <q-item-label>B2B Reports3</q-item-label>
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
    to="/table"
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

  >
    <q-item-section

      avatar
    >
      <!-- <q-icon name="support" /> -->
    </q-item-section>

    <q-item-section>
      <q-item-label>Operations</q-item-label>
      <q-item-label caption>
        <!-- {{ caption }} -->
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
      to="/cancelorders">
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


  <q-item
    clickable
      to="/ratingorder">
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
      to="/pincodelogs">
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
      to="/newuser">
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
      to="/usercount">
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


</q-expansion-item>
</q-list>
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
      // essentialLinks: linksData,

    }
  },
   methods: {
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
