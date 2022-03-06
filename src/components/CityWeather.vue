<template>
  <q-card class="city-weather-card column justify-evenly q-pa-lg" v-if="currentCity">
    <q-card-section class="col-4 row items-center justify-between">
      <div class="col-auto">
        <p class="city-name col-auto no-margin">{{ get_city_name(currentCity) }}</p>
      </div>
      <div class="col-auto">
        <q-icon :name="get_icon_name" color="primary" size="md" @click="handle_favorites_click">
          <q-tooltip>{{ get_tooltip_text }}</q-tooltip>
        </q-icon>
      </div>
    </q-card-section>
    <q-card-section class="col-4 row items-center justify-center">
      <div>
        <p class="current-weather">{{ get_current_weather(currentCity) }} </p>
        <p class="city-temperature"> {{ get_current_temperature(currentCity) }}</p>
      </div>

    </q-card-section>
    <q-card-section class="col-4 row items-center justify-evenly no-wrap-lg">
      <SingleDayWeather v-for="(day,i) of five_days" :key="i" :day="day" class="col-grow"/>
    </q-card-section>
  </q-card>
</template>

<script>
import {mapActions, mapState} from "vuex";
import SingleDayWeather from "components/SingleDayWeather";
import get_city_data from "src/mixins/get_city_data";

export default {
  name: "CityWeather",
  components: {SingleDayWeather},
  mixins:[get_city_data],
  methods: {
    ...mapActions('favorites', ['remove_from_favorites', 'add_to_favorites']),
    async handle_favorites_click() {
      await this[this.isFavorite(this.currentCity) ? 'remove_from_favorites' : 'add_to_favorites'](this.currentCity)
    },
  },
  computed: {
    ...mapState('weather', ['currentCity']),
    ...mapState('favorites', ['favorites']),
    five_days() {
      return this.currentCity?.fiveDays?.DailyForecasts
    },
    get_icon_name() {
      return this.isFavorite(this.currentCity) ? 'favorite' : 'favorite_border';
    },
    get_tooltip_text() {
      return this.isFavorite(this.currentCity) ? 'Remove from favorites' : 'Add to favorites';
    },
  },
}
</script>

<style scoped lang="scss">
.city-weather-card {
  text-align: center;
  width: 75vw;
  min-height: 65vh;

  .city-name {
    font-size: 2rem;
  }

  .city-temperature {
    font-size: 1.5rem;
  }

  .current-weather {
    font-size: 3rem;
  }

}
</style>
