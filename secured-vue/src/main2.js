//import { store } from "./store/store";
import Vue from 'vue'
import App from './App.vue'
//import VueLogger from 'vuejs-logger';
import * as Keycloak from 'keycloak-js';

vue.config.productionTip = false
Vue.useAttrs(VueLogger);

let initOptions = {
  url: 'http://localhost:8280/', realm: 'myrealm', clientId: 'react', onLoad: 'login-required'
}

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {

  if (!auth) {
    window.location.reload();
  } else {
    Vue.$log.info("Authenticated");// line 21 and removed //  console.log("Authenticated");
    new Vue({
      //vuetify, router, store,
      render: h => h(App,  { props: { keycloak: keycloak } })
    }).$mount('#app')
    localStorage.setItem("vue-token", keycloak.token)
    localStorage.setItem("vue-refresh-token", keycloak.refreshToken);

  }
  //Token Refresh  
  setInterval(() => {
    keycloak.updateToken(70).then((refreshed) => {
      if (refreshed) {
        Vue.$log.info('Token refreshed' + refreshed) //    console.log('Token refreshed' + refreshed);
      } else {
        Vue.$log.warn('Token not refreshed, valid for ' // console.log('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 100) + ' seconds');
      }
    }).catch(() => {
      Vue.$log.error('Failed to refresh token')  // console.log('Failed to refresh token');
    });
  }, 6000)

}).catch(() => {
  Vue.$log.error("Authenticated Failed")  // console.log("Authenticated Failed");
});





/*

  setInterval(() => {
    if(store.state.userData.logged_out) { //### 
      done in vuex
      keycloak.logout()
    } else {
      keycloak.updateToken(70).then((refreshed) => {
        if (refreshed) {
          console.log('Token refreshed' + refreshed);
        } else {
          console.log('Token not refreshed, valid for '
            + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
      }).catch(() => {
        console.log('Failed to refresh token');
      });
    }
  }, 2000)

}).catch(() => {
  console.log("Authenticated Failed");
});


if(store.state.userData.logged_out) { //### 
  done in vuex
  keycloak.logout()
}
*/

// Handles by a button in my view
//this.$store.commit("logout", true)


//let keycloak = Keycloak(initOptions);
//Vue.prototype.$keycloak = keycloak

/*
logout() {
  this.$keycloak.logout()
}
*/

//let keycloak = Keycloak(initOptions);
//app.config.globalProperties.$keycloak = keycloak;
//Vue.prototype.$keycloak = keycloak

//const decoded = VueJwtDecode.decode(keycloak.token)
  //const roles = decoded.realm_access.roles
  //store.commit("storeRoles", roles)