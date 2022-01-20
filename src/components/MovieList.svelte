<script>
  import { movieList } from "../store";
  import MovieItem from "./MovieItem.svelte";
  import SearchMovie from "./SearchMovie.svelte";
  $: filteredMovieList = $movieList
  const filterMovie = (e) =>{
	  console.log(e.detail.toLowerCase())
	  filteredMovieList = $movieList.filter(item=>item.movieName.toLowerCase().includes(e.detail.toLowerCase()))
  }
</script>

<div class="main">
  <SearchMovie on:search-movie={filterMovie}/>
  {#if $movieList.length}
    <h1>Movie List</h1>
  {/if}
  {#each filteredMovieList as movie (movie.id)}
    <MovieItem movieData={movie} />
  {/each}
</div>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 500;
  }
</style>
