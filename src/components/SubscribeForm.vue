<template>
  <div class="subscribe-form">
    <div class="label h1">Email Notifications</div>
    <div class="label">Subscribe to see all our newsletters!</div>
    <div class="form-group">
      <div class="text-field">
        <input v-model="subscriber.email" @keyup="validatedEmail" @keyup.enter="addSubscriber" type="text" placeholder="Email">
        <transition name="fade">
          <div v-if="showError" class="hint">{{errMessage}}</div>
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
        errMessage: 'Invalid email address!',
        showError: false
      }
    },
    methods: {
      addSubscriber () {
        if (this.isValid) {
          this.showError = false
          subscriberService.putSubscriber(this.subscriber.email)
        } else {
          this.showError = true
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
<style>
  .subscribe-form {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  .label {
    display: block;
    font-size: 22px;
    color: #fff;
    opacity: .8;
    text-align: center;
    font-family: "Roboto Light", sans-serif;
    margin-bottom: 20px;
  }
  .label.h1{
    font-size: 26px;
    color: #fff;
    opacity: .9;
    margin: 10px 0 5px;
  }
  .form-group {
    position: relative;
    display: flex;
    justify-content: center;
    font-family: "Roboto Regular", sans-serif;
    margin-bottom: 40px;
    text-align: center;
  }
  .form-group .text-field .hint {
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    padding: 2px 5px;
    font-family: 'Roboto Medium', sans-serif;
    font-size: 16px;
    line-height: 14px;
    color: #c62828;
  }
  .form-group .text-field input {
    width: 260px;
    padding: 12px 5px 12px 12px;
    font-size: 16px;
    outline: none;
    color: #fff;
    background-color: transparent;
    border: 1px solid rgba(255,555,255, .2);
    border-right: none;
  }

  .form-group .button {
    outline: none;
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: rgba(41,128,185, .6);
    transition: background-color .3s;
  }
  .form-group .button:hover {
    background-color: #2980B9;
    color: #fff;
  }
  @keyframes move-error {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(0px);
    }
    75% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  .fade-enter-active {
    animation: move-error .3s;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
