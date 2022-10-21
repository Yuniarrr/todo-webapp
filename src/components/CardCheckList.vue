<template>
  <div
    class="my-3 mx-1 px-4 py-3 drop-shadow-ls w-80 rounded-lg flex flex-col justify-start shadow-md dark:bg-slate-200 dark:hover:bg-slate-300"
  >
    <div class="flex justify-between mb-3">
      <input
        type="text"
        autofocus
        :id="TODO.todo.checklist.list[id_item - 1].id"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="TODO.todo.checklist.list[id_item - 1].title"
        required
        v-if="TODO.todo.checklist.list[id_item - 1].show_title == true"
        @keydown.enter="TODO.todo.checklist.list[id_item - 1].show_title = false"
        @focusout="TODO.todo.checklist.list[id_item - 1].show_title = false"
      />
      <p
        @dblclick="TODO.editTaskCheckListCounter(id_item - 1)"
        v-if="TODO.todo.checklist.list[id_item - 1].show_title == false"
        class="text-xl w-full font-medium border-b-4 flex items-center dark:border-b-4 dark:border-slate-500 cursor-pointer"
      >
        {{ TODO.todo.checklist.list[id_item - 1].title }}
      </p>
      <div
        class="flex items-center justify-end hover:bg-slate-100 w-fit hover:rounded-xl cursor-pointer"
        @click="TODO.toggleDeleteMsg(id_item - 1)"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="gray"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </div>
    </div>
    <div
      v-for="index in TODO.todo.checklist.list[id_item - 1].counter_items"
      :key="index"
    >
      <AddNewCheckList :id_item="id_item - 1" :id_new_task="index - 1" />
    </div>
    <div class="my-1" @click="TODO.addTaskCheckListCounterItems(id_item - 1)">
      <p
        class="text-sm hover:bg-slate-100 hover:rounded-lg text-slate-500 cursor-pointer p-1"
      >
        + New {{ TODO.todo.checklist.list[id_item - 1].counter_items }}
      </p>
    </div>
    <p class="text-xs text-gray-500 dark:text-gray-500">
      Created at {{ TODO.todo.checklist.list[id_item - 1].date }}
    </p>
  </div>
</template>

<script>
import { useToDo } from "../stores/index.js";
import AddNewCheckList from "../components/AddNewCheckList.vue";

export default {
  data() {
    return {
      CheckList: "Check List",
    };
  },
  components: {
    AddNewCheckList,
  },
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
  methods: {},
};
</script>
