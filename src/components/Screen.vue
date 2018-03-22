<template>
  <section id="screen">
    <div class="wrapper">
      <toolbar/>
      <div class="content">
        <countdown :date="date"/>
      </div>
      <footer-bar/>
    </div>
  </section>
</template>
<script>
  import Toolbar from './Toolbar'
  import Countdown from './Countdown'
  import FooterBar from './FooterBar'

  export default {
    name: 'screen',
    components: {
      Toolbar, Countdown, FooterBar
    },
    data () {
      return {
        date: new Date(2018, 4, 20, 20)
      }
    }
  }
</script>
<style>
  #screen {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url("/static/city_of_dreams.jpg");
  }

  .wrapper {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff
  }

</style>
