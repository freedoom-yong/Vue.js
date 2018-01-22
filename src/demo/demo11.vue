<template>
  <div id="demo11">
    <div v-bind:class="{ active: isActive}"></div>
  </div>
</template>

<script>
  export default{
    name: 'demo11',
    data () {
      return {
        isActive: true
      }
    }
  }
</script>

<style>
  .active {
    width: 100px;
    height: 100px;
    background: #8e8aff;
    margin: auto;
  }
</style>
