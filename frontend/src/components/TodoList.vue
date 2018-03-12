<template>
  <div class="todo-list">
    <h1>Todo:</h1>
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :desc="todo.desc"
        :status="todo.status">
      </TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data () {
    return {
      todos: [
        {
          id: 1,
          desc: 'Walk the dog',
          status: 'todo'
        },
        {
          id: 2,
          desc: 'Buy milk',
          status: 'done'
        },
        {
          id: 3,
          desc: 'Replace heatsink',
          status: 'doing'
        }
      ]
    }
  }
}
</script>
