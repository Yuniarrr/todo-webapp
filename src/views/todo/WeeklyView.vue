<template>
  <div class="mx-10">
    <HeaderMenu :title="WeeklyView" />
    <div>
      <p class="text-xl font-medium"></p>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "../../components/HeaderMenu.vue";

export default {
  data() {
    return {
      WeeklyView: "Weekly List",
    };
  },
  components: {
    HeaderMenu,
  },
};
</script>
