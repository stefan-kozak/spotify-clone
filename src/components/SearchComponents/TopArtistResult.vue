<template>
  <transition name="fade">
    <a class="top-search" v-if="checkArray(artists)">
      <section class="top-result">
        <h1>Top Artist Result</h1>
        <article>
          <div>
            <div>
              <img :src="artists[0].images[0].url" alt="artist_image" />
            </div>
            <h1>{{ artists[0].name }}</h1>
            <p>{{ artists[0].type }}</p>
          </div>
          <PlayButton />
        </article>
      </section>
      <div class="songs-list">
        <h1>
          Songs
          <p>song1</p>
          <p>song2</p>
          <p>song3</p>
          <p>song4</p>
        </h1>
      </div>
    </a>
  </transition>
</template>

<script>
import PlayButton from '@/components/CrossComponents/PlayButton.vue'

export default {
  props: ["artists"],
    components: {
    PlayButton,
  },
  methods: {
    checkArray(a) {
      return a.length > 0 && Array.isArray(a);
    },
  },
};
</script>

<style lang="scss" scoped>
//   COLORS
$secondary-color: #121212;
$primary-color: #1db954;
$white: #fff;

//   FONT SIZES
$f-small: 14px;

.search {
  h1 {
    color: #fff;
    margin-bottom: 1em;
  }
  a {
    cursor: pointer;
  }
}

.top-search {
  width: 100%;
  padding-top: 5em;
  margin-left: 3em;
  display: flex;
  flex-direction: row;
}

.top-result {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 30%;

  margin-bottom: 2em;
  color: $white;

  article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: $secondary-color;
    padding: 2em;
    padding-left: 3em;
    width: 100%;
    position: relative;
    
    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 1.5em;
        padding-top: 0.5em;
        margin-bottom: 0.5em;
      }
      p {
        font-size: 0.8em;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;
        background-color: #000;
        padding: 0.5em 1em;
        border-radius: 9999px;
      }
      div {
        max-width: 7em;
        max-height: 7em;
        display: inline-block;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

.songs-list {
  margin-left: 10em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
