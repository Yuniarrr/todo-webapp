<template>
  <div class="flex items-center justify-between my-1">
    <div class="flex items-center">
      <input
        :id="id_new_task"
        :name="id_new_task"
        type="checkbox"
        value=""
        class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <input
        type="text"
        autofocus
        :id="TODO.todo.checklist.list[this.id_item].items[id_new_task].id"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 mx-4 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="
          TODO.todo.checklist.list[this.id_item].items[id_new_task].title_item
        "
        required
        v-if="
          TODO.todo.checklist.list[this.id_item].items[id_new_task]
            .show_title_item == true
        "
        @keydown.enter="
          TODO.todo.checklist.list[this.id_item].items[
            id_new_task
          ].show_title_item = false
        "
      />
      <label
        @click="CheckList(id_new_task)"
        @dblclick="
          TODO.todo.checklist.list[this.id_item].items[
            id_new_task
          ].show_title_item = true
        "
        v-if="
          TODO.todo.checklist.list[this.id_item].items[id_new_task]
            .show_title_item == false
        "
        :for="id_new_task"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900 cursor-pointer checked:text-gray-400"
        >{{
          TODO.todo.checklist.list[this.id_item].items[id_new_task].title_item
        }}
        || {{ id_new_task }}</label
      >
    </div>
    <div
      class="flex items-end justify-end cursor-pointer hover:bg-slate-200 rounded-sm"
    >
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="gray"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import { useToDo } from "../stores/index.js";

export default {
  name: "AddNewCheckList",
  props: {
    id_item: {
      type: Number,
      default: 0,
    },
    id_new_task: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const TODO = useToDo();
    return {
      TODO,
    };
  },
  methods: {
    CheckList(id_new_task) {
      let item = this.TODO.todo.checklist.list[this.id_item].items;
      let checked = item[id_new_task].checked;
      let text_checked =
        document.getElementById(id_new_task).parentElement.children[1];
      if (checked == false) {
        item[id_new_task].checked = true;
        text_checked.classList.add("line-through", "text-gray-400");
      } else {
        item[id_new_task].checked = false;
        text_checked.classList.remove("line-through", "text-gray-400");
      }
    },
  },
};
</script>
