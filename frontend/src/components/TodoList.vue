<template>
  <div class="todo-list">
    <h1>Todo:</h1>
    <AddTodoItem />
    <ul>
      <TodoItem
        v-for="todo in todoList"
        :key="todo.id"
        :id="todo.id"
        :desc="todo.desc"
        :status="todo.status">
      </TodoItem>
    </ul>
    <button class="clear-todos-btn" v-on:click="resetTodos">Clear</button>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import AddTodoItem from './AddTodoItem.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'TodoList',
  components: {
    TodoItem,
    AddTodoItem
  },
  methods: {
    ...mapMutations([
      'resetTodos'
    ])
  },
  computed: {
    ...mapState({
      todoList: state => state.todos.todoList
    })
  }
}
</script>
