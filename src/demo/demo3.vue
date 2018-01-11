<template>
  <div id="demo3">
    <label for="r1">修改颜色</label><input type="checkbox" v-model="class1" id="r1"/>
    <br/><br/>
    <div v-bind:class="{'class1':class1}">
      <div v-html="msg"></div>
    </div>
  </div>
</template>

<script>
  export default({
    name: 'demo3',
    data () {
      return {
        class1: false,
        msg: '<h1>请选择</h1>'
      }
    }
  })
</script>

<style>
  .class1{
    background: #52ff59;
    color: #eee;
  }
</style>
