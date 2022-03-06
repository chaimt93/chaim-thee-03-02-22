<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <Header/>
    <q-page-container>
      <router-view/>
    </q-page-container>
    <loading/>
  </q-layout>
</template>

<script>
import Header from './Header'
import {mapMutations, mapActions, mapState} from "vuex";
import Loading from "components/layout/loading";

export default {
  name: 'GoogleNewsLayout',
  components: {Loading, Header},
  created() {
    this.get_favorites_from_storage();
    this.get_default_city_weather();
  },
  methods:{
    ...mapActions('favorites',['get_favorites_from_storage']),
    ...mapActions('weather', ['get_default_city_weather']),
  }

}
</script>

<style lang="scss">

</style>
