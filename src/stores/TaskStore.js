import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {
                id: 1,
                title: 'My name is Dulaj',
                isFav: true
            },
            {
                id: 2,
                title: 'I love you',
                isFav: false
            }
        ],
        name: 'Mithun'
    })
})