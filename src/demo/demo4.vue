//v-if隐藏字段
<template>
  <div id= "demo4">
    <div v-if="seen">
      <h1 v-if="one">我是最大的</h1>
      <h2 v-if="two">我是第二大</h2>
      <h3 v-if="three">我是第三大</h3>
      <h4 v-if="four">我是第四大</h4>
      <h5 v-if="five">我最小</h5>
    </div>
  </div>
</template>

<script>
  export default({
    name: 'demo4',
    data () {
      return {
        seen: true,
        one: true,
        two: true,
        three: false,
        four: true,
        five: true
      }
    }
  })
</script>
