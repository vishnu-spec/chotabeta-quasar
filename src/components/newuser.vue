<template>
<div class="q-pa-md">
    <div class="container">
      <div class="row">
    <div class="row col-md-12">
    <td>
            <div class="col-md-12">
              <q-btn label="Export to csv" icon-right="archive" @click="exportTable" type="submit" color="primary" style="margin-left:0px;margin-bottom: 20px;"/>
              <!-- <q-btn label="New USer Table"  color="primary" style="margin-left:450px;margin-bottom: 20px;"/> -->
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
    <q-table
     class="my-sticky-header-table"
      :filter="filter"
      :loading="loading"
      title="New User"
      :data="data"
      :columns="columns"
      row-key="index"
      style="height:650px;"
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
        { name: 'id', align: 'center', label: 'id', field: 'id', sortable: true},
        { name: 'ref_code', align: 'center', label: 'ref_code', field: 'ref_code', sortable: true},
        { name: 'name', align: 'center', label: 'name', field: 'name', sortable: true},
        { name: 'mobile', align: 'center', label: 'mobile', field: 'mobile', sortable: true},
        { name: 'email', align: 'center', label: 'email', field: 'email', sortable: true},
        { name: 'address', align: 'center', label: 'address', field: 'address', sortable: true},
        { name: 'pincode', align: 'center', label: 'pincode', field: 'pincode', sortable: true},
        { name: 'role_code', align: 'center', label: 'role_code', field: 'role_code', sortable: true},
        // { name: 'role', align: 'center', label: 'role', field: 'role', sortable: true},
        { name: 'created_at', align: 'center', label: 'created_at', field: 'created_at', sortable: true},
        { name: 'updated_at', align: 'center', label: 'updated_at', field: 'updated_at', sortable: true},
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
            var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUzMjk4YTk2ZGNhNTY4YzYwMmE5ODU2NjM1ZGI2NjBmNWY0OWI4NWVjZjVkN2U3ZTBlYTljNDY4MGU0OGM4MjRlY2JmYzVhMDUzOTBkYTg0In0.eyJhdWQiOiIzIiwianRpIjoiNTMyOThhOTZkY2E1NjhjNjAyYTk4NTY2MzVkYjY2MGY1ZjQ5Yjg1ZWNmNWQ3ZTdlMGVhOWM0NjgwZTQ4YzgyNGVjYmZjNWEwNTM5MGRhODQiLCJpYXQiOjE2MTQxNTgxNDIsIm5iZiI6MTYxNDE1ODE0MiwiZXhwIjoxNjQ1Njk0MTQyLCJzdWIiOiI5MjU3Iiwic2NvcGVzIjpbXX0.YZ2IvJUVEpycNN7ItVWTM4perqmnAIXhJySSi-ylYSfbGE8N4p7qaCc8jj23spLkpWeNd7zSK_ze2RMH86uHp8s3_D6QwQGpZA6CUwFs5cAjEamQiZY50-td8qImPQ4SgnJE0Z6ZhbOZPNaOhsiSl5jygZegnKEk-6yhZRSglPfvRR4cTwvXrO9_Mgsapuk6DB9S3yt2X51rQ0wyxWKK4GhWfymZlVVTXDGqu3mQEFn5FW9c_XOU9_N8sQc1wBeWuKEjoYLx0e3bY_DgK9xg5_S-7OjYHa7TljhrRfSoFdiFH3xcRb3qHzgXTs4pplhP4YJdGiqOG3oPfh54asRa_wYWUEWhwUits6h6eZPlKWIF9M_ixZ-e3lZA9QqSTVFS75W78gv1rYfmnWvgt1l5UvNC9awzKerLMe0YTX3Ofy_Z8Bdt2ZdvLhI7k79kgXjSEFSoTIVnndzwTYOzNuDwDsdjo7E7dP2rNAqnrDbVtmcDTXHLy0ijZdrciot6SWwORUNWPXqv5iy8UensNodohMNklvL4IKoiAmcIZ1HkGMB2CTvpnmMccY4jCTkb20_fe6zPkEJXQShQaynyhrVMA34bI3xM2jauEED4__5ipdSKZ-X0DkNhXLnA40O8_HdeexrDTsVPUkXlurKtoHa787duRxm8bzHqUB4VtaHMl6M';
            let config = {
      headers: {
        "Authorization": `Bearer ${access_token}`,
      }
    }
       axios.post('https://chotabeta.app/dev/testenv/api/new-users',config)
      .then(function (response) {
        // handle success
        vm.loading = false;
        console.log(response,"getstateeee");
        vm.data = response.data.UserTable;
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
