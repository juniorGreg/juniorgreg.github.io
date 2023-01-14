
<script lang="ts" setup>
  import { ref } from 'vue';
  const sections = [...document.getElementsByTagName("section")];
  const sectionsIds = ref(sections.map((section) => section.id));
  console.log(sectionsIds);
</script>

<template>
  <nav>
    <a v-for="id in sectionsIds" :href="`#${id}`">
       {{ id }}
      </a>
  </nav>
</template>
<style lang="scss">
  nav {
    width: 100vw;
    height: 2em;
    position: fixed;
    top: 0;
    left: 0;

    padding-left: 10%;
    padding-right: 10%;

    background-color: hsla(236, 100%, 50%, 80%);

    display: flex;
    align-items: center;
    gap: 1em;
    
    a {
      color: white;
      text-decoration: none;
      font-weight: 800;

      &:hover, &:focus {
        text-decoration: underline;
      }
    }

  }
</style>
