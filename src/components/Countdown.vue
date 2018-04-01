<template>
  <div class="countdown">
    <div class="item">
      <div class="value">
        <animation-number :value="days"/>
      </div>
      <div class="caption">{{ $t('messages.countdown.days') }}</div>
    </div>
    <div class="item">
      <div class="value">
        <animation-number :value="hours"/>
      </div>
      <div class="caption">{{ $t('messages.countdown.hours') }}</div>
    </div>
    <div class="item">
      <div class="value">
        <animation-number :value="minutes"/>
      </div>
      <div class="caption">{{ $t('messages.countdown.minutes') }}</div>
    </div>
    <div class="item">
      <div class="value">
        <animation-number :value="seconds"/>
      </div>
      <div class="caption">{{ $t('messages.countdown.seconds') }}</div>
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
      async init () {
        try {
          let value = await countdownService.getTarget()
          this.target = new Date(value)
          this.refresh()
        } catch (error) {
          this.target = new Date()
        }
      },
      refresh: function () {
        let now = new Date()
        if (this.target > now) {
          this.now = now
          setTimeout(this.refresh, 1000)
        }
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
