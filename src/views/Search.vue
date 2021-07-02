<template>
  <div class="search">
    <h1>Search for song you want to listen</h1>
    <form action="#" @submit.prevent="getMusic()">
      <input type="text"  v-model="query">

    </form>

    <ul>
      <li v-for="song in songs" :key="song.id">
        {{ songify(song) }}
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
      songs: [
        {id: 1, artist: 'Rammstein', name: 'du hast'},
        {id: 2, artist: 'RHCHP', name: 'californication'},
        {id: 3, artist: 'HU', name: 'Undead'},
        {id: 4, artist: 'Ine kafe', name: 'ráno'},
      ]
    }
  },
  methods: {
    getMusic(){
      console.log(encodeURI(this.query))

      axios.get(`https://itunes.apple.com/search?term=${encodeURI(this.query)}&limit=7`)
        .then( response => {
          this.songs = []


          response.data.results.forEach(song => {
            if (song.kind === 'song') {
              this.songs.push(this.extractData(song));
            }
          })
        })
        .catch( error => {
          console.log(error);
        })
    },
    songify(song) {
        return song.artist.charAt(0).toUpperCase() + song.artist.slice(1) + ' - ' + song.name.charAt(0).toUpperCase() + song.name.slice(1)
    },
    extractData({
      trackId: id,
      artistName: artist,
      previewUrl: audioFile,
      artworkUrl100: cover,
      trackName: name,
      collectionName: album
    }) 
    {
        return { id, artist, audioFile, cover, name, album }
    }
  },
}
</script>
