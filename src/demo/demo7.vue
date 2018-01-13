<--! v-else-if的应用 -->
<template>
  <div id="demo7">
    <div v-if="num > 5">
      {{ num }}大于5
    </div>
    <div v-else-if="num == 5">
      {{ num }}等于5
    </div>
    <div v-else>
      {{ num }}小于5
    </div>
  </div>
</template>

<script>
  export default {
    name: 'demo7',
    data () {
      return {
        num: Math.floor(10 * Math.random() + 1)
      }
    }
  }
</script>
