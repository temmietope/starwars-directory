<template>
    <div class="starships">
        <h1>Popular Starships</h1>
        <hr/>
        <div>
  <!-- <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card> -->
</div>
    </div>
</template>

<script>
export default {
    name: "Starships"
}
</script>
<style scoped>
.starships{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px
}
h1{
    color: rgb(34, 33, 33);
    padding-bottom: none;
}
hr{
    width: 100px;
    height: 10px;
    background-color: rgb(34, 33, 33);
}
</style>



