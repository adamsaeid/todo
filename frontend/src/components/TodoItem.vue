<template>
    <li>
        {{ desc }} ({{ status }})
    </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['desc', 'status']
}
</script>
