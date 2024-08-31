<template>
  <div class="nav-menu">
    <button @click="selectFolder('kabirrazi')" class="btn btn-success m-2">Arrazi</button>
    <button @click="selectFolder('ibnukatsir')" class="btn btn-warning m-2">Ibn Katsir</button>
    <button @click="selectFolder('jalalain')" class="btn btn-success m-2">Jalalain</button>
    <button @click="selectFolder('qurthubi')" class="btn btn-warning m-2">Qurthubi</button>
    <button @click="selectFolder('tabari')" class="btn btn-success m-2">Attabari</button>
  </div>
</template>

<script>
export default {
  methods: {
    selectFolder(folder) {
      this.$emit('selectFolder', folder)
      this.$emit('resetSurah')
    }
  }
}
</script>

<style scoped>
.nav-menu {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: sticky;
  top: 0;
  background-color: white; /* Adjust as needed */
  z-index: 1000; /* Ensure it stays on top */
  padding: 10px 0; /* Add padding for better appearance */
}
</style>