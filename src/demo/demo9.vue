<template>
  <div id="demo9">
    <p>原始数据：{{ message }}</p>
    <p>计算后反转的数据：{{ reversedMessage | capitalize }}</p>
  </div>
</template>

<script>
  export default {
    name: 'demo9',
    data () {
      return {
        message: 'Vue.js'
      }
    },
    computed: {
      reversedMessage: function () {
        return this.message.split('').reverse().join('')
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>
