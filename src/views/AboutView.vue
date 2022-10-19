<template>
  <div>
    <HeaderMenu :title="AboutPage" />
  </div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu.vue";

export default {
  data() {
    return {
      AboutPage: "About Page",
    };
  },
  components: {
    HeaderMenu,
  },
};
</script>
