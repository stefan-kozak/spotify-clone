<template>
  <div>
    <h1>{{ genreName[0] && getGenre(genreIndex) }}</h1>
    <article class="card-image"></article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genres: [],
    };
  },
  props: ["genreName", "genreIndex"],

  methods: {
    getGenre(index) {
      this.genreName[0].forEach((item) => {
        this.genres.push(item);
      });

      return (
        this.genres[index].charAt(0).toUpperCase() + this.genres[index].slice(1)
      );
      //this.genres.push(targetCopy[index])
      //console.log(this.genres[index])
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  background: rgb(218, 139, 13);
  background: linear-gradient(
    180deg,
    rgba(218, 139, 13, 1) 0%,
    rgba(218, 195, 13, 1) 100%
  );
  width: 23%;
  min-height: 250px;
  padding: 1.5em;
  border-radius: 1em;
  position: relative;
  overflow: hidden;
  margin-right: 1em;
  h1 {
    font-weight: bold;
    font-size: 2.5em;
  }
  .card-image {
    position: absolute;
    right: -2%;
    bottom: 0;
    width: 130px;
    height: 130px;
    transform: rotate(20deg);
    background-color: gray;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>
