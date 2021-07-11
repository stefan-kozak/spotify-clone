<template>
  <form action="#" @submit.prevent="$_getMusic()">
    <a>LEFT</a>
    <a>RIGHT</a>

    <input
      type="text"
      v-model="query"
      placeholder="Search for songs, artists, genre"
    />
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      query: "",
      tracks: [],
      artists: [],
    };
  },
  methods: {
    $_getMusic() {
      let query = encodeURI(this.query);

      // GET TOKEN AT URL 'https://accounts.spotify.com/authorize?client_id=60ab2a632f3942debcf22cd7da0c3f81&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&scope=user-read-private%20user-read-email&response_type=token&state=123'
      let accessToken =
        "BQDSneA71WsLZhfELQ05uLAzWX5WHQeKdkmwJHTJdCkam2uANJ1fbf0jCoBtpwcPX4tH5LTGycxdqAAC9D727eXQGyT3VnW5krCzF7jdBT9ECflXoOPv0kvyLoM3eM5uDTWWF7M4CdVWjS0mxbXkUqx_gZzRBM6cW7zOLIkdrSReH8aKFhk&token_type=Bearer&expires_in=3600&state=123";

      const config = {
        method: "get",
        url: `https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist`,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      };

      //let res = axios(config);
      axios
        .get(config.url, config)
        .then((res) => {
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
        .catch((error) => {
          console.log(error, "Check readme for authorization");
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
  flex-direction: row;
  align-items: center;
  margin-bottom: 3em;
  width: 30%;

  input {
    background: #ffffff url(../../assets/svg/search-icon.svg) no-repeat 5% 45%;
    padding: 1em;
    padding-left: 4em;

    border-radius: 9999px;
    width: 90%;
    border: none;
    &:focus,
    &:focus-within,
    &:focus-visible {
      appearance: none;
      outline: none;
      border: none;
    }
  }
}
</style>
