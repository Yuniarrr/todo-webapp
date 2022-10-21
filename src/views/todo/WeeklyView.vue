<template>
  <div class="mx-10">
    <HeaderMenu :title="WeeklyView" />
    <div>
      <button
        class="text-xl font-medium hover:bg-slate-200 hover:rounded-lg p-2 mb-1 dark:bg-slate-200 dark:rounded-lg dark:hover:bg-slate-500 dark:border-gray-200"
      >
        + New Task
      </button>
      <div class="mt-2 mb-10 grid grid-cols-4 grid-flow-row gap-4">
        <div class="shadow-md rounded-md p-2">
          <p class="text-orange-600 bg-orange-200 w-fit px-1 rounded-md font-medium mb-4">
            Monday
          </p>
          <div
            class="my-2 rounded-lg border-2 px-3 py-1 text-base cursor-pointer hover:bg-sky-100"
          >
            Task
          </div>
        </div>
        <div class="shadow-md rounded-md p-2">
          <p class="text-teal-600 bg-teal-200 w-fit px-1 rounded-md font-medium mb-4">
            Tuesday
          </p>
        </div>
        <div class="shadow-md rounded-md p-2">
          <p
            class="text-emerald-600 bg-emerald-200 w-fit px-1 rounded-md font-medium mb-4"
          >
            Wednesday
          </p>
        </div>
        <div class="shadow-md rounded-md p-2">
          <p class="text-rose-600 bg-rose-200 w-fit px-1 rounded-md font-medium mb-4">
            Thursday
          </p>
        </div>
      </div>
      <div class="mt-2 mx-32 grid grid-cols-3 grid-flow-row gap-4">
        <div class="shadow-md rounded-md p-2">
          <p class="text-orange-600 bg-orange-200 w-fit px-1 rounded-md font-medium mb-4">
            Friday
          </p>
          <div
            class="my-2 rounded-lg border-2 px-3 py-1 text-base cursor-pointer hover:bg-sky-100"
          >
            The Task
          </div>
        </div>
        <div class="shadow-md rounded-md p-2">
          <p class="text-teal-600 bg-teal-200 w-fit px-1 rounded-md font-medium mb-4">
            Saturday
          </p>
        </div>
        <div class="shadow-md rounded-md p-2">
          <p
            class="text-emerald-600 bg-emerald-200 w-fit px-1 rounded-md font-medium mb-4"
          >
            Sunday
          </p>
        </div>
      </div>
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
