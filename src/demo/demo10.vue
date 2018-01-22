<template>
  <div id="demo10">
    <p>单个复选框:</p>
    <input type="checkbox" id="checkbox" v-model="checked"/>
    <label for="checkbox">{{ checked }}</label>
    <p>多个复选框:</p>
    <input type="checkbox" id="one" value="one" v-model="checkedNames"/>
    <label for="one">one</label>
    <input type="checkbox" id="two" value="two" v-model="checkedNames"/>
    <label for="one">three</label>
    <input type="checkbox" id="three" value="three" v-model="checkedNames"/>
    <label for="one">three</label>
    <br/>
    <span>选择的值为：{{ checkedNames }}</span>
  </div>
</template>

<script>
  export default{
    name: 'demo10',
    data () {
      return {
        checked: false,
        checkedNames: []
      }
    }
  }
</script>
