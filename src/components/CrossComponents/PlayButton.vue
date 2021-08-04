<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class="bi bi-play-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
    />
  </svg>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
//   COLORS
$secondary-color: #121212;
$primary-color: #1db954;
$white: #fff;

//   FONT SIZES
$f-small: 14px;

svg {
  opacity: 0;
  width: 13%;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 9999px;
  padding: 0.5em;
  margin: 2em;
}
article:hover svg {
  opacity: 1;
  width: 13%;
  background-color: $primary-color;
  color: $white;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 9999px;
  padding: 0.5em;
  margin: 2em;
  transition: 0.3s ease;
}
</style>
