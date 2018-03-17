<template>
    <li>
        <span class="item-text" :class="itemTextClassObj">{{ desc }} ({{ status }})</span>
        <button class="todo-btn" v-on:click="setTodo(id)">todo</button>
        <button class="doing-btn" v-on:click="setDoing(id)">doing</button>
        <button class="done-btn" v-on:click="setDone(id)">done</button>
    </li>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'TodoItem',
  props: ['id', 'desc', 'status'],
  computed: {
    itemTextClassObj: function () {
      return {
        'todo-text': this.status === 'todo',
        'doing-text': this.status === 'doing',
        'done-text': this.status === 'done'
      }
    }
  },
  methods: {
    ...mapMutations([
      'setTodo',
      'setDoing',
      'setDone'
    ])
  }
}
</script>

<style>
.todo-text {
    color: black;
}
.doing-text {
    color: orange;
}
.done-text {
    color: green;
}
</style>
