<template>
  <div>
    <h1>AUTH</h1>
    <a v-on:click="searchRedirect()">Auth</a>
  </div>
</template>

<script>
export default {
  methods: {
    searchRedirect() {
      const authToken = window.location.href.slice(37);

      localStorage.setItem("accessToken", authToken);
      window.location.replace("/#/search");
    },
  },
  mounted() {},
};
</script>

<style></style>
