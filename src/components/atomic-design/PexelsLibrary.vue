<template>
  <div v-for="(image, index) in images" :key="index">
    <img :src="image" />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      images: [],
    };
  },
  methods: {
    searchImages() {
      const apiKey = 'Vcrn7eoXsDnmdeiydIIxFRtBjTjPN1s6uXJgdk1mMMjjRijrgeSKzqzE';
      const query = 'https://api.pexels.com/v1/';
      const apiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=10`;
      
      axios.get(apiUrl, {
        headers: {
          Authorization: apiKey,
        },
      })
      .then(response => {
        this.images = response.data.photos.map(photo => photo.src.medium);
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
  mounted() {
    this.searchImages();
  }
}
</script>