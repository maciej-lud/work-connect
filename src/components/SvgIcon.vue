<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const props = withDefaults(
  defineProps<{
    name: string;
    color?: string;
  }>(),
  {
    color: "black",
  }
);

const icon = defineAsyncComponent(
  () => import(`@/assets/icons/${props.name}.svg`)
);
</script>

<template>
  <component :is="icon" :style="{ color: props.color }" />
</template>
