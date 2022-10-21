<template>
  <div class="mx-10 min-w-fit">
    <HeaderMenu :title="CheckList" />
    <button
      class="text-xl font-medium hover:bg-slate-200 hover:rounded-lg p-2 mb-1 dark:bg-slate-200 dark:rounded-lg dark:hover:bg-slate-300 dark:border-gray-200"
      @click="TODO.addTaskCheckListCounter()"
    >
      + New Task
    </button>
    <div
      v-for="index in TODO.todo.checklist.list.length"
      :key="index"
      class="flex items-center flex-row flex-wrap justify-evenly"
    >
      <CardCheckList :id_item="index" />
    </div>
  </div>
</template>

<script>
import HeaderMenu from "../../components/HeaderMenu.vue";
import { useToDo } from "../../stores/index.js";
import CardCheckList from "../../components/CardCheckList.vue";

export default {
  data() {
    return {
      CheckList: "Check List",
    };
  },
  components: {
    HeaderMenu,
    CardCheckList,
  },
  setup() {
    const TODO = useToDo();
    return {
      TODO,
    };
  },
};
</script>
