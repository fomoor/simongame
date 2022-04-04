<template>
  <div id="app">
    <simonTheGame />
  </div>
</template>

<script>
import simonTheGame from './components/simonTheGame'

import './css/styles.css'

export default {
  name: 'App',
  components: {
    simonTheGame
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
