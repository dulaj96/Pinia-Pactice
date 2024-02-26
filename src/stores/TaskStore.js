import {ref, computed} from 'vue'
import { defineStore } from "pinia";
import axios from 'axios';

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
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    
    actions: {
        addTask(task) {
            this.tasks.push(task)
        }
    }
})

// export const useTaskStore = defineStore('taskStore',() => {
//     const tasks = ref({
//        user: [
//         {
//             id: 1,
//             title: 'My name is Dulaj',
//             isFav: true
//         },
//         {
//             id: 2,
//             title: 'I love you',
//             isFav: false
//         }
//        ]
//     })

//     const favs = computed(() => {
//         return tasks.value.user.filter(t => t.isFav)
//     })
//     const favCount = computed(() => {
//         return tasks.value.user.reduce((p, c) => {
//             return c.isFav ? p+1 : p
//         }, 0)
//     })
//     const totalCount = computed(() => {
//         return tasks.value.user.length
//     })

//     return{
//         tasks,
//         favs,
//         favCount,
//         totalCount
//     }
// })