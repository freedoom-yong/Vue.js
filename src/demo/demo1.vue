<template>
  <div id= "demo1">
    <div v-html= 'msg'></div>
  </div>
</template>

//javascript代码
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
