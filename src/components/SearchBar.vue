<template>
  <div class="search-container">
    <q-input
      :mask="mask"
      v-model="inputModel"
      @click="hideResults=false"
      outlined
      @update:model-value="get_cities_autocomplete"
      label="Search any city...">
      <template v-slot:append>
        <q-icon name="search" color="primary"/>
      </template>
    </q-input>

    <List
      class="search-results"
      v-if="show_cities_list"
      :items="cities_to_suggest"
      @selected-item="select_city"/>
  </div>

</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import List from "components/List";

export default {
  name: "SearchBar",
  components: {List},
  data() {
    return {
      hideResults: true,
      inputModel: null,
      mask:"SSSSSSSSSSSSSSSSSSSSSSS",
    }
  },
  methods: {
    ...mapActions('weather', ['get_cities_autocomplete', 'get_city_weather']),
    select_city(city) {
      this.get_city_weather(city);
      this.hideResults = true;
    },
  },
  computed: {
    ...mapState('weather', ['cities']),
    cities_to_suggest() {
      return this.cities ? [...this.cities].splice(0, 3) : []
    },
    show_cities_list() {
      return this.cities_to_suggest.length && !this.hideResults
    }

  }
}
</script>

<style scoped lang="scss">
.search-container {
  position: relative;

  .search-results {
    position: absolute;
  }
}

</style>
