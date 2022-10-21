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
            }
        },
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
            // return id_item;
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
                counter_items: 0,
                date: time_now + " " + date_now,
            });
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
                id: id.toString() + "_task_list",
                message: task_list.message,
                description: task_list.description,
                status: task_list.status,
                date: time_now + " " + date_now,
            });
            this.toggleTaskListMsg();
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
            if (value == 'yes') {
                let checklist = this.todo.checklist;
                checklist.list.splice(checklist.delete_id, 1);
                checklist.counter--;
            }
            this.toggleDeleteMsg();
        }
    },
});