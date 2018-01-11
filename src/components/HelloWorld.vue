<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>你好,世界</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a v-bind:href="url0" target="_blank">双向数据绑定</a></li>
      <li><a v-bind:href="url1" target="_blank">vue指令</a></li>
      <li><a v-bind:href="url2" target="_blank">表达式</a></li>
      <br>
      <li><a v-bind:href="url3" target="_blank">属性应用</a></li>
    </ul>
    <h2>welcome to you</h2>
    <ul>
      <li><a v-bind:href="url4" target="_blank">隐藏字段</a></li>
      <li><a v-bind:href="url5" target="_blank">反转字符串</a></li>
      <li><a :href="url6" target="_blank">过滤器</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到Vue.js世界！',
      url0: '#demo',
      url1: '#demo1',
      url2: '#demo2',
      url3: '#demo3',
      url4: '#demo4',
      url5: '#demo5',
      url6: '#demo6'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #b42d30;
}
</style>
