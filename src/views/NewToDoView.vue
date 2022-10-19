<template>
  <div class="mx-10">
    <HeaderMenu :title="ToDo" />
  </div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu.vue";

export default {
  data() {
    return {
      ToDo: "To Do",
    };
  },
  components: {
    HeaderMenu,
  },
};
</script>
