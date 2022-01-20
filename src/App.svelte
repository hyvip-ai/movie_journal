<script>
  import MovieInput from "./components/MovieInput.svelte";
  import MovieList from "./components/MovieList.svelte";
</script>

<div class="main">
  <h1>Movie Journal !!!</h1>
  <MovieInput />

  <MovieList />
</div>

<style>
  .main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
