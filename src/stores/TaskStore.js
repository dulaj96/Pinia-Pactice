import {ref, computed} from 'vue'
import { defineStore } from "pinia";
import axios from 'axios';

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
//         },
//         favCount() {
//             return this.tasks.reduce((p, c) => {
//                 return c.isFav ? p + 1 : p
//             }, 0)
//         },
//         totalCount: (state) => {
//             return state.tasks.length
//         }
//     },
    
//     actions: {
//         addTask(task) {
//             this.tasks.push(task)
//         },
//         deleteTask(id) {
//             this.tasks = this.tasks.filter(t => {
//                 return t.id !== id
//             })
//         },
//         toggleFav(id) {
//             const task = this.tasks.find(t => t.id === id)
//             task.isFav = !task.isFav
//         }
//     }
// })

export const useTaskStore = defineStore('taskStore',() => {
    const tasks = ref({
       user: [
        // {
        //     id: 1,
        //     title: 'My name is Dulaj',
        //     isFav: true
        // },
        // {
        //     id: 2,
        //     title: 'I love you',
        //     isFav: false
        // }
       ]
    })

    const favs = computed(() => {
        return tasks.value.user.filter(t => t.isFav)
    })
    const favCount = computed(() => {
        return tasks.value.user.reduce((p, c) => {
            return c.isFav ? p+1 : p
        }, 0)
    })
    const totalCount = computed(() => {
        return tasks.value.user.length
    })

    function addTask(task) {
        tasks.value.user.push(task)
    }
    function deleteTask(id) {
        tasks.value.user = tasks.value.user.filter(t => {
            return t.id !== id
        }) 
    }
    function toggleFav(id) {
        const task = tasks.value.user.find(t => t.id === id)
        task.isFav = !task.isFav
    }

    async function fetchTask() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            tasks.value.user = response.data.map(task => ({
                id: task.id,
                title: task.title,
                isFav: task.completed
            }));
        } catch(err) {
            console.log('Error fetching tasks: ', err);
        }
    }

    return{
        tasks,
        favs,
        favCount,
        totalCount,
        addTask,
        deleteTask,
        toggleFav,
        fetchTask
    }
})