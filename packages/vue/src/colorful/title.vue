<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <defs>
      <clipPath id="a"><rect width="16" height="16" rx="0" /></clipPath>
    </defs>
    <g clip-path="url(#a)">
      <rect width="10.5" height="10.5" x=".588" y="1" fill="#3670F7" rx="2" />
      <rect
        width="12.971"
        height="12.25"
        x="2.441"
        y="2.75"
        fill="#178FFF"
        fill-opacity=".4"
        rx="2"
      />
      <rect
        width="12.971"
        height="12.25"
        x="2.441"
        y="2.75"
        fill="#F2F6FF"
        rx="2"
        style="mix-blend-mode: soft-light"
      />
    </g>
  </svg>
</template>
<script lang="ts">
import type { DefineComponent } from 'vue'
export default {
  name: 'Title',
} as DefineComponent
</script>
