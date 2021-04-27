<template>
<div class="q-pa-md">
    <div class="container">
      <div class="row">
    <div class="row col-md-12">
    <td>
            <div class="col-md-12">

              <q-btn label="Export to csv" icon-right="archive" @click="exportTable" type="submit" color="primary" style="margin-left:0px;margin-bottom: 20px;"/>
            </div>
            </td>
            </div>
      </div>
    </div>
  <q-circular-progress
      v-if="!data"
      indeterminate
      size="100px"
      color="blue"
      style="position:absolute;left:55%;top:45%;"
    />
    <!-- <q-table
     class="my-sticky-header-table"
      :filter="filter"
      :loading="loading"
      :data="data"
      :columns="columns"
      row-key="index"
      style="height:600px;"
      :pagination="initialPagination"
      binary-state-sort
       /> -->
       <q-card>
       <table class="q-table responsive horizontal-delimiter" >
  <thead style="background-color: #c1f4cd;">
    <tr style=" text-align:left;">
      <th>S.NO</th>
      <th>City</th>
      <th>Total Count</th>
      <th>Today Count</th>
      <!-- <th>Month Count</th> -->
    </tr>
  </thead>
  <tbody style=" text-align:left;">
    <tr v-for="s in data" :key="data.index" style="border-bottom:1px solid #ccc">
      <td :data-th='s.index'>{{s.index}}</td>
      <td :data-th="s.name">{{s.name}}</td>
      <td :data-th="s.total">{{s.total}}</td>
      <td v-if="s.Today_orders" :data-th="s.Today_orders">{{s.Today_orders}}</td>
      <td v-else :data-th="s.Today_orders">0</td>
      <!-- <td v-if="s.Month_orders" :data-th="s.Month_orders">{{s.Month_orders}}</td>
      <td v-else :data-th="s.Month_orders">0</td> -->
    </tr>

  </tbody>
</table>
</q-card>

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
      delimiter: 'horizontal-delimiter',
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
        { name: 'name', align: 'center', label: 'name', field: 'name', sortable: true,},
        { name: 'total', align: 'center', label: 'TotalCount', field: 'total', sortable: true},
        { name: 'Today_orders', align: 'center', label: 'TodayCount', field: 'Today_orders', sortable: true},
        // { name: 'Month_orders', align: 'center', label: 'MonthCount', field: 'Month_orders', sortable: true},
      ],
      data:'',
    }
  },

  mounted(){
this.gettabledata();
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
      gettabledata(){
            var vm = this;
            vm.loading = true;
            console.log("asdfghj");
            var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY1YmNjM2FlY2RkYWMyZTg1MzAzZDVjMTBhYTE1ZmVkMzlmNmM1NDgxYTQxMjBkMjBlODU2Y2VlMmE3OWRlMmQ1ODQxYmEyMTEyYzgyZGU5In0.eyJhdWQiOiIzIiwianRpIjoiNjViY2MzYWVjZGRhYzJlODUzMDNkNWMxMGFhMTVmZWQzOWY2YzU0ODFhNDEyMGQyMGU4NTZjZWUyYTc5ZGUyZDU4NDFiYTIxMTJjODJkZTkiLCJpYXQiOjE2MDk5MTg0NjQsIm5iZiI6MTYwOTkxODQ2NCwiZXhwIjoxNjQxNDU0NDY0LCJzdWIiOiI5MjU3Iiwic2NvcGVzIjpbXX0.firmBVTAjMtPSWaXf1KobEl7H0gjk9HU21Pk8s4Hh35F-k3SGSf69HDcHQ_p0Q7TOVwReGaVRIzRXeMMufMWr3WABVmxcPCwNmKusqBI-7l_YB1M_4XxT_amnwVw3w3Lilzklfkse8lkUJtW8NYipqUnMscfjtyNV4BecexvuoaW30i2ACbRhuaf9W6GuA4UojAvdW2f69m8vYC4b_4RuqJqcosQMIohnWdsK6kDEq27NbZy3SHKUFTYy2nLx4foTGu-65HZUespErsI0ypO8yNX5y3FdiIJR6OfrB-1VnIDSAUi1pTFxM9QWNrUiwH46mi02l6QQuGjWO-IgrQhvpoOn8QZRlBKewfBsTqJn4RDt_vcAgTqbA_EKOj2ZbYggWg8uNWhW8jJjZQnUy4Yvx_ppgGLWCxHmSZy1wU_55aGzUw0ByQryxp5GWvJlflwZT4ZUz65eqfoOlXg0DxQpQDlrOrfeVP-7IfVn0HQWYbiakQ0VPj3Z9gY50uc6LJbgJsyay47ih_JvlIdP5sytlQOnfGykjtRV9fejfKgAo6d9Ce-ef6vLH54tbmqKGeZIMTivPgkj-H-rSgmWfgbI-ojV2IdizAD0ernGFZkN3ALZk_qMK7Q5zUVjOuyCLctRPF9cdUBllV-URI3JaBf-jDJ2s5fsCUNlNA_KfcScSY';
            let config = {
      headers: {
        "Authorization": `Bearer ${access_token}`,
      }
    }
       axios.get('https://chotabeta.app/dev/testenv/api/total-vendors-list',config)
      .then(function (response) {
        // handle success
        vm.loading = false;
        console.log(response,"getstateeee");
        var tot_count = response.data.vendor_orders;

        var tdy_count = response.data.Today_orders;
        // var mot_count = response.data.Month_orders;
      // var finalObj = tot_count.concat(tdy_count);
      tdy_count.forEach(ele => {
        tot_count.forEach(emt => {
          //  mot_count.forEach(mmt => {
          console.log(ele,"todayyyyy");
          console.log(emt,"totalllll");
          // console.log(mmt,"month");
          if (emt.name == ele.name) {
           emt.Today_orders = ele.Today_orders;
          //  emt.Month_orders = ele.Month_orders;
          }
        });
        // });
      });
      console.log(tot_count,"tot_counttot_counttot_count");
          vm.data = tot_count;
          // vm.data = mot_count;
                    vm.data.forEach((row, index) => {
      row.index = index
    })
      // console.log(vm.data,"vm.datatatattata");

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
