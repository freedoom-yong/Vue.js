<template>
  <div id="demo2">
    {{ 10+10 }} &#160&#160&#160 //10+10 表达式应用 <br/><br/>
    {{ ok ? 'yes' : 'no' }} &#160&#160//三元表达式应用<br/>
    {{ message.split('').reverse().join('') }}&#160&#160//字符串倒序<br/>
    <div v-bind:id="'list-'+ id">加油！</div>
  </div>
</template>

<script>
  export default{
    name: 'demo2',
    data () {
      return {
        ok: true,
        message: 'demo2',
        id: 1
      }
    }
  }
</script>
