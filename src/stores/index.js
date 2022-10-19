import { defineStore } from "pinia";

export const useToDo = defineStore({
    id: "todo",
    state: () => ({
        settings: {
            show_menu: false,
            isActive: true,
        },
        new_todo: {
            task_list: false,
        },
        todo: [],
    }),
    getters: {},
    actions: {
        toggleMenu() {
            this.settings.show_menu = !this.settings.show_menu;
        },
    },
});