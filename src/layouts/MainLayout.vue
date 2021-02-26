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

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-black text-white"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        </q-item-label>
        <q-item
    clickable
    to="/table"
  >
    <q-item-section

      avatar
    >
      <q-icon name="home" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Dashboard</q-item-label>
      <q-item-label caption>
        <!-- {{ caption }} -->
      </q-item-label>
    </q-item-section>
  </q-item>
      </q-list>
       <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        </q-item-label>
        <q-item
    clickable
    to="/list"
  >
    <q-item-section

      avatar
    >
      <q-icon name="chat" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Reports</q-item-label>
      <q-item-label caption>
        <!-- {{ caption }} -->
      </q-item-label>
    </q-item-section>
  </q-item>

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
