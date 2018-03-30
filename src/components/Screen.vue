<template>
  <section id="screen">
    <div class="wrapper">
      <toolbar/>
      <div class="content">
        <countdown/>
      </div>
      <subscribe-form/>
    </div>
  </section>
</template>
<script>
  import Toolbar from './Toolbar'
  import Countdown from './Countdown'
  import SubscribeForm from './SubscribeForm'

  export default {
    name: 'screen',
    components: {
      Toolbar, Countdown, SubscribeForm
    }
  }
</script>
<style lang="sass">
  @import "../variables"
  #screen
    width: 100%
    height: 100%
    background-size: cover
    background-position: center
    background-image: url("/static/city_of_dreams.jpg")
  .wrapper
    width: 100%
    height: 100%
    background-color: rgba($black, 0.65)
  .content
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    color: $white
</style>
