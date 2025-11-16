<template>
  <div class="task-detail card">
    <h3>Detalhes</h3>
    <div v-if="task">
      <label>Título</label><input v-model="local.title" /><label>Descrição</label
      ><textarea v-model="local.description"></textarea>
      <div class="buttons">
        <button @click="save">Salvar</button
        ><button class="ghost" @click="$emit('close')">Fechar</button>
      </div>
    </div>
    <div v-else>Sem tarefa selecionada.</div>
  </div>
</template>
<script>
export default {
  name: "TaskDetail",
  props: { task: { type: Object, default: null } },
  data() {
    return { local: { title: "", description: "" } };
  },
  watch: {
    task: {
      immediate: true,
      handler(v) {
        this.local = v
          ? { title: v.title, description: v.description, id: v.id }
          : { title: "", description: "", id: null };
      },
    },
  },
  methods: {
    save() {
      if (!this.local.title || !this.local.title.trim()) return;
      this.$emit("save", {
        id: this.local.id,
        title: this.local.title.trim(),
        description: this.local.description,
      });
    },
  },
};
</script>
<style scoped>
.card {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
}
label {
  display: block;
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.85rem;
}
input,
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  margin-top: 0.25rem;
}
textarea {
  min-height: 120px;
  resize: vertical;
}
.buttons {
  margin-top: 0.75rem;
  display: flex;
  gap: 0.5rem;
}
.buttons button {
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border: none;
  background: #2563eb;
  color: white;
}
.buttons .ghost {
  background: transparent;
  border: 1px solid #e5e7eb;
  color: #111827;
}
</style>
