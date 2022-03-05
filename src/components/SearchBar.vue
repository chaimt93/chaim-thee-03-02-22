<template>
  <div class="search-container">
    <q-input
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
import {setCities, setCurrentCity} from "src/store/weather/mutations";

export default {
  name: "SearchBar",
  data() {
    return {
      hideResults: true,
      inputModel: null,
    }
  },
  components: {List},
  methods: {
    ...mapActions('weather', ['get_cities_autocomplete', 'get_city_weather']),
    ...mapMutations('weather', ['setCities']),
    select_city(city) {
      this.get_city_weather(city);
      this.hideResults = true;
      // this.inputModel = null;
      // this.setCities([]);
    },
  },
  computed: {
    ...mapState('weather', ['cities']),
    cities_to_suggest() {
      return [...this.cities].splice(0, 3)
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
