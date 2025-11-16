<template>
  <form class="task-form" @submit.prevent="handleAdd">
    <input v-model="title" placeholder="Nova tarefa" /><input
      v-model="description"
      placeholder="Descrição (opcional)"
    /><button type="submit">Adicionar</button>
  </form>
</template>
<script>
export default {
  name: "TaskForm",
  data() {
    return { title: "", description: "" };
  },
  methods: {
    handleAdd() {
      const t = this.title && this.title.trim();
      if (!t) return;
      this.$emit("add", { title: t, description: this.description });
      this.title = "";
      this.description = "";
    },
  },
};
</script>
<style scoped>
.task-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
input {
  padding: 0.5rem;
  flex: 1;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
}
button {
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  border: none;
}
</style>
