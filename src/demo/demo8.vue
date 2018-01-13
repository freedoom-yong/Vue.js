<--! v-for 应用 -->
<template>
  <div id="demo8">
    <ul>
      <li v-for="(value,key,index) in object">{{ index }}. {{key}} : {{ value }}</li>
    </ul>
  </div>
</template>

<script>
  document.write(Date())
  export default{
    name: 'demo8',
    data () {
      return {
        object: {
          name: 'anple',
          url: 'www.emmm.com',
          solgan: 'banana'
        }
      }
    }
  }
</script>

<style>
  div{
    text-align: left;
    font: italic bold 20px arial,serif;
  }
</style>
