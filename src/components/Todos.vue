<template>
    <div>
        <div v-if="showList > 0">
        <div class="mui-panel" v-for="(todo, index) in todos" :key="todo.id">
            <b>{{ index+1 }}</b> : {{ todo.note }}
            <a @click="markAsDone(todo.id)" v-if="!todo.completed"><i class="fa fa-check-square"></i></a>
            <div class="float-left">
                <i v-bind:class="setIcon(todo.completed)"></i>
                <a @click="deleteNote(todo.id)"><i class="fa fa-trash"></i></a>
            </div>
        </div>
        </div>
        <div class="error" v-else>404 - هیچ وظیفه ای یافت نشد!</div>
    </div>
</template>
<script>
export default {
    name: 'Todos',
    props: ['todos'],
    data() {
        return {
            showList: this.$parent.notesCount()
        }
    },
    methods: {
        setIcon(todo) {
            return todo === true ? "fa fa-check" : "fa fa-circle-o"
        },
        deleteNote(id) {
            if(confirm("از انجام اینکار اطمینان دارید؟")){
                var notes = this.$parent.fetchNotes(), index = this.$parent.getIndexOf(notes, id)
                let removed = notes.splice(index, 1)
                this.$parent.submitNotes(notes)
                this.$parent.todos = notes
                this.showList = this.$parent.notesCount()
            }
        },
        markAsDone(id) {
            var notes = this.$parent.fetchNotes(), index = this.$parent.getIndexOf(notes, id)
            notes[index].completed = true
            this.$parent.submitNotes(notes)
            this.$parent.todos = notes
        }
    }
}
</script>
<style>
#app .mui-panel {
    width: 92% !important;
    margin-bottom: 5px;
    margin-top: 5px;
}
a:hover {
    cursor: pointer;
}

.float-left {
    float: left;
}
</style>
