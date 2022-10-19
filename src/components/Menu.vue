<template>
  <div class="fixed z-50 grid h-screen w-screen grid-cols-12 grid-rows-6">
    <div
      class="col-span-2 row-span-full h-screen place-content-start dark:bg-gray-700 bg-white pt-2"
    >
      <div class="mb-2 flex pl-3 text-xl dark:text-white">ToDo List WebApp</div>
      <div class="flex flex-col">
        <RouterLink
          class="cursor-pointer py-2 pl-6 hover:bg-slate-200 dark:text-white dark:hover:text-black"
          to="/"
          aria-current="page"
          >Home</RouterLink
        >
        <RouterLink
          class="cursor-pointer py-2 pl-6 hover:bg-slate-200 dark:text-white dark:hover:text-black"
          to="/category"
          aria-current="page"
          >Category</RouterLink
        >
        <RouterLink
          class="cursor-pointer py-2 pl-6 hover:bg-slate-200 dark:text-white dark:hover:text-black"
          to="/task-list"
          aria-current="page"
          >Task List</RouterLink
        >
        <RouterLink
          class="cursor-pointer py-2 pl-6 hover:bg-slate-200 dark:text-white dark:hover:text-black"
          to="/weekly-list"
          aria-current="page"
          >Weekly List</RouterLink
        >
        <div
          class="cursor-pointer py-2 pl-6 hover:bg-slate-200 dark:text-white dark:hover:text-black"
        >
          Robocup
        </div>
      </div>
      <!-- for toogle -->
      <!-- <div class="mt-1 pl-3">
        <div>
          <label
            for="rotate-field"
            class="relative inline-flex cursor-pointer items-center"
          >
            <input type="checkbox" id="rotate-field" class="peer sr-only" />
            <div class="toggle peer"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Rotate Field</span
            >
          </label>
        </div>
      </div> -->
    </div>
    <div
      class="col-span-10 row-span-full bg-black opacity-30"
      @click="TODO.toggleMenu()"
    ></div>
  </div>
</template>

<script>
import { useToDo } from "../stores/index.js";

export default {
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  setup() {
    const TODO = useToDo();
    return { TODO };
  },
};
</script>
