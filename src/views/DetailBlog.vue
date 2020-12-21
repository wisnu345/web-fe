<template>
  <div class="container-fluid p-0">
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
                :shortnews="'Setiap kali mendengar kata “pemrograman”, kira-kira hal apa yang langsung terlintas di pikiran kalian guys? Ribet, susah dipelajari, ngoding, IT, lalu apa lagi? Mungkin beberapa kata tersebut yang paling mudah terlintas di pikiran kita ketika mendengar kata “pemrograman”. Tidak sedikit pula yang mempunyai pemikiran bahwa apabila seseorang ingin belajar pemrograman atau bisa ngoding harus kuliah di jurusan Teknologi Informatika. Hmm.. ternyata _statement_ seperti ini belum tentu selalu benar. Mengapa demikian? Karena seperti halnya kita ingin mahir dalam bermain tenis meja misalnya, kita tidak dituntut untuk mempunyai latar belakang pendidikan olahraga agar bisa bermain tenis meja. Yang perlu kita siapkan adalah meja tenis, bet, dan  bola pingpong. Barulah setelah itu kita bisa mulai latihan bermain tenis meja.'"
                :className="'border-0'"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-4 row">
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
                            :category="'adsfdsf'"
                            :newsTitle="'Bekerja Dengan Ticket: Bagian I'"
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
                            :category="'adsfdsf'"
                            :newsTitle="'10 Hal Penting Dalam Memilih Online Bootcamp'"
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

    <section class="artikel-terkait container">
        <div class="col">
            <h4 class="text-left">artikel terkait</h4>
            <h3 class="text-left" style="font-size: 16px;"><strong>lihat lebih banyak artikel bagus dari kategori ini</strong></h3>
        </div>
        <div class="d-flex col flex-wrap">
            <div class="col-md-4">
                <ArticleCards
                            :img="'https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg'"
                            :category="'engineering'"
                            :newsTitle="'apa yang baru di laravel 5.5'"
                            :shortnews="null"
                            :className="'border-0'"
                            :read="'baca artikel'"
                        />
            </div>
            <div class="col-md-4">
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
    </section>
    <div class="spacer-horizontal"></div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ArticleCards from '../components/ArticleCards'

export default {
  components: {
    Navbar,
    Footer,
    ArticleCards
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
.container,.container-fluid {
    background: #f4f5f6
}
.popular {
    background: #fff;
}
h2,h3 {
    font-family: "Montserrat", Sans-serif;
    font-weight: 500;
}
.artikel-unggulan {
    background: #f4f5f6;
}
</style>
