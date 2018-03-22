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
<style>
  header.toolbar {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(255,555,255, .2);
  }
  .toolbar .left-tools {
    float: left;
    height: 100%;
    border-right: 1px solid rgba(255,555,255, .2);
  }
  .toolbar .right-tools {
    float: right;
    height: 100%;
    border-left: 1px solid rgba(255,555,255, .2);
  }
  .toolbar .item {
    color: #fff;
    height: 100%;
    padding: 20px 20px;
    display: flex;
    text-transform: uppercase;
    font-size: 18px;
    font-family: "Roboto Light", sans-serif;
    cursor: pointer;
    transition: background-color .2s;
  }
  .toolbar .item:hover {
    background-color: rgba(41,128,185, .4)
  }
  .toolbar .toolbar-group {
    display: flex;
    flex-direction: row;
  }
  .toolbar .toolbar-group .item:not(:first-child) {
    border-left: 1px solid rgba(255,555,255, .2);
  }

</style>
