<template>
  <div class="shadow-xl w-4/6 bg-slate-200 rounded-lg dark:bg-slate-300">
    <div class="mx-9 my-4">
      <div class="flex justify-between mb-4">
        <div class="flex items-center">
          <p class="text-2xl font-medium">New Task</p>
        </div>
        <div class="flex justify-end relative">
          <button
            class="hover:bg-slate-300 hover:shadow-lg hover:rounded-md dark:hover:bg-slate-400"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex flex-col flex-wrap justify-items-center">
        <div class="grid grid-cols-7 grid-flow-row my-1">
          <label
            for="email"
            class="col-span-1 text-sm font-medium text-gray-900 my-auto dark:text-black"
            >Message</label
          >
          <input
            type="text"
            aria-describedby="helper-text-explanation"
            class="col-span-6 my-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add New Task"
          />
        </div>
        <div class="grid grid-cols-7 grid-flow-row my-1">
          <label
            for="email"
            class="col-span-1 text-sm font-medium text-gray-900 dark:text-black my-auto"
            >Description</label
          >
          <textarea
            id="message"
            rows="3"
            class="col-span-6 my-auto block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Description"
          ></textarea>
        </div>
        <div class="grid grid-cols-7 grid-flow-row my-1">
          <label
            for="email"
            class="col-span-1 text-sm font-medium text-gray-900 dark:text-black my-auto"
            >Status</label
          >
          <div
            class="col-span-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            @click="toggleDropdown()"
          >
            <div class="flex justify-between">
              <button
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                class="text-gray-900 text-sm text-center inline-flex items-center px-4 py-2.5 dark:text-slate-400"
                type="button"
              >
                Choose Status
              </button>
              <svg
                class="mr-3 w-4 h-4 flex justify-end my-auto"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
          <!-- Dropdown menu -->
          <div class="col-span-1"></div>
          <div
            id="dropdown"
            :class="{ hidden: !showDropdown }"
            class="z-10 col-span-6 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
          >
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                To Do
              </li>
              <li
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Doing
              </li>
              <li
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                value="done"
              >
                Done
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-2 flex justify-end">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewTask",
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>
