<template>
  <transition name="fade">
    <a class="top-search" v-if="checkArray(tracks)">
      <h1>Top Track Result</h1>
      <section class="top-result">
        <article>
          <div>
            <div>
              <img :src="tracks[0].album.images[0].url" alt="artist_image" />
            </div>
            <h1>{{ tracks[0].name }}</h1>
            <p>{{ tracks[0].type }}</p>
          </div>
          <PlayButton />
        </article>
      </section>
    </a>
  </transition>
</template>

<script>
import PlayButton from "@/components/CrossComponents/PlayButton.vue";

export default {
  props: ["tracks"],
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
  width: 30%;
  padding-top: 1em;
  margin-left: 3em;
}

.top-result {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
