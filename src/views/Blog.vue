<template>
  <div>
    <section class="listcourse-section1">
      <Navbar />
    </section>
    <section class="container p-3 p-lg-5">
      <div class="row flex-wrap justify-content-between">
        <div class="col-lg-8 row">
          <div class="col-12">
            <div>
              <ArticleCards
                :img="'https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg'"
                :category="'GROWTH & CULTURE'"
                :newsTitle="'How Did You Become A Programmer?'"
                :shortnews="'Post Categories Blog Engineering Profile Tutorial Tips & Trick Growth & Culture Newsroom Promo X Case Studies Training PT Gigaming Intermedia Solusindo BY Isna | July 16, 2020'"
                :read="'baca artikel'"
              />
            </div>
          </div>
          <div class="col-6">
            <div>
              <ArticleCards
                :img="'https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg'"
                :category="'TIPS & TRICK'"
                :newsTitle="'Tempat Yang Asyik Untuk Belajar Secara Remote'"
                :shortnews="'Berpikir tentang tempat-tempat yang menarik untuk hangout bersama teman-'"
                :read="'baca artikel'"
              />
            </div>
          </div>
          <div class="col-6">
            <div>
              <ArticleCards
                :img="'https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg'"
                :category="'NEWSROOM'"
                :newsTitle="'Bank Mandiri Gandeng Refactory Tingkatkan SDM IT'"
                :shortnews="'Bank milik pemerintah, Bank Mandiri menggandeng bootcamp informasi'"
                :read="'baca artikel'"
              />
            </div>
          </div>
          <div class="col-6">
            <div>
              <ArticleCards
                :img="'https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg'"
                :category="'adsfdsf'"
                :newsTitle="'lorem2'"
                :shortnews="'loremmmmsnjdjsdbj'"
                :read="'baca artikel'"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-4 row d-flex align-content-start">
            <div class="col-12">
                <h4>hubungkan dengan kami</h4>
                <h3>ikuti refactory</h3>
                <ul class="blog-socmed">
                    <li class="d-flex align-items-center">
                            <span style="width: 40px; height: 40px;" class="d-flex align-items-center justify-content-center rounded-circle border border-primary m-2"><b-icon class="m-2" icon="linkedin" variant="primary"></b-icon></span> Linkedin
                    </li>
                    <li class="d-flex align-items-center">
                            <span style="width: 40px; height: 40px;" class="d-flex align-items-center justify-content-center rounded-circle border border-primary m-2"><b-icon class="m-2" icon="facebook" variant="primary"></b-icon></span> Facebook
                    </li>
                    <li class="d-flex align-items-center">
                            <span style="width: 40px; height: 40px;" class="d-flex align-items-center justify-content-center rounded-circle border border-primary m-2"><b-icon class="m-2" icon="instagram" variant="primary"></b-icon></span> Instagram
                    </li>
                    <li class="d-flex align-items-center">
                            <span style="width: 40px; height: 40px;" class="d-flex align-items-center justify-content-center rounded-circle border border-primary m-2"><b-icon class="m-2" icon="youtube" variant="primary"></b-icon></span>Youtube
                    </li>
                </ul>
            </div>
            <div class="spacer-horizontal2"></div>
            <div class="col-12 popular">
                <div class="spacer-horizontal4"></div>
                <h4 class="text-center">artikel populer</h4>
                <div class="col">
                    <div>
                      <ArticleCards
                            :img="'https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg'"
                            :category="'engineering'"
                            :newsTitle="'apa yang baru di laravel 5.5'"
                            :shortnews="null"
                            :className="'border-0'"
                            :read="'baca artikel'"
                        />
                    </div>
                </div>
                <div class="col">
                    <div>
                        <ArticleCards
                            :img="'https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg'"
                            :category="'engineering'"
                            :newsTitle="'apa yang baru di laravel 5.5'"
                            :shortnews="null"
                            :className="'border-0'"
                            :read="'baca artikel'"
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>

    <section class=" artikel-unggulan">
        <div class="container">
            <div class="spacer-horizontal2"></div>
            <h2>Artikel Unggulan</h2>
            <div class="spacer-horizontal2"></div>
            <div class="slick">
                <VueSlickCarousel :dots="true" :slidesToShow="3" :arrows="true">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg" alt="Card image cap">
                    </div>
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg" alt="Card image cap">
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
        <div class="spacer-horizontal2"></div>
    </section>

    <section class="container p-3 p-lg-5">
      <div class="row flex-wrap justify-content-between">
        <div class="col-lg-8 row">
          <div class="col">
                    <div>
                        <ArticleCards
                            :img="'https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg'"
                            :category="'engineering'"
                            :newsTitle="'apa yang baru di laravel 5.5'"
                            :shortnews="null"
                            :className="'border-0'"
                            :read="'baca artikel'"
                        />
                    </div>
                </div>
                <div class="col">
                    <div>
                        <ArticleCards
                            :img="'https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg'"
                            :category="'engineering'"
                            :newsTitle="'apa yang baru di laravel 5.5'"
                            :shortnews="null"
                            :className="'border-0'"
                            :read="'baca artikel'"
                        />
                    </div>
                </div>
        </div>
        <div class="col-lg-4 row">
            <div class="col-12 popular">
                <div class="spacer-horizontal4"></div>
                <h4 class="text-center">case studies</h4>
                <div class="col">
                    <div>
                        <ArticleCards
                            :img="'https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg'"
                            :category="'adsfdsf'"
                            :newsTitle="'lorem2'"
                            :shortnews="null"
                            :read="'baca artikel'"
                            :className="'border-0'"
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ArticleCards from '../components/ArticleCards'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    Navbar,
    Footer,
    ArticleCards,
    VueSlickCarousel
  },
  data () {
    return {
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '20px',
        centerMode: true,
        infinite: true,
        draggable: true,
        speed: 500
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
.listcourse-section1 {
  background: #003547;
  padding: 0 40px;
}
.col-6, .col-12, .col {
    padding: 15px;
}
.col-lg-4{
    text-align: left;
}
h4 {
    color: #E48800;
    font-family: "Montserrat", Sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
}
p,h3 {
    font-family: "Montserrat", Sans-serif;
}
.popular {
    background: #f4f5f6;
}
h2,h3 {
    font-family: "Montserrat", Sans-serif;
    font-weight: 500;
}
.artikel-unggulan {
    background: #f4f5f6;
}
</style>
