//v-on指令绑定click事件，反转字符串
<template>
  <div id="demo5">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">反转字符串</button>
  </div>
</template>

<script>
  export default{
    name: 'demo5',
    data () {
      return {
        message: 'you are very good!'
      }
    },
    methods: {
      reverseMessage: function () {
        alert('nihao!' + this.message)
        this.message = this.message.split('').reverse().join('')
      }
    }
  }
</script>
