<template>
  <div class="login-container">
    <h2>Criar Conta</h2>

    <form @submit.prevent="register">
      <input type="text" v-model="name" placeholder="Nome completo" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Senha" required />

      <button type="submit">Cadastrar</button>
    </form>

    <router-link to="/login" class="create-link"> Já tenho conta </router-link>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      alert("Usuário cadastrado (exemplo).");
      this.$router.push("/login");
    },
  },
};
</script>
