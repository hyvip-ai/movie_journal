<script>
  export let movieData = {};
</script>

<div class="row">
  <h4 class="name">
    {movieData.movieName}
  </h4>
  <h4 class="rating">
    {movieData.rating}
  </h4>
</div>

<style>
  .row {
    display: flex;
    width: 90%;
    padding: 2rem;
    margin: 20px auto;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   
  }

</style>
