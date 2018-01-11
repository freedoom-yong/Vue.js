//使用v-model指令进行数据双向绑定
<template>
  <div id= demo>
    <p>{{ message }}</p>
    <input v-model="message">
  </div>
</template>

<script>
  export default {
    name: 'demo',
    data () {
      return {
        message: '嗨！你好！'
      }
    }
  }
</script>
