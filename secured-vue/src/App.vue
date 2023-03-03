<template>
  <div id="app">
    <div id="header">
        <img id="logo" style="height: 150px; width: 150px; border-radius: 100%; padding: 15px 15px 15px 15px" src="./assets/hi5code_logo_medium.png" alt="hi5code.com">
        <h1 id="headerLabel" align="center">My hi5code School</h1>
    </div>
    <Home :keycloaks=keycloak />
  </div>
</template>

<script>
  import Home from './components/Home.vue'
  import Home from './components/mainpage.vue'
  import Keycloak from 'keycloak-js'

  export default {
    name: 'App',
    props: {
      keycloak: Keycloak
    },
    components: {
      Home
    }
  }
</script>

<style>
  
  #header {
      width: 100%;
      display: flex;
  }
  #headerLabel {
      width: 100%;
      margin-top: 70px;
      color: red;
      font-family: monospace;
      font-size: xxx-large;
  }
  html {
      background-color: black;
  }
</style>

<!-- 
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
-->