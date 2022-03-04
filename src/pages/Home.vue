<template>
  <q-page class="column">
    <div class="col-grow search-bar">
      <SearchBar />
    </div>
    <q-card class="single-city-weather">

    </q-card>


  </q-page>
</template>

<script>
import SearchBar from "components/SearchBar";

export default {
  name: "Home",
  components: {SearchBar}
}
</script>

<style scoped lang="scss">
.search-bar{
padding: 7vh 15vw;
}
</style>
