<template>
  <main>
    <nav>
      <button href="#">...</button>
      <router-link tag="a" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-house-door-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
          />
        </svg>
        Home
      </router-link>
      <router-link tag="a" to="/search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
        Search
      </router-link>
      <router-link tag="a" to="/your-library">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-collection-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"
          />
        </svg>
        Your Library
      </router-link>
      <br />
      <br />
      <br />
      <router-link tag="a" to="/liked-songs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-suit-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
          />
        </svg>
        Liked Songs
      </router-link>
    </nav>
    <router-view id="app-view" />

    <aside></aside>
  </main>

  <div class="player">
  </div>
</template>



<style lang="scss">
//   COLORS
$menu-color: #000;
$secondary-color: #222326;
$primary-color: #1db954;
$white: #fff;

//   FONT SIZES
$f-small: 14px;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

main {
  display: flex;
  flex-direction: row;
}

#app {
  display: flex;
  flex-direction: column;
}

#app-view {
  width: 70%;
  height: 90vh;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.8em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darken($white, 90%);
    outline: none;
  }
}

nav {
  width: 13%;
  height: 90vh;
  resize: horizontal;
  overflow: auto;
  background-color: $menu-color;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.5em;
  padding-top: 0;

  button {
    background-color: transparent;
    color: #fff;
    border: none;
    font-weight: bold;
    font-size: 1.5em;
    text-align: left;
    padding: 0.5em;
    cursor: pointer;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    padding: 1em;
    margin-bottom: 0.5em;
    color: darken($white, 20%);
    text-decoration: none;
    border-radius: 0.5em;
    font-size: $f-small;
    svg {
      fill: white;
      margin-right: 1em;
    }

    &.router-link-exact-active {
      background-color: darken($white, 80%);
      color: $white;
    }
    &:hover {
      color: $white;
    }
    &:last-child {
      border-bottom: 1px solid darken($white, 60%);
      border-radius: 0.5em 0.5em 0 0;
    }
  }
}

aside {
  width: 17%;
  height: 90vh;
  background-color: $secondary-color;
}

.player {
  width: 100%;
  height: 10vh;
  background-color: $secondary-color;
  border-top: 1px solid gray;
}
</style>
