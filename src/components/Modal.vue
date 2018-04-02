<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-button" @click="$emit('close')">{{ $t('messages.toolbar.modalButton')}}</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'popup'
  }
</script>

<style lang="sass">
  @import "../variables"
  .modal-mask
    position: fixed
    z-index: 9998
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba($black, .5)
    display: flex
    justify-content: center
    align-items: center
    transition: opacity .3s ease
    .modal-wrapper
      position: relative
    .modal-container
      width: 500px
      margin: 0 auto
      padding: 20px 30px
      background-color: $silver
      color: $black
      border-radius: 2px
      box-shadow: 0 2px 8px rgba($black, .33)
      transition: all .3s ease
    .modal-header
      width: 100%
      height: 40px
      line-height: $font-size--large
      text-align: left
      box-sizing: border-box
      border-bottom: 1px solid rgba($black, .33)
      font-weight: 500
      font-size: ($font-size--normal + 1)
      color: $accent
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
    .modal-body
      text-align: left
      margin: 10px 0 10px
    .modal-footer
      padding-top: 10px
      display: flex
      justify-content: flex-end
      .modal-button
        box-sizing: border-box
        padding: 7px 25px
        outline: none
        border-radius: 3px
        border: 1px solid $accent
        background-color: $silver
        color: $accent
        font-size: $font-size--normal
        font-weight: 500
        text-transform: uppercase
        transition: .2s color, .2s background-color
        cursor: pointer
        &:hover
          color: $white
          background-color: $accent

  .modal-enter
    opacity: 0
  .modal-leave-active
    opacity: 0
  .modal-enter .modal-container,
  .modal-leave-active .modal-container
    -webkit-transform: scale(1.1)
    transform: scale(1.1)

</style>
