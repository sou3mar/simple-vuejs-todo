<template>
<div>
    <h3><i class="fa fa-tasks"></i> وظایف</h3>
    <div class="float-left"><a @click="deleteAll()"><i class="fa fa-trash"></i> All</a></div>
    <router-link :to="{ name: 'Submit' }"><i class="fa fa-plus-square"></i> ثبت وظیفه جدید</router-link>
    <Todos :todos="todos"></Todos>
    <br>
    <router-link :to="{ name: 'Credits' }"><i class="fa fa-vcard-o"></i> توضیحات</router-link>
</div>
</template>

<script>
import Todos from '@/components/Todos'
    export default {
        name: 'Main',
        components: {
            Todos
        },
        data() {
            return {
                todos: this.fetchNotes(),
            }
        },
        methods: {
            fetchNotes() {
                return JSON.parse(localStorage.getItem("todo-local")) || []
            },
            notesCount() {
                return this.fetchNotes().length || 0
            },
            submitNotes(str="", type="json") {
                if(type === "json") str = JSON.stringify(str)
                localStorage.setItem("todo-local", str)
                return
            },
            getIndexOf(arr, id) {
                let index = null
                arr.forEach(i => {
                    if(i.id === id) index = arr.indexOf(i)
                });
                return index
            },
            deleteAll() {
                if(this.notesCount() === 0) alert("هیچ وظیفه ای وجود ندارد!")
                else {
                    this.submitNotes([])
                    this.todos = []
                }
            },
        }
    }
</script>
