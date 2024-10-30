<template>
  <section class="p-2">
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <h5>{{ description }}</h5>
    <div>
      <button class="btn-blue" @click="counter++">+1</button>
      <button class="btn-blue mx-1" @click="reset">Reset</button>
      <button class="btn-blue" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    base: { type: Number, required: false },
    description: { type: String, required: true },
  },
  setup(props) {
    const counter = ref(props.base ?? 10);
    const squareCounter = computed(() => counter.value * counter.value);

    const reset = () => {
      counter.value = props.base;
    };

    return {
      counter,
      squareCounter,
      reset,
    };
  },
});
</script>

<style scoped>
.btn-blue {
  @apply bg-blue-500 p-2 rounded hover:bg-blue-700;
}
</style>
