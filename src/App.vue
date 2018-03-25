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
  @import "variables"
  html, body
    overflow: hidden
    width: 100%
    height: 100%
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: $font-family
    font-weight: 400
    color: $white
  #app
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    font-family: $font-family
    font-weight: 400
    color: $white
    width: 100%
    height: 100%
</style>
