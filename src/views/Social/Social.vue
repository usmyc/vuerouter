<template>
  <div>
    <h1>Social</h1>
    <div class="social" v-for="member in members" :key="member.id">
      <RouterLink :to="{ name: 'socialdetail', params: { id: member.id } }">
        {{ member.Name }}
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/Members")
      .then((response) => response.json())
      .then((data) => {
        this.members = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
a {
  color: white;
  background-color: crimson;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 1rem;
}
.social {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}
</style>
