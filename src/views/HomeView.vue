<template>
  <div class="mx-10">
    <HeaderMenu :title="HomePage" />
    <div>
      <p class="text-xl font-medium"></p>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu.vue";

export default {
  data() {
    return {
      HomePage: "Home Page",
    };
  },
  components: {
    HeaderMenu,
  },
};
</script>
