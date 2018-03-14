<template>
    <li>
        <span class="item-text" :class="itemTextClassObj">{{ desc }} ({{ status }})</span>
    </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['desc', 'status'],
  computed: {
    itemTextClassObj: function () {
      return {
        'todo-text': this.status === 'todo',
        'doing-text': this.status === 'doing',
        'done-text': this.status === 'done'
      }
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
