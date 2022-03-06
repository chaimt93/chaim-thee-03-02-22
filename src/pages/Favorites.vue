<template>
  <q-page>
    <div class="row items-xs-center justify-xs-center q-pa-xl">

      <SingleFavoriteCity
        @select="select_city(favorite)"
        @remove-from-favorites="remove_from_favorites"
        v-for="favorite of favorites"
        :key="favorite.Key"
        class="desktop-only col-2 q-ma-lg q-pa-md"
        :city="favorite"
      />

      <SingleFavoriteCity
        @select="select_city(favorite)"
        @remove-from-favorites="remove_from_favorites"
        v-for="favorite of favorites"
        :key="favorite.Key"
        class="mobile-only col-12 q-my-sm q-pa-sm"
        :city="favorite"
      />
    </div>
  </q-page>

</template>

<script>
import {mapActions, mapState} from "vuex";
import SingleFavoriteCity from "components/SingleFavoriteCity";

export default {
  name: "Favorites",
  components: {SingleFavoriteCity},
  methods: {
    ...mapActions('favorites', ['remove_from_favorites']),
    ...mapActions('weather', ['get_city_weather']),
    async select_city({city}) {
      await this.get_city_weather(city);
      this.$router.push('/')
    },
  },
  computed: {
    ...mapState('favorites', ['favorites']),
  }
}
</script>

<style scoped lang="scss">

</style>
