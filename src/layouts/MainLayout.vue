<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <Header/>
    <q-page-container >
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


}
</script>

<style lang="scss">

</style>
