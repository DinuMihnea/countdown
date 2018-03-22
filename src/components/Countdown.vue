<template>
  <div class="countdown">
    <div class="item">
      <div class="value">{{days | validation}}</div>
      <div class="caption">Days</div>
    </div>
    <div class="item">
      <div class="value">{{hours | validation}}</div>
      <div class="caption">Hours</div>
    </div>
    <div class="item">
      <div class="value">{{minutes | validation}}</div>
      <div class="caption">Minutes</div>
    </div>
    <div class="item">
      <transition name="fade">
        <div class="value">
          {{seconds | validation}}
        </div>
      </transition>
      <div class="caption">Seconds</div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
      this.refresh()
    },
    props: {
      date: {
        type: Date,
        required: true,
        validator: function (value) {
          return value.getTime() > new Date().getTime()
        }
      }
    },
    data () {
      return {
        target: this.date,
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
<style>
  .countdown {
    width: 800px;
    display: flex;
    flex-direction: row;
    padding: 25px 5px;
    margin-top: -40px;
    font-family: 'Roboto Thin', sans-serif;
  }
  .countdown .item {
    flex-grow: 1;
  }
  .countdown .item:not(:first-child) {
    border-left: 1px solid rgba(255,555,255, .2);
  }
  .countdown .item .value {
    font-size: 56px;
    opacity: .9;
    letter-spacing: 3px;
  }
  .countdown .item .caption{
    font-size: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #2980B9;
    font-family: 'Roboto Light', sans-serif;
  }
</style>
