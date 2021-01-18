<template>
  <div id="app">
    <Header />
    <Search @searchText="searchText = $event" />
    <icon-list :searchText="searchText" />
  </div>
</template>

<script>

import Header from "@/components/Header";
import Search from "@/components/Search";
import iconList from "@/components/icons";
export default {
  name: "App",
  data(){
    return{
      searchText: "",
    }
  },
  components: {iconList, Search, Header},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Baloo Tamma 2', cursive, sans-serif;
}
a{
  color: inherit;
  text-decoration: none;
}
.container{
  width: 1200px;
  margin: 0 auto;
}
@media (max-width: 1200px) {
  .container{
    width: 100%;
    padding: 0 20px;
  }
}
</style>
