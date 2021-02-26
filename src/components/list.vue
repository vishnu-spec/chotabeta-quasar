<template>
<div class="q-pa-md">
    <div class="container">
      <div class="row">
         <td>

              <q-btn label="B2B Today" @click="gettodaydata" type="submit" color="primary" style="margin-left:20px;margin-bottom: 20px;"/>
              <q-btn label="Export to csv" icon-right="archive" @click="exportTable" type="submit" color="primary" style="margin-left:50px;margin-bottom: 20px;"/>
    <!-- <q-form
      @submit="Filter"
      @reset="onReset"
      class="q-gutter-md"
    > -->
              <!-- {{from_date}} -->

            </td>
            </div>
    <q-table
     class="my-sticky-header-table"
       title="B2B Todays Order"
      :data="data"

      :columns="columns"
      row-key="index"
      style="height:655px;"
      :pagination="initialPagination"
      binary-state-sort
    />
    </div>
  </div>
</template>


<script>

import axios from 'axios';

import { exportFile } from 'quasar'

function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')


  return `"${formatted}"`
}

export default {
  data () {
    return {
        loading: false,
        filter:'',
        from_date:null,
        to_date:null,
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
        { name: 'id', align: 'center', label: 'ID', field: 'id', sortable: true },
        { name: 'order_city', label: 'Order City', field: 'order_city', sortable: true },
        { name: 'order_city_status', label: 'order city status', field: 'order_city_status', sortable: true },
        { name: 'uid', label: 'uid', field: 'uid', sortable: true },
        { name: 'user_name', label: 'user_name', field: 'user_name', sortable: true },
        { name: 'order_user_mobile', label: 'order_user_mobile', field: 'order_user_mobile', sortable: true },
        { name: 'service_name2', label: 'service_name2', field: 'service_name2', sortable: true },
        { name: 'order_date', label: 'order_date', field: 'order_date', sortable: true },
        { name: 'amount', label: 'amount', field: 'amount', sortable: true },
        { name: 'online', label: 'online', field: 'online', sortable: true },
        { name: 'delivery_boy_name', label: 'delivery_boy_name', field: 'delivery_boy_name', sortable: true },
        { name: 'status', label: 'status', field: 'status', sortable: true },
        { name: 'agent_number', label: 'agent_number', field: 'agent_number', sortable: true },
        { name: 'order_status_string', label: 'order_status_string', field: 'order_status_string', sortable: true },
        { name: 'created_at', label: 'created_at', field: 'created_at', sortable: true },
        { name: 'delivered_at', label: 'delivered_at', field: 'delivered_at', sortable: true },
        { name: 'actual_schedule_timestamp', label: 'actual_schedule_timestamp', field: 'actual_schedule_timestamp', sortable: true },
        { name: 'log_count', label: 'log_count', field: 'log_count', sortable: true },
        { name: 'current_claim', label: 'current_claim', field: 'current_claim', sortable: true },
        { name: 'vendor_id', label: 'vendor_id', field: 'vendor_id', sortable: true }

      ],
      data:[],

    }
  },

  mounted(){
        //  this.test();

this.getdates();

    },

        methods:{
            exportTable () {
              var vm =this;
      // naive encoding to csv format
      console.log("exporttttt");
      const content = [ vm.columns.map(col => wrapCsvValue(col.label)) ].concat(
        vm.data.map(row => vm.columns.map(col => wrapCsvValue(
          typeof col.field === 'function'
            ? col.field(row)
            : row[col.field === void 0 ? col.name : col.field],
          col.format
        )).join(','))
      ).join('\r\n')

      const status = exportFile(
        'table-export.csv',
        content,
        'text/csv'
      )

      if (status !== true) {
        vm.$q.notify({
          message: 'Browser denied file download...',
          color: 'negative',
          icon: 'warning'
        })
      }
    },



          gettodaydata(){

             var vm = this;
            vm.loading = true;
            console.log("asdfghj");
            var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUzMjk4YTk2ZGNhNTY4YzYwMmE5ODU2NjM1ZGI2NjBmNWY0OWI4NWVjZjVkN2U3ZTBlYTljNDY4MGU0OGM4MjRlY2JmYzVhMDUzOTBkYTg0In0.eyJhdWQiOiIzIiwianRpIjoiNTMyOThhOTZkY2E1NjhjNjAyYTk4NTY2MzVkYjY2MGY1ZjQ5Yjg1ZWNmNWQ3ZTdlMGVhOWM0NjgwZTQ4YzgyNGVjYmZjNWEwNTM5MGRhODQiLCJpYXQiOjE2MTQxNTgxNDIsIm5iZiI6MTYxNDE1ODE0MiwiZXhwIjoxNjQ1Njk0MTQyLCJzdWIiOiI5MjU3Iiwic2NvcGVzIjpbXX0.YZ2IvJUVEpycNN7ItVWTM4perqmnAIXhJySSi-ylYSfbGE8N4p7qaCc8jj23spLkpWeNd7zSK_ze2RMH86uHp8s3_D6QwQGpZA6CUwFs5cAjEamQiZY50-td8qImPQ4SgnJE0Z6ZhbOZPNaOhsiSl5jygZegnKEk-6yhZRSglPfvRR4cTwvXrO9_Mgsapuk6DB9S3yt2X51rQ0wyxWKK4GhWfymZlVVTXDGqu3mQEFn5FW9c_XOU9_N8sQc1wBeWuKEjoYLx0e3bY_DgK9xg5_S-7OjYHa7TljhrRfSoFdiFH3xcRb3qHzgXTs4pplhP4YJdGiqOG3oPfh54asRa_wYWUEWhwUits6h6eZPlKWIF9M_ixZ-e3lZA9QqSTVFS75W78gv1rYfmnWvgt1l5UvNC9awzKerLMe0YTX3Ofy_Z8Bdt2ZdvLhI7k79kgXjSEFSoTIVnndzwTYOzNuDwDsdjo7E7dP2rNAqnrDbVtmcDTXHLy0ijZdrciot6SWwORUNWPXqv5iy8UensNodohMNklvL4IKoiAmcIZ1HkGMB2CTvpnmMccY4jCTkb20_fe6zPkEJXQShQaynyhrVMA34bI3xM2jauEED4__5ipdSKZ-X0DkNhXLnA40O8_HdeexrDTsVPUkXlurKtoHa787duRxm8bzHqUB4VtaHMl6M';
            let config = {
      headers: {
        "Authorization": `Bearer ${access_token}`,
      }
    }
       axios.post('https://chotabeta.app/dev/testenv/api/vendor/get-today-vendorsdetails',config)
      .then(function (response) {
        // handle success
        vm.loading = false;
        console.log(response,"getstateeee");
        vm.data = response.data.done_orders;
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
          postData(e)
          {
            console.warn(this.posts)
            e.preventDefault();

          },

          getdates(){
            var vm = this;
             var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
        vm.today_date =today;
        console.log(vm.today_date,"vm.today_datevm.today_date");

          },
          postData(e)
          {
            console.warn(this.posts)
            e.preventDefault();

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

    font-weight: 600

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px


</style>
