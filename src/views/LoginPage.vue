<template>
  <div class="login-container">
    <h2>Entrar</h2>

    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Senha" required />

      <button type="submit">Entrar</button>
    </form>

    <router-link to="/register" class="create-link"> Criar usuário </router-link>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      alert("Login realizado (exemplo).");
      this.$router.push("/");
    },
  },
};
</script>

<style>
.login-container {
  max-width: 350px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input {
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 0.7rem;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 5px;
}
.create-link {
  text-align: center;
  margin-top: 1rem;
  display: block;
}
</style>
