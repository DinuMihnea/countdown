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
    font-size: $font-size--normal
  #app
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    font-family: $font-family
    font-weight: 400
    color: $white
    font-size: $font-size--normal
    width: 100%
    min-width: 300px
    height: 100%
    min-height: 500px
    position: relative
    box-sizing: border-box
  @media screen and (max-height: 500px)
    body
      overflow-y: auto
  @media screen and (max-width: 300px)
    body
      overflow-x: auto
</style>
