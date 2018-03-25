<template>
  <header class="toolbar">
    <div class="left-tools">
      <div class="toolbar-group">
        <div class="item">RO</div>
        <div class="item">RU</div>
      </div>
    </div>
    <div class="right-tools">
      <div class="toolbar-group">
        <div class="item">About Us</div>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'toolbar',
    data () {
      return {

      }
    }
  }
</script>
<style lang="sass">
  @import "../variables"
  header.toolbar
    position: absolute
    width: 100%
    top: 0
    left: 0
    box-sizing: border-box
    border-bottom: $border
    .left-tools
      float: left
      height: 100%
      border-right: $border
    .right-tools
      float: right
      height: 100%
      border-left: $border
    .item
      color: #fff
      height: 100%
      padding: 20px 20px
      display: flex
      text-transform: uppercase
      font-size: 18px
      font-weight: 300
      cursor: pointer
      transition: background-color .2s
      &:hover
        background-color: rgba(41,128,185, .4)
    .toolbar-group
      display: flex
      flex-direction: row
      .item:not(:first-child)
        border-left: $border
</style>
