import {ref, computed} from 'vue'
import { defineStore } from "pinia";

// export const useTaskStore = defineStore('taskStore', {
//     state: () => ({
//         tasks: [
//             {
//                 id: 1,
//                 title: 'My name is Dulaj',
//                 isFav: true
//             },
//             {
//                 id: 2,
//                 title: 'I love you',
//                 isFav: false
//             }
//         ],
//         name: 'Mithun'
//     }),
//     getters: {
//         favs() {
//             return this.tasks.filter(t => t.isFav)
//         }
//     }
// })

export const useTaskStore = defineStore('taskStore',() => {
    const tasks = ref({
       user: [
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
       ]
    })
    const favs = computed(() => {
        return tasks.value.user.filter(t => t.isFav)
    })

    return{
        tasks,
        favs
    }
})