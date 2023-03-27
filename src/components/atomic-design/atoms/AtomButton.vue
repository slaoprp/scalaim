<template>
  <PrimeButton>
    <slot />
  </PrimeButton>
</template>

<script>
import PrimeButton from 'primevue/button';

export default {
  name: 'AtomButton',
  components: {
    PrimeButton,
  },
  props: {
   datas: {
    type: Array,
    default: () => []
   },
   states: {
    type: Array,
    default: () => []
   },
   actions: {
    type: Array,
    default: () => []
   },
   extraClass: {
    type: Array,
    default: () => []
   },
  }
}
</script>