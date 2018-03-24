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

<style lang="sass">
  // TODO create font faces
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500&subset=cyrillic,latin-ext')
  html, body
    overflow: hidden
    width: 100%
    height: 100%
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: 'Roboto', Helvetica, Arial, sans-serif
    font-weight: 400
    color: #fff
  #app
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #fff
    width: 100%
    height: 100%
</style>
