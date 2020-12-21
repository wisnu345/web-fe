<template>
  <div class="home">
    <Banner />
    <section class="course-section1">
      <div class="spacer-horizontal"></div>
      <div class="container-fluid">
        <div class="section1 row">
          <div
            class="col-md-6 d-flex justify-content-center align-items-center"
          >
            <div class="col-md-8 section1-wrap">
              <div class="section1-desc">
                <p>
                  Bagaimana Refactory Course membantu
                  <span>meningkatkan skill</span> anda.
                </p>
              </div>
              <div class="section1-button">
                <button @click="$router.push({ path: '/' })">
                  Pelajari Lebih
                </button>
              </div>
              <div class="spacer-horizontal4"></div>
            </div>
          </div>
          <div class="col-md-6 section1-img">
            <img src="../assets/Frame.png" />
          </div>
        </div>
      </div>
      <div class="spacer-horizontal"></div>
    </section>

    <section class="course-section2 container-fluid p-5 p-md-3">
      <div class="spacer-horizontal"></div>
      <div class="section2-wrap row">
        <div class="col-md-7">
          <div class="col-md-10 text-left ml-auto">
            <h2 class="section2-title">
              Kursus pemrograman untuk semua orang tanpa terkecuali
            </h2>
            <div class="spacer-horizontal4"></div>
            <p class="section2-desc">
              Refactory Course dirancang untuk memudahkan setiap orang mampu
              meningkatkan keahlian dalam software engineering tanpa dibatasi
              oleh kesulitan akses, kesulitan waktu, batasan keahlian, ataupun
              usia.
            </p>
            <p class="section2-desc">
              Dengan pembelajaran berdasarkan pengalaman nyata pengerjaan
              project, bagi pelajar/mahasiswa, Refactory Course akan melengkapi
              keahlian yang sudah diperoleh dalam studi sehingga dapat membuka
              kesempatan tak terbatas pada karir software engineering.
            </p>
            <p class="section2-desc">
              Bagi karyawan atau tenaga profesional, Refactory Course dapat
              meningkatkan keahlian software engineer dalam menunjang
              menyelesaikan tugas pekerjaannya tanpa khawatir dengan
              keterbatasan waktu.
            </p>
            <p class="section2-desc">
              Masyarakat secara luas juga dapat memanfaatkan pembelajaran untuk
              meningkatkan keahlian sehingga mampu berkarya dan mendapat
              keuntungan karir tanpa khawatir mahalnya belajar.
            </p>
          </div>
        </div>
        <div class="col-md-5 mb-4 mb-md-0">
          <div class="section2-img col">
            <img src="../assets/IMG_1152-1.jpg" />
          </div>
        </div>
      </div>
    </section>

<section class="course-button">
    <div class="course-button">
      <button>Daftar sekarang</button>
      <div class="spacer-horizontal2"></div>
    </div>
</section>

    <section class="course-review">
      <div class="col d-flex justify-content-center flex-column">
        <h2>meet our graduates</h2>
        <h2>Review</h2>
        <h2>Read what our alumni said on <strong>Course Report</strong></h2>
      </div>
      <div class="spacer-horizontal2"></div>
    </section>

    <section class="course-alumni">
      <div class="container-fluid d-flex justify-content-center">
        <div class="course-alumni-list col-md-9">
          <div class="row alumni-list flex-wrap">
            <div
              class="col text-left m-3 shadow p-4"
              v-for="review in data"
              :key="review.id"
            >
              <div class="alumni-img mb-3">
                <img :src="review.user.photo_url" :alt="review.user.name" />
              </div>
              <h2 class="alumni-name">
                {{ review.user.name }}
              </h2>
              <h3 class="text-muted alumni-from">
                {{ review.user.from }}
              </h3>
              <div class="d-flex generate-star mt-3 mb-3" v-if="dataReview.length > 0">
                <div
                  class="m-1"
                  v-for="star in review.generateStar"
                  :key="star"
                >
                  <b-icon icon="star-fill" variant="warning"></b-icon>
                </div>
              </div>
              <h2 class="review-title">
                {{ review.title }}
              </h2>
              <p class="review-desc">
                {{ review.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="spacer-horizontal2"></div>

    <section class="course-cto">
      <div class="container-fluid">
          <div class="spacer-horizontal2"></div>
        <div class="col d-flex justify-content-center align-items-center">
          <h3 class="m-0 mr-3 text-white">Ready to start learning?</h3>
          <div class="course-button ml-3 bg-none">
            <button>Daftar sekarang</button>
          </div>
        </div>
          <div class="spacer-horizontal2"></div>
      </div>
    </section>

    <section class="course-section-last">
        <div class="container-fluid">
          <div class="spacer-horizontal2"></div>
            <h4 class="text-uppercase">langkah mudah</h4>
            <h2>Memulai belajar di<br>Refactory Course</h2>
            <div class="course-steps-img mb-3">
                <img src="../assets/Frame-3-1.png" alt="">
            </div>
                <div class="course-button bg-none">
                <button>Daftar sekarang</button>
                <div class="spacer-horizontal2"></div>
                </div>
        </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Footer from '../components/Footer'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Course',
  components: {
    Footer,
    Banner
  },
  data () {
    return {
      data: null
    }
  },
  methods: {
    ...mapActions({
      getDataReview: 'review/getDataReview'
    })
  },
  computed: {
    ...mapGetters({
      dataReview: 'review/getDataReview'
    })
  },
  mounted () {
    this.getDataReview().then(() => {
      this.dataReview.map((e) => {
        e.generateStar = new Array(e.star)
      })
      this.data = this.dataReview
    })
  }
}
</script>

<style scoped>
.section1-img > img {
  width: 100%;
  margin-left: -25%;
}
.section1-desc > p {
  font-family: "Raleway", sans-serif;
  font-size: 28px;
}
.section1-desc > p > span {
  color: #e48800;
  font-weight: bolder;
}
.section1-button > button {
  background: #e48800;
  width: 220px;
  color: #fff;
  line-height: 2;
  border-radius: 25px;
  border: none;
  font-size: 14px;
}
.section1-wrap {
  text-align: left;
}
.section2-img img {
  width: 100%;
}
.course-section2,
.course-review,
section.course-button {
  background: #f4f5f6;
}
.course-button > button {
  background: #e48800;
  width: 220px;
  color: #fff;
  border-radius: 25px;
  border: none;
  font-size: 14px;
  line-height: 2;
}
.course-review > div > h2:nth-child(1) {
  color: rgba(11, 22, 43, 0.6);
  font-family: "Raleway", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  font-style: normal;
  line-height: 22px;
  letter-spacing: 2px;
}
.course-review > div > h2:nth-child(2) {
  color: #0b162b;
  font-family: "Raleway", Sans-serif;
  font-size: 28px;
  font-weight: 700;
  font-style: normal;
  line-height: 32px;
}
.course-review > div > h2:nth-child(3) {
  color: #0b162b;
  font-family: "Raleway", Sans-serif;
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  line-height: 32px;
}
.alumni-img {
  width: 100%;
}
.alumni-img > img {
  width: 100%;
}
.alumni-name {
  color: #111111;
  font-family: "Raleway", Sans-serif;
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;
  font-style: normal;
  line-height: 32px;
  letter-spacing: 0.2px;
}
.alumni-from {
  color: #999999;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 22px;
}

.review-title {
  color: rgba(11, 22, 43, 0.8);
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 30px;
}
.review-desc {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 2;
}
.course-cto > .container-fluid {
    background: linear-gradient(90deg, rgba(1, 28, 78, 0.7) 0%, rgba(16, 180, 172, 0.75));
}

.course-section-last h4 {
    color: #E48800;
    font-family: "Raleway", Sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    font-style: normal;
    letter-spacing: 2px
}

.course-section-last h2 {
  color: #0b162b;
  font-family: "Raleway", Sans-serif;
  font-size: 28px;
  font-weight: 700;
  font-style: normal;
  line-height: 32px;
}

.course-steps-img {
    width: 100%;
}
.course-steps-img img {
    width: 100%;
}

@media (max-width: 768px) {
  .section1-wrap {
    text-align: center;
  }
  .section1-img > img {
    width: 100%;
    margin-left: 0;
  }
  .section2-wrap {
    flex-direction: column-reverse;
  }
}
</style>
