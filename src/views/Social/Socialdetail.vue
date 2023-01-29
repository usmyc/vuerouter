<template>
  <div>
    <p class="Text">This is a social detail page {{ id }}</p>
    <p class="Text">{{ member.Name }}</p>
    <div v-for="experience in member.Experiences" class="experience">
      <p>{{ experience.Developer }}</p>
      <p>{{ experience.Years }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      member: "",
    };
  },
  mounted() {
    fetch("http://localhost:3000/Members/" + this.id)
      .then((response) => response.json())
      .then((data) => {
        this.member = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.Text {
  color: red;
}
.experience {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 1rem 0;
  gap: 1rem;
  background-color: crimson;
  color: white;
  max-width: fit-content;
}
</style>
