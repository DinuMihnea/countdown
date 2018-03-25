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
        hint: {
          show: false,
          style: '',
          message: ''
        }
      }
    },
    methods: {
      addSubscriber () {
        if (this.subscriber.email.length === 0) {
          this.hint = {
            show: true,
            style: 'error',
            message: 'Email address is empty!'
          }
        } else if (this.isValid) {
          this.hint.show = false
          subscriberService.insertSubscriber(this.subscriber)
            .then(response => {
              if (response.status === 201) {
                this.hint = {
                  show: true,
                  style: 'success',
                  message: 'Thanks for subscribe.'
                }
              }
            }).catch((err) => {
              console.log(err)
              this.hint = {
                show: true,
                style: 'error',
                message: 'An error occurred. Please try again.'
              }
            })
        } else {
          this.hint = {
            show: true,
            style: 'error',
            message: 'Invalid email address!'
          }
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
    position: relative
    display: flex
    justify-content: center
    margin-bottom: 40px
    text-align: center
    .text-field
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
        width: 260px
        padding: 12px 5px 12px 12px
        font-size: $font-size--normal
        outline: none
        color: $white
        background-color: transparent
        border: $border
        border-right: none
    .button
      outline: none
      border: none
      display: flex
      align-items: center
      justify-content: center
      padding: 0 30px
      font-size: $font-size--normal
      text-transform: uppercase
      letter-spacing: 1px
      color: $white
      cursor: pointer
      background-color: rgba($accent, .6)
      transition: background-color .3s
      &:hover
        background-color: $accent

  .error-enter-active
    animation: move-error .3s
  .error-enter-active, .error-leave-active, .success-enter-active, .success-leave-active
    transition: opacity .3s
  .error-enter, .error-leave-to, .success-enter, .success-leave-to
    opacity: 0
</style>
