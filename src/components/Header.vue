<template>
  <div class="header">
    <div class="container">
      <h1 class="logo"> Vue Svg Icons <span>v0.0.2</span></h1>
      <a href="https://github.com/mehmetsagir/v-svg-icons#README" target="_blank" ref="non">Documentation</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style lang="scss" scoped>
.header{
  height: 100px;
  border-bottom: 1px solid rgba(#ccc, .3);
  .container{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
      font-size: 20px;
    }
    h1{
      font-size: 30px;
      font-weight: 500;
      cursor: pointer;
      &::selection, span::selection{
        background: none;
      }
      span{
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
}
@media  (max-width: 500px){
  .header .container{
    height: max-content !important;
    padding: 10px 0;
    flex-direction: column;
  }
}
</style>