
<script lang="ts" setup>
  import { ref } from 'vue';
  const sections = [...document.getElementsByTagName("section")];
  const sectionsIds = ref(sections.map((section) => section.id));
  console.log(sectionsIds);
</script>

<template>
  <nav class="fixed top-0 left-0 bg-blue-500/50 w-full ">
    <div class="container mx-auto flex space-x-3 py-1">
      <a v-for="id in sectionsIds" :href="`#${id}`" class="underline hover:decoration-4">
         {{ id }}
      </a>
    </div>
  </nav>
</template>

