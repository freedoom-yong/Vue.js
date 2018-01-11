//使用v-html指令用于输出HTML代码
<template>
  <div id= "demo1">
    <div v-html= 'msg'></div>
    <p>使用v-html指令用于输出HTML代码</p>
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
