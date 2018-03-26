<template>
  <div class="subscribe-form">
    <div class="label h1">Email Notifications</div>
    <div class="label">Subscribe to see all our newsletters!</div>
    <div class="form-group">
      <div class="text-field">
        <input v-model="subscriber.email"
               @keyup="validatedEmail"
               @keyup.enter="addSubscriber"
               type="text" placeholder="Email">
        <transition name="fade">
          <div v-if="showProgress" class="progress-bar"></div>
        </transition>
        <transition :name="hint.style">
          <div v-if="hint.show" class="hint" :class="hint.style">{{hint.message}}</div>
        </transition>
      </div>
      <button class="button" @click="addSubscriber">
        <span>Subscribe</span>
      </button>
    </div>
  </div>
</template>
<script>
  import {subscriberService} from '@/services/subscriber-service'
  export default {
    name: 'subscribe-form',
    data () {
      return {
        subscriber: {
          email: ''
        },
        err: 'hint',
        isValid: false,
        showProgress: false,
        hint: {
          show: false,
          style: '',
          message: ''
        }
      }
    },
    methods: {
      addSubscriber () {
        this.showProgress = true
        this.hint.show = false
        if (this.subscriber.email.length === 0) {
          this.hint = {
            show: true,
            style: 'error',
            message: 'Email address is empty!'
          }
          this.showProgress = false
        } else if (this.isValid) {
          this.subscriber.date = new Date()
          subscriberService.insertSubscriber(this.subscriber)
            .then(response => {
              if (response.status === 201) {
                this.hint = {
                  show: true,
                  style: 'success',
                  message: 'Thanks for subscribe.'
                }
              }
              this.showProgress = false
            }).catch((err) => {
              console.log(err)
              this.hint = {
                show: true,
                style: 'error',
                message: 'An error occurred. Please try again.'
              }
              this.showProgress = false
            })
        } else {
          this.hint = {
            show: true,
            style: 'error',
            message: 'Invalid email address!'
          }
          this.showProgress = false
        }
      },
      validatedEmail () {
        // eslint-disable-next-line
        const REG = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.isValid = REG.test(this.subscriber.email)
      }
    }
  }
</script>
<style lang="sass">
  @import "../variables"
  .subscribe-form
    position: absolute
    bottom: 0
    left: 0
    right: 0
    width: 100%
    .label
      display: block
      font-size: $font-size--normal
      color: $white
      opacity: .8
      text-align: center
      font-weight: 300
      margin-bottom: 20px
      &.h1
        font-size: $font-size--large
        margin: 10px 0 5px
  .form-group
    width: 500px
    margin: 0 auto 40px
    position: relative
    display: flex
    justify-content: center
    text-align: center
    align-items: stretch
    .text-field
      flex-grow: 3
      .hint
        position: absolute
        bottom: -25px
        left: 0
        right: 0
        font-weight: 500
        line-height: $font-size--normal
        color: $white
        &.success
          color: $accent
        &.error
          color: $red
      input
        width: 100%
        padding: 12px 5px 12px 12px
        box-sizing: border-box
        font-size: $font-size--normal
        outline: none
        color: $white
        background-color: transparent
        border: $border
        border-right: none
    .button
      flex-grow: 2
      outline: none
      border: none
      display: flex
      align-items: center
      justify-content: center
      box-sizing: border-box
      padding: 0 20px
      font-size: $font-size--normal
      text-transform: uppercase
      letter-spacing: 1px
      color: $white
      cursor: pointer
      background-color: rgba($accent, .6)
      transition: background-color .3s
      &:hover
        background-color: $accent
    .progress-bar
      position: absolute
      bottom: -3px
      height: 3px
      width: 100%
      background-color: rgba($white, 0.9)
      overflow: hidden
      &:before
        content: ''
        position: absolute
        background-color: $accent
        top: 0
        left: 0
        bottom: 0
        will-change: left, right
        animation: indeterminate 1.6s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite
      &:after
        content: ''
        position: absolute
        background-color: $accent
        top: 0
        left: 0
        bottom: 0
        will-change: left, right
        animation: indeterminate-short 1.6s cubic-bezier(0.165, 0.84, 0.44, 1) infinite
        animation-delay: 1s
  @keyframes indeterminate
    0%
      left: -35%
      right: 100%
    60%
      left: 100%
      right: -90%
    100%
      left: 100%
      right: -90%
  @keyframes indeterminate-short
    0%
      left: -200%
      right: 100%
    60%
      left: 107%
      right: -8%
    100%
      left: 107%
      right: -8%
  .error-enter-active
    animation: move-error .3s
  .error-enter-active, .error-leave-active, .success-enter-active, .success-leave-active, .fade-enter-active, .fade-leave-active
    transition: opacity .3s
  .error-enter, .error-leave-to, .success-enter, .success-leave-to, .fade-enter, .fade-leave-to
    opacity: 0
  @media screen and (max-width: 600px)
    .form-group
      width: 95%
</style>
