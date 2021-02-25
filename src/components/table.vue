<template>
  <div class="q-pa-md">
      <q-circular-progress
      v-if="!data"
      indeterminate
      size="100px"
      color="blue"
      style="position:absolute;left:55%;top:45%;"
      class="q-ma-md"
    />
    <q-table
     class="my-sticky-header-table"
       title="https://chotabeta.app/dev/testenv/api/product"
      :data="data"
      :columns="columns"
      row-key="index"
      style="height:655px;"
      :pagination="initialPagination"
      binary-state-sort
    />
  </div>
</template>


<script>

import axios from 'axios';



export default {
  data () {
    return {
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 10,
      },
      columns: [
        {
          name: 'index',
          label: '#',
          field: 'index'
        },
        // {
        //   name: 'name',
        //   required: true,
        //   align: 'left',
        //   field: row => row.name,
        //   format: val => `${val}`,
        //   sortable: true
        // },
        { name: 'main_service_id', align: 'center', label: 'main_service_id', field: 'main_service_id', sortable: true },
        { name: 'service_id', label: 'service_id', field: 'service_id', sortable: true },
        { name: 'product_id', label: 'product_id', field: 'product_id', sortable: true },
        { name: 'category_id', label: 'category_id', field: 'category_id', sortable: true },
        { name: 'sku', label: 'sku', field: 'sku', sortable: true },
        { name: 'category', label: 'category', field: 'category', sortable: true },
        { name: 'brand', label: 'brand', field: 'brand', sortable: true },
        { name: 'name', label: 'name', field: 'name', sortable: true },
        { name: 'weight', label: 'weight', field: 'weight', sortable: true },
        { name: 'active', label: 'active', field: 'active', sortable: true },
        { name: 'mrp', label: 'mrp', field: 'mrp', sortable: true },
        { name: 'selling_price', label: 'selling_price', field: 'selling_price', sortable: true }
      ],
      data:''
    }
  },

  mounted(){
         this.test();
    },
    methods:{


      test(){
        var vm = this;
        console.log("asdfghj");


   axios.get('https://chotabeta.app/dev/testenv/api/product')
  .then(function (response) {
    // handle success
    console.log(response);
    vm.data = response.data.product_id;
    console.log(vm.data,"vm.data");
    vm.data.forEach((row, index) => {
  row.index = index
})


  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
      },
    }

}
</script>
<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #c1f4cd

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
