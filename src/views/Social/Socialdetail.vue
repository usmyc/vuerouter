<template>
  <div>
    <p class="Text">This is a social detail page {{ id }}</p>
    <div v-for="social in Socials" :key="social.id">
      <p v-if="social.id == id">{{ social.name }}</p>
      <p v-if="social.id == id">{{ social.link }}</p>
    </div>
  </div>
</template>

<script>
import Social from "@/views/Social/Social.vue";
export default {
  name: "Socialdetail",
  components: {
    Social,
  },
  props: ["id"],
  data: () => ({
    Socials: Social.data().socials,
  }),
};
</script>

<style scoped>
.Text {
  color: red;
}
</style>
