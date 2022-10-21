<template>
  <div class="mx-10">
    <HeaderMenu :title="TaskList" />
    <div>
      <button
        class="text-xl font-medium hover:bg-slate-200 hover:rounded-lg p-2 mb-1 dark:bg-slate-200 dark:rounded-lg dark:hover:bg-slate-500 dark:border-gray-200"
        @click="TODO.toggleTaskListMsg()"
      >
        + New Task
      </button>
      <div class="mt-2 grid grid-cols-4 grid-flow-row gap-4">
        <div class="shadow-md rounded-md p-2">
          <p class="text-orange-600 bg-orange-200 w-fit px-1 rounded-md font-medium mb-4">
            To Do
          </p>
          <div v-for="index in TODO.todo.task_list.list.length" :key="index">
            <AddNewTaskList :id_item="index - 1" />
          </div>
        </div>
        <div class="shadow-md rounded-md p-2">
          <p class="text-teal-600 bg-teal-200 w-fit px-1 rounded-md font-medium mb-4">
            Doing
          </p>
        </div>
        <div class="shadow-md rounded-md p-2">
          <p
            class="text-emerald-600 bg-emerald-200 w-fit px-1 rounded-md font-medium mb-4"
          >
            Done
          </p>
        </div>
        <div class="shadow-md rounded-md p-2">
          <p class="text-rose-600 bg-rose-200 w-fit px-1 rounded-md font-medium mb-4">
            Other
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "../../components/HeaderMenu.vue";
import AddNewTaskList from "../../components/AddNewTaskList.vue";
import { useToDo } from "../../stores/index.js";

export default {
  data() {
    return {
      TaskList: "Task List",
    };
  },
  setup() {
    const TODO = useToDo();
    return {
      TODO,
    };
  },
  components: {
    HeaderMenu,
    AddNewTaskList,
  },
};
</script>
