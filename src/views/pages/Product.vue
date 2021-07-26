<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">

          <div class="product-slider">

            <agile>
              <div v-for="(slide, index) in product.gallery" :key="index">
                <img :src="slide.img" :alt="slide.name">
              </div>
            </agile>
            
          </div>

          <div class="product-content">
            <h1>{{product.title}}</h1>
            <p>{{product.descr}}</p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {

  data() {
    return {
      product: null
    }
  },
  created() {
    let id = this.$route.params.id
    this.product = this.$store.getters.getProduct(id)
  }
}
</script>

<style lang="scss">
  .product__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .product-slider,
  .product-content {
    max-width: 48%;
    text-align: center;
  }
</style>
