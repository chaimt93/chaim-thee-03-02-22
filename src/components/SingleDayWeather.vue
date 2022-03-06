<template>
  <q-card class="col-auto q-pa-md q-ma-sm single-day-card hover">
    <div class="day-name">{{ get_single_day_name }}</div>
    <div class="day-phrase">{{ get_single_day_ShortPhrase }}</div>
    <div>{{ get_single_day_temp }}</div>
  </q-card>
</template>

<script>
import {mapState} from "vuex";

export default {
  props: ['day'],
  name: "SingleDayWeather",
  methods: {},
  computed: {
    ...mapState('weather', ['currentCity']),
    get_single_day_name() {
      return new Date(this.day.Date).toLocaleDateString('en-us', {weekday: 'long'})
    },
    get_single_day_temp() {
      const {Maximum, Minimum} = this.day.Temperature
      return `${Maximum.Value} - ${Minimum.Value} ${Minimum.Unit}`
    },
    get_single_day_ShortPhrase() {
      return this.day.Day.ShortPhrase || this.day.Day.IconPhrase
    },
  },
}
</script>

<style scoped lang="scss">
.single-day-card {

  .day-name {
    font-size: 1rem;
    font-weight: 700;
  }
  .day-phrase {
    font-size: .8rem;
  }
}


</style>
