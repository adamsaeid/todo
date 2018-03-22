<template>
  <div>
    <input class='new-todo-input' v-model="newTodoDesc" />
    <button class='new-todo-btn' v-on:click="onAddTodo()" :disabled="newTodoDesc === ''">Add</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'AddTodoItem',
  data: function () {
    return {
      newTodoDesc: ''
    }
  },
  methods: {
    ...mapMutations([
      'addTodo'
    ]),
    onAddTodo: function () {
      var newTodo = {
        id: new Date().getTime(), // unique id
        desc: this.newTodoDesc,
        status: 'todo'
      }

      this.addTodo(newTodo)

      this.newTodoDesc = ''
    }
  }
}
</script>
