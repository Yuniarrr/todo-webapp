<template>
  <div class="mx-10">
    <HeaderMenu :title="TaskList" />
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
      TaskList: "Task List",
    };
  },
  components: {
    HeaderMenu,
  },
};
</script>
