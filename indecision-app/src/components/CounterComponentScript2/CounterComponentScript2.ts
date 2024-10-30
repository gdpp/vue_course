import { ref, computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    base: { type: Number, required: true },
    description: { type: String, required: true },
  },
  setup(props) {
    const counter = ref(props.base);
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
