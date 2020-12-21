<template>
  <div>
      <section class="banner-navbar" v-if="$router.currentRoute.name !== 'Detail Course'">
        <Navbar />
      </section>
    <section class="banner-home" v-if="$router.currentRoute.name === 'Home'">
        <div class="container">
            <div class="spacer-horizontal"></div>
            <div class="banner-description col-md-12 col-lg-7">
                <h1>
                    Empowering <span>People</span> Through Programming
                </h1>
                <p>Refactory adalah perusahaan edukasi dan teknologi yang menyediakan layanan lengkap berupa course maupun custom training yang materinya dapat disesuaikan dengan kebutuhan teknologi dan bisnis perusahaan Anda.</p>
                <div class="cta-button pt-3">
                    <button>
                        <a href="#">Temukan Solusi Anda</a>
                    </button>
                    <button>
                        <a href="#">Tingkatkan Skill Anda</a>
                    </button>
                </div>
            </div>
        </div>
        <div class="spacer-horizontal"></div>
        <div class="banner-partner">
            <h2>partner eksklusif kami</h2>
            <div class="partner" v-if="dataPartner.length">
                <VueSlickCarousel v-bind="settings">
                    <div class="partner-list" v-for="partner in dataPartner" :key="partner.id" >
                        <img :src="partner.photo_url" >
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
    </section>
    <section class="banner-course" v-if="$router.currentRoute.name === 'Course'">
        <div class="container">
            <div class="spacer-horizontal"></div>
            <div class="banner-description text-center col-md-12">
                <h1>
                    Tingkatkan <span>Skill Pemrograman</span> kapan pun, dimana pun.
                </h1>
                <p>
                    We’re a brand of passionate software engineers and educators with an engaging curriculum backed by real-world software projects ready to boost your career.
                </p>
                <div class="cta-button2">
                    <button @click="$router.push({ name: 'List Course' })">
                        Masuk & Memulai Belajar
                    </button>
                    <button>
                        <a href="#">Daftar Sekarang</a>
                    </button>
                </div>
            </div>
        </div>
        <div class="spacer-horizontal"></div>
    </section>
    <section class="banner-detailcourse" v-if="$router.currentRoute.name === 'Detail Course'">
        <div class="container">
            <div class="spacer-horizontal"></div>
            <div class="banner-description text-center col-md-12">
                <h1>
                    HTML & CSS Introduction
                </h1>
                <p>
                    HTML dan CSS adalah materi dasar untuk pengembangan web. Setiap web developer harus memiliki pengetahuan dasar setidaknya HTML dan CSS.
                </p>
                <div class="cta-button2">
                    <button @click="$router.push({ name: 'Home' })">
                        Mulai Belajar
                    </button>
                </div>
            </div>
        </div>
        <div class="spacer-horizontal"></div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Navbar from '../components/Navbar'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    Navbar,
    VueSlickCarousel
  },
  data () {
    return {
      settings: {
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        draggable: true
      }
    }
  },
  methods: {
    ...mapActions({
      getDataPartner: 'partner/getDataPartner'
    })
  },
  mounted () {
    this.getDataPartner()
      .then((response) => {
      })
      .catch((error) => {
        console.log(error)
      })
  },
  computed: {
    ...mapGetters({
      dataPartner: 'partner/getDataPartner'
    })
  }
}
</script>

<style scoped>
.container {
    position: relative;
}
section.banner-navbar {
    position: absolute;
    z-index: 1;
    width: 100%;
    padding: 0px 40px;
}

section.banner-home {
  width: 100%;
  height: 100%;
  background-image: url('../assets/asset 28.jpeg');
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 0px 60px;
}
section.banner-home::before,section.banner-course::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(1, 28, 78, 0.7) 0%, rgba(16, 180, 172, 0.75));
}
.banner-description {
    color: #fff;
    text-align: left;
    padding: 60px 0px 0px 60px;
}
.banner-description h1 {
    font-family: 'Raleway', sans-serif;
    font-size: 48px;
    font-weight: 700;
}
.banner-description h1 span {
    color: #e48800
}
.banner-description p {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 2;
}
.cta-button {
    display: flex;
}

.cta-button button:nth-child(1) {
    background: #e48800;
    width: 220px;
    color: #fff;
    line-height: 2;
    border-radius: 25px;
    border: none;
    font-size: 14px;
    margin-left: -20px;
    margin-right: 20px;
}
.cta-button button:nth-child(1) a {
    color: #fff;
}
.cta-button button:nth-child(1) a:hover {
    color: #fff;
    text-decoration: none;
}
.cta-button button:nth-child(2) {
    background: none;
    width: 220px;
    color: #fff;
    line-height: 2;
    border-radius: 25px;
    border: 0.5px solid #e48800;
    font-size: 14px;
}
.cta-button button:nth-child(2) a {
    color: #fff;
}
.cta-button button:nth-child(2) a:hover {
    color: #fff;
    text-decoration: none;
}
.cta-button button:nth-child(2):hover {
    background: #e48800;
}
.banner-partner {
    position: relative;
    bottom: 0;
    height: 100%;
    width: 100%;
    align-items: flex-end;
}
.banner-partner h2 {
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    text-transform: uppercase;
}
.banner-partner > div {
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
}
.banner-partner > div > div {
    width: 100%;
}
.banner-partner > div > div > img {
    max-width: 70px;
}
.partner-list {
    width: 200px;
}
/* course page */
section.banner-course {
  width: 100%;
  height: 100%;
  background-image: url('../assets/IMG_7378.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 0px 60px;
}
.cta-button2 {
    display: flex;
    justify-content: center;
}

.cta-button2 button:nth-child(1) {
    background: #e48800;
    width: 220px;
    color: #fff;
    line-height: 2;
    border-radius: 25px;
    border: none;
    font-size: 14px;
    margin-right: 30px;
}
.cta-button2 button:nth-child(1) a {
    color: #fff;
}
.cta-button2 button:nth-child(1) a:hover {
    color: #fff;
    text-decoration: none;
}
.cta-button2 button:nth-child(2) {
    background: none;
    width: 220px;
    color: #fff;
    line-height: 2;
    border-radius: 25px;
    border: 0.5px solid #e48800;
    font-size: 14px;
}
.cta-button2 button:nth-child(2) a {
    color: #fff;
}
.cta-button2 button:nth-child(2) a:hover {
    color: #fff;
    text-decoration: none;
}
.cta-button2 button:nth-child(2):hover {
    background: #e48800;
}

/* Detail Course */

section.banner-detailcourse {
  width: 100%;
  height: 100%;
  background-image: url('../assets/Refactory--Course--frontimage-HTMLCSSIntro.gif');
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 0px 60px;
}

/* manual set media query */
@media (max-width: 766px) {
        .cta-button {
            flex-direction: column;
    }
        .banner-description {
        padding: 0px;
        text-align: center;
    }
        .cta-button button:nth-child(1) {
        margin-left: 0px;
        margin-bottom: 20px;
    }
}
@media (max-width: 425px) {
    section.banner-navbar {
        padding: 0px;
    }
        section.banner-home {
    padding: 0px 20px;
    }
        .banner-description h1 {
        font-size: 30px;
    }
}
</style>
