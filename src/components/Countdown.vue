<template>
  <div class="countdown">
    <div class="item">
      <div class="value">
        <animation-number :value="days"/>
      </div>
      <div class="caption">Days</div>
    </div>
    <div class="item">
      <div class="value">
        <animation-number :value="hours"/>
      </div>
      <div class="caption">Hours</div>
    </div>
    <div class="item">
      <div class="value">
        <animation-number :value="minutes"/>
      </div>
      <div class="caption">Minutes</div>
    </div>
    <div class="item">
      <transition name="fade">
        <!--TODO add transition-->
        <div class="value">
          <animation-number :value="seconds"/>
        </div>
      </transition>
      <div class="caption">Seconds</div>
    </div>
  </div>
</template>
<script>
  import {countdownService} from '@/services/countdown-service'
  import AnimationNumber from './AnimationNumber'

  export default {
    name: 'countdown',
    components: { AnimationNumber },
    mounted () {
      this.init()
    },
    data () {
      return {
        target: new Date(),
        now: new Date()
      }
    },
    computed: {
      diff: function () {
        return this.target.getTime() - this.now.getTime()
      },
      seconds: function () {
        return (Math.floor(this.diff / 1000) % 60)
      },
      minutes: function () {
        return (Math.floor((this.diff / 1000) / 60) % 60)
      },
      hours: function () {
        return (Math.floor(((this.diff / 1000) / 60) / 60) % 24)
      },
      days: function () {
        return Math.floor((((this.diff / 1000) / 60) / 60) / 24)
      }
    },
    methods: {
      init: function () {
        countdownService.getTarget()
          .then((value) => {
            if (value != null) {
              this.target = new Date(value)
              this.refresh()
            }
          })
      },
      refresh: function () {
        let now = new Date()
        if (this.target > now) {
          this.now = now
          setTimeout(this.refresh, 1000)
        }
      }
    },
    filters: {
      validation: function (value) {
        return (value < 0) ? 0 : value
      }
    }
  }
</script>
<style lang="sass">
  @import "../variables"
  .countdown
    width: 800px
    display: flex
    flex-direction: row
    padding: 25px 5px
    margin-top: -40px
    font-weight: 300
    .item
      flex-grow: 1
      &:not(:first-child)
        border-left: 1px solid rgba(255,555,255, .2)
      .value
        font-size: $font-size--huge
        opacity: .9
        letter-spacing: 3px
      .caption
        font-size: 20px
        letter-spacing: 2px
        text-transform: uppercase
        color: $accent
        font-weight: 300
  @media screen and (max-width: 800px)
    .countdown
      width: 100%
      .item
        .value
          font-size: ($font-size--huge - 2)
        .caption
          font-size: ($font-size--normal - 2)
  @media screen and (max-width: 500px)
    .countdown
      width: 100%
      .item
        .value
          font-size: ($font-size--huge - 4)
        .caption
          font-size: ($font-size--normal - 4)
</style>
