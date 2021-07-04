<template>
  <div class="search">
    
    <form action="#" @submit.prevent="getMusic()">
      <a>LEFT</a>
      <a>RIGHT</a>

      <input type="text"  v-model="query" placeholder="Search for songs, artists, genre">
    </form>

      <a href="#" class="top-search">
        <h1>Top Artist Result</h1>
        <section class="top-result" v-if="checkArray(artists)">
          <article>
            <div>
              <img :src="artists[0].images[0].url" alt="artist_image">
            </div>
            <h1>{{ artists[0].name }}</h1>
            <p>{{ artists[0].type }}</p>
          </article>
        </section>
      </a>

      <a href="#" class="top-search">
        <h1>Top Track Result</h1>
        <section class="top-result" v-if="checkArray(tracks)">
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
import axios from "axios"

export default {
  data() {
    return {
      query: '',
      tracks: [],
      artists: [],
    }
  },
  methods: {
    getMusic(){
      let query = encodeURI(this.query)

       // GET TOKEN AT URL 'https://accounts.spotify.com/authorize?client_id=60ab2a632f3942debcf22cd7da0c3f81&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&scope=user-read-private%20user-read-email&response_type=token&state=123'
      let accessToken = 'BQBfWychjkbs9hS8btMdv7ktmHL0bavfGm4l5ZEy323xp4_ddFESdrMvH2PzxpjLr2o033Sq7h00-_cXlP-E3UbIruoJRP4dnud8DV_zEJLr8NRSGpDvRpPPgRg01OiwvRQ1wPy9H74WuAbz-KJYvzSccFBbDVHhLX7Looe9-XBLZJtsDFE&token_type=Bearer&expires_in=3600&state=123';


      const config = {
        method: 'get',
        url: `https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist`,
        headers: {
          'Authorization': 'Bearer ' + accessToken
        },
    }

      //let res = axios(config);
      axios.get(config.url, config)
        .then(res => {
          //CLEAN TRACKS FOR NEW SEARCH RESULT
          this.tracks = []
          //PUSH ALL SEARCHED TRACKS INTO ARRAY
          res.data.tracks.items.forEach( track => {
            this.tracks.push(this.extractTrackData(track))
          });

          //CLEAN ARTISTS FOR NEW SEARCH RESULT
          this.artists = []
          //PUSH ALL SEARCHED ARTISTS INTO ARRAY
          res.data.artists.items.forEach( artist => {
            //console.log(artist)
            this.artists.push(this.extractArtistsData(artist))
          });
        })
        // CHECK README IF UNAUTHORIZED
        .catch( error => {
          console.log(error, "Check readme for authorization");
        })
    },
    extractTrackData({
      id,
      artist,
      uri: audioUri,
      album,
      name,
      type,
    }) 
    {
        return  { name, id, artist, audioUri, album, type } ;  
    },

     extractArtistsData({
      id,
      name,
      uri,
      images,
      type,
    }) 
    {
        return  { name, id, uri, images, type} ;  
    },
    checkArray(a){
    return a.length > 0 && Array.isArray(a)
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
  background-color: darken($secondary-color, 50%);
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
}

form{
  margin-bottom: 3em;

  input{
    background: #ffffff url(../assets/svg/search-icon.svg) no-repeat 5% 45%;
    padding: 1em;
    padding-left: 4em;

    border-radius: 9999px;
    width: 30%;
    border: none;
    &:focus, &:focus-within, &:focus-visible{
      appearance: none;
      outline: none;
      border:none
    }
  }

}

.top-result{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 35%;
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
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  
  
}

ul{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
    background-color: $secondary-color;
    width: 20%;
    margin: 1em;

    div{
      padding: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    a{
      text-decoration: none;
      padding: 0.2em;
      color: #fff;
    }

    img{
      width: 90%;
    }
  }
}

</style>