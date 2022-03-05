<template>
  <q-list bordered separator class="list">
    <q-item clickable v-ripple v-for="(item,i) of items" :key="i">
      <q-item-section @click="$emit('selected-item',item)">
        <span>{{ item.AdministrativeArea.LocalizedName }}</span>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: "List",
  props:['items'],
}
</script>

<style scoped>
.list{
  background-color: white;
  width: 100%;
  max-height: 25vh;
  padding: 1%;
}
</style>
