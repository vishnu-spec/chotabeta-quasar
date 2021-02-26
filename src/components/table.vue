<template>
<div class="q-pa-md">
    <div class="container">
      <div class="row">
        <!-- <div class="col-md-12"> -->

            <!-- <label >From Date*</label>
            <input type="date" v-model="from_date" required> <br> <br>

              <label >  To Date*</label>
              <input type="date" v-model="to_date" required> -->


               <!-- <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg">
      </template>

      <h1 class="text-white">CB</h1>
    </q-parallax> -->
    <div class="row col-md-12">
    <div class="col-md-2">
   <q-input  label="From Date"   v-model="from_date" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="from_date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    </div>
    <div class="col-md-2">
      <q-input label="To Date"   v-model="to_date" mask="date" :rules="['date']" style="margin-left: 20px;">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="to_date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    </div>
    <td>
            <div class="col-md-12">
              <q-btn label="Filter" @click="gettabledata" type="submit" color="primary" style="margin-left:20px;margin-top: 20px;"/>
              <q-btn label="Today" @click="gettodaydata" type="submit" color="primary" style="margin-left:20px;margin-top: 20px;"/>
              <q-btn label="Yesterday" @click="getyesterdaydata" type="submit" color="primary" style="margin-left:20px;margin-top: 20px;"/>
              <q-btn label="Export to csv" icon-right="archive" @click="exportTable" type="submit" color="primary" style="margin-left:50px;margin-top: 20px;"/>
    <!-- <q-form
      @submit="Filter"
      @reset="onReset"
      class="q-gutter-md"
    > -->
              <!-- {{from_date}} -->
            </div>
            </td>
            </div>




              <!-- <input type="submit" value="Filter" class="btn">  -->

      </div>
    </div>
  <!-- <q-circular-progress
      v-if="!data"
      indeterminate
      size="100px"
      color="blue"
      style="position:absolute;left:55%;top:45%;"
    /> -->
    <q-table
     class="my-sticky-header-table"
      :filter="filter"
      :loading="loading"
      :data="data"
      :columns="columns"
      row-key="index"
      style="height:600px; font-weight: 600"
      :pagination="initialPagination"
      binary-state-sort
       />


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
      //   date: '2019/03/01',
      // proxyDate: '2019/03/01',
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
        { name: 'id', align: 'center', label: 'id', field: 'id', sortable: true},
        { name: 'uid', align: 'center', label: 'uid', field: 'uid', sortable: true},
        { name: 'service_name2', align: 'center', label: 'service_name2', field: 'service_name2', sortable: true},
        { name: 'delivery_boy_name', align: 'center', label: 'delivery_boy_name', field: 'delivery_boy_name', sortable: true},
        { name: 'amount', align: 'center', label: 'amount', field: 'amount', sortable: true},
        { name: 'online', align: 'center', label: 'online', field: 'online', sortable: true},
        { name: 'payment_status', align: 'center', label: 'payment_status', field: 'payment_status', sortable: true},
        { name: 'payment_mode', align: 'center', label: 'payment_mode', field: 'payment_mode', sortable: true},
        { name: 'order_user_name', align: 'center', label: 'order_user_name', field: 'order_user_name', sortable: true},
        // { name: 'order_user_mobile', align: 'center', label: 'order_user_mobile', field: 'order_user_mobile', sortable: true},
        { name: 'order_status_string', align: 'center', label: 'order_status_string', field: 'order_status_string', sortable: true},
        { name: 'order_date', align: 'center', label: 'order_date', field: 'order_date', sortable: true},
        { name: 'coupon', align: 'center', label: 'coupon', field: 'coupon', sortable: true},
        { name: 'coupon_value', align: 'center', label: 'coupon_value', field: 'coupon_value', sortable: true},
        { name: 'actual_schedule_timestamp', align: 'center', label: 'actual_schedule_timestamp', field: 'actual_schedule_timestamp', sortable: true},
        { name: 'current_claim', align: 'center', label: 'current_claim', field: 'current_claim', sortable: true},
        { name: 'order_city', align: 'center', label: 'order_city', field: 'order_city', sortable: true},
      ],
      data:[],
      today_date:'',
      yesterday_date:''
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
       axios.post('https://chotabeta.app/dev/testenv/api/admin/orders-dashboard',
       {
           "from_date": vm.today_date,
        "to_date": vm.today_date
    },config)
      .then(function (response) {
        // handle success
        vm.loading = false;
        console.log(response,"getstateeee");
        vm.data = response.data.orders;
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


           getyesterdaydata(){

             var vm = this;
             console.log(vm.yesterday_date,"yesterday_date");
            vm.loading = true;
            console.log("asdfghj");
            var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUzMjk4YTk2ZGNhNTY4YzYwMmE5ODU2NjM1ZGI2NjBmNWY0OWI4NWVjZjVkN2U3ZTBlYTljNDY4MGU0OGM4MjRlY2JmYzVhMDUzOTBkYTg0In0.eyJhdWQiOiIzIiwianRpIjoiNTMyOThhOTZkY2E1NjhjNjAyYTk4NTY2MzVkYjY2MGY1ZjQ5Yjg1ZWNmNWQ3ZTdlMGVhOWM0NjgwZTQ4YzgyNGVjYmZjNWEwNTM5MGRhODQiLCJpYXQiOjE2MTQxNTgxNDIsIm5iZiI6MTYxNDE1ODE0MiwiZXhwIjoxNjQ1Njk0MTQyLCJzdWIiOiI5MjU3Iiwic2NvcGVzIjpbXX0.YZ2IvJUVEpycNN7ItVWTM4perqmnAIXhJySSi-ylYSfbGE8N4p7qaCc8jj23spLkpWeNd7zSK_ze2RMH86uHp8s3_D6QwQGpZA6CUwFs5cAjEamQiZY50-td8qImPQ4SgnJE0Z6ZhbOZPNaOhsiSl5jygZegnKEk-6yhZRSglPfvRR4cTwvXrO9_Mgsapuk6DB9S3yt2X51rQ0wyxWKK4GhWfymZlVVTXDGqu3mQEFn5FW9c_XOU9_N8sQc1wBeWuKEjoYLx0e3bY_DgK9xg5_S-7OjYHa7TljhrRfSoFdiFH3xcRb3qHzgXTs4pplhP4YJdGiqOG3oPfh54asRa_wYWUEWhwUits6h6eZPlKWIF9M_ixZ-e3lZA9QqSTVFS75W78gv1rYfmnWvgt1l5UvNC9awzKerLMe0YTX3Ofy_Z8Bdt2ZdvLhI7k79kgXjSEFSoTIVnndzwTYOzNuDwDsdjo7E7dP2rNAqnrDbVtmcDTXHLy0ijZdrciot6SWwORUNWPXqv5iy8UensNodohMNklvL4IKoiAmcIZ1HkGMB2CTvpnmMccY4jCTkb20_fe6zPkEJXQShQaynyhrVMA34bI3xM2jauEED4__5ipdSKZ-X0DkNhXLnA40O8_HdeexrDTsVPUkXlurKtoHa787duRxm8bzHqUB4VtaHMl6M';
            let config = {
      headers: {
        "Authorization": `Bearer ${access_token}`,
      }
    }
       axios.post('https://chotabeta.app/dev/testenv/api/admin/orders-dashboard',
       {
           "from_date": vm.yesterday_date,
        "to_date": vm.yesterday_date
    },config)
      .then(function (response) {
        // handle success
        vm.loading = false;
        console.log(response,"getstateeee");
        vm.data = response.data.orders;
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

          getdates(){
            var vm = this;
             var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
        vm.today_date =today;
        console.log(vm.today_date,"vm.today_datevm.today_date");



        var date = new Date();
    date.setDate(date.getDate()-1);
    var ss= String(date.getMonth()+1).padStart(2, '0') + '/' + date.getDate() + '/'  + date.getFullYear();
  vm.yesterday_date = ss;
        console.log(vm.yesterday_date,"vm.yesrrstrsy.today_date");


          },
          postData(e)
          {
            console.warn(this.posts)
            e.preventDefault();

          },


          //         updateProxy () {
          // this.proxyDate = this.date
          // },

          // save () {
          // this.date = this.proxyDate
          // },


      gettabledata(){
            var vm = this;
            vm.data= [];
            if (vm.from_date && vm.to_date) {


            vm.loading = true;
            console.log("asdfghj");
            var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUzMjk4YTk2ZGNhNTY4YzYwMmE5ODU2NjM1ZGI2NjBmNWY0OWI4NWVjZjVkN2U3ZTBlYTljNDY4MGU0OGM4MjRlY2JmYzVhMDUzOTBkYTg0In0.eyJhdWQiOiIzIiwianRpIjoiNTMyOThhOTZkY2E1NjhjNjAyYTk4NTY2MzVkYjY2MGY1ZjQ5Yjg1ZWNmNWQ3ZTdlMGVhOWM0NjgwZTQ4YzgyNGVjYmZjNWEwNTM5MGRhODQiLCJpYXQiOjE2MTQxNTgxNDIsIm5iZiI6MTYxNDE1ODE0MiwiZXhwIjoxNjQ1Njk0MTQyLCJzdWIiOiI5MjU3Iiwic2NvcGVzIjpbXX0.YZ2IvJUVEpycNN7ItVWTM4perqmnAIXhJySSi-ylYSfbGE8N4p7qaCc8jj23spLkpWeNd7zSK_ze2RMH86uHp8s3_D6QwQGpZA6CUwFs5cAjEamQiZY50-td8qImPQ4SgnJE0Z6ZhbOZPNaOhsiSl5jygZegnKEk-6yhZRSglPfvRR4cTwvXrO9_Mgsapuk6DB9S3yt2X51rQ0wyxWKK4GhWfymZlVVTXDGqu3mQEFn5FW9c_XOU9_N8sQc1wBeWuKEjoYLx0e3bY_DgK9xg5_S-7OjYHa7TljhrRfSoFdiFH3xcRb3qHzgXTs4pplhP4YJdGiqOG3oPfh54asRa_wYWUEWhwUits6h6eZPlKWIF9M_ixZ-e3lZA9QqSTVFS75W78gv1rYfmnWvgt1l5UvNC9awzKerLMe0YTX3Ofy_Z8Bdt2ZdvLhI7k79kgXjSEFSoTIVnndzwTYOzNuDwDsdjo7E7dP2rNAqnrDbVtmcDTXHLy0ijZdrciot6SWwORUNWPXqv5iy8UensNodohMNklvL4IKoiAmcIZ1HkGMB2CTvpnmMccY4jCTkb20_fe6zPkEJXQShQaynyhrVMA34bI3xM2jauEED4__5ipdSKZ-X0DkNhXLnA40O8_HdeexrDTsVPUkXlurKtoHa787duRxm8bzHqUB4VtaHMl6M';
            let config = {
      headers: {
        "Authorization": `Bearer ${access_token}`,
      }
    }
       axios.post('https://chotabeta.app/dev/testenv/api/admin/orders-dashboard',
       {
           "from_date": vm.from_date,
        "to_date": vm.to_date
    },config)
      .then(function (response) {
        // handle success
        vm.loading = false;
        console.log(response,"getstateeee");
        vm.data = response.data.orders;
        console.log(vm.data,"vm.data");
        vm.data.forEach((row, index) => {
      row.index = index
    })

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })


      } else {
             this.$q.notify({
               position:'top-right',
        type: 'negative',
        message: `Please select From and To dates!`
      })
            }
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
