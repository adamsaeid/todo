<template>
    <li>
        <span class="item-text" :class="itemTextClassObj">{{ desc }} ({{ status }})</span>
        <button class="todo-btn" v-on:click="setTodo">todo</button>
        <button class="doing-btn" v-on:click="setDoing">doing</button>
        <button class="done-btn" v-on:click="setDone">done</button>
    </li>
</template>

<script>
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
    setTodo: function () {
      this.$emit('statusChanged', {id: this.id, newStatus: 'todo'})
    },
    setDoing: function () {
      this.$emit('statusChanged', {id: this.id, newStatus: 'doing'})
    },
    setDone: function () {
      this.$emit('statusChanged', {id: this.id, newStatus: 'done'})
    }
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
