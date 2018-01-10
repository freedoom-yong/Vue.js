<template>
  <div id= "demo1">
    <div v-html= 'msg'></div>
  </div>
</template>

<script>
  export default({
    name: 'demo1',
    data () {
      return {
        msg: '<h1>你好！</h1>'
      }
    }
  })
</script>
