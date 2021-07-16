<template>
  <div v-if="allGenres.length != 0" class="genres-list">
    <h1>Genres</h1>
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </button>
    <div class="genres-list-extended">
      <GenresListItem :genreName="allGenres" :genreIndex="0" />
      <GenresListItem :genreName="allGenres" :genreIndex="1" />
      <GenresListItem :genreName="allGenres" :genreIndex="2" />
      <GenresListItem :genreName="allGenres" :genreIndex="3" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import GenresListItem from "@/components/SearchComponents/GenresListItem.vue";

export default {
  components: {
    GenresListItem,
  },
  data() {
    return {
      allGenres: [],
    };
  },
  mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered

      let accessToken = localStorage.getItem("accessToken");
      const config = {
        method: "get",
        url: `https://api.spotify.com/v1/recommendations/available-genre-seeds`,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      };

      axios
        .get(config.url, config)
        .then((res) => {
          this.allGenres.push(res.data.genres);
        })
        .catch(() => {
          window.location.replace(
            "https://accounts.spotify.com/authorize?client_id=60ab2a632f3942debcf22cd7da0c3f81&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&scope=user-read-private%20user-read-email%20streaming&response_type=token&state=123"
          );
        });
    });
  },
};
</script>

<style lang="scss" scoped>
.genres-list {
  margin-top: 5em;
  width: 100%;
  overflow: hidden;
  margin-left: 3em;
  position: relative;
  button {
    display: flex;
    z-index: 99;
    right: 4%;
    top: 50%;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #000;
    text-align: center;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    padding: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:hover {
      transform: scale(110%);
    }
  }

  h1 {
    padding-bottom: 1em;
  }
  .genres-list-extended {
    width: 133%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
}
</style>
