import {mapState} from "vuex";

export default {
  methods: {
    get_city_name(city) {
      return city?.city?.LocalizedName;
    },
    get_current_temperature(city) {
      return city?.current?.Temperature?.Metric?.Value + ' C'
    },
    get_current_weather(city) {
      return city?.current?.WeatherText
    },
    isFavorite(city) {
      return this.favorites?.find(c => city.city.Key === c.city.Key)
    }
  },
  computed: {
    ...mapState('weather', ['currentCity']),
    ...mapState('favorites', ['favorites']),

  }
}
