<template>
    <div class="header">
        <div class="form">
            <section class="form-header">
               <img alt="logo" src="../assets/logo.png"/>
                <span>Directory</span>
            </section>
            <section class="short-note">
                <span>Find your favorite Characters, Films, Species, Starships and Planets</span>
            </section>
            <section class="search">
                <input type="text" placeholder="Enter a search item" v-model="searchItem" @focus="returnToHome()"/>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchItem: ""
    };
  },
  watch: {
    searchItem(searched) {
      console.log(searched);
      setTimeout(() => {
        this.$emit("searchItem", searched);
      }, 3000);
    }
  },
  methods: {
    returnToHome() {
      setTimeout(() => {
        this.$router.push("/");
        // localStorage.getItem('starshipA')
      }, 1000);
    }
  }
};
</script>
<style scoped>
.header {
  background-image: url("../assets/hero-banner.jpg");
  height: 600px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
img {
  width: 150px;
  height: 70px;
}
.form {
  width: 60%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.form-header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid white;
  padding-bottom: 20px;
  margin-bottom: 50px;
}
.form-header span {
  font-size: 40px;
  font-weight: bolder;
  color: white;
  padding-left: 20px;
}
.short-note {
  color: white;
  font-size: 30px;
  width: 550px;
  margin-bottom: 50px;
}
.search input[type="text"] {
  height: 50px;
  width: 700px;
  border-radius: 7px;
  border: none;
  font-size: 30px;
  padding-left: 10px;
  color: grey;
}
@media screen and (max-width: 768px){
  .header{
    width: 100%;
  }
  .form-header{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
  img {
    width: 100px;
    height: 50px;
  }
  .short-note{
    font-size: 20px;
    width: 80%
  }
  .search input[type="text"] {
    height: 30px;
    width: 300px;
    border-radius: 3px;
    font-size: 15px;
    padding-left: 5px;
  }
}
</style>