<template>
<div>
    <h3><i class="fa fa-plus-square"></i> افزودن متن</h3>
    <div class="mui-textfield mui-textfield--float-label">
        <input type="text" autocomplete="false" v-model="title">
        <label>متن وظیفه</label>
    </div>
    <button class="mui-btn mui-btn--primary" @click="submit()"><i class="fa fa-plus"></i> ثبت</button>
    <router-link :to="{ name: 'Main' }"><i class="fa fa-arrow-left"></i> بازگشت به وظایف</router-link>
    <div class="success" v-show="is_success">وظیفه با موفقیت اضافه شد!</div>
    <div class="error" v-show="is_error">{{ submit_error }}</div>
</div>
</template>

<script>
/* eslint-disabled */
    export default {
        name: 'Submit',
        data() {
            return {
                title: "",
                localKey: "todo-local",
                is_success: false,
                is_error: false,
                submit_error: null
            }
        },
        methods: {
            fetchNotes() {
                var notes = JSON.parse(localStorage.getItem(this.localKey)) || [],
                uid = notes.length || 0
                return { content: notes, count: uid }
            },
            submit() {
                this.is_success = false
                var notes = this.fetchNotes(), content = notes.content, count = notes.count
                
                this.title = this.title.trim()
                if(this.title === "" || this.title === null) {
                    this.submit_error = "متن وظیفه وارد نشده است!"
                    this.is_error = true
                } else {
                    content.push({ id: count+1, note: this.title, completed: false })
                    localStorage.setItem(this.localKey, JSON.stringify(content))
                    this.is_error = false
                    this.title = ""
                    this.is_success = true
                }
            }
        }
    }
</script>

<style scoped></style>