<template>
    <div class="details">
        <div class="header">
            <img alt="newObject.name" :src="newObject.imgUrl"/>
            <span>{{newObject.name}}</span>
        </div>
        <div><button @click="previous()" :disabled="newIndex===0">prev</button>
        <button @click="next()" :disabled="newIndex===arrayList.length-1">next</button>
        </div>
        <div class="body"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates maxime libero alias accusamus tempora explicabo laudantium, distinctio nihil, dolorum quia unde eveniet accusantium non nulla corporis nobis perspiciatis est sint quibusdam quos blanditiis maiores praesentium? Quo, omnis corrupti soluta veniam deleniti praesentium ullam aperiam sequi nulla ut tenetur natus hic.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque aperiam quia! At molestiae adipisci ducimus suscipit, nam minus ipsa a officia sunt quaerat id veritatis itaque amet quasi. Numquam cumque deserunt dignissimos soluta ad neque eaque maxime earum quasi. Aliquid at dolorum tenetur! Similique magni quasi enim hic ex voluptatibus quod cumque laborum illo repudiandae deserunt corporis, fugiat provident modi doloribus optio delectus reprehenderit blanditiis cum, temporibus voluptas est! Qui consequuntur, tenetur laboriosam quo temporibus voluptates aperiam et explicabo.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque aperiam quia! At molestiae adipisci ducimus suscipit, nam minus ipsa a officia sunt quaerat id veritatis itaque amet quasi. Numquam cumque deserunt dignissimos soluta ad neque eaque maxime earum quasi. Aliquid at dolorum tenetur! Similique magni quasi enim hic ex voluptatibus quod cumque laborum illo repudiandae deserunt corporis, fugiat provident modi doloribus optio delectus reprehenderit blanditiis cum, temporibus voluptas est! Qui consequuntur, tenetur laboriosam quo temporibus voluptates aperiam et explicabo.</p></div>
    </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      newObject: {},
      newIndex: this.index
    };
  },
  props: {
    moreDetails: Object,
    arrayList: Array,
    index: Number
  },
  methods: {
    previous() {
      console.log(this.newIndex);
      this.newIndex--;
      this.newObject = this.arrayList[this.newIndex];
    },
    next() {
      this.newIndex++;
      this.newObject = this.arrayList[this.newIndex];
    }
  },
  mounted() {
    this.newObject = this.moreDetails;
  }
};
</script>

<style scoped>
.details {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

img {
  height: 500px;
  width: 100%;
}
span {
  color: red;
  font-size: 30px;
  text-align: left;
}
.body {
  width: 50%;
}
</style>
