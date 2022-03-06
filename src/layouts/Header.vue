<template>
  <div>
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="row items-center justify-between">
        <div class="col-auto">
          <q-img width="40px" class="q-ma-sm" src="~../assets/sun.svg"/>
        </div>
        <div class="col-grow row justify-center items-center">
          <q-btn v-for="(btn,i) of menuBtns" :label="btn.label" color="primary" flat :to="btn.to" class="q-mx-sm"
                 :key="i"/>
        </div>
        <div class="col-auto">
          <p class="app-title">Weather</p>
        </div>

      </q-toolbar>
    </q-header>
  </div>
</template>

<script>

import {mapMutations} from "vuex";


export default {
  name: 'Header',
  data() {
    return {
      menuBtns: [
        {to: '/', label: 'home'},
        {to: '/favorites', label: 'favorites'},
      ],
    }
  },
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
  font-size: 22px;

}

</style>
