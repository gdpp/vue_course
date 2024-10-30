<template>
  <section class="p-2">
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <h5>{{ description }}</h5>
    <div>
      <button class="btn-red" @click="counter++">+1</button>
      <button class="btn-red mx-1" @click="reset">Reset</button>
      <button class="btn-red" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
//import { ref, computed } from 'vue';
import { useCounter } from '../composables/useCounter';

interface Props {
  base?: number;
}

const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.base);

// const counter = ref(props.base ?? 10);
// const squareCounter = computed(() => counter.value * counter.value);

const reset = () => {
  counter.value = props.base;
};
</script>

<style scoped>
.btn-red {
  @apply bg-red-500 p-2 rounded hover:bg-red-700;
}
</style>
