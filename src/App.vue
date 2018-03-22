<template>
  <div id="app">
    <screen/>
  </div>
</template>

<script>
import Screen from './components/Screen'

export default {
  name: 'app',
  components: {
    Screen
  }
}
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);
  html, body {
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Thin', sans-serif;
    color: #fff
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }
</style>
