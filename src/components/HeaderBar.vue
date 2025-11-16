<template>
  <header class="header">
    <div class="left">
      <button class="menu">☰</button>
      <h1>Meu App de Tarefas</h1>
    </div>
    <div class="right"><small>Usuário</small></div>
  </header>
</template>
<script>
export default { name: "HeaderBar" };<template>
  <header class="header">
    <h1>Projeto Final Vue</h1>

    <button class="theme-btn" @click="toggleTheme">
      {{ isDark ? '🌞 Claro' : '🌙 Escuro' }}
    </button>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
  data() {
    return { isDark: false }
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      document.documentElement.classList.toggle("dark-mode", this.isDark)
    }
  }
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: var(--card);
  border-bottom: 1px solid #ddd;
}

.theme-btn {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  background: var(--accent);
  color: white;
  border-radius: 5px;
}

/* Tema escuro */
.dark-mode {
  --bg: #1e1e1e;
  --card: #2b2b2b;
  --accent: #4ca3dd;
  --muted: #b5b5b5;
  color: white;
  background: var(--bg);
}
</style>

</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
}
.left {
  display: flex;
  gap: 0.8rem;
  align-items: center;
}
.menu {
  background: transparent;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
}
h1 {
  margin: 0;
  font-size: 1rem;
}
.right {
  color: #6b7280;
}
</style>
