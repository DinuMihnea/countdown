<template>
  <header class="toolbar">
    <div class="left-tools">
      <div class="toolbar-group">
        <div class="item"
             v-for="item in languages"
             :key="item.lang"
             @click="switchLocale(item)"
             :title="item.name"
             :class="item.isActive ? 'active' : ''"
        >{{ item.lang }}</div>
      </div>
    </div>
    <div class="right-tools">
      <div class="toolbar-group">
        <div class="item">{{ $t("messages.toolbar.aboutUs") }}</div>
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
    .left-tools
      float: left
      height: 100%
      border-right: $border
    .right-tools
      float: right
      height: 100%
      border-left: $border
    .item
      color: $white
      height: 100%
      padding: 20px 20px
      display: flex
      text-transform: uppercase
      font-size: $font-size--normal
      font-weight: 300
      cursor: pointer
      transition: background-color .2s
      opacity: .85
      &.active
        font-weight: 500
        opacity: 1
      &:hover
        background-color: rgba($accent, .4)
    .toolbar-group
      display: flex
      flex-direction: row
      .item:not(:first-child)
        border-left: $border
</style>
