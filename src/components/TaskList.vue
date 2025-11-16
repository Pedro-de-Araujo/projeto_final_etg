<template>
  <ul class="task-list">
    <li v-for="task in tasks" :key="task.id" :class="{ done: task.done }">
      <div class="left">
        <input type="checkbox" :checked="task.done" @change="$emit('toggle', task.id)" />
        <div class="meta" @click="$emit('edit', task)">
          <strong>{{ task.title }}</strong>
          <div class="desc">{{ task.description }}</div>
        </div>
      </div>
      <div class="actions">
        <button @click="$emit('remove', task.id)">Remover</button>
      </div>
    </li>
  </ul>
</template>
<script>
export default { name: "TaskList", props: { tasks: { type: Array, default: () => [] } } };
</script>
<style scoped>
.task-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  border-radius: 6px;
  margin-bottom: 0.4rem;
  background: #f8fafc;
}
li.done {
  opacity: 0.6;
  text-decoration: line-through;
}
.left {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  cursor: pointer;
}
.meta {
  min-width: 0;
}
.desc {
  color: #6b7280;
  font-size: 0.9rem;
}
.actions button {
  background: transparent;
  border: none;
  color: #ef4444;
  cursor: pointer;
}
</style>
