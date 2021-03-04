<template>
<div class="q-pa-md">
    <div class="container">
      <table border="1">
              <thead>
                <!-- <th>Cityname</th> -->
                <th>Hyderabad</th>
                <th>Bangalore</th>
                <th>Vizag</th>
                <th>OtherCities</th>
                <th>TotalCount</th>

              </thead>
              <tbody style="text-align:center;">
                <!-- <td>{{tabledata.Cityname}}</td> -->
                <td>{{tabledata.Hydcity}}</td>
                <td>{{tabledata.Bangalorecity}}</td>
                <td>{{tabledata.Vizagcity}}</td>
                <td>{{tabledata.OtherCitys}}</td>
                <td>{{tabledata.TotalCount}}</td>
              </tbody>
            </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      tabledata:''
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
       axios.post('https://chotabeta.app/dev/testenv/api/today-downloads',
       {
    },config)
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
