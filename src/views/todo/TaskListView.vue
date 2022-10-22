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
        <div class="shadow-md rounded-md p-2 h-fit dark:bg-slate-200">
          <p
            class="text-orange-600 bg-orange-200 w-fit px-1 rounded-md font-medium mb-4 dark:bg-orange-600 dark:text-orange-200"
          >
            To Do
          </p>
          <div
            v-if="todo.length == 0"
            class="my-1 rounded-lg px-3 py-1 text-base font-medium text-slate-600"
          >
            No Task
          </div>
          <div v-for="(item, index) in todo.length" :key="index">
            <AddNewTaskList :id_item="todo[index]" />
          </div>
        </div>
        <div class="shadow-md rounded-md p-2 h-fit dark:bg-slate-200">
          <p
            class="text-teal-600 bg-teal-200 w-fit px-1 rounded-md font-medium mb-4 dark:bg-teal-200 dark:text-teal-600"
          >
            Doing
          </p>
          <div
            v-if="doing.length == 0"
            class="my-1 rounded-lg px-3 py-1 text-base font-medium text-slate-600 dark:text-slate-200"
          >
            No Task
          </div>
          <div v-for="(item, index) in doing.length" :key="index">
            <AddNewTaskList :id_item="doing[index]" />
          </div>
        </div>
        <div class="shadow-md rounded-md p-2 h-fit dark:bg-slate-200">
          <p
            class="text-emerald-600 bg-emerald-200 w-fit px-1 rounded-md font-medium mb-4"
          >
            Done
          </p>
          <div
            v-if="done.length == 0"
            class="my-1 rounded-lg px-3 py-1 text-base font-medium text-slate-600 dark:text-slate-200"
          >
            No Task
          </div>
          <div v-for="(item, index) in done.length" :key="index">
            <AddNewTaskList :id_item="done[index]" />
          </div>
        </div>
        <div class="shadow-md rounded-md p-2 h-fit dark:bg-slate-200">
          <p
            class="text-rose-600 bg-rose-200 w-fit px-1 rounded-md font-medium mb-4"
          >
            Other
          </p>
          <div
            v-if="other.length == 0"
            class="my-1 rounded-lg px-3 py-1 text-base font-medium text-slate-600 dark:text-slate-200"
          >
            No Task
          </div>
          <div v-for="(item, index) in other.length" :key="index">
            <AddNewTaskList :id_item="other[index]" />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <h1>Counter</h1>
      {{ TODO.todo.task_list.counter }}
      <h1>ALL DATA</h1>
      {{ TODO.todo.task_list.list }}
      <h1>TODO</h1>
      {{ TODO.todo.task_list.todo }}
      <h1>Doing</h1>
      {{ TODO.todo.task_list.doing }}
      <h1>Done</h1>
      {{ TODO.todo.task_list.done }}
      <h1>Other</h1>
      {{ TODO.todo.task_list.other }}
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
      count_todo: 0,
      count_doing: 0,
      count_done: 0,
      count_other: 0,
      todo: this.TODO.todo.task_list.todo,
      doing: this.TODO.todo.task_list.doing,
      done: this.TODO.todo.task_list.done,
      other: this.TODO.todo.task_list.other,
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
  watch: {
    "TODO.todo.task_list.list": {
      handler() {
        let self = this.TODO.todo.task_list;
        let list = self.list;
        for (let i = 0; i < list.length; i++) {
          if (list[i].status == "To Do") {
            if (self.todo.includes(list[i].id) == false) {
              self.todo.push(list[i].id);
            }
          } else if (list[i].status == "Doing") {
            if (self.doing.includes(list[i].id) == false) {
              self.doing.push(list[i].id);
            }
          } else if (list[i].status == "Done") {
            if (self.done.includes(list[i].id) == false) {
              self.done.push(list[i].id);
            }
          } else if (list[i].status == "Other") {
            if (self.other.includes(list[i].id) == false) {
              self.other.push(list[i].id);
            }
          }
          console.log(this.todo);
        }
      },
      deep: true,
    },
  },
};
</script>
