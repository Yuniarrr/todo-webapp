<template>
  <div class="mx-10">
    <div class="flex flex-row">
      <h1
        class="text-3xl mb-3 font-medium dark:text-white hover:underline hover:cursor-pointer"
        @click="goToTaskList()"
      >
        Task List
      </h1>
      <h1 class="text-3xl mb-3 font-medium dark:text-white">
        &nbsp;&nbsp;>&nbsp;&nbsp;
      </h1>
      <HeaderMenu :title="DetailWeeklyList" />
    </div>
    <div>
      <div class="mb-6">
        <label
          for="message"
          class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >Message</label
        >
        <input
          type="text"
          id="message"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="TODO.todo.weekly.list[id_item].message"
        />
      </div>
      <div class="mb-6">
        <label
          for="description"
          class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >Description</label
        >
        <textarea
          id="description"
          rows="3"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="TODO.todo.weekly.list[id_item].description"
        ></textarea>
      </div>
      <div class="mb-6">
        <label
          for="day"
          class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >Day</label
        >
        <div class="flex flex-wrap flex-row my-1 col-span-6">
          {{ TODO.todo.weekly.list[id_item].day }}
          <div v-for="(day, index) in TODO.weekly" :key="index" class="mt-1">
            <div class="flex items-center mr-4">
              <input
                :id="day.name"
                type="checkbox"
                :name="day.name"
                :value="day.name"
                v-model="TODO.todo.weekly.day"
                :checked="TODO.todo.weekly.list[id_item].day.includes(day.name)"
                class="flex items-center w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
              <label
                :for="day.name"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >{{ day.name }}</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mb-6">
        <label
          for="category"
          class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >Category</label
        >
        <div
          v-for="(item, index) in TODO.category"
          :key="index"
          class="flex flex-wrap"
        >
          <div class="flex items-start mx-2">
            <div class="flex items-center my-1">
              <input
                :id="item.name"
                :name="item.name"
                v-model="TODO.todo.weekly.list[id_item].category"
                type="checkbox"
                :value="item.name"
                :checked="
                  TODO.todo.weekly.list[id_item].category.includes(item.name)
                "
                class="flex items-center w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
              <label
                :for="item.name"
                class="flex items-center justify-center ml-2 text-sm text-gray-900 dark:text-gray-300"
                ><i>{{ item.name }}</i></label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <button
        @click="TODO.saveTaskList(), TODO.updateTaskList(id_item)"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "../../components/HeaderMenu.vue";
import { useToDo } from "../../stores/index.js";

export default {
  data() {
    return {
      DetailWeeklyList: "Detail Weekly List",
      id_item: this.$route.params.id,
      showDropdown: false,
      weekly: null,
    };
  },
  components: {
    HeaderMenu,
  },
  setup() {
    const TODO = useToDo();
    return {
      TODO,
    };
  },
  methods: {
    goToWeeklyList() {
      this.$router.push("/weekly-list");
    },
  },
};
</script>
