<template>
  <q-page class="column items-center justify-evenly q-pa-md">
    <SearchBar class="col-3 search-bar"/>
    <CityWeather class="col-7"/>
  </q-page>
</template>

<script>
import SearchBar from "components/SearchBar";
import CityWeather from "components/CityWeather";

export default {
  name: "Home",
  components: {CityWeather, SearchBar},

}
</script>

<style scoped lang="scss">
.search-bar {
  z-index: 5;
  width: 85vw;
  padding-bottom: 3vh;
}
</style>
