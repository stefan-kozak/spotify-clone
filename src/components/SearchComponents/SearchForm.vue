<template>
  <form action="#" @submit.prevent="getMusic()">
    <ArrowNavigation />
    <input
      type="text"
      v-model="query"
      placeholder="Search for songs, artists, genre"
    />
  </form>
</template>

<script>
import axios from "axios";
import ArrowNavigation from "../CrossComponents/ArrowNavigation.vue";

export default {
  components: { ArrowNavigation },
  data() {
    return {
      query: "",
      tracks: [],
      artists: [],
    };
  },
  mounted() {},
  methods: {
    getMusic() {
      let query = encodeURI(this.query);

      // GET TOKEN AT URL 'https://accounts.spotify.com/authorize?client_id=60ab2a632f3942debcf22cd7da0c3f81&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&scope=user-read-private%20user-read-email&response_type=token&state=123'
      let accessToken = localStorage.getItem("accessToken");

      const config = {
        method: "get",
        url: `https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist&limit=1`,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      };

      //let res = axios(config);
      axios
        .get(config.url, config)
        .then((res) => {
          console.log(res);
          let allTracks = res.data.tracks.items

            .filter((track) => track.type === "track")
            .map((track) => this.extractTrackData(track));

          this.$emit("addSearchedTracks", allTracks);

          let allArtists = res.data.artists.items

            .filter((artist) => artist.type === "artist")
            .map((artist) => this.extractArtistsData(artist));

          this.$emit("addSearchedArtists", allArtists);
        })
        // CHECK README IF UNAUTHORIZED
        .catch(() => {
          window.location.replace(
            "https://accounts.spotify.com/authorize?client_id=60ab2a632f3942debcf22cd7da0c3f81&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&scope=user-read-private%20user-read-email&response_type=token&state=123"
          );
        });
    },
    extractTrackData({
      id,
      artist,
      uri: audioUri,
      album,
      name,
      type,
      popularity,
    }) {
      return { name, id, artist, audioUri, album, type, popularity };
    },

    extractArtistsData({ id, name, uri, images, type, popularity }) {
      return { name, id, uri, images, type, popularity };
    },
  },
};
</script>

<style lang="scss">
form {
  display: flex;
  position: fixed;
  flex-direction: row;
  align-items: center;
  padding-top: 0.5em;
  margin-bottom: 3em;
  width: 70%;
  background-color: transparent;
  z-index: 9999;

  input {
    background: #ffffff url(../../assets/svg/search-icon.svg) no-repeat 5% 45%;
    padding: 1em;
    padding-left: 4em;
    margin-left: 1em;
    border-radius: 9999px;
    width: 30%;
    border: none;
    &:focus,
    &:focus-within,
    &:focus-visible {
      appearance: none;
      outline: none;
      border: none;
    }
  }
  a {
    margin: 1em;
    text-decoration: none;
    color: #fff;
  }
}
</style>
