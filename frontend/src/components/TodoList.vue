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
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import AddTodoItem from './AddTodoItem.vue'
import { mapState } from 'vuex'
export default {
  name: 'TodoList',
  components: {
    TodoItem,
    AddTodoItem
  },
  computed: {
    ...mapState({
      todoList: state => state.todos.todoList
    })
  }
}
</script>
