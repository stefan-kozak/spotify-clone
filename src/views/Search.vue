<template>
  <div class="search">
    
    <SearchForm @addSearchedTracks="tracks = $event" @addSearchedArtists="artists = $event"/>

      <a class="top-search">
        <h1>Top Artist Result</h1>
        <section class="top-result" v-if="artists.length > 0 && Array.isArray(artists)">
          <article>
            <div>
              <img :src="artists[0].images[0].url" alt="artist_image">
            </div>
            <h1>{{ artists[0].name }}</h1>
            <p>{{ artists[0].type }}</p>
          </article>
        </section>
      </a>

      <a class="top-search">
        <h1>Top Track Result</h1>
        <section class="top-result" v-if="tracks.length > 0 && Array.isArray(tracks)">
          <article>
            <div>
              <img :src="tracks[0].album.images[0].url" alt="artist_image">
            </div>
            <h1>{{ tracks[0].name }}</h1>
            <p>{{ tracks[0].type }}</p>
          </article>
        </section>
      </a>




  </div>
</template>



<script>
import SearchForm from '@/components/SearchComponents/SearchForm.vue'

export default {
  components: {
    SearchForm
  },
  data() {
    return {
      tracks: [],
      artists: [],
    }
  },
  methods: {
    $_checkArray(a){
      console.log(a);
      //return a.length > 0 && Array.isArray(a)
      }
  },
    
}
</script>




<style lang="scss" scoped>
 
//   COLORS
$secondary-color: #121212;
$primary-color: #1DB954;
$white: #fff;

//   FONT SIZES
$f-small: 14px;

*{
  text-decoration: none;
}

.search{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: darken($secondary-color, 3%);
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.8em;
  }
  
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: darken($white, 60%);
    outline: none;
  }

  h1{
    color: #fff;
    margin-bottom: 1em;
  }
  a{
    cursor: pointer;
  }
}



.top-search{
  width: 35%;
}

.top-result{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 2em;
  padding-left: 3em;
  margin-bottom: 2em;
  background-color: $secondary-color;
  color: $white;

  
  article{
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      font-size: 1.5em;
      padding-top: 0.5em;
      margin-bottom: 0.5em;
    }
    p{
      font-size: 0.8em;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 1px;
      background-color: #000;
      padding: 0.5em 1em;
      border-radius: 9999px;
    }
    div{
      max-width: 7em;
      max-height: 7em;
      display: inline-block;
      position: relative;
      overflow: hidden;
      border-radius: 50%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  
  
}

</style>