import { ref, computed } from 'vue';

export const useCounter = (base: number) => {
  const counter = ref(base);

  return {
    counter,
    // readonly
    squareCounter: computed(() => counter.value * counter.value),
  };
};
