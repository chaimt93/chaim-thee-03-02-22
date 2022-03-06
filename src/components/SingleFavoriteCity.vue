<template>
  <q-card class="city hover">
    <q-card-section class="row items-center justify-between">
      <p class="col-auto no-margin">ID: {{ city.city.Key }}</p>
      <q-icon name="favorite" color="primary" size="sm" class="q-pa-sm" @click="$emit('remove-from-favorites',city)">
        <q-tooltip> Remove from favorites</q-tooltip>
      </q-icon>
    </q-card-section>
    <q-card-section @click.exact="$emit('select',city)">
      <p class="city-name">{{ get_city_name(city) }}</p>
      <p class="city-temperature">{{ get_current_temperature(city) }}</p>
      <p class="city-weather">{{ get_current_weather(city) }}</p>
    </q-card-section>
  </q-card>
</template>

<script>
import get_city_data from "src/mixins/get_city_data";

export default {
  name: "SingleFavoriteCity",
  props: ['city'],
  mixins: [get_city_data],
}
</script>

<style scoped lang="scss">
.city {
  text-align: center;

  &-name {
    font-size: 2rem;
  }

  &-temperature {
    font-size: 1.5rem;
  }

  &-weather {
    font-size: 1rem;
  }
}

</style>
