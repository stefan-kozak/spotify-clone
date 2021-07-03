<template>
  <div class="search">
    
    <form action="#" @submit.prevent="getMusic()">
      <a>LEFT</a>
      <a>RIGHT</a>

      <input type="text"  v-model="query" placeholder="Search for songs, artists, genre">
    </form>

    <ul>
      <li v-for="track in tracks" :key="track.id">
        
        <img :src="track.albumCover.images[0].url" alt="track_album">
        <div>
          <a href="#track"><h1>{{ songify(track) }}</h1></a>
          <a href="#author">{{ track.artist[0].name }}</a>
        </div>
      </li>
    </ul>

  </div>
</template>



<script>
import axios from "axios"

export default {
  data() {
    return {
      query: '',
      tracks: []
    }
  },
  methods: {
    getMusic(){
      let query = encodeURI(this.query)

       // GET TOKEN AT URL 'https://accounts.spotify.com/authorize?client_id=60ab2a632f3942debcf22cd7da0c3f81&redirect_uri=https%3A%2F%2Fgrady.sk%2F&scope=user-read-private%20user-read-email&response_type=token&state=123'
      let accessToken = 'BQAmKOQE2IK2FShbfRf0CT7-v0ZNMPbxTzGHQozqFnsHJzhj6Tpjq1bofxmLQvK3e34jcQRsbgJF44jFycxeIbOxOFAibw9kX3L4NSnNySC9sGaR3vwXvqa_vXGDbEIynIE1IgqKY0VIotDO0yuN0JdDVLzajHq325bwHou5DNzPmir8Thg&token_type=Bearer&expires_in=3600&state=123';


      const config = {
        method: 'get',
        url: `https://api.spotify.com/v1/search?q=${query}&type=track`,
        headers: {
          'Authorization': 'Bearer ' + accessToken
        },
    }

      //let res = axios(config);
      axios.get(config.url, config)
        .then(res => {
          this.tracks = []
          //console.log(res.data.tracks);
          res.data.tracks.items.forEach( track => {
            //console.log(track);
            this.extractData(track)

            this.tracks.push(this.extractData(track))
          });
        })
        .catch( error => {
          console.log(error);
        })
    },
    songify(track) {
        return track.trackName.charAt(0).toUpperCase() + track.trackName.slice(1)// + ' - ' + track.trackName.charAt(0).toUpperCase() + track.trackName.slice(1)
    },
    extractData({
      id,
      artists: artist,
      uri: audioUri,
      album: albumCover,
      name: trackName,
      album: albumName,
    }) 
    {
        return  { trackName, id, artist, audioUri, albumCover, albumName } ;  
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

.search{
  background-color: darken($secondary-color, 50%);
  overflow-y: scroll;
  overflow-x: hidden;

  h1{
    color: #fff;
    margin-bottom: 1em;
  }
}

form{
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