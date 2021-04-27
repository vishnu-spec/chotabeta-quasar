import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import VueSession from 'vue-session'
import axios from 'axios';


Vue.use(VueSession)

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only



    state: {
      token: localStorage.getItem('access_token') || null,
    },
    getters: {
      loggedIn(state) {
        return state.token !== null
      },
      getToken(state) {
        return state.token
      },
      test(state) {
        return state.token
      }
    },
    mutations: {
      setToken(state, token) {
        state.token = token;
        // modifying the token into state token

      },
      clearToken(state) {
        state.token = null;
      },

    },
    actions: {
      UserSignin(vuexContext, data) {
        console.log(data);

        console.log("shashi`1234567890");
        return new Promise((resolve, reject) => {
          // axios({
          //   method: "Post",
          //   url: 'https://chotabeta.app/dev/testenv/api/vendor/reports-login',
          //   headers: {
          //     'X-API-Key': 'mVOeqnZwZq4U5RPRISRLe3P9RFU6mJFG9oD29GmN',
          //     'Content-Type': 'application/json'
          //   },
          //   data: {
          //     user_name: data.username,
          //     password: data.password,

          //   },

          // })
          axios.post('https://chotabeta.app/dev/testenv/api/vendor/reports-login',
            {
              email: data.email,
              password: data.password
            }).then(function (response) {
              console.log(response.data.details, "............");

              if (response.data.status_code == 204) {
                reject(response.data)
              }
              else {
                resolve(response)
                console.log(response.data.details, "qqqq");
                // vuexContext.commit("AuthToken", JSON.stringify(response.data.token));
                vuexContext.commit("setToken", JSON.stringify(response.data.details));
                localStorage.setItem('access_token', JSON.stringify(response.data.details))
                console.log(localStorage.getItem('access_token'), "local");

              }
            })
            .catch(function (error) {
              reject(error)
              console.log(error, "..........errror");
            });
        })

      },
      logout(vuexContext) {
        vuexContext.commit("clearToken");
        localStorage.removeItem('access_token');
      }
    },

    strict: process.env.DEBUGGING
  })

  return Store
}
