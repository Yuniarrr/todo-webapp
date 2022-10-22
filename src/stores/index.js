import { defineStore } from "pinia";

// use router in pinia
// this.router

export const useToDo = defineStore({
  id: "todo",
  state: () => ({
    settings: {
      show_menu: false,
      isActive: {
        home: false,
        category: false,
        check_list: false,
        task_list: false,
        weekly_list: false,
      },
    },
    msg: {
      task_list_msg: false,
      delete_msg: false,
    },
    todo: {
      checklist: {
        counter: 0,
        counter_items: 0,
        list: [],
        list_items: [],
        delete_id: 0,
      },
      task_list: {
        message: "",
        description: "",
        status: "",
        counter: 0,
        list: [],
        delete_id: 0,
        todo: [],
        doing: [],
        done: [],
        other: [],
      },
    },
    category: [
      {
        id: 0,
        name: "Education",
      },
      {
        id: 1,
        name: "Entertainment",
      },
      {
        id: 2,
        name: "Finance",
      },
      {
        id: 3,
        name: "Health",
      },
      {
        id: 4,
        name: "Learn",
      },
      {
        id: 5,
        name: "Meeting",
      },
      {
        id: 6,
        name: "Schedule",
      },
      {
        id: 7,
        name: "School",
      },
      {
        id: 8,
        name: "Shopping",
      },
      {
        id: 9,
        name: "Work",
      },
      {
        id: 10,
        name: "Other",
      },
    ],
  }),
  getters: {},
  actions: {
    // *
    // * ALL TOGGLE
    // *
    toggleMenu() {
      this.settings.show_menu = !this.settings.show_menu;
    },
    toggleTaskListMsg() {
      this.msg.task_list_msg = !this.msg.task_list_msg;
    },
    toggleDeleteMsg(id_item) {
      this.delete_id = id_item;
      this.msg.delete_msg = !this.msg.delete_msg;
    },
    toggleActive(name) {
      let obj = this.settings.isActive;
      for (let key in obj) {
        if (key === name) {
          obj[key] = true;
        } else {
          obj[key] = false;
        }
      }
    },

    // *
    // * ALL COUNTER & ADD TASK
    // *
    addTaskCheckListCounter() {
      let checklist = this.todo.checklist;
      checklist.counter++;
      let id = checklist.counter - 1;
      let date = new Date();
      let date_now = date.toLocaleDateString();
      let time_now = date.toLocaleTimeString();
      checklist.list.push({
        id: id.toString() + "_list",
        title: "New Task",
        show_title: false,
        items: [],
        category: [],
        counter_items: 0,
        date: time_now + " " + date_now,
      });
    },
    categoryCheckList(id, name) {
      console.log(name);
      let checklist = this.todo.checklist;
      let list = checklist.list;
      let category = list[id].category;
      let index = category.indexOf(name);
      if (index === -1) {
        category.push(name);
      } else {
        category.splice(index, 1);
      }
    },
    addTaskCheckListCounterItems(id_item) {
      let checklist_item = this.todo.checklist.list[id_item];
      checklist_item.counter_items++;
      let id = checklist_item.counter_items - 1;
      checklist_item.items.push({
        id: id.toString() + "_list_item",
        title_item: "New Task Item",
        show_title_item: false,
        checked: false,
      });
    },
    addTaskList() {
      let task_list = this.todo.task_list;
      task_list.counter++;
      let id = task_list.counter - 1;
      let date = new Date();
      let date_now = date.toLocaleDateString();
      let time_now = date.toLocaleTimeString();
      task_list.list.push({
        id: id,
        message: task_list.message,
        description: task_list.description,
        status: task_list.status,
        date: time_now + " " + date_now,
      });
      this.toggleTaskListMsg();
      console.log("======= task_list");
      console.log(task_list.list);
      this.todo.task_list.message = "";
      this.todo.task_list.description = "";
      this.todo.task_list.status = "";
    },

    // *
    // * ALL EDIT
    // *
    editTaskCheckListCounter(id_item) {
      this.todo.checklist.list[id_item].show_title = true;
    },

    // *
    // * ALL DELETE LIST
    // *
    deleteTaskCheckList(value) {
      if (value == "yes") {
        let checklist = this.todo.checklist;
        checklist.list.splice(checklist.delete_id, 1);
        checklist.counter--;
      }
      this.toggleDeleteMsg();
    },
    deleteTaskList(id_item) {
      let task_list = this.todo.task_list;
      // task_list.counter--;
      console.log("======= delete");
      console.log(task_list.list);
      task_list.list.splice(id_item, 1);
      for (let i = 0; i < task_list.todo.length; i++) {
        console.log(`task_list: ${task_list.todo[i]}`);
        if (task_list.todo[i] == id_item) {
          task_list.todo.splice(i, 1);
          // task_list.todo.delete(i);
        }
      }
      for (let i = 0; i < task_list.doing.length; i++) {
        if (task_list.doing[i] == id_item) {
          task_list.doing.splice(i, 1);
          // task_list.doing.delete(i);
        }
      }
      for (let i = 0; i < task_list.done.length; i++) {
        if (task_list.done[i] == id_item) {
          task_list.done.splice(i, 1);
          // task_list.done.delete(i);
        }
      }
      for (let i = 0; i < task_list.other.length; i++) {
        if (task_list.other[i] == id_item) {
          task_list.other.splice(i, 1);
          // task_list.other.delete(i);
        }
      }
      console.log(task_list.list);
    },

    // *
    // * ALL ROUTER
    // *
    saveTaskList() {
      this.router.push("/task-list");
    },
    goToDetailTaskList(id_item) {
      this.router.push("/task-list/" + id_item);
    },
  },
});
