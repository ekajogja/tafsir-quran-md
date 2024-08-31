<template>
  <div id="app" class="container-fluid">
    <NavMenu @selectFolder="handleSelectFolder" @resetSurah="selectedSurah = null" />
    <SurahList v-if="selectedFolder && !selectedSurah" :folder="selectedFolder" @selectSurah="selectedSurah = $event" />
    <TafsirDisplay v-if="selectedSurah" :folder="selectedFolder" :surah="selectedSurah" />
  </div>
</template>

<script>
import { ref } from 'vue'
import NavMenu from './components/NavMenu.vue'
import SurahList from './components/SurahList.vue'
import TafsirDisplay from './components/TafsirDisplay.vue'

export default {
  name: 'App',
  components: {
    NavMenu,
    SurahList,
    TafsirDisplay
  },
  setup() {
    const selectedFolder = ref(null)
    const selectedSurah = ref(null)

    const handleSelectFolder = (folder) => {
      selectedFolder.value = folder
      selectedSurah.value = null // Reset selectedSurah when a new folder is selected
    }

    return {
      selectedFolder,
      selectedSurah,
      handleSelectFolder
    }
  }
}
</script>