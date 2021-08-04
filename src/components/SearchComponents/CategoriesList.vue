<template>
  <div class="categories-wrap">
    <h1>Browse</h1>
    <section class="categories">
      <div class="category" v-for="category in categories" :key="category.id">
        <h1>{{ category.name }}</h1>
        <div class="category-image">
          <img :src="category.icons[0].url" alt="category" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered

      let accessToken = localStorage.getItem("accessToken");
      const config = {
        method: "get",
        url: `https://api.spotify.com/v1/browse/categories?limit=50`,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      };

      axios
        .get(config.url, config)
        .then((res) => {
          let categoriesList = res.data.categories.items.map((category) =>
            this.extractCategoriesData(category)
          );
          categoriesList.forEach((category) => {
            this.categories.push(category);
          });
          console.log(this.categories);
        })
        .catch(() => {
          window.location.replace(
            "https://accounts.spotify.com/authorize?client_id=60ab2a632f3942debcf22cd7da0c3f81&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&scope=user-read-private%20user-read-email&response_type=token&state=123"
          );
        });
    });
  },
  methods: {
    extractCategoriesData({ id, name, href, icons }) {
      return { id, name, href, icons };
    },
  },
};
</script>

<style lang="scss" scoped>
.categories-wrap {
  margin-left: 3em;
  margin-top: 2em;
}

.categories {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 1.3em;
  row-gap: 1.3em;
  margin-right: 3em;
  margin-top: 2em;
  align-items: center;
  padding-bottom: 2em;
  div {
    width: 13em;
    height: 13em;
    background: rgb(128, 153, 62);
    background: linear-gradient(
      180deg,
      rgba(128, 153, 62, 1) 0%,
      rgba(203, 243, 99, 1) 100%
    );
    border-radius: 1em;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    h1 {
      position: absolute;
      z-index: 99;
      margin-top: -70%;
      left: 10%;
      color: white;
      font-weight: bold;
      font-size: 1.3em;
    }

    .category-image {
      width: 20%;
      border-radius: 0.5em;
      position: absolute;
      right: -2%;
      bottom: 0;
      width: 8em;
      height: 8em;
      transform: rotate(20deg);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);

      img {
        width: 100%;
      }
    }
  }
}
</style>
