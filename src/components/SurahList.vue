<template>
  <div class="surah-list">
    <button v-for="surah in 114" :key="surah" @click="selectSurah(surah)" class="btn" :class="getButtonClass(surah)">Surah {{ surah }}</button>
  </div>
</template>

<script>
export default {
  props: ['folder'],
  methods: {
    selectSurah(surah) {
      this.$emit('selectSurah', surah)
    },
    getButtonClass(surah) {
      const colors = ['btn-success', 'btn-warning', 'btn-info', 'btn-dark']
      return colors[(surah - 1) % 4]
    }
  }
}
</script>

<style scoped>
.surah-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.surah-list .btn {
  margin: 5px; /* Adjust the margin as needed */
}
</style>