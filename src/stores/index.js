import { defineStore } from "pinia";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  getDoc,
  addDoc,
  doc,
  setDoc,
  arrayUnion,
  arrayRemove,
  FieldValue,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzBXzBWzXKxfR9K_aWAK_MEhlgKXh86-Q",
  authDomain: "try-vue-92d54.firebaseapp.com",
  projectId: "try-vue-92d54",
  storageBucket: "try-vue-92d54.appspot.com",
  messagingSenderId: "462401837028",
  appId: "1:462401837028:web:06e4fd0293f666de2f99f1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
      weekly_list_msg: false,
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
        category: [],
        counter: 0,
        list: [],
        delete_id: 0,
        todo: [],
        doing: [],
        done: [],
        other: [],
      },
      weekly: {
        message: "",
        description: "",
        day: [],
        category: [],
        counter: 0,
        list: [],
        list_day: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        },
      },
    },
    detail_category_item: {
      check_list: [],
      task_list: {
        todo: [],
        doing: [],
        done: [],
        other: [],
      },
      weekly_list: [],
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
        name: "Food",
      },
      {
        id: 4,
        name: "Health",
      },
      {
        id: 5,
        name: "Learn",
      },
      {
        id: 6,
        name: "Meeting",
      },
      {
        id: 7,
        name: "Schedule",
      },
      {
        id: 8,
        name: "School",
      },
      {
        id: 9,
        name: "Shopping",
      },
      {
        id: 10,
        name: "Work",
      },
      {
        id: 11,
        name: "Other",
      },
    ],
    weekly: [
      {
        id: 0,
        name: "Sunday",
      },
      {
        id: 1,
        name: "Monday",
      },
      {
        id: 2,
        name: "Tuesday",
      },
      {
        id: 3,
        name: "Wednesday",
      },
      {
        id: 4,
        name: "Thursday",
      },
      {
        id: 5,
        name: "Friday",
      },
      {
        id: 6,
        name: "Saturday",
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
    toggleWeeklyListMsg() {
      this.msg.weekly_list_msg = !this.msg.weekly_list_msg;
    },
    toggleDeleteMsg(id_item) {
      console.log(id_item);
      this.msg.delete_msg = !this.msg.delete_msg;
      this.todo.checklist.delete_id = this.todo.checklist.list[id_item].id;
      console.log(this.todo.checklist.list[id_item].id);
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
    async addTaskCheckListCounter() {
      let checklist = this.todo.checklist;
      checklist.counter++;
      let id = checklist.counter - 1;
      let date = new Date();
      let date_now = date.toLocaleDateString();
      let time_now = date.toLocaleTimeString();
      // TODO: use this or load all data from firebase
      // checklist.list.push({
      //     id: id.toString() + "_list",
      //     title: "New Task",
      //     show_title: false,
      //     items: [],
      //     category: [],
      //     counter_items: 0,
      //     date: time_now + " " + date_now,
      // });
      await setDoc(doc(db, "check_list", id.toString()), {
        id: id,
        title: "New Task",
        show_title: false,
        items: [],
        category: [],
        counter_items: 0,
        date: time_now + " " + date_now,
      });
    },
    addTCL(id_item) {
      console.log(id_item);
      let checklist_item = this.todo.checklist.list[id_item];
      checklist_item.counter_items++;
      let id = checklist_item.counter_items - 1;
      // TODO: use this or load all data from firebase
      // checklist_item.items.push({
      //     id: id_item.toString() + "_list_item",
      //     title_item: "New Task Item " + id.toString(),
      //     show_title_item: false,
      //     checked: false,
      // });
      this.updateTCLItems(id_item);
    },
    async addTaskList() {
      let task_list = this.todo.task_list;
      task_list.counter++;
      let id = task_list.counter - 1;
      let date = new Date();
      let date_now = date.toLocaleDateString();
      let time_now = date.toLocaleTimeString();
      // task_list.list.push({
      //     id: id,
      //     message: task_list.message,
      //     description: task_list.description,
      //     status: task_list.status,
      //     category: task_list.category,
      //     date: time_now + " " + date_now,
      // });
      this.toggleTaskListMsg();
      await setDoc(doc(db, "task_list", id.toString()), {
        id: id,
        message: task_list.message,
        description: task_list.description,
        status: task_list.status,
        category: task_list.category,
        date: time_now + " " + date_now,
      });
      this.todo.task_list.message = "";
      this.todo.task_list.description = "";
      this.todo.task_list.status = "";
      this.todo.task_list.category = [];
    },
    async addWeeklyList() {
      let weekly_list = this.todo.weekly;
      weekly_list.counter++;
      let id = weekly_list.counter - 1;
      let date = new Date();
      let date_now = date.toLocaleDateString();
      let time_now = date.toLocaleTimeString();
      // weekly_list.list.push({
      //     id: id,
      //     message: weekly_list.message,
      //     description: weekly_list.description,
      //     status: weekly_list.status,
      //     category: weekly_list.category,
      //     day: weekly_list.day,
      //     date: time_now + " " + date_now,
      // });
      this.toggleWeeklyListMsg();
      await setDoc(doc(db, "weekly_list", id.toString()), {
        id: id,
        message: weekly_list.message,
        description: weekly_list.description,
        category: weekly_list.category,
        day: weekly_list.day,
        date: time_now + " " + date_now,
      });
      weekly_list.message = "";
      weekly_list.description = "";
      weekly_list.status = "";
      weekly_list.category = [];
      weekly_list.day = [];
    },

    // *
    // * ALL GET
    // *
    async getCheckList() {
      const querySnapshot = await getDocs(collection(db, "check_list"));
      querySnapshot.forEach((doc) => {
        this.todo.checklist.list.push(doc.data());
      });
    },
    async getTaskList() {
      const querySnapshot = await getDocs(collection(db, "task_list"));
      querySnapshot.forEach((doc) => {
        this.todo.task_list.list.push(doc.data());
      });
    },
    async getToDoTaskList() {
      const querySnapshot = await getDocs(collection(db, "task_list"));
      querySnapshot.forEach((doc) => {
        if (doc.data().status === "todo") {
          this.todo.task_list.todo.push(doc.data());
        }
      });
    },
    async getDoingTaskList() {
      const querySnapshot = await getDocs(collection(db, "task_list"));
      querySnapshot.forEach((doc) => {
        if (doc.data().status === "doing") {
          this.todo.task_list.doing.push(doc.data());
        }
      });
    },
    async getDoneTaskList() {
      const querySnapshot = await getDocs(collection(db, "task_list"));
      querySnapshot.forEach((doc) => {
        if (doc.data().status === "done") {
          this.todo.task_list.done.push(doc.data());
        }
      });
    },
    async getOtherTaskList() {
      const querySnapshot = await getDocs(collection(db, "task_list"));
      querySnapshot.forEach((doc) => {
        if (doc.data().status === "other") {
          this.todo.task_list.other.push(doc.data());
        }
      });
    },
    async getCategoryCheckList(category) {
      category = category[0].toUpperCase() + category.substring(1);
      const querySnapshot = await getDocs(collection(db, "check_list"));
      querySnapshot.forEach((doc) => {
        if (doc.data().category.includes(category)) {
          this.detail_category_item.check_list.push(doc.data());
        }
      });
    },
    async getCategoryTaskList(category) {
      category = category[0].toUpperCase() + category.substring(1);
      const querySnapshot = await getDocs(collection(db, "task_list"));
      querySnapshot.forEach((doc) => {
        if (doc.data().category.includes(category)) {
          if (doc.data().status === "todo") {
            this.detail_category_item.task_list.todo.push(doc.data());
          } else if (doc.data().status === "doing") {
            this.detail_category_item.task_list.doing.push(doc.data());
          } else if (doc.data().status === "done") {
            this.detail_category_item.task_list.done.push(doc.data());
          } else if (doc.data().status === "other") {
            this.detail_category_item.task_list.other.push(doc.data());
          }
        }
      });
    },
    async getWeeklyList() {
      const querySnapshot = await getDocs(collection(db, "weekly_list"));
      querySnapshot.forEach((doc) => {
        // this.todo.weekly.list.push(doc.data());
        if (doc.data().day.includes("Monday")) {
          this.todo.weekly.list_day.monday.push(doc.data());
        }
        if (doc.data().day.includes("Tuesday")) {
          this.todo.weekly.list_day.tuesday.push(doc.data());
        }
        if (doc.data().day.includes("Wednesday")) {
          this.todo.weekly.list_day.wednesday.push(doc.data());
        }
        if (doc.data().day.includes("Thursday")) {
          this.todo.weekly.list_day.thursday.push(doc.data());
        }
        if (doc.data().day.includes("Friday")) {
          this.todo.weekly.list_day.friday.push(doc.data());
        }
        if (doc.data().day.includes("Saturday")) {
          this.todo.weekly.list_day.saturday.push(doc.data());
        }
        if (doc.data().day.includes("Sunday")) {
          this.todo.weekly.list_day.sunday.push(doc.data());
        }
      });
    },

    // *
    // * ALL EDIT
    // *
    async updateTCLItems(id_item) {
      const docRef = await getDoc(doc(db, "check_list", id_item.toString()));
      const docSnap = docRef.data();
      let arr = docSnap.items;
      let id = this.todo.checklist.list[id_item].counter_items - 1;
      arr.push({
        id: id,
        title_item: "New Task Item " + id.toString(),
        show_title_item: false,
        checked: false,
      });
      await updateDoc(doc(db, "check_list", id_item.toString()), {
        items: arr,
      });
    },
    async updateTitleTCL(id_item) {
      let title = this.todo.checklist.list[id_item].title;
      await updateDoc(doc(db, "check_list", id_item.toString()), {
        title: title,
      });
    },
    async updateCategoryTCL(id_item) {
      let category = this.todo.checklist.list[id_item].category;
      await updateDoc(doc(db, "check_list", id_item.toString()), {
        category: category,
      });
    },
    async updateTitleTCLI(id_item, id_item_item) {
      let title =
        this.todo.checklist.list[id_item].items[id_item_item].title_item;
      let arr = this.todo.checklist.list[id_item].items;
      arr[id_item_item].title_item = title;
      await updateDoc(doc(db, "check_list", id_item.toString()), {
        items: arr,
      });
    },
    async updateCheckedTCLI(id_item, id_item_item) {
      let checked =
        this.todo.checklist.list[id_item].items[id_item_item].checked;
      let arr = this.todo.checklist.list[id_item].items;
      arr[id_item_item].checked = checked;
      await updateDoc(doc(db, "check_list", id_item.toString()), {
        items: arr,
      });
    },
    async updateTaskList(id_item) {
      let task_list = this.todo.task_list.list[id_item];
      await updateDoc(doc(db, "task_list", id_item.toString()), {
        message: task_list.message,
        description: task_list.description,
        status: task_list.status,
        category: task_list.category,
      });
    },
    editTitleTCL(id_item) {
      this.todo.checklist.list[id_item].show_title = true;
    },
    CheckListItem(id_item, id_item_item) {
      let arr = this.todo.checklist.list[id_item].items;
      arr[id_item_item].checked = !arr[id_item_item].checked;
      console.log(arr[id_item_item].checked);
    },

    // *
    // * ALL DELETE LIST
    // *
    async deleteTCL(id_item) {
      await deleteDoc(doc(db, "check_list", id_item.toString()));
      this.todo.checklist.list.splice(id_item, 1);
    },
    deleteTaskCheckList(value) {
      let checklist = this.todo.checklist;
      if (value == "yes") {
        checklist.list.splice(checklist.delete_id, 1);
        checklist.counter--;
        console.log(checklist.delete_id);
        this.deleteTCL(checklist.delete_id);
      }
      this.msg.delete_msg = !this.msg.delete_msg;
      // checklist.delete_id = 0;
    },
    async deleteTaskList(id_item) {
      await deleteDoc(doc(db, "task_list", id_item.toString()));
      for (let i = 0; i < this.todo.task_list.todo.length; i++) {
        if (this.todo.task_list.todo[i].id == id_item) {
          this.todo.task_list.todo.splice(i, 1);
        }
      }
      for (let i = 0; i < this.todo.task_list.doing.length; i++) {
        if (this.todo.task_list.doing[i].id == id_item) {
          this.todo.task_list.doing.splice(i, 1);
        }
      }
      for (let i = 0; i < this.todo.task_list.done.length; i++) {
        if (this.todo.task_list.done[i].id == id_item) {
          this.todo.task_list.done.splice(i, 1);
        }
      }
      for (let i = 0; i < this.todo.task_list.other.length; i++) {
        if (this.todo.task_list.other[i].id == id_item) {
          this.todo.task_list.other.splice(i, 1);
        }
      }
      this.todo.task_list.list.splice(id_item, 1);
      // console.log(task_list.list);
    },
    async deleteWLI(id_item, day) {
      let list_day = this.todo.weekly.list_day;
      if (day == "Monday") {
        if (list_day.monday[id_item].day.length == 1) {
          await deleteDoc(
            doc(db, "weekly_list", list_day.monday[id_item].id.toString())
          );
          list_day.monday.splice(id_item, 1);
        } else {
          let arr = list_day.monday[id_item].day;
          arr.splice(arr.indexOf(day), 1);
          await updateDoc(
            doc(db, "weekly_list", list_day.monday[id_item].id.toString()),
            {
              day: arr,
            }
          );
        }
      } else if (day == "Tuesday") {
        if (list_day.tuesday[id_item].day.length == 1) {
          await deleteDoc(
            doc(db, "weekly_list", list_day.tuesday[id_item].id.toString())
          );
          list_day.tuesday.splice(id_item, 1);
        } else {
          let arr = list_day.tuesday[id_item].day;
          arr.splice(arr.indexOf(day), 1);
          await updateDoc(
            doc(db, "weekly_list", list_day.tuesday[id_item].id.toString()),
            {
              day: arr,
            }
          );
        }
      } else if (day == "Wednesday") {
        if (list_day.wednesday[id_item].day.length == 1) {
          await deleteDoc(
            doc(db, "weekly_list", list_day.wednesday[id_item].id.toString())
          );
          list_day.wednesday.splice(id_item, 1);
        } else {
          let arr = list_day.wednesday[id_item].day;
          arr.splice(arr.indexOf(day), 1);
          await updateDoc(
            doc(db, "weekly_list", list_day.wednesday[id_item].id.toString()),
            {
              day: arr,
            }
          );
        }
      } else if (day == "Thursday") {
        if (list_day.thursday[id_item].day.length == 1) {
          await deleteDoc(
            doc(db, "weekly_list", list_day.thursday[id_item].id.toString())
          );
          list_day.thursday.splice(id_item, 1);
        } else {
          let arr = list_day.thursday[id_item].day;
          arr.splice(arr.indexOf(day), 1);
          await updateDoc(
            doc(db, "weekly_list", list_day.thursday[id_item].id.toString()),
            {
              day: arr,
            }
          );
        }
      } else if (day == "Friday") {
        if (list_day.friday[id_item].day.length == 1) {
          await deleteDoc(
            doc(db, "weekly_list", list_day.friday[id_item].id.toString())
          );
          list_day.friday.splice(id_item, 1);
        } else {
          let arr = list_day.friday[id_item].day;
          arr.splice(arr.indexOf(day), 1);
          await updateDoc(
            doc(db, "weekly_list", list_day.friday[id_item].id.toString()),
            {
              day: arr,
            }
          );
        }
      } else if (day == "Saturday") {
        if (list_day.saturday[id_item].day.length == 1) {
          await deleteDoc(
            doc(db, "weekly_list", list_day.saturday[id_item].id.toString())
          );
          list_day.saturday.splice(id_item, 1);
        } else {
          let arr = list_day.saturday[id_item].day;
          arr.splice(arr.indexOf(day), 1);
          await updateDoc(
            doc(db, "weekly_list", list_day.saturday[id_item].id.toString()),
            {
              day: arr,
            }
          );
        }
      } else if (day == "Sunday") {
        if (list_day.sunday[id_item].day.length == 1) {
          await deleteDoc(
            doc(db, "weekly_list", list_day.sunday[id_item].id.toString())
          );
          list_day.sunday.splice(id_item, 1);
        } else {
          let arr = list_day.sunday[id_item].day;
          arr.splice(arr.indexOf(day), 1);
          await updateDoc(
            doc(db, "weekly_list", list_day.sunday[id_item].id.toString()),
            {
              day: arr,
            }
          );
        }
      }
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
    gotoCategory(category) {
      this.router.push("/category/" + category);
    },
    gotoDetailWeek(id_item) {
      this.router.push("/weekly-list/" + id_item);
    },
  },
});
