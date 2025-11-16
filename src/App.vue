<template>
  <div id="app" class="app">
    <HeaderBar />
    <div class="layout">
      <aside class="sidebar">
        <router-link to="/" class="logo">Projeto Final</router-link>
        <nav>
          <router-link to="/">Tarefas</router-link>
          <router-link to="/sobre">Sobre</router-link>
        </nav>
      </aside>
      <main class="main">
        <router-view />
      </main>
    </div>
  </div>
</template>
<script>
import HeaderBar from './components/HeaderBar.vue'
export default { name: 'App', components: { HeaderBar } }
</script>
<style>
:root { --bg:#f6f7fb; --card:#fff; --accent:#2b6cb0; --muted:#6b7280 }
*{box-sizing:border-box} body,html,#app{height:100%;margin:0;font-family:Inter,Arial, sans-serif;background:var(--bg)}
.layout{display:flex;gap:1rem;padding:1rem}
.sidebar{width:220px;background:var(--card);padding:1rem;border-radius:8px;box-shadow:0 6px 18px rgba(15,23,42,0.06)}
.main{flex:1}
.logo{font-weight:700;display:block;margin-bottom:1rem;color:var(--accent);text-decoration:none}
nav a{display:block;padding:0.45rem 0;color:var(--muted);text-decoration:none}
nav a.router-link-active{color:var(--accent);font-weight:600}
</style>
