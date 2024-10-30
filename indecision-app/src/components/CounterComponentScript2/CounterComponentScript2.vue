<template>
  <section class="p-2">
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <h5>{{ description }}</h5>
    <div>
      <button class="btn-green" @click="counter++">+1</button>
      <button class="btn-green mx-1" @click="reset">Reset</button>
      <button class="btn-green" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./CounterComponentScript2"></script>

<style scoped>
.btn-green {
  @apply bg-green-500 p-2 rounded hover:bg-green-700;
}
</style>
