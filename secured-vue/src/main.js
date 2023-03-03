import Vue from 'vue'
import App from './App.vue'
import VueLogger from 'vuejs-logger';
import Keycloak from 'keycloak-js'

Vue.config.productionTip = false;

const options = {
  isEnabled: true,
  logLevel : Vue.config.productionTip  ? 'error' : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
};
Vue.use(VueLogger, options);

let initOptions = {
  url : 'http://localhost:8280/',
  realm : 'myrealm',
  clientId : 'react',
  onLoad  : 'login-required'
}

let keycloak = Keycloak(initOptions);

keycloak.init({onLoad: initOptions.onLoad}).then( auth => {
  if (!auth) {
    window.location.reload();
  } else {

    new Vue({
      render: h => h(App, { props : {keycloak: keycloak}}),
    }).$mount('#app')
  }
}).catch(() => {
  alert("Login Failure")
//});

//Token Refresh
setInterval(() => {
  keycloak.updateToken(70).then((refreshed) => {
    if (refreshed) {
      console.log('Token refreshed' + refreshed);
    } else {
      console.log('Token not refreshed, valid for '
        + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 100) + ' seconds');
    }
  }).catch(() => {
    console.log('Failed to refresh token');
  });
}, 6000)

}).catch(() => {
Vue.$log.error("Authenticated Failed");
});
Vue.prototype.$keycloak = keycloak