<template>
  <div>
    <h1>Social</h1>
    <div class="social" v-for="social in socials" :key="social.id">
      <RouterLink :to="{ name: 'socialdetail', params: { id: social.id } }">
        <p>{{ social.name }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          name: "Facebook",
          link: "https://www.facebook.com",
          id: 1,
        },
        {
          name: "Twitter",
          link: "https://yuce.dev",
          id: 2,
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com",
          id: 3,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com",
          id: 4,
        },
      ],
    };
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
