<script>
  let title = "";
  let rating = 1;
  import { movieList } from "../store";
  import {v4 as uuid} from 'uuid'
  const onTitleChange = (e) => {
    title = e.target.value;
  };
  const submitMovie = () => {
    movieList.update(prev=>{
        return [...prev,{id:uuid(),movieName:title,rating}]
    })
    title = ''
    rating = 1
  };
</script>

<div class="main">
  <input
    placeholder="Movie Title"
    type="text"
    value={title}
    on:keyup={onTitleChange}
  />

  <select bind:value={rating}>
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
    <option value={5}>5</option>
  </select>

  <button on:click={submitMovie} disabled={!title}>Submit</button>
</div>

<style>
  .main {
    width: 100%;
    display: flex;
  }
  .main input {
    flex: 1;
    outline: none;
  }
  .main select {
    width: 75px;
    margin-right: 10px;
    margin-left: 10px;
  }
  .main button {
    width: 75px;
  }
</style>
