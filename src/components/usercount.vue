<template>
<div class="q-pa-md">
    <div class="container">
      <div class="row">
    <div class="row col-md-12">
    <td>
            <div class="col-md-12">
              <q-btn label="Major Cities Count" color="primary" style="margin-left:0px;margin-bottom: 20px;"/>
            </div>
            </td>
            </div>
      </div>
    </div>
  <!-- <q-circular-progress
      v-if="!data"
      indeterminate
      size="100px"
      color="blue"
      style="position:absolute;left:55%;top:45%;"
    /> -->

    <q-card style="overflow-x: scroll">
       <table class="q-table responsive horizontal-delimiter" >
  <thead style="background-color: #c1f4cd;">
    <tr>
                <th></th>
                <th>Hyderabad</th>
                <th>Vizag</th>
                 <th>Bangalore</th>
                <th>OtherCities</th>
                <th>TotalCount</th>
    </tr>
  </thead>
  <tbody style=" text-align:center;">
    <tr>
      <tr style="border-bottom:1px solid #ccc">
      <td data-th='Today'>Today</td>
      <td :data-th="tabledata.Hydcity">{{tabledata.Hydcity}}</td>
      <td :data-th="tabledata.Vizagcity">{{tabledata.Vizagcity}}</td>
      <td :data-th="tabledata.Bangalorecity">{{tabledata.Bangalorecity}}</td>
      <td :data-th="tabledata.OtherCitys">{{tabledata.OtherCitys}}</td>
      <td :data-th="tabledata.TotalCount">{{tabledata.TotalCount}}</td>
      <!-- <td v-if="s.today_count" :data-th="s.today_count">{{s.today_count}}</td> -->
      <!-- <td v-else :data-th="s.today_count">0</td> -->
    </tr>
  </tbody>
  <tbody style=" text-align:center;">
      <tr>
          <tr  style="border-bottom:1px solid #ccc">
    <td data-th='Yesterday'>Yesterday</td>
      <td :data-th="tabledata.YHydcity">{{tabledata.YHydcity}}</td>
      <td :data-th="tabledata.YVizagcity">{{tabledata.YVizagcity}}</td>
      <td :data-th="tabledata.YBangalorecity">{{tabledata.YBangalorecity}}</td>
      <td :data-th="tabledata.YOtherCitys">{{tabledata.YOtherCitys}}</td>
      <td :data-th="tabledata.YTotalCount">{{tabledata.YTotalCount}}</td>
          <!-- <td v-if="s.today_count" :data-th="s.today_count">{{s.today_count}}</td> -->
          <!-- <td v-else :data-th="s.today_count">0</td> -->
      </tr>
  </tbody>
</table>
</q-card>

  </div>
</template>

<script>
import axios from 'axios';

export default {

  data () {
    return {
      tabledata:undefined,
    }
    },

  mounted(){
this.gettabledata();

    },

        methods:{
  gettabledata(){
            var vm = this;
            console.log("asdfghj");
            var access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUzMjk4YTk2ZGNhNTY4YzYwMmE5ODU2NjM1ZGI2NjBmNWY0OWI4NWVjZjVkN2U3ZTBlYTljNDY4MGU0OGM4MjRlY2JmYzVhMDUzOTBkYTg0In0.eyJhdWQiOiIzIiwianRpIjoiNTMyOThhOTZkY2E1NjhjNjAyYTk4NTY2MzVkYjY2MGY1ZjQ5Yjg1ZWNmNWQ3ZTdlMGVhOWM0NjgwZTQ4YzgyNGVjYmZjNWEwNTM5MGRhODQiLCJpYXQiOjE2MTQxNTgxNDIsIm5iZiI6MTYxNDE1ODE0MiwiZXhwIjoxNjQ1Njk0MTQyLCJzdWIiOiI5MjU3Iiwic2NvcGVzIjpbXX0.YZ2IvJUVEpycNN7ItVWTM4perqmnAIXhJySSi-ylYSfbGE8N4p7qaCc8jj23spLkpWeNd7zSK_ze2RMH86uHp8s3_D6QwQGpZA6CUwFs5cAjEamQiZY50-td8qImPQ4SgnJE0Z6ZhbOZPNaOhsiSl5jygZegnKEk-6yhZRSglPfvRR4cTwvXrO9_Mgsapuk6DB9S3yt2X51rQ0wyxWKK4GhWfymZlVVTXDGqu3mQEFn5FW9c_XOU9_N8sQc1wBeWuKEjoYLx0e3bY_DgK9xg5_S-7OjYHa7TljhrRfSoFdiFH3xcRb3qHzgXTs4pplhP4YJdGiqOG3oPfh54asRa_wYWUEWhwUits6h6eZPlKWIF9M_ixZ-e3lZA9QqSTVFS75W78gv1rYfmnWvgt1l5UvNC9awzKerLMe0YTX3Ofy_Z8Bdt2ZdvLhI7k79kgXjSEFSoTIVnndzwTYOzNuDwDsdjo7E7dP2rNAqnrDbVtmcDTXHLy0ijZdrciot6SWwORUNWPXqv5iy8UensNodohMNklvL4IKoiAmcIZ1HkGMB2CTvpnmMccY4jCTkb20_fe6zPkEJXQShQaynyhrVMA34bI3xM2jauEED4__5ipdSKZ-X0DkNhXLnA40O8_HdeexrDTsVPUkXlurKtoHa787duRxm8bzHqUB4VtaHMl6M';
            let config = {
      headers: {
        "Authorization": `Bearer ${access_token}`,
      }
    }
       axios.post('https://chotabeta.app/dev/testenv/api/today-downloads',config)
      .then(function (response) {
        console.log(response,"getstateeee");
        vm.tabledata = response.data;
        console.log( vm.tabledata," vm.tabledata");
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  },
}
</script>
<style scoped>
 thead {
  border: 1px solid #ccc;
}
</style>
