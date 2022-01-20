<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
  let searchKey = "";
  const searchMovie = () => {
    dispatch("search-movie", searchKey);
  };
</script>

<input
  type="text"
  bind:value={searchKey}
  on:keyup={searchMovie}
  name="search"
  id="seach"
  autocomplete="off"
  placeholder="Search Movies"
/>

<style>
  input {
    margin-top: 20px;
    width: 60%;
  }
</style>
