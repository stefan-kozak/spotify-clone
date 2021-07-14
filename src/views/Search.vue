<template>
  <div>
    <div class="search">
      <SearchForm
        @addSearchedTracks="tracks = $event"
        @addSearchedArtists="artists = $event"
      />

      <TopArtistResult :artists="artists" />
      <TopTrackResult :tracks="tracks" />

      <GenresList></GenresList>
      <CategoriesList></CategoriesList>
    </div>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchComponents/SearchForm.vue";
import TopArtistResult from "@/components/SearchComponents/TopArtistResult.vue";
import TopTrackResult from "@/components/SearchComponents/TopTrackResult.vue";
import GenresList from "@/components/SearchComponents/GenresList.vue";
import CategoriesList from "@/components/SearchComponents/CategoriesList.vue";

export default {
  components: {
    SearchForm,
    TopArtistResult,
    TopTrackResult,
    GenresList,
    CategoriesList,
  },
  data() {
    return {
      tracks: [],
      artists: [],
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
//   COLORS
$secondary-color: #121212;
$primary-color: #1db954;
$white: #fff;

//   FONT SIZES
$f-small: 14px;

* {
  text-decoration: none;
}

.search {
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  background-color: darken($secondary-color, 3%);
  color: $white;
}
</style>
