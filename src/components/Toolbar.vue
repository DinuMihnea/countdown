<template>
  <header class="toolbar">
    <div class="left toolbar-group">
      <div class="item small"
           v-for="item in languages"
           :key="item.lang"
           @click="switchLocale(item)"
           :title="item.name"
           :class="item.isActive ? 'active' : ''"
      >
        <span>{{ item.lang }}</span>
      </div>
    </div>
    <div class="right toolbar-group">
      <div class="">
        <div class="item">
          <span>{{ $t("messages.toolbar.aboutUs") }}</span>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'toolbar',
    mounted () {
      let lang = window.localStorage.getItem('lang') || 'en'
      this.activeItem(lang)
    },
    data () {
      return {
        languages: [
          {
            lang: 'en',
            name: 'English',
            isActive: false
          },
          {
            lang: 'ro',
            name: 'Română',
            isActive: false
          },
          {
            lang: 'ru',
            name: 'Русский',
            isActive: false
          }
        ]
      }
    },
    methods: {
      switchLocale (item) {
        if (this.$i18n.locale !== item.lang) {
          this.$i18n.locale = item.lang
          window.localStorage.setItem('lang', item.lang)
          this.activeItem(item.lang)
        }
      },
      activeItem (lang) {
        this.languages.forEach((item) => {
          item.isActive = item.lang === lang
        })
      }
    }
  }
</script>
<style lang="sass">
  @import "../variables"
  header.toolbar
    position: absolute
    width: 100%
    top: 0
    left: 0
    box-sizing: border-box
    border-bottom: $border
    height: 64px
    display: flex
    align-items: center
    justify-content: space-between
    .toolbar-group
      display: flex
      height: 100%
      flex-direction: row
      &.left
        border-right: $border
      &.right
        border-left: $border
    .item
      display: flex
      align-items: center
      justify-content: center
      color: $white
      height: 100%
      padding: 0 20px
      text-transform: uppercase
      font-size: $font-size--normal
      font-weight: 300
      cursor: pointer
      transition: background-color .2s
      opacity: .85
      span
        height: $font-size--normal
        line-height: $font-size--normal
      &.small
        font-size: $font-size--small
        padding: 0 12px
        span
          height: $font-size--small
          line-height: $font-size--small
      &.active
        font-weight: 500
        opacity: 1
        cursor: default
      &:hover:not(.active)
        background-color: rgba($accent, .4)
      .item:not(:first-child)
        border-left: $border
</style>
