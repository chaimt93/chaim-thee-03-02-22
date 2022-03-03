<template>
  <div>
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="row items-center justify-between">
        <div class="col-auto row">
          <q-toolbar-title shrink>
            <q-img width="40px" class="q-ma-sm" src="~../assets/sun.svg"/>
          </q-toolbar-title>
        </div>

        <p class="app-title">Weather</p>

      </q-toolbar>
    </q-header>
  </div>
</template>

<script>

import {mapState, mapMutations, mapActions} from "vuex";


export default {
  name: 'Header',
  methods: {
    ...mapMutations('layout', ['openIsLoading']),
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.app-title {
  padding: 0;
  margin: 0;
  font-size: 24px;

}

</style>
