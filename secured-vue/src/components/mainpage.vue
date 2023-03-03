<script >
export default {
  data() {
    return {
      awesome: true
    }
  },
  methods: {
    toggle() {
      // ...
    }
  }
}
</script>

<template>
  <button @click="toggle">toggle</button>
  <h1>Vue is awesome!</h1>
  <h1>Oh no 😢</h1>
</template>