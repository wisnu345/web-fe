<template>
  <div class="home">
    <Banner />
    <section class="home-service container">
      <div class="spacer-horizontal"></div>
      <h2 class="home-service-title">
        Apa yang refactory Dapat Bantu?
      </h2>
      <div class="spacer-horizontal2"></div>
      <div class="spacer-horizontal4"></div>
      <div class="home-service-desc row">
        <div class="col-md-6 col-12 p-3">
          <div class="service-desc-img mb-3">
            <img src="../assets/asset 13.png" alt="">
          </div>
          <h2 class="service-desc-title mb-3">
            Memperkuat Tim Engineer Anda
          </h2>
          <p class="service-desc-desc p-3">
            Bisnis di jaman modern membutuhkan keterampilan pengembangan terbaik untuk meningkatkan skala produk. Kami dapat mempersiapkan course dan juga dapat menyediakan tim yang menangani kebutuhan digital Anda.
          </p>
        </div>
        <div class="col-md-6 col-12 p-3">
          <div class="service-desc-img mb-3">
            <img src="../assets/asset 14.png" alt="">
          </div>
          <h2 class="service-desc-title mb-3">
            Wujudkan software impian Anda
          </h2>
          <p class="service-desc-desc p-3">
            Kami adalah perusahaan One-Stop IT Solution untuk proyek Anda, membantu di setiap tahap mulai dari menyusun ide, melalui desain dan pengembangan aplikasi seluler, situs web dan aplikasi desktop, hingga peluncuran produk.
          </p>
        </div>
      </div>
    </section>
    <section class="home-insight">
      <div class="spacer-horizontal3"></div>
      <div class="col d-flex justify-content-center flex-column">
        <h2>insight terbaru</h2>
        <h2>Knowledge Sharing</h2>
      </div>
      <div class="spacer-horizontal3"></div>
    </section>
    <div class="spacer-horizontal2"></div>
    <h5 class="text-primary">Lihat Semua <b-icon-arrow-right variant="primary"></b-icon-arrow-right></h5>
    <div class="spacer-horizontal2"></div>
    <section class="home-media">
      <div class="container">
      <div class="spacer-horizontal2"></div>
      <h2 class="media-title text-uppercase">as seen on</h2>
      <div class="spacer-horizontal4"></div>
      <div class="media-list">
        <div v-for="media in dataMedia" :key="media.id">
          <div class="media-image">
            <div class="shadow"></div>
            <a :href="media.name">
              <img :src="media.photo_url" :alt="media.name">
            </a>
          </div>
        </div>
      </div>
      </div>
    <div class="spacer-horizontal2"></div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Footer from '../components/Footer'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Footer,
    Banner
  },
  methods: {
    ...mapActions({
      getDataMedia: 'media/getDataMedia'
    })
  },
  computed: {
    ...mapGetters({
      dataMedia: 'media/getDataMedia'
    })
  },
  mounted () {
    this.getDataMedia()
  }
}
</script>

<style scoped>
.home-service-title {
  color: #0B162B;
    font-family: "Raleway", Sans-serif;
    font-size: 38px;
    font-weight: 700;
    font-style: normal;
    line-height: 42px;
    letter-spacing: 2px;
}
.service-desc-title {
  font-family: 'Raleway', sans-serif;
  font-size: 28px;
  color: #0b162b;
}
.service-desc-desc {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: lighter;
  color: #0b162b99;
}
.home-insight {
  width: 100%;
  text-align: center;
  background-image: url('../assets/ripple-bg.png');
  background-size: cover;
  background-position: center;
}
.home-insight > div > h2:nth-child(1) {
      color: rgba(11, 22, 43, 0.6);
    font-family: "Raleway", Sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    font-style: normal;
    line-height: 22px;
    letter-spacing: 2px;
}
.home-insight > div > h2:nth-child(2) {
    color: #0B162B;
    font-family: "Raleway", Sans-serif;
    font-size: 28px;
    font-weight: 700;
    font-style: normal;
    line-height: 32px;
}
.home-media {
  background-color: #F4F5F6;
}
.media-title {
  font-family: 'Raleway', sans-serif;
  font-size: 38px;
  font-weight: 700;
    font-style: normal;
  letter-spacing: 2px;
  color: #0B162B;
}
div.media-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
div.media-image{
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
div.media-image > a > img {
  width: 100%;
  filter: grayscale(100%);
}
div.media-image > shadow {
  width: 100%;
  height: 100%;
}
div.media-image > a > img:hover {
  width: 100%;
  filter: grayscale(0%);
}
</style>
