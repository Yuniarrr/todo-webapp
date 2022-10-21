<template>
  <div
    class="my-2 rounded-lg border-2 px-3 py-1 text-base cursor-pointer hover:bg-sky-100"
  >
    {{ TODO.todo.task_list.list[id_item].message }}
  </div>
</template>

<script>
import { useToDo } from "../stores/index.js";

export default {
  setup() {
    const TODO = useToDo();
    return {
      TODO,
    };
  },
  props: {
    id_item: {
      type: Number,
      required: true,
    },
  },
};
</script>
